"use client";
import { Monitor, PenTool, Settings } from "lucide-react";

const OurService = () => {
    return(
        <main id="service" className="px-[15px] xl:px-0 py-[50px] md:py-[100px] bg-[url('https://res.cloudinary.com/chiaka/image/upload/v1762785595/ChatGPT_Image_Nov_10_2025_03_39_03_PM_ltw8qe.png')] bg-cover bg-center">
            <section className="max-w-[1248px] mx-auto text-[#fff]">
            <h3 className="font-[700] text-[45px] md:text-[55px]">Our Services</h3>
            <p className="text-[18px] max-w-[500px] mb-[50px]">
            We combine technology and creativity to build digital experiences that drive growth.
            </p>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Website Design */}
          <div className="bg-[#222222]/60 p-8 rounded-2xl hover:bg-[#2a2a2a] transition">
            <div className="flex justify-center mb-4">
              <Monitor size={48} className="text-[#fff] flex justify-center mb-4 transition-transform duration-300 hover:scale-110" />
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-[#fff] text-center">
              Website Design
            </h3>
            <p className="text-gray-300">
              We create responsive, fast, and visually appealing websites that represent your brand and drive results. Every design is tailored to your business goals and optimized for user experience.
            </p>
          </div>

          {/* Branding / Graphic Design */}
          <div className="bg-[#222222]/60 p-8 rounded-2xl hover:bg-[#2a2a2a] transition">
            <div className="flex justify-center mb-4">
              <PenTool size={48} className="text-[#fff] flex justify-center mb-4 transition-transform duration-300 hover:scale-110" />
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-[#fff]">
              Branding & Graphic Design
            </h3>
            <p className="text-gray-300">
              From logos to full brand systems, we craft identities that connect with your audience. Our design process blends creativity with strategy to help your brand stand out confidently.
            </p>
          </div>

          {/* Salesforce Solutions */}
          <div className="bg-[#222222]/60 p-8 rounded-2xl hover:bg-[#2a2a2a] transition">
            <div className="flex justify-center mb-4">
              <Settings size={48} className="text-[#fff] flex justify-center mb-4 transition-transform duration-300 hover:scale-110" />
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-[#fff]">
              Salesforce Solutions
            </h3>
            <p className="text-gray-300">
              We help businesses streamline operations with smart Salesforce setups and automation. Whether it’s CRM customization or workflow integration, we make your system work seamlessly for you.
            </p>
          </div>
        </div>
            </section>
        </main>
    )
}

export default OurService;