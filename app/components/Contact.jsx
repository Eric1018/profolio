'use client'
import React, { useState } from 'react'
import { motion } from "framer-motion"
import { createClient } from "@supabase/supabase-js";

const Contact = () => {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_KEY
  );
  const onSubmit = async (event) => {
    event.preventDefault();

    // 將輸入欄位分別映射到 user_name, user_email, user_comment
    const formData = {
      user_name: event.target.name.value,
      user_email: event.target.email.value,
      user_comment: event.target.message.value
    };

    try {
      // 使用 Supabase API 插入資料到 "messages" 表格
      const { data, error } = await supabase
        .from('profolio_comment')  // 使用你資料庫中的表格名稱
        .insert([formData]);

      if (error) {
        throw error;
      }

      // 顯示提交成功的彈出提示
      alert("Form Submitted Successfully");
    } catch (error) {
      // 顯示提交失敗的彈出提示
      alert("Submission Failed. Please try again.");
      console.error(error);
    } finally {
      // 重置表單
      event.target.reset();
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='contact'
      className='w-full px-[12%] py-10 scroll-mt-20 bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'
    >
      <motion.h4 className='text-center mb-2 text-lg font-Ovo'>Connect With Me</motion.h4>
      <motion.h2 className='text-center text-5xl font-Ovo'>Get In Touch</motion.h2>
      
      <motion.p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        I would love to hear from you! If you have any questions, comments, or feedback, 
        please feel free to reach out.
      </motion.p>
      
      <motion.form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
        <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
          <motion.input 
            type='text' 
            placeholder='Enter your name' 
            required 
            name='name'
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90' 
          />
          <motion.input 
            type='email' 
            placeholder='Enter your email' 
            required 
            name='email'
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90' 
          />
        </div>
        <motion.textarea 
          rows='6' 
          placeholder='Enter your message' 
          required 
          name='message'
          className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90'
        ></motion.textarea>
        <motion.button 
          whileHover={{ scale: 1.05 }} 
          transition={{ duration: 0.3 }} 
          type='submit'
          className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover'
        >
          Submit now
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
