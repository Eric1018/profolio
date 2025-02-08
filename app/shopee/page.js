'use client'
import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function ShopeePage() {

    const router = useRouter();

    return (
        <div className="relative flex flex-col sm:flex-row items-center justify-center h-auto sm:h-screen px-10 bg-[#F5F5F5] gap-0.5">
          
            {/* 左側圖片區塊 */}
            <div className="w-full sm:w-[35%] flex flex-col space-y-4 pl-8 sm:space-y-6">
                <Image 
                    src="/shopee1.jpg" 
                    alt="Main Image" 
                    width={600} 
                    height={250} 
                    className="max-w-full sm:max-w-md rounded-lg shadow-lg object-contain"
                />
                <br/>
                <Image 
                    src="/shopee2.jpg" 
                    alt="Main Image" 
                    width={600} 
                    height={250} 
                    className="max-w-full sm:max-w-md rounded-lg shadow-lg object-contain"
                />
            </div>

            {/* 右側文字 */}
            <div className="w-full sm:w-[45%] text-lg text-gray-700 leading-relaxed mt-6 sm:mt-0 sm:pl-8">
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
