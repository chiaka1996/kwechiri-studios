"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useAllContext } from "../context/allcontext";
import { usePathname } from "next/navigation";

const MobileNavigationBar = () => {
    const {toggleNavbar, toggleMobileNavbarFunction} = useAllContext();
    const [toggleEventSubLinks, setToggleEventSubLinks] = useState(true)
    const [toggleMediaSubLinks, setToggleMediaSubLinks] = useState(true)
    const pathname = usePathname();

    const eventFunction = () => {
        setToggleMediaSubLinks(true);
        setToggleEventSubLinks((prev) => !prev)
    }

    const mediaFunction = () => {
        setToggleEventSubLinks(true)
        setToggleMediaSubLinks((prev) => !prev)
    }

    return(
        <div className={`z-50 w-full px-[16px] md:px-[20px] py-[24px] fixed top-0 left-0 w-full h-[100vh] bg-[#fff] ${!toggleNavbar ? "hidden" : ''}`}>
        <nav className="tracking-[3%] leading-[150%] md:max-w-[1248px] mx-auto h-[48px] md:h-[88px] flex justify-between items-center md:px-[32px]  border border-l-0 md:border-l-[6px] border-t-0 border-r-[0] border-b-[0] border-l-[#E36A02]">
            <Link href="/">
            <div className="relative w-[50px] h-[50px] bg-[#fff]">
              <Image src="/img/logo.png" fill alt="kwechiri logo" className="bg-[#fff] " />
             </div>
             </Link>
            
                <div className="relative w-[24px] h-[24px]" onClick={toggleMobileNavbarFunction}>  
                <Image src="/icons/close-square.png" fill alt="thribe community menu option" className="object-center md:hidden shrink-0" />
                </div>

        </nav>

            <ul className="text-[15px] text-[#354764] tracking-[2%] space-y-[40px] py-[40px] w-full ">
                <li><Link onClick={toggleMobileNavbarFunction} href="/" className={pathname==="/" ? "text-[#087C72] font-[600]" : ""}>Home</Link></li>
                <li> <Link onClick={toggleMobileNavbarFunction} href="/about" className={pathname==="/about" ? "text-[#087C72] font-[600]" : ""}>About</Link></li>
                <li> <Link onClick={toggleMobileNavbarFunction} href="/about" className={pathname==="/about" ? "text-[#087C72] font-[600]" : ""}>Services</Link></li>
                <li> <Link onClick={toggleMobileNavbarFunction} href="/about" className={pathname==="/about" ? "text-[#087C72] font-[600]" : ""}>Our Work</Link></li>
                <Link href="/#price" onClick={toggleMobileNavbarFunction}>
                <Button name="Contact Us" classname="w-full h-[48px] bg-[#107269]"/>
                </Link>
            </ul>
        </div>
    )
}

export default MobileNavigationBar;