import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillGithub, AiFillLinkedin, AiFillYoutube, AiFillMail} from "react-icons/ai";

import Image from "next/image";
// import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";

import Farnaz11 from "../public/Farnaz11.jpg";
import Farnaz2 from "../public/Farnaz2.jpg";



import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";


import {useState} from "react";


export default function Home() {
  const[darkMode, setDarkMode]= useState(false)
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Farnaz Fawad Hasan Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-slate-300 px-10 md:px-20 lg:px-0-40 dark:bg-gray-900">
        <section className= "min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className='text-xl font-burtons dark:text-white'>develpoedbyfarnaz</h1>
            <ul className="flex items-center">
              <li>
              <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                 <a href="/Resume.pdf" download="Resume.pdf" className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2
                 rounded-md ml-8  ">Resume</a>
              </li>
            </ul>

          </nav>
          <div className="text-center p-10 ">
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl '>Farnaz Fawad Hasan</h2>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-blue-400'>Developer and Designer.</h3>
            <p className='text-md py-5 leading-8  text-gray-800 md:text-lg max-w-lg mx-auto dark:text-white'>Meet Farnaz, a passionate advocate for community engagement and sustainable development. With a background in environmental science and project management, she's driven to create positive change through collaborative initiatives. From clean-up campaigns to education programs, Farnaz is dedicated to fostering unity and empowerment. Join her on a journey of impactful transformation.</p>
          </div>

          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white'>
            <a href="https://github.com/farnaz4" target="_blank">
              <AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/farnazfawadhasan/" target="_blank">
              <AiFillLinkedin />
            </a>
            {/* <a href="https://www.youtube.com/channel/UCHedF4Dzmx7Cp29NuJbmf1Q" target="_blank">
              <AiFillYoutube />
            </a> */}
            <a href="farnazfawadhasan@gmail.com" target="_blank">
              <AiFillMail />
            </a>
          </div>


          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
            <Image src={Farnaz11} layout = "fill" objectFit="cover" />


          </div>

        </section>

{/* Start of Section 2 */}

        <section>
          <div>
          <h3 className="text-3xl py-1 dark:text-blue-400">Services I offer</h3>
          <p className='text-md py-5 leading-8  text-gray-800 dark:text-white'>
          Farnaz offers a range of dynamic services that reflect her expertise and passions. 
          From <span className='text-teal-500 dark:text-white'>crafting</span> captivating websites and user-friendly mobile applications to offering insightful tech consultations, she's your go-to resource for all things tech. With a knack for simplifying the complex, Farnaz also conducts interactive coding workshops and provides comprehensive project management to ensure seamless execution. Beyond the tech realm, her commitment extends to environmental consulting, where she shares sustainable practices and empowers positive change. Whether you're seeking innovative digital solutions or aiming to foster community engagement, Farnaz is here to guide you on a journey of growth and transformation.

          </p>

          </div>

          <div className="lg:flex gap-10">
          <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-white dark:bg-white flex-1">
              <center><Image src={design} width={100} height={100} /></center>
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>

            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10  bg-white dark:bg-white flex-1">
              <center><Image src={consulting} width={100} height={100} /></center>
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>

            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10  bg-white dark:bg-white flex-1">
              <center><Image src={code} width={100} height={100} /></center>
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>

            </div>

          </div>
        </section>

{/* Start of Section 3 */}
      
        <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-blue-400'> Projects</h3>
            <p className="text-md py-2 leading-8 text-gray-800 text-black-200 dark:text-white">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 text-black-200 dark:text-white">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>

          </div>

          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
          <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"  src={web1}/>
          </div>
          <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive" src={web2}/>
          </div>
          <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive" src={web3}/>
          </div>
          <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive" src={web4}/>
          </div>
          <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive" src={web5}/>
          </div>
          <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive" src={web6}/>
          </div>
          </div>

        </section>



      </main>
         
    </div>
      
    
  );
}
