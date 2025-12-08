'use client'
import Link from "next/link";
import { FaTiktok } from "react-icons/fa";
import { Facebook, Twitter, Linkedin, Mail, Instagram, Tiktok } from "lucide-react";


const Footer = () => {
    return (
         <footer className="bg-[#0F3D3E] text-gray-300 py-14 px-[16px]">
      <div className="max-w-[1248px] mx-auto grid md:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3 libertinus-keyboard-regular tracking-[5px]">CHIAKA</h2>
          <p className="text-sm leading-relaxed text-gray-400">
            We blend design, technology, and strategy to build digital solutions
            that help businesses grow and connect with their audience.
          </p>
        </div>

        {/* Quick Links */}
        <div className="">
          <h3 className="text-lg font-semibold text-white mb-3 ">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-[#1DB954] transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#about" className="hover:text-[#1DB954] transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/#service" className="hover:text-[#1DB954] transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="hover:text-[#1DB954] transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="">
          <h3 className="text-lg font-semibold text-white mb-3">Services</h3>
          <ul className="space-y-2">
            <li>Website Design</li>
            <li>Branding & Graphic Design</li>
            <li>Salesforce Solutions</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Get in Touch</h3>
          <p className="text-sm text-gray-400 mb-4">
            Let&apos;s build something amazing together.
          </p>
          <div className="flex space-x-4">
            <a href="https://web.facebook.com/profile.php?id=61584523089559" target="_blank" className="hover:text-[#1DB954]">
              <Facebook size={20} />
            </a>
            <a href="https://www.instagram.com/chiakatech/" target="_blank" className="hover:text-[#1DB954]">
              <Instagram size={20} />
            </a>
            <a href="https://www.tiktok.com/@chiaka_tech?_r=1&_t=ZS-922qJRd8UOf" target="_blank" className="hover:text-[#1DB954]">
             <FaTiktok className="w-[20] h-[20]" />
            </a>
            <a href="mailto:contact@chiakatech.xyz" target="_blank" className="hover:text-[#1DB954]">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        <p>
          © {new Date().getFullYear()} <span className="libertinus-keyboard-regular">CHIAKA</span>. All rights reserved.{" "}
          <span className="text-[#1DB954]">Innovate. Design. Scale.</span>
        </p>
      </div>
    </footer>
    )
}

export default Footer;