import React from "react";
import Foto from "../images/Foto Almamater Dharma.png";

const Profile = () => {
  return (
    <section id="profile" className="pt-36">
      <div className="container">
        <div className="flex flex-wrap">
          {/* Biodata */}
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className="text-base font-semibold text-primary md:text-xl">
              Hi 👋, I'm
              <span className="block font-bold text-dark text-4xl mt-1 lg:text-5xl">
                Dharma Putra
              </span>
            </h1>

            <h2 className="font-medium text-secondary text-lg mb-5 lg:text-2xl">
              Graphic Designer &
              <span className="text-dark"> Web Developer</span>
            </h2>

            <p className="font-medium text-secondary mb-10 leading-relaxed">
              I was born in 2001 and now i live on Surabaya. From this website
              you will know more about
              <span className="text-dark font-bold"> me</span>.
            </p>

            <a
              href="#contact"
              className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
            >
              Contact Me
            </a>
          </div>

          {/* Foto */}
          <div className="w-full self-end px-4 lg:w-1/2">
            <div className="relative mt-10 lg:mt-9 lg:right-0">
              <img
                src={Foto}
                alt="Dharma Putra"
                className="max-w-full mx-auto"
                style={{ width: "250px" }}
              />
              <span className="absolute bottom-0 -z-10 left-1/2 -translate-x-1/2 md:scale-125">
                <svg
                  width="400"
                  height="400"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#14b8a6"
                    d="M58.2,-16.3C65.1,2.3,53.2,29.6,34.9,41.4C16.5,53.2,-8.3,49.4,-25.9,36.4C-43.6,23.5,-53.9,1.3,-48.4,-15.5C-42.9,-32.2,-21.4,-43.5,2.1,-44.2C25.6,-44.9,51.3,-34.9,58.2,-16.3Z"
                    transform="translate(100 100)"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
