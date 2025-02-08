'use client'
import Image from "next/image";
import { useRouter } from 'next/navigation';


export default function UberPage() {

    const router = useRouter()

    return (
        <div className="flex items-center justify-center h-screen px-10 bg-[#F5F5F5] gap-x-0.5">
      {/* 左側圖片區塊 */}
      <div className="w-[35%] flex flex-col space-y-4 pl-8">
            <Image 
              src="/uber1.jpg" 
              alt="Main Image" 
              width={600} // 圖片調小
              height={250} 
              className="max-w-md rounded-lg shadow-lg"
            />
            <br/>
            <Image 
              src="/uber3.jpg" 
              alt="Main Image" 
              width={600} // 圖片調小
              height={250} 
              className="max-w-md rounded-lg shadow-lg"
            />
          </div>
    
          {/* 右側文字 */}
          <div className="w-[45%] text-lg text-gray-700 leading-relaxed">
        <ul className="list-disc list-inside space-y-3">
              <li>Classified customer groups based on behavior and identified 
                merchants with SQL, providing different coupons and billboard advertisements according to user groups</li>
              <li>Created Electronic Direct Mail (EDM) campaigns and collaborated with international engineering teams 
                to streamline communications</li>
            </ul>
          </div>

          {/* 右下角 Back 按鈕 */}
        <button 
        onClick={() => router.push('/#services')}
        className="absolute bottom-5 right-5 px-6 py-3 bg-black text-white rounded-lg shadow-md hover:scale-105 transition-transform"
      >
        Back
        </button>
        </div>
      );
  }
  