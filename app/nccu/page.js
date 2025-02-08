'use client'
import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function NccuPage() {

    const router = useRouter()

    return (
        <div className="relative flex flex-col sm:flex-row items-center justify-center h-auto sm:h-screen px-10 bg-[#F5F5F5] gap-0.5">
          
            {/* 左側圖片區塊 */}
            <div className="w-full sm:w-[35%] flex flex-col space-y-4 pl-8 sm:space-y-6">
                <Image 
                    src="/nccu1.jpg" 
                    alt="Main Image" 
                    width={600} 
                    height={250} 
                    className="max-w-full sm:max-w-md rounded-lg shadow-lg object-contain"
                />
                <br/>
                <Image 
                    src="/nccu2.jpg" 
                    alt="Main Image" 
                    width={600} 
                    height={250} 
                    className="max-w-full sm:max-w-md rounded-lg shadow-lg object-contain"
                />
            </div>
    
            {/* 右側文字 */}
            <div className="w-full sm:w-[45%] text-lg text-gray-700 leading-relaxed mt-6 sm:mt-0 sm:pl-8">
                <ul className="list-disc list-inside space-y-3">
                    <h2 className="text-xl font-bold mt-6">Teaching Assistant / Data Science for Business</h2>
                    <li>Assisted in teaching courses covering Machine Learning Algorithms, Pandas, Numpy, Seaborn and Matplotlib</li>
                    <li>Conducted recitation sessions for students, providing additional support to those requiring extra help</li>
                </ul>

                {/* 分隔線 */}
                <hr className="my-4 border-gray-300" />

                {/* 更大的標題 */}
                <h2 className="text-xl font-bold mt-6">Other Leadership Experience During NCCU</h2>

                {/* 項目 */}
                <div className="mt-4">
                    <h3 className="text-lg font-semibold">LEADER / NCCU MIS Capstone Project - NFT Ticket</h3>
                    <li>Developed and deployed smart contracts using Solidity, issuing tickets on the blockchain as NFT tokens with transfer restrictions to mitigate scalper tickets and price ramping</li>
                    <li>Led project management efforts, facilitated communication with professors, set timelines with Gantt charts</li>
                    <br/>
                    <h3 className="text-lg font-semibold">LEADER / E-commerce Business Competition, Merit Award</h3>
                    <h4>Amazon Global Selling</h4>
                    <li>Conducted business analysis, optimized keywords, and refined marketing strategies to assist merchants in managing 
                        their Amazon online stores, aimed to increase revenue and exposure, achieved a 5.93 in Remote Procedure Call (RPC) efficiency</li>
                </div>
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
