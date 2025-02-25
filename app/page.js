'use client'
import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Work from "./components/Work";

export default function Home() {

  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    if (
      localStorage.getItem('theme') === 'dark' || 
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setIsDarkMode(false);
    } else {
      setIsDarkMode(false);
    }
  }, []);
  
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light'); // 或清空：localStorage.removeItem('theme')
    }
  }, [isDarkMode]);
  


  return (
    <div>
      <div
        style={{
          backgroundColor: "#F5F5F5",
          minHeight: "100vh",
        }}
      >
        <Navbar />
        <Header />
        <About />
        <Services />
        {/* <Work /> */}
        <Contact />
        <Footer />
      </div>
    </div>
  );
  
  
}
