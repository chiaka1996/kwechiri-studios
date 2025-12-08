import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const testimonials = [
    {
      name: "Lanre Olarewanju",
      title: "C.E.O Slumtech Foundation",
      quote:
        "CHIAKA transformed our website completely. The design is sleek, fast, and has helped us attract more customers online.",
    },
    {
      name: "Adekola Mustapha",
      title: "C.EO ZZAR LOGISTICS",
      quote:
        "Their branding and website strategy gave our company a new identity. The team was professional, responsive, and creative.",
    },
    {
      name: "Osuji Blessing",
      title: "C.E.O ENGLISH LAB CONSULTANCY",
      quote:
        "The Salesforce setup by CHIAKA has streamlined our workflow and made our data management effortless. Highly recommended!",
    },
  ];

const Testimonial = () => {
    return(
        <section className="py-[50px] md:py-[100px] px-[15px] xl:px-0" id="testimonial">
            <div className="max-w-[1248px] mx-auto">
            <h3 className="font-[700] text-[45px] md:text-[55px] text-center">What Our Clients Say</h3>
            <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="pb-12"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="max-w-3xl mx-auto p-10 rounded-2xl shadow-md">
                <p className="text-lg italic text-black mb-6">
                  “{t.quote}”
                </p>
                <h4 className="text-xl font-semibold text-[#107269]">
                  {t.name}
                </h4>
                <p className="text-gray-400 text-sm">{t.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>    
        </section>
    )
}

export default Testimonial;