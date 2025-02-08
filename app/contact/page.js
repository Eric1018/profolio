'use client';

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { formatDistanceToNow } from "date-fns";
import { useRouter } from 'next/navigation';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_KEY
);

const CommentList = () => {
  const [comments, setComments] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchComments = async () => {
      const { data, error } = await supabase
        .from("profolio_comment")
        .select("user_name, user_email, user_comment, created_at")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching comments:", error.message);
      } else {
        console.log("Fetched comments:", data);
        setComments(data);
      }
    };

    fetchComments();
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto p-6 bg-[#F5F5F5] shadow-lg rounded-lg bg-[url('/blackground.png')] bg-cover bg-center bg-opacity-5">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">💬 Comment Section</h2>

      {/* Comment List */}
      <div className="space-y-4 h-[600px] overflow-y-auto">
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div key={index} className="flex space-x-4 p-4 bg-gray-100 rounded-lg">
              <div>
                <h4 className="font-semibold text-gray-900">{comment.user_name}</h4>
                <p className="text-gray-600">{comment.user_comment}</p>
                <span className="text-sm text-gray-500">
                  {formatDistanceToNow(new Date(comment.created_at), { addSuffix: true })}
                </span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-white">No comments yet. Be the first to share your thoughts!</p>
        )}
      </div>

      {/* Back 按鈕 - 手機版置底，電腦版固定在畫面右下角 */}
      <button 
        onClick={() => router.push('/#contact')}
        className="w-full text-center sm:w-auto px-6 py-3 bg-black text-white rounded-lg shadow-md hover:scale-105 transition-transform 
                   mt-6 sm:mt-0 sm:fixed sm:bottom-5 sm:right-5"
      >
        Back
      </button>
    </div>
  );
};

export default CommentList;
