'use client'
import Image from "next/image";
import { useRouter } from 'next/navigation';


export default function ShopeePage() {

    const router = useRouter()

    return (
        <div className="flex items-center justify-center h-screen px-10 bg-[#F5F5F5] gap-x-0.5">
      {/* 左側圖片區塊 */}
      <div className="w-[35%] flex flex-col space-y-4 pl-8">
            <Image 
              src="/shopee1.jpg" 
              alt="Main Image" 
              width={600} // 圖片調小
              height={250} 
              className="max-w-md rounded-lg shadow-lg"
            />
            <br/>
            <Image 
              src="/shopee2.jpg" 
              alt="Main Image" 
              width={600} // 圖片調小
              height={250} 
              className="max-w-md rounded-lg shadow-lg"
            />
          </div>
    
          {/* 右側文字 */}
          <div className="w-[45%] text-lg text-gray-700 leading-relaxed">
        <ul className="list-disc list-inside space-y-3">
              <li>Designed data pipeline, responsible for end-to-end development and maintenance with Python (multithreading),
                SQL, and App Script, reducing processing time from 360+ min to 90+ min.</li>
              <li>Oversaw the creation, reading, updating, and deletion operations for the data warehouse, structuring and maintaining over five tables (each containing over ten million data entries),
                to ensure efficient data storage and retrieval, adjusting columns according to our rapidly changing business needs.</li>
                <li>Automated the collection of rental housing information. Developing web-crawling pipeline. Applied the Haversine formula 
                    and additional variables to calculate the priority of each property. Daily update of over 4,000 data points</li>
                <li>Established and maintained a dashboard for real-time data visualization, aiding in the management of logistics 
                    containers and the adjustment of driver routes, significantly enhancing the efficiency and flexibility of linehaul dispatches</li>
                <li>Collaborated with the IT department of a coupon distribution company, interfaced with the company's API, 
                    implemented DES encryption and decryption protocols for coupon data, assisted daily automatic redemption</li>
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
  