import React from "react";
import Title from "./Title";
import { testimonialsItems } from "../constant/data";
import { RiArrowLeftLine, RiArrowRightLine } from "@remixicon/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay } from "swiper/modules";

const Testimonials = () => {
  return (
    <div className="section">
      <div className="container">
        {/* title */}
        <Title
          title="Our Testimonials
"
          text="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
"
          link="View All
"
        />

        {/* card wrapper  */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 1.5 },
            1280: { slidesPerview: 2.5 },
          }}
          loop={true}
          className="mt-14 lg:mt-16"
        >
          {testimonialsItems.map((item) => (
            // card
            <SwiperSlide
              className="bg-white border border-white-95 p-8 lg:p-10 rounded-[10px] space-y-3"
              key={item.id}
            >
              <p>{item.text}</p>
              <div className="flex items-center justify-between flex-wrap pt-4 border-t border-t-orange-90 gap-4">
                <div className="flex items-center gap-3">
                  {/* image  */}
                  <div>
                    <img
                      src={item.img}
                      alt={item.author}
                      width={50}
                      height={50}
                    />
                  </div>
                  {/* author  */}
                  <p className="font-medium">{item.author}</p>
                </div>
                <button className="Secondary-btn">Read Full Story</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* navigation  */}
        <div className="">
          <button>
            <RiArrowLeftLine size={30} />
          </button>
          <button className="">
            <RiArrowRightLine size={30} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
