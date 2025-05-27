import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Typewriter } from "react-simple-typewriter";

const Announcement = () => {
  return (
    <div className="bg-[#f3f5f5] text-black py-2">
      <div className="max-w-full mx-auto">
        <Carousel
          autoPlay
          infiniteLoop
          interval={3000}
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          stopOnHover={false}
          swipeable
          emulateTouch
        >
          <div>
            <p className="text-sm text-center">
              Free Shipping and 3 free foil samples on Order $35+ |{" "}
              <u>DETAILS</u>
            </p>
          </div>
          <div>
            <p className="text-sm text-center">
              JUST LAUNCHED: NEW VC 10 Dark Spot Solution is here! |{" "}
              <u>DETAILS</u>
            </p>
          </div>
          <div>
            <p className="text-sm text-center">
              $20 off order $90+ w/code SPLASH20
            </p>
            <p className="text-sm text-center">
              $15 off order $75+ w/code SPLASH15
            </p>
            <p className="text-sm text-center">
              $10 off order $50+ w/code SPLASH10 | <u>DETAILS</u>
            </p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Announcement;