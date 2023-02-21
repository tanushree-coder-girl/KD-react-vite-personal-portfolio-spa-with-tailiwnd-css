import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { AiFillStar } from "react-icons/ai";
import { content } from "../../data/constants";
import Heading from "../common/Heading";

const Testimonials = () => {
  const { testimonials } = content;
  return (
    <section id="reviews">
      <div className="md:container px-5 py-14">
       
      <Heading title={testimonials.title} subtitle={testimonials.subtitle} />

        <div className="flex gap-4 mt-12 justify-center flex-col md:flex-row">
          <div
            className="bg-white sm:cursor-pointer 
       relative group flex items-center
        gap-5 p-5 rounded-md border-2 border-slate-200 w-full md:w-[60%]"
          >
            <Swiper
              modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              autoplay={true}
              navigation={{
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
              }}
              pagination={{
                el: ".swiper-pagination-div",
                type: "fraction",
                clickable: true,
                renderBullet: (index, className) => {
                  return (
                    '<span class="' + className + '">' + (index + 1) + "</span>"
                  );
                },
              }}
            >
              {testimonials?.testimonials_items?.map((feedback: any) => (
                <SwiperSlide key={feedback.id}>
                  <div>
                    <p className={`mt-5`}> {feedback.content} </p>
                  </div>
                  <div className="flex items-center mt-5">
                    <div className="w-[80px] h-[80px] rounded-full mt-5">
                      <img
                        className="w-[100%] h-[100%] object-contain rounded-full"
                        src={feedback.img}
                        alt=""
                      />
                    </div>
                    <div className="mx-5">
                      <h4
                        className={`font-normal text-[16px] leading-[30.8px] mt-2`}
                      >
                        {" "}
                        {feedback.name}{" "}
                      </h4>
                      <p
                        className={`font-normal text-greyish text-[14px] leading-[30.8px]`}
                      >
                        {" "}
                        {feedback.title}{" "}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="xl:w-[25%] lg:w-[40%] w-[50%] text-center py-5 sm:py-0 sm:h-[300px] flex items-center justify-center flex-col">
            <div className="flex">
              <div className="swiper-pagination-div text-xl" />
              <span className="ml-3 text-xl"> People </span>
            </div>

            <div className="flex my-5 pb-5">
              <div className="text-3xl text-ratingStarColor">
                <AiFillStar />
              </div>
              <div className="text-3xl text-ratingStarColor">
                <AiFillStar />
              </div>
              <div className="text-3xl text-ratingStarColor">
                <AiFillStar />
              </div>
              <div className="text-3xl text-ratingStarColor">
                <AiFillStar />
              </div>
              <div className="text-3xl">
                <AiFillStar />
              </div>
            </div>

            <div className="relative w-[90%] md:w-[50%]">
              <div className="swiper-button-next"> </div>
              <div className="swiper-button-prev "> </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
