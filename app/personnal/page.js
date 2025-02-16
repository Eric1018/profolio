'use client'
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useState } from "react";

export default function PersonnalPage() {
    const router = useRouter();
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="relative flex flex-col sm:flex-row items-center justify-center h-auto sm:h-screen px-10 bg-[#F5F5F5] gap-0.5">
          
            {/* 左側圖片區塊 */}
            <div className="w-full sm:w-[35%] flex flex-col space-y-4 pl-8 sm:space-y-6">
                <Image 
                    src="/fantasy1.png" 
                    alt="Main Image" 
                    width={600} 
                    height={250} 
                    className="max-w-full sm:max-w-md rounded-lg shadow-lg object-contain cursor-pointer"
                    onClick={() => setSelectedImage("/fantasy1.png")}
                />
                <Image 
                    src="/fantasy3.png" 
                    alt="Main Image" 
                    width={600} 
                    height={250} 
                    className="max-w-full sm:max-w-md rounded-lg shadow-lg object-contain cursor-pointer"
                    onClick={() => setSelectedImage("/fantasy3.png")}
                />
                <Image 
                    src="/fantasy2.png" 
                    alt="Main Image" 
                    width={600} 
                    height={250} 
                    className="max-w-full sm:max-w-md rounded-lg shadow-lg object-contain cursor-pointer"
                    onClick={() => setSelectedImage("/fantasy2.png")}
                />
            </div>
    
            {/* 右側文字 */}
            <div className="w-full sm:w-[45%] text-lg text-gray-700 leading-relaxed mt-6 sm:mt-0 sm:pl-8">
                <h2 className="text-xl font-bold mt-6">Full-Stack Web Application Development</h2>
                <ul className="list-disc list-inside space-y-3 mt-4">
                    <li><strong>Tech Stack:</strong> React (Next.js), Node.js (Express), Tailwind CSS, External Database</li>
                    <li><strong>Scalable Backend:</strong> Designed a structured RESTful API for seamless frontend-backend interactions</li>
                    <li><strong>Authentication & Authorization:</strong> Integrated secure login system to manage user access</li>
                    {/* <li><strong>Performance Optimization:</strong> Implemented lazy loading and server-side rendering (SSR) to enhance speed</li> */}
                    {/* <li><strong>State Management & API Handling:</strong> Efficiently managed API calls and state using Next.js API routes</li> */}
                    {/* <li><strong>Responsive Design:</strong> Built UI with Tailwind CSS</li> */}
                </ul>

                {/* Website Link */}
                <div className="mt-6">
                    <h3 className="text-lg font-semibold">My Code</h3>
                    <p>
                        <a href="https://github.com/Eric1018/test_0215" target="_blank" className="text-blue-500 underline">
                            Frontend
                        </a>
                        <a href="https://github.com/Eric1018/side_project_backend" target="_blank" className="text-blue-500 underline">
                            Backend
                        </a>
                    </p>
                    <h3 className="text-lg font-semibold">Live Demo(Please use a computer for the best experience)</h3>
                    <p>
                        <a href="https://test-0215-ruddy.vercel.app" target="_blank" className="text-blue-500 underline">
                            Visit Website
                        </a>
                    </p>
                </div>

                {/* Admin Account Info */}
                <div className="mt-4">
                    <h3 className="text-lg font-semibold">Admin Account</h3>
                    <p><strong>Account:</strong> admin109306086</p>
                    <p><strong>Password:</strong> 109306086</p>
                </div>
            </div>

            {/* 手機版：Back 按鈕顯示在文字下方，桌面版：Back 按鈕固定在右下角 */}
            <button 
                onClick={() => router.push('/#services')}
                className="sm:absolute sm:bottom-5 sm:right-5 px-6 py-3 bg-black text-white rounded-lg shadow-md hover:scale-105 transition-transform mt-6 sm:mt-0 text-lg sm:text-base"
            >
                Back
            </button>

            {/* 放大圖片的 Modal */}
            {selectedImage && (
                <div 
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50"
                    onClick={() => setSelectedImage(null)} // 點擊背景關閉
                >
                    <img src={selectedImage} alt="Preview" className="max-w-full max-h-[90vh] rounded-lg shadow-lg" />
                </div>
            )}
        </div>
    );
}
