"use client"
import NavigationBar from "./components/navigation";
import MobileNav from "./components/MobileNav";
import AboutSection from "./components/About";
import OurServiceSection from "./components/OurService"
import Testimonial from "./components/Testimonial";
import ContactUs from "./components/ContactUs";
import OurProjects from "./components/OurProjects";
import Footer from "./components/Footer";
import Image from "next/image";

export default function Home() {

  return (
   <div className="overflow-x-hidden bg-[#fff]">
     <NavigationBar />
    <MobileNav />
    <main className="h-full w-full bg-[#000] px-[16px] lg:px-0">
      <div className="max-w-[1248px] flex flex-col-reverse lg:flex-row gap-[30px] lg:gap-[50px] mx-auto py-[30px] lg:py-[90px]">
        <div className="space-y-[15px] lg:space-y-[20px]">
          <h1 className="text-[#A8E6CF]"><span className="tracking-[5px] libertinus-keyboard-regular">CHIAKA</span> - IT solutions for the new era</h1>
          <h2 className="text-[#E5E5E5] font-[700] text-[45px]  md:text-[55px] leading-[120%] max-w-[800px]">Building Digital Experiences That Drives Growth</h2>
          <p className="max-w-[500px] text-[#fff]/70 text-[18px]">At Kwechiri, we design, develop, and deliver innovative web and tech solutions that help brands scale</p>
            <button className="block w-[200px] h-[47px] bg-[#107269] text-[#fff] rounded-[16px] cursor-pointer">Read more</button>
        </div>
        <div className="w-full lg:w-[700px] h-[300px] md:h-[400px] relative rounded-[10px]">
          <Image src="https://res.cloudinary.com/chiaka/image/upload/v1762513809/ChatGPT_Image_Nov_7_2025_12_09_41_PM_iontsp.png" className="rounded-[10px]" fill alt="web design, graphic design, salesforce" />
        </div>
      </div>
    </main>
    <AboutSection />
    <OurServiceSection />
    <Testimonial />
    <OurProjects />
    <ContactUs />
    <Footer />
   </div>
  );
}
