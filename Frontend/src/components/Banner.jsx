import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    image: "/1.webp", // First image
    heading: "SUBTRACT YOUR SPOTS",
    title: "NEW vc10 dark spot solution",
    subtitle: "reduces dark spots in 2 weeks*",
    note: "*see product page for full study results",
    button: "SHOP NOW",
  },
  {
    image: "/2.jpg", // Second image
    heading: "hello summer, hello savings",
    title: "$20 off orders $90+",
    subtitle: "code SPLASH20",
    note: "$15 off $75 — code SPLASH15\n$10 off $50 — code SPLASH10",
    description : "ends 5.28. limited stock offer. excludes peel breaker, spot defy, daily meds, pore thing vc10 dark spot solution, bundles with any of these formulas and gift EffectCards. one code as per customer.",
    button: "",
  },

  {
    image: "/3.jpg", // Third image
    heading: "Good Skin Is Always In",
    title: "Start your skin transformation today",
    subtitle: "",
    note: "",
    button: "SHOP BEST SELLERS",
  },
  {
    image: "/4.jpg", // Fourth image
    heading: "Good Skin Is Always In",
    title: "Start your skin transformation today",
    subtitle: "",
    note: "",
    button: "SHOP BEST SELLERS",
  },
];

const Banner = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      loop
      className="h-[80vh]"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="relative bg-no-repeat bg-cover h-full w-full flex items-center px-10 md:px-40"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="relative text-white z-10 max-w-[600px] space-y-4">
              <h2 className="text-md tracking-wider">{slide.heading}</h2>
              <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
                {slide.title}
              </h1>
              {slide.subtitle && <p className="text-lg">{slide.subtitle}</p>}
              {slide.note && (
                <p className="text-sm text-gray-200 whitespace-pre-line">
                  {slide.note}
                </p>
              )}
              {slide.button && (
                <button className="bg-white text-black px-6 py-2 rounded-md hover:bg-gray-200 transition duration-300 mt-4">
                  {slide.button}
                </button>
              )}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
