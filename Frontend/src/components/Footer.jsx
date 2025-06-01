import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";


const Footer = () => {
  return (
    <div className="bg-[#f6f6f6] text-sm text-black px-6 md:px-16 py-12 mt-6">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {/* FOR PROFESSIONALS */}
        <div>
          <h3 className="font-semibold uppercase mb-3">For Professionals</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Professional Website
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Esthetics Entrepreneur Kick Start Award
              </a>
            </li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="font-semibold uppercase mb-3">Company</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Press + Awards
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Accessibility Statement
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Giving Back
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Cleanhub
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                One Tree Planted
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Esthetics Insight Circle
              </a>
            </li>
          </ul>
        </div>

        {/* CUSTOMER SERVICE */}
        <div>
          <h3 className="font-semibold uppercase mb-3">Customer Service</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Track Your Order
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Buy Now Pay Later
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                E-gift Cards
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                International
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Unauthorized Resellers
              </a>
            </li>
          </ul>
        </div>

        {/* RESOURCES */}
        <div>
          <h3 className="font-semibold uppercase mb-3">Resources</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Find a Bioelements Spa
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Skin Quizzes
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Skin Care Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Before & After Results
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Ingredient Glossary
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Student Discount Program
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Calling all Creators!
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Refer a Friend
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Reviews
              </a>
            </li>
          </ul>
        </div>

        {/* EMAIL SIGN UP */}
        <div>
          <h3 className="font-semibold uppercase mb-3">Email Sign Up</h3>
          <p className="mb-4">
            get $10 off your first purchase of $50+ when you sign up for emails
          </p>
          <form className="flex mb-8 w-[280px] h-[50px]">
            <input
              type="email"
              required
              placeholder=""
              className="w-[2500px] border border-black px-18 py-2 text-black"
            />
            <button className="bg-black text-white px-4 py-2 ml-2 hover:bg-gray-800">
              SUBMIT
            </button>
          </form>

          {/* Social Icons */}
          <div className="flex gap-4 mb-4 text-lg">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaPinterestP />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
          </div>

          {/* Google Quality Store Badge */}

          <div className="mb-4 mt-6 flex justify-center m-4 gap-2">
            <img
              src="public/google.png"
              alt="Google Top Quality Store"
              className="h-6"
            />
            <p>Google Top Quality Store</p>
          </div>

          {/* Payment Icons */}

          <div className="mb-4 mt-4 flex justify-center">
            <img
              src="./public/all.png"
              alt="Google Top Quality Store"
              className=" w-[850px] h-[75px]"
            />
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="mt-2 text-xs text-gray-600 flex flex-col md:flex-row justify-between">
        <p>
          Copyright © 2025,{" "}
          <a href="#" className="underline">
            Bioelements
          </a>
          . All rights reserved.
        </p>
      </div>
      <br />
      <div className="flex gap-4">
        <a href="#" className="underline">
          Terms of Use
        </a>
        <a href="#" className="underline">
          Privacy Policy
        </a>
      </div>
    </div>
  );
};

export default Footer;
