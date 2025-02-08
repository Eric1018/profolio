'use client'
import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function HotaiPage() {

    const router = useRouter();

    return (
        <div className="relative flex flex-col sm:flex-row items-center justify-center h-auto sm:h-screen px-10 bg-[#F5F5F5] gap-0.5">
          
            {/* 左側圖片區塊 */}
            <div className="w-full sm:w-[35%] flex flex-col space-y-4 pl-8 sm:space-y-6">
                <Image 
                    src="/hotai1.jpg" 
                    alt="Main Image" 
                    width={600} 
                    height={250} 
                    className="max-w-full sm:max-w-md rounded-lg shadow-lg object-contain"
                />
                <br/>
                <Image 
                    src="/hotai2.jpg" 
                    alt="Main Image" 
                    width={600} 
                    height={250} 
                    className="max-w-full sm:max-w-md rounded-lg shadow-lg object-contain"
                />
            </div>

            {/* 右側文字 */}
            <div className="w-full sm:w-[45%] text-lg text-gray-700 leading-relaxed mt-6 sm:mt-0 sm:pl-8">
                <ul className="list-disc list-inside space-y-3">
                    <li>Conducted feature engineering and trained XGBoost models, utilizing SHAP and PDP for 
                        evaluating key factors affecting monthly income, facilitating strategic adjustments in marketing operations</li>
                    <li>Segmented Taiwan into one square kilometer grids, employed XGBoost for predicting the score of each 
                        grid, and established a dashboard using Power BI for visualization, providing a more data-driven reference for scaling operations</li>
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
