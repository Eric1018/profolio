'use client'
import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function UberPage() {

    const router = useRouter();

    return (
        <div className="relative flex flex-col sm:flex-row items-center justify-center h-auto sm:h-screen px-10 bg-[#F5F5F5] gap-0.5">
          
            {/* 左側圖片區塊 */}
            <div className="w-full sm:w-[35%] flex flex-col space-y-4 pl-8 sm:space-y-6">
                <Image 
                    src="/uber1.jpg" 
                    alt="Main Image" 
                    width={600} 
                    height={250} 
                    className="max-w-full sm:max-w-md rounded-lg shadow-lg object-contain"
                />
                <br/>
                <Image 
                    src="/uber3.jpg" 
                    alt="Main Image" 
                    width={600} 
                    height={250} 
                    className="max-w-full sm:max-w-md rounded-lg shadow-lg object-contain"
                />
            </div>

            {/* 右側文字 */}
            <div className="w-full sm:w-[45%] text-lg text-gray-700 leading-relaxed mt-6 sm:mt-0 sm:pl-8">
                <ul className="list-disc list-inside space-y-3">
                    <li>Classified customer groups based on behavior and identified 
                        merchants with SQL, providing different coupons and billboard advertisements according to user groups</li>
                    <li>Created Electronic Direct Mail (EDM) campaigns and collaborated with international engineering teams 
                        to streamline communications</li>
                </ul>
            </div>

            {/* 手機版：Back 按鈕顯示在文字下方，桌面版：Back 按鈕固定在右下角 */}
            <button 
                onClick={() => router.push('/#services')}
                className="sm:absolute sm:bottom-5 sm:right-5 px-6 py-3 bg-black text-white rounded-lg shadow-md hover:scale-105 transition-transform mt-6 sm:mt-0 text-lg sm:text-base"
            >
                Back
            </button>
        </div>
    );
}
