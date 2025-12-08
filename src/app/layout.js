import { Outfit } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local"
import { AllContextProvider } from "./context/allcontext";


const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
  variable: "--font-outfit",
});

const clashDisplay = localFont({
  src: [
    {
      path: "./utils/fonts/ClashDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./utils/fonts/ClashDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
     {
      path: "./utils/fonts/ClashDisplay-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-clash",
});

export const metadata = {
  title: "Chiaka tech",
  description: "Chiaka tech a creative branding agency offering logo design, web design and digital marketing. We help businesses stand strong with bold, strategic brand identities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"  className={`${outfit.variable} ${clashDisplay.variable} font-[400] antialiased text-[18px] sm:text-[20px] bg-[#fff]`}> 
     <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>
      <body 
        className={outfit.className}>
         <AllContextProvider>
            {children}
        </AllContextProvider>
      </body>
    </html>
  );
}
