import Image from "next/image";

const AboutSection = () => {
    return(
        <section className="w-full" id="about">
            <div className="max-w-[1248px] mx-auto py-[50px] px-[16px] xl:px-0 md:py-[100px] flex flex-col md:flex-row gap-[50px] items-center">
               <div className="w-full md:w-[700px] h-[350px] lg:h-[600px] relative rounded-[10px]">
                    <Image src="https://res.cloudinary.com/chiaka/image/upload/v1762519793/african-american-worker-desk-using-personal-computer-programming_nm3k43.jpg" className="rounded-[10px]" fill alt="web design, graphic design, salesforce" />
                </div> 

                <div className="space-y-[20px] w-full md:w-[548px]">
                <div>
                <h2 className="text-[#000] font-[700] text-[32px] ">ABOUT <span className="tracking-[5px] libertinus-keyboard-regular">CHIAKA</span></h2>
                <p>
                We are a forward-thinking tech and creative agency committed to helping brands grow through 
                digital innovation. We specialize in web design, branding, 
                and custom tech solutions that empower businesses to stand out and scale with confidence.
                </p>
                </div>
                <div>
                <h3 className="text-[#000] font-[700] text-[22px]">Our Mission</h3>
                <p>
                Our mission is to bridge creativity and technology, delivering solutions that not only 
                look great but also drive measurable results. At <span className="tracking-[5px] libertinus-keyboard-regular">CHIAKA</span>, 
                we believe every brand deserves a strong digital presence that inspires action and builds trust.
                </p>
                </div>
            </div>
            </div>
            
        </section>
    )
}

export default AboutSection;