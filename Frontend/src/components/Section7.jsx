import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const posts = [
  {
    id: 1,
    image: "/15.webp",
    title: "These expert-approved ingredients help fade dark spots fast",
  },
  {
    id: 2,
    image: "/16.webp",
    title: "Can you help prevent dark spots from forming? Yes – here’s how",
  },
];

const Section7 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="px-4 md:px-16 py-12 border-t border-black bg-white">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-3">
        <h2 className="text-2xl md:text-3xl font-light max-w-xl">
          skin care advice from our esthetics experts
        </h2>
        </div>

        <div>
        <a
          href="#"
          className="text-sm underline underline-offset-[6px] hover:text-blue-600 transition-all duration-300"
        >
          View all posts
        </a>
      </div>

      {/* One Row with 2 blog cards side by side */}
      <div className="flex flex-col md:flex-row gap-16 mt-10 w-[1270px]">
        {posts.map((post) => (
          <div
            key={post.id}
            className="flex flex-row w-full md:w-1/2 bg-white relative group"
            data-aos="fade-up"
          >
            {/* Image with overlap and zoom on hover */}
            <div
              className="overflow-hidden relative -mr-32 w-[400px] h-[300px] "
              style={{ zIndex: 1 }}
            >
              <img
                src={post.image}
                alt="post"
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
            </div>

            {/* Text beside image */}
            <div
              className="w-1/2 bg-white px-12 py-8 flex flex-col justify-center relative mt-4 pr-10"
              style={{ zIndex: 2 }}
            >
              <h3 className="text-xl font-light mb-4 leading-snug">
                {post.title}
              </h3>
              <a
                href="#"
                className="text-sm border-b border-black w-fit hover:border-blue-600 transition-all"
              >
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section7;
