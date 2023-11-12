import "../assets/scss/home.scss";
import "../assets/css/button.css";
import { motion } from "framer-motion";

import FadeSlider from "../components/Sliders/FadeSlider";
import s1 from "../assets/images/projects/soulboosters/Screenshot (1).png";
import s2 from "../assets/images/projects/soulboosters/Screenshot (2).png";
import s3 from "../assets/images/projects/soulboosters/Screenshot (3).png";
import s4 from "../assets/images/projects/soulboosters/Screenshot (4).png";
import s5 from "../assets/images/projects/soulboosters/Screenshot (5).png";

import s6 from "../assets/images/projects/kyoju/Screenshot (6).png";
import s7 from "../assets/images/projects/kyoju/Screenshot (7).png";
import s8 from "../assets/images/projects/kyoju/Screenshot (8).png";
import s9 from "../assets/images/projects/kyoju/Screenshot (9).png";

import s10 from "../assets/images/projects/tiona/Screenshot (13).png";
import s11 from "../assets/images/projects/tiona/Screenshot (14).png";

import s12 from "../assets/images/projects/ticketi/Screenshot (15).png";
import s13 from "../assets/images/projects/ticketi/Screenshot (16).png";
import s14 from "../assets/images/projects/ticketi/Screenshot (17).png";
import s15 from "../assets/images/projects/ticketi/Screenshot (18).png";

import u1 from "../assets/images/projects/upesy/u1.png";
import u2 from "../assets/images/projects/upesy/u2.png";
import u3 from "../assets/images/projects/upesy/u3.png";
import u4 from "../assets/images/projects/upesy/u4.png";
import u5 from "../assets/images/projects/upesy/u5.png";
import u6 from "../assets/images/projects/upesy/u6.png";
import u7 from "../assets/images/projects/upesy/u7.png";
import u8 from "../assets/images/projects/upesy/u8.png";

import w1 from "../assets/images/projects/wasreb/w1.png";
import w2 from "../assets/images/projects/wasreb/w2.png";
import w3 from "../assets/images/projects/wasreb/w3.png";
import w4 from "../assets/images/projects/wasreb/w4.png";

import a1 from "../assets/images/projects/alvocat/a1.png";
import a2 from "../assets/images/projects/alvocat/a2.png";
import a3 from "../assets/images/projects/alvocat/a3.png";
import a4 from "../assets/images/projects/alvocat/a4.png";

import f1 from "../assets/images/projects/fms/fms1.png";
import f2 from "../assets/images/projects/fms/fms2.png";
import f3 from "../assets/images/projects/fms/fms3.png";
import f4 from "../assets/images/projects/fms/fms4.png";

import sams1 from "../assets/images/projects/sams/sams1.png";
import sams2 from "../assets/images/projects/sams/sams2.png";
import sams3 from "../assets/images/projects/sams/sams3.png";
import sams4 from "../assets/images/projects/sams/sams4.png";
import sams5 from "../assets/images/projects/sams/sams5.png";

const Projects = () => {
  return (
    <motion.div
      className="motion"
      // initial={{scaleY:0}}
      // animate={{scaleY:1}}
      // exit={{scaleY:0}}
      // transition={{duration : 1}}
      // initial={{opacity:0}}
      // animate={{opacity:1}}
      // exit={{opacity:0}}
    >
      <div className="projects-page md:overflow-x-hidden w-full h-full bg-none">
        <h3 className="text-2xl text-left ml-12">My Projects</h3>
        <hr className="bg-portfolio-gray my-6 h-0.5 w-1/4" />

        <div>
          <div className="mx-5 h-full md:overflow-hidden md:m-10 relative inline-block md:flex items-center justify-around">
            <div className="md:mb-0 mb-10 h-full md:w-1/2 m-auto">
              <FadeSlider urls={[sams1, sams2, sams3, sams4, sams5]} />
            </div>
            <div className="px-5 h-full md:w-1/2 m-auto">
              <h3 className="text-2xl text-center">SAMS</h3>
              <hr className="bg-portfolio-gray my-6 h-0.5" />
              <ul className="text-justify tracking-widest">
                <li>
                  A Student Management System revamp of the original made with
                  NextJS, NodeJS, MySQL and Redis.
                </li>
              </ul>
              <a
                className="tracking-widest"
                href="http://35.244.58.160/dashboard"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="explore px-10 py-5 text-2xl font-caveat font-extrabold my-8 mx-auto text-center h-fit w-fit">
                  View
                </button>
              </a>
            </div>
          </div>
          <div className="mx-5 my-10 h-fit md:h-full md:m-10 relative inline-block md:flex items-center justify-around">
            <div className="md:hidden md:mb-0 mb-10 h-fit w-full md:h-full md:w-1/2 m-auto">
              <FadeSlider urls={[f1, f2, f3, f4]} />
            </div>
            <div className="px-5 text-center h-full md:w-1/2 m-auto">
              <h3 className="text-2xl text-center">Strathmore University</h3>
              <hr className="bg-portfolio-gray my-6 h-0.5" />
              <ul className="text-center tracking-widest">
                <li>Faculty Management System</li>
              </ul>
              <a
                className="tracking-widest"
                href="https://fms.strathmore.edu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="explore px-10 py-5 text-2xl font-caveat font-extrabold my-8 mx-auto text-center h-fit w-fit">
                  View
                </button>
              </a>
            </div>

            <div className="hidden md:flex h-fit w-full md:h-full md:w-1/2 m-auto">
              <FadeSlider urls={[f1, f2, f3, f4]} />
            </div>
          </div>
          <div className="mx-5 h-full md:overflow-hidden md:m-10 relative inline-block md:flex items-center justify-around">
            <div className="md:mb-0 mb-10 h-full md:w-1/2 m-auto">
              <FadeSlider urls={[a1, a2, a3, a4]} />
            </div>
            <div className="px-5 h-full md:w-1/2 m-auto">
              <h3 className="text-2xl text-center">Alvocat Fresh</h3>
              <hr className="bg-portfolio-gray my-6 h-0.5" />
              <ul className="text-justify tracking-widest">
                <li>
                  A platform for displaying farm produce to the public and how
                  to purchase some.{" "}
                </li>
              </ul>
              <a
                className="tracking-widest"
                href="https://alvocatfresh.co.ke/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="explore px-10 py-5 text-2xl font-caveat font-extrabold my-8 mx-auto text-center h-fit w-fit">
                  View
                </button>
              </a>
            </div>
          </div>
          <div className="mx-5 my-10 h-fit md:h-full md:m-10 relative inline-block md:flex items-center justify-around">
            <div className="md:hidden md:mb-0 mb-10 h-fit w-full md:h-full md:w-1/2 m-auto">
              <FadeSlider urls={[u1, u2, u3, u4, u5, u6, u7, u8]} />
            </div>
            <div className="px-5 text-center h-full md:w-1/2 m-auto">
              <h3 className="text-2xl text-center">Upesy</h3>
              <hr className="bg-portfolio-gray my-6 h-0.5" />
              <ul className="text-center tracking-widest">
                <li>Node js system to help curb security in the country</li>
              </ul>
              <a
                className="tracking-widest"
                href="https://upesy.co.ke/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="explore px-10 py-5 text-2xl font-caveat font-extrabold my-8 mx-auto text-center h-fit w-fit">
                  View
                </button>
              </a>
            </div>

            <div className="hidden md:flex h-fit w-full md:h-full md:w-1/2 m-auto">
              <FadeSlider urls={[u1, u2, u3, u4, u5, u6, u7, u8]} />
            </div>
          </div>
          <div className="mx-5 h-full md:overflow-hidden md:m-10 relative inline-block md:flex items-center justify-around">
            <div className="md:mb-0 mb-10 h-full md:w-1/2 m-auto">
              <FadeSlider urls={[w1, w2, w3, w4]} />
            </div>
            <div className="px-5 h-full md:w-1/2 m-auto">
              <h3 className="text-2xl text-center">Wasreb</h3>
              <hr className="bg-portfolio-gray my-6 h-0.5" />
              <ul className="text-justify tracking-widest">
                <li>
                  A system for displaying KPIs and other government resources
                  relating to water and sewerage to the public.{" "}
                </li>
              </ul>
              <a
                className="tracking-widest"
                href="http://majidata.georesearch.co.ke/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="explore px-10 py-5 text-2xl font-caveat font-extrabold my-8 mx-auto text-center h-fit w-fit">
                  View
                </button>
              </a>
            </div>
          </div>
          <div className="mx-5 my-10 h-fit md:h-full md:m-10 relative inline-block md:flex items-center justify-around">
            <div className="md:hidden md:mb-0 mb-10 h-fit w-full md:h-full md:w-1/2 m-auto">
              <FadeSlider urls={[s1, s2, s3, s4, s5]} />
            </div>
            <div className="px-5 text-center h-full md:w-1/2 m-auto">
              <h3 className="text-2xl text-center">SoulBoosters</h3>
              <hr className="bg-portfolio-gray my-6 h-0.5" />
              <ul className="text-center tracking-widest">
                <li>
                  React Website Tracking climate change across the country.
                </li>
              </ul>
              <a
                className="tracking-widest"
                href="https://j3rryl.github.io/soulboosters/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="explore px-10 py-5 text-2xl font-caveat font-extrabold my-8 mx-auto text-center h-fit w-fit">
                  View
                </button>
              </a>
            </div>

            <div className="hidden md:flex h-fit w-full md:h-full md:w-1/2 m-auto">
              <FadeSlider urls={[s1, s2, s3, s4, s5]} />
            </div>
          </div>

          <div className="mx-5 h-full md:overflow-hidden md:m-10 relative inline-block md:flex items-center justify-around">
            <div className="md:mb-0 mb-10 h-full md:w-1/2 m-auto">
              <FadeSlider urls={[s6, s7, s8, s9]} />
            </div>
            <div className="px-5 h-full md:w-1/2 m-auto">
              <h3 className="text-2xl text-center">Kyoju Listings</h3>
              <hr className="bg-portfolio-gray my-6 h-0.5" />
              <ul className="text-justify tracking-widest">
                <li>A platform for buying properties as well as selling. </li>
              </ul>
              <a
                className="tracking-widest"
                href="https://j3rryl.github.io/kyoju/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="explore px-10 py-5 text-2xl font-caveat font-extrabold my-8 mx-auto text-center h-fit w-fit">
                  View
                </button>
              </a>
            </div>
          </div>

          <div className="mx-5 my-10 h-fit md:h-full md:m-10 relative inline-block md:flex items-center justify-around">
            <div className="md:hidden md:mb-0 mb-10 h-fit w-full md:h-full md:w-1/2 m-auto">
              <FadeSlider urls={[s10, s11]} />
            </div>
            <div className="px-5 text-center h-full md:w-1/2 m-auto">
              <h3 className="text-2xl text-center">Tiona CRM</h3>
              <hr className="bg-portfolio-gray my-6 h-0.5" />
              <ul className="text-center tracking-widest">
                <li>Java application for managing customers. </li>
              </ul>
              <a
                className="tracking-widest"
                href="https://github.com/j3rryl/Tiona"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="explore px-10 py-5 text-2xl font-caveat font-extrabold my-8 mx-auto text-center h-fit w-fit">
                  View
                </button>
              </a>
            </div>

            <div className="hidden md:flex h-fit w-full md:h-full md:w-1/2 m-auto">
              <FadeSlider urls={[s10, s11]} />
            </div>
          </div>

          <div className="mx-5 h-full md:overflow-hidden md:m-10 relative inline-block md:flex items-center justify-around">
            <div className="md:mb-0 mb-10 h-full md:w-1/2 m-auto">
              <FadeSlider urls={[s12, s13, s14, s15]} />
            </div>
            <div className="px-5 h-full md:w-1/2 m-auto">
              <h3 className="text-2xl text-center">M-Tickets Remake</h3>
              <hr className="bg-portfolio-gray my-6 h-0.5" />
              <ul className="text-justify tracking-widest">
                <li>
                  What a remake of the M-Tickets platform could look like.{" "}
                </li>
              </ul>
              <a
                className="tracking-widest"
                href="https://github.com/j3rryl/m-tickets"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="explore px-10 py-5 text-2xl font-caveat font-extrabold my-8 mx-auto text-center h-fit w-fit">
                  View
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
