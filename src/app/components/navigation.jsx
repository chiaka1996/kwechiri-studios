"use client"
import { useState, useRef, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useAllContext } from "../context/allcontext";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";



const NavigationBar = () => {
    const closeDropdowns = useRef(null)
    const closeMediaDropdown = useRef(null)
    const {toggleMobileNavbarFunction} = useAllContext();
     const pathname = usePathname();
     const [openEvent, setOpenEvent] = useState(false);
     const [openMedia, setOpenMedia] = useState(false)

     // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (closeDropdowns.current && !closeDropdowns.current.contains(event.target)) {
        setOpenEvent(false);
      }
      if (closeMediaDropdown.current && !closeMediaDropdown.current.contains(event.target)) {
        setOpenMedia(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

    return(
        <div className="w-full px-[16px] md:px-[20px] py-[24px] bg-[#000] md:relative ">
        <nav className="bg-[#fff] rounded-[8px] shadow-[0px_4px_12.6px_0px_#D2D2D21F] tracking-[3%] leading-[150%] md:max-w-[1248px] mx-auto h-[48px] md:h-[88px] flex justify-between items-center px-[10px] md:px-[32px]">
           <Link href="/" className="tracking-[5px] font-[700] libertinus-keyboard-regular text-[30px] md:text-[36px]"> C </Link>

             <div className="hidden md:flex justify-between space-x-[40px] text-[16px] text-[#354764]  items-center">
               <Link href="/"  className={`navLink ${pathname==="/" ? "text-[#087C72] font-[600]" : ""}`}>Home</Link>

                 <Link href="/#about">About</Link>

                <Link href="/#service">Services</Link>

                <Link href="/#projects">Our Work</Link>
             </div>

                <div className="flex w-[30px] md:w-[152px] justify-between items-center ">
                  <Link href="/#contact">
                 <Button name="Contact Us" classname="w-[101px] h-[47px] md:w-[141px] bg-[#107269] hidden md:block"/>
                  </Link>
                <div className="relative w-[24px] h-[24px]" onClick={toggleMobileNavbarFunction} >
                     <Menu size={20} className="text-[#000]"/>
                </div>
                </div>
        </nav>
        </div>
    )
}

export default NavigationBar;