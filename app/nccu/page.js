'use client'
import Image from "next/image";
import { useRouter } from 'next/navigation';


export default function NccuPage() {

    const router = useRouter()

    return (
        <div className="flex items-center justify-center h-screen px-10 bg-[#F5F5F5] gap-x-0.5">
      {/* 左側圖片區塊 */}
      <div className="w-[35%] flex flex-col space-y-4 pl-8">
            <Image 
              src="/nccu1.jpg" 
              alt="Main Image" 
              width={600} // 圖片調小
              height={250} 
              className="max-w-md rounded-lg shadow-lg"
            />
            <br/>
            <Image 
              src="/nccu2.jpg" 
              alt="Main Image" 
              width={600} // 圖片調小
              height={250} 
              className="max-w-md rounded-lg shadow-lg"
            />
          </div>
    
          {/* 右側文字 */}
          <div className="w-[45%] text-lg text-gray-700 leading-relaxed">
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
              {/* <br/> */}
              <li>Developed and deployed smart contracts using Solidity, issuing tickets on the blockchain as NFT tokens with transfer restrictions to mitigate scalper tickets and price ramping</li>
              <li>Led project management efforts, facilitated communication with professors, set timelines with Gantt charts</li>
              <br/>
              <h3 className="text-lg font-semibold">LEADER / E-commerce Business Competition, Merit Award</h3>
              <h4>Amazon Global Selling</h4>
              {/* <br/> */}
              <li>Conducted business analysis, optimized keywords, and refined marketing strategies to assist merchants in managing 
                their Amazon online stores,aim to increase revenue and exposure, achieved a 5.93 in Remote Procedure Call (RPC) efficiency</li>
            </div>
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
  
  