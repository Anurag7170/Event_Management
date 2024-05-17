import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Image1 from "../../assets/EventImage/groom-putting-ring-bride-s-finger.jpg";
import Tagline from "../../components/tagline";
import Navbar from "../../components/navbar";
import Form from "../../components/form";
import About from "../../components/about";
import Client from "../../components/client";
import Blogs from "../../components/blogs";
import Footer from "../../components/footer";
import Switcher from "../../components/switcher";
import map from "../../assets/images/map-plane.png";
import venue from "../../assets/EventImage/restaurant-interior-with-elegant-style.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/swiper-bundle.css";

import { packages } from "../../data/data";

import { FiMapPin } from "../../assets/icons/vander";

export default function IndexTwo() {
  const navigate = useNavigate();
  return (
    <>
      <Tagline />
      <Navbar
        navclass="defaultscroll is-sticky tagline-height"
        navlight={true}
        manuclass="justify-end nav-light"
      />

      <section className="swiper-slider-hero relative block h-screen" id="home">
        <div className="swiper-container absolute end-0 top-0 w-full h-full">
          <Swiper
            className="swiper-wrapper"
            loop={false}
            speed={2000}
            autoplay={{ delay: 6500 }}
            effect="flip"
            modules={[Autoplay, EffectFade]}
          >
            <SwiperSlide className="swiper-slide flex items-center overflow-hidden">
              <div
                className="slide-inner absolute end-0 top-0 w-full h-full slide-bg-image flex items-center bg-center"
                style={{ backgroundImage: `url(${Image1})` }}
              >
                <div className="absolute inset-0 bg-black/70"></div>
                <div className="container relative">
                  <div className="grid grid-cols-1">
                    <div className="text-center">
                      <img src={map} className="mx-auto w-[300px]" alt="" />
                      <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-6xl mb-6 mt-5">
                        Welcome to The Date! <br /> Showcasing Unforgettable
                        Events
                      </h1>
                      <p className="text-white/70 text-xl max-w-xl mx-auto">
                        Planning for a Event? We will organize your event with
                        the best places and within best budget!
                      </p>

                      <div
                        className="mt-6"
                        onClick={() => navigate("/booking")}
                      >
                        <Link
                          to=""
                          className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md"
                        >
                          Book Your Event Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide flex items-center overflow-hidden">
              <div
                className="slide-inner absolute end-0 top-0 w-full h-full slide-bg-image flex items-center bg-center"
                style={{ backgroundImage: `url(${venue})` }}
              >
                <div className="absolute inset-0 bg-black/70"></div>
                <div className="container relative">
                  <div className="grid grid-cols-1">
                    <div className="text-center">
                      <img src={map} className="mx-auto w-[300px]" alt="" />
                      <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-6xl mb-6 mt-5">
                        Welcome to The Date! <br /> Showcasing Unforgettable
                        Events
                      </h1>
                      <p className="text-white/70 text-xl max-w-xl mx-auto">
                        Planning for a Event? We will organize your event with
                        the best places and within best budget!
                      </p>

                      <div className="mt-6">
                        <Link
                          to=""
                          className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md"
                          onClick={() => navigate("/booking")}
                        >
                          Book Your Event Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section className="relative py-16 bg-gray-50 dark:bg-slate-800">
        <div className="container relative">
          <Form />
        </div>
      </section>

      <section className="relative md:pb-24 pb-16 overflow-hidden">
        <About />

        <div className="container relative md:mt-24 mt-16">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
              Event Ocasion
            </h3>

            <p className="text-slate-400 max-w-xl mx-auto">
              Planning for a event? We will organize your event with the best
              places and within best budget!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 grid-cols-1 mt-6 gap-6">
            {packages.slice(0, 8).map((item, index) => {
              return (
                <div
                  className="group rounded-md shadow dark:shadow-gray-700"
                  key={index}
                >
                  <div className="md:flex md:items-center">
                    <div className="relative overflow-hidden md:shrink-0 md:rounded-md rounded-t-md shadow dark:shadow-gray-700 md:m-3 mx-3 mt-3">
                      <img
                        src={item.image}
                        className="h-full w-full object-cover md:w-48 md:h-56 scale-125 group-hover:scale-100 duration-500"
                        alt=""
                      />

                      {item.tagText && (
                        <div className="absolute top-0 start-0 p-4">
                          <span className="bg-red-500 text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5">
                            {item.tagText}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="p-4 w-full">
                      <p className="flex items-center text-slate-400 font-medium mb-2">
                        <FiMapPin className="text-red-500 size-4 me-1"></FiMapPin>{" "}
                        Mumbai
                      </p>
                      <Link
                        to={`/tour-detail-one/${item.id}`}
                        className="text-lg font-medium hover:text-red-500 duration-500 ease-in-out"
                      >
                        {item.title}
                      </Link>

                      <div className="flex items-center mt-2">
                        <span className="text-slate-400">Rating:</span>
                        <ul className="text-lg font-medium text-amber-400 list-none ms-2 space-x-1">
                          <li className="inline">
                            <i className="mdi mdi-star align-middle"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star align-middle"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star align-middle"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star align-middle"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star align-middle"></i>
                          </li>
                          <li className="inline text-black dark:text-white text-sm">
                            5.0(30)
                          </li>
                        </ul>
                      </div>

                      <div className="mt-4 pt-4 flex justify-between items-center border-t border-slate-100 dark:border-gray-800">
                        {/* <h5 className="text-lg font-medium text-red-500">
                          {item.amount}
                        </h5> */}

                        <Link
                          to="/booking"
                          className="border p-2 bg-red-500 rounded-md text-white"
                        >
                          Book Now <i className="mdi mdi-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <Client />

        {/* <Blogs /> */}
      </section>
      <Footer />
      <Switcher />
    </>
  );
}
