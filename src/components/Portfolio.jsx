import React from "react";
import AEWeb from "../images/portfolio/1.PNG";

const Portfolio = () => {
  return (
    <div id="portfolio" className="pt-36 pb-16 bg-slate-800">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary mb-2">
              Portfolio
            </h4>
            <h2 className="font-bold text-white text-3xl mb-4 sm:text-4xl lg:text-5xl">
              My Project
            </h2>
            <p className="font-medium text-md  text-secondary md:text-lg">
              This is all the project that i have done until now.
            </p>
          </div>
        </div>

        <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
          <div className="mb-12 p-4 md:w-1/2">
            <div className="rounded-md shadow-gray-700 shadow-md overflow-hidden hover:shadow-lg hover:shadow-gray-500 hover:duration-300">
              <a
                href="http://app.theaftereight.com/code"
                target="_blank"
                rel="noreferrer"
              >
                <img src={AEWeb} alt="Reedem Code Page" width="w-full" />
              </a>
            </div>
            <h3 className="font-semibold text-white mt-3">
              Reedem Code After Eight
            </h3>
            <p className="font-medium text-base text-secondary">
              As : <b>Full Stack</b>
              <br />
              Frontend : <b>CodeIgniter 4</b> dan <b>AJAX</b>
              <br />
              Backend : <b>CodeIgniter 4</b>
              <br />
              Database : <b>MySQL</b>
              <br />
              Hosting : <b>Creative Indosite</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
