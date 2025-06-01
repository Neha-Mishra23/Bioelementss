import React, { useState } from "react";

const imageData = [
  { before: "5.webp", after: "6.webp" },
  { before: "7.webp", after: "8.webp" },
  { before: "9.webp", after: "10.webp" },
];

const Category = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? imageData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === imageData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="py-6 px-4 sm:px-6 lg:px-8">
      {/* Section 1: Tagline */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold font-serif">
          part science. part nature.
        </h2>
        <div className="flex justify-center">
          <div className="p-4 max-w-xl font-serif text-base">
            we have been mindful skin scientists since 1991 creating clinical
            formulas for
            <div className="pt-2 font-serif">use in the spa and at home.</div>
          </div>
        </div>
      </div>

      {/* Section 2: Email Signup */}
      <div className="w-full bg-sky-900 text-white py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:justify-between gap-10 px-4">
          <div className="md:w-1/2 space-y-4 font-serif">
            <p className="text-xl leading-snug">
              get <span className="font-bold">$10 off</span> your first purchase
              <br />
              of <span className="font-bold">$50 or more</span> when you sign up
              for our emails.
            </p>
          </div>

          <div className="md:w-1/2 space-y-4 w-full">
            <label htmlFor="email" className="text-sm font-medium">
              Email Address (required)
            </label>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                id="email"
                type="email"
                required
                placeholder="you@example.com"
                className="flex-1 px-4 py-2 rounded border border-white text-black focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
              >
                SIGN UP
              </button>
            </form>
            <p className="text-sm">
              By completing this form, you are signing up to receive our emails
              and can unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3: Results */}
      <div className="py-12 px-4">
        <div className="max-w-6xl border-b mx-auto">
          <h1 className="text-xl font-semibold">The Results</h1>
          <h2 className="text-3xl font-serif mb-3"> 
            <br />
            Proven Results for Dark Spots
          </h2>
          <div className="space-y-2 font-serif mb-14 text-gray-700">
            <p>
              Clinical results show improved hyperpigmentation, in a 2-week
              study of 15 participants (ages 41-65, Fitzpatrick II-V) with mild
              to moderate facial hyperpigmentation,
            </p>
            <p>
              applying{" "}
              <span className="underline text-blue-800">
                <a href="#">vc10 dark spot solution</a>
              </span>{" "}
              twice a day
            </p>
          </div>
        </div>

        {/* Section 4: Carousel */}
        <div className="text-bl pr-48 mt-8">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-0 w-[1250px]">
            {/* Before Image */}
            <div className="relative w-full max-w-[300px] h-[400px]">
              <img
                src={imageData[currentIndex].before}
                alt="Before"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <span className="absolute top-0 left-0 bg-white text-black text-xs px-5 py-2">
                BEFORE
              </span>
              <button
                onClick={handlePrev}
                className="absolute bottom-2 left-2 bg-white text-black p-1 rounded-full hover:bg-gray-200 transition"
              >
                &#8592;
              </button>
            </div>

            {/* After Image */}
            <div className="relative w-full max-w-[300px] h-[400px]">
              <img
                src={imageData[currentIndex].after}
                alt="After"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <span className="absolute top-0 right-0 bg-white text-black text-xs px-5 py-2">
                AFTER
              </span>
              <button
                onClick={handleNext}
                className="absolute bottom-2 right-2 bg-white text-black p-1 rounded-full hover:bg-gray-200 transition"
              >
                &#8594;
              </button>
            </div>

            {/* Text Content */}
            <div className="bg-sky-950 text-white text-4xl font-serif h-[400px] w-[2050px] p-12">
              <h3 className="text-2xl font-bold pb-4">real results</h3>
              <p className="text-lg font-bold pt-4">
                in just 2 weeks* with vc10 dark spot solution
              </p>
              <hr className="my-6" />
              <p className="text-xl">
                *Clinical results show improved hyperpigmentation, in a 2-week
                study of 15 participants (ages 41-65, Fitzpatrick II-V) with
                mild to moderate facial hyperpigmentation, applying{" "}
                <a href="#" className="underline">
                  vc10 dark spot solution
                </a>{" "}
                twice a day
              </p>
            </div>
          </div>

          {/* Carousel Dots */}
          <div className="flex justify-center mt-8 space-x-3 ml-44">
            {imageData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-black" : "bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Section 5: Press Mentions */}
      <div className="bg-[#4d2b1f] text-white mt-2">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Left Text */}
          <div className="p-6 md:p-16 flex flex-col justify-center">
            <p className="text-xs uppercase text-white/70 mb-4">
              Acne Formulas Making Headlines
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-4">
              featured in Elle, Teen Vogue, NewBeauty and more
            </h2>
            <p className="text-white/80 text-base">
              our Acne + Pore Activist collection is earning industry praise.{" "}
              <span className="font-semibold text-white">NewBeauty</span>{" "}
              awarded daily meds{" "}
              <span className="italic font-semibold">
                “best acne-clearing serum,”
              </span>{" "}
              Elle calls peel breaker{" "}
              <span className="italic font-semibold">
                “best exfoliator for acne prone skin.”
              </span>{" "}
              Discover what makes our formulations “breakout” from the rest.
            </p>
            <button className="mt-6 w-fit bg-black text-white px-6 py-3 text-sm uppercase hover:bg-cyan-800 hover:text-black transition">
              Explore all press + awards
            </button>
          </div>

          {/* Right Image */}
          <div className="w-[620px] h-[450px] overflow-hidden">
            <img
              src="/11.webp"
              alt="Acne Award"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* Section 6: New Favorites */}
        <div className="bg-white py-16 border-t">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-2xl md:text-3xl font-serif mb-12 text-black">
              new favorites our estheticians love
              <br />
              <br />
              <hr />
            </h1>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  img: "/12.jpg",
                  title: "dewluxe for body",
                  desc: "Body oil with occlusive argan, squalane + sea kale for dewy hydration neck-to-toes",
                },
                {
                  img: "/13.webp",
                  title: "peel breaker",
                  desc: "2% BHA + PHA leave-on liquid exfoliating treatment to break up pore blockage oils + dead cells",
                },
                {
                  img: "/14.webp",
                  title: "oxygen boost barrier treatment",
                  desc: "2.5% triple oxygenating complex to amplify cellular respiration + purify skin",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative h-[400px] group overflow-hidden"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30" />
                  <div className="absolute bottom-0 left-0 p-6 text-white z-10">
                    <h3 className="text-xl font-serif mb-1">{item.title}</h3>
                    <p className="text-sm mb-4">{item.desc}</p>
                    <a
                      href="#"
                      className="relative inline-block text-sm font-medium text-black overflow-hidden border border-black group"
                    >
                      <span className="relative z-10 block px-4 py-2 group-hover:text-white">
                        SHOP NOW
                      </span>
                      <span className="absolute inset-0 w-full h-full bg-cyan-800 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
