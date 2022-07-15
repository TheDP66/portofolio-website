import React from "react";
import TImage from "../images/latihan/tinder clone.png";
import SSMImage from "../images/latihan/simple social media.png";
import WAImage from "../images/latihan/whatsapp clone.png";
import NFTMImage from "../images/latihan/nft marketplace.png";
import ThreeImage from "../images/latihan/three course.png";

const Course = () => {
  return (
    <div id="course" className="pt-36 pb-32 bg-slate-100">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary mb-2">Course</h4>
            <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">
              What I Learn?
            </h2>
            <p className="font-medium text-md  text-secondary md:text-lg">
              I'd like to find some YouTube tutorial about cloning an excisting
              app and about a new technology i never know/use before. This all
              my collected course.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl overflow-hidden mb-10">
              <img src={WAImage} alt="Programming" className="w-full" />
              <div className="py-8 px-6">
                <h3>
                  <a
                    href="https://whatsapp-clone-751a8.web.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="blcok mb-3 font-semibold text-xl text-dark hover:text-primary truncate"
                  >
                    WhatsApp Clone
                  </a>
                </h3>
                <p className="font-medium text-base text-secondary mb-6">
                  Frontend : <b>React</b> and <b>Tailwind CSS</b>
                  <br />
                  Backend : <b>Node JS</b>
                  <br />
                  Database : <b>MongoDB</b>
                  <br />
                  Hosting : <b>Firebase</b> and <b>Heroku</b>
                  <br />
                  3rd Party : <b>Pusher JS</b>
                </p>
                <a
                  href="https://whatsapp-clone-751a8.web.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-sm text-white bg-primary py-3 px-6 rounded-md hover:opacity-80"
                >
                  Explore Site
                </a>
              </div>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl overflow-hidden mb-10">
              <img src={TImage} alt="Programming" className="w-full" />
              <div className="py-8 px-6">
                <h3>
                  <a
                    href="https://tinder-clone-dbf80.web.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="blcok mb-3 font-semibold text-xl text-dark hover:text-primary truncate"
                  >
                    Tinder Clone
                  </a>
                </h3>
                <p className="font-medium text-base text-secondary mb-6">
                  Frontend : <b>React</b> and <b>Tailwind CSS</b>
                  <br />
                  Backend : <b>Node JS</b>
                  <br />
                  Database : <b>MongoDB</b>
                  <br />
                  Hosting : <b>Firebase</b> and <b>Heroku</b>
                </p>
                <a
                  href="https://tinder-clone-dbf80.web.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-sm text-white bg-primary py-3 px-6 rounded-md hover:opacity-80"
                >
                  Explore Site
                </a>
              </div>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl overflow-hidden mb-10">
              <img src={SSMImage} alt="Programming" className="w-full" />
              <div className="py-8 px-6">
                <h3>
                  <a
                    href="https://62d17814a9f061271077c569--startling-cupcake-8ee2c7.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                    className="blcok mb-3 font-semibold text-xl text-dark hover:text-primary truncate"
                  >
                    Simple Social Media
                  </a>
                </h3>
                <p className="font-medium text-base text-secondary mb-6">
                  Frontend : <b>React</b>
                  <br />
                  Backend : <b>Node JS</b>
                  <br />
                  Database : <b>MySQL</b>
                  <br />
                  Hosting : <b>Netlify</b> and <b>Heroku</b>
                </p>
                <a
                  href="https://62d17814a9f061271077c569--startling-cupcake-8ee2c7.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-sm text-white bg-primary py-3 px-6 rounded-md hover:opacity-80"
                >
                  Explore Site
                </a>
              </div>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl overflow-hidden mb-10">
              <img src={NFTMImage} alt="Programming" className="w-full" />
              <div className="py-8 px-6">
                <h3>
                  <a
                    href="https://nft-marketplace-31e8e.web.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="blcok mb-3 font-semibold text-xl text-dark hover:text-primary truncate"
                  >
                    NFT Marketplace
                  </a>
                </h3>
                <p className="font-medium text-base text-secondary mb-6">
                  Frontend : <b>NEXT JS</b>
                  <br />
                  Backend : <b>NEXT JS</b>
                  <br />
                  Database : <b>IPFS</b>
                  <br />
                  Hosting : <b>Firebase</b>
                  <br />
                  3rd Party : <b>ethers</b> and <b>web3mdoal</b>
                </p>
                <a
                  href="https://nft-marketplace-31e8e.web.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-sm text-white bg-primary py-3 px-6 rounded-md hover:opacity-80"
                >
                  Explore Site
                </a>
              </div>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl overflow-hidden mb-10">
              <img src={ThreeImage} alt="Programming" className="w-full" />
              <div className="py-8 px-6">
                <h3>
                  <a
                    href="https://three-course.web.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="blcok mb-3 font-semibold text-xl text-dark hover:text-primary truncate"
                  >
                    Three Course
                  </a>
                </h3>
                <p className="font-medium text-base text-secondary mb-6">
                  Frontend : <b>React JS</b>
                  <br />
                  Hosting : <b>Firebase</b>
                  <br />
                  3rd Party : <b>Three</b>, <b>Drei</b>, and <b>Fiber</b>
                </p>
                <a
                  href="https://three-course.web.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-sm text-white bg-primary py-3 px-6 rounded-md hover:opacity-80"
                >
                  Explore Site
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
