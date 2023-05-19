import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import { BsDot } from 'react-icons/bs';


const SideBarItem = ({label, icon: Icon, href, onClick})=>{
    const router = useRouter();

    const handleClick = useCallback(() => {
        if (onClick) {
          return onClick();
        }
    
          router.push(href);
      }, [router, href, onClick]);

      return (
        <div onClick={handleClick} className="flex flex-row items-center">
      {/* <div className="
        relative
        rounded-full 
        h-14
        w-14
        flex
        items-center
        justify-center 
        p-4
        hover:bg-slate-300 
        hover:bg-opacity-10 
        cursor-pointer 
        lg:hidden
      ">
        <Icon size={28} color="black" />
       
      </div> */}
      <div className="
        relative 
        w-full
        lg:flex 
        items-row 
        justify-between
        gap-4 
        p-4 
        rounded-full 
        hover:bg-blue-500 
        cursor-pointer
        items-center
      ">
       
        <p className="hidden lg:block text-black text-xl">
          {label}
        </p>
        <Icon size={24} color="black" />
      </div>
    </div>
      )
}

export default SideBarItem