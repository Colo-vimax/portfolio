import React from 'react'
import Gamer from '../assets/gamer.png'
import Profile from '../assets/profile.png'
import { FaArrowRightLong } from "react-icons/fa6";
import { IoMdDownload } from "react-icons/io";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaSquareGithub } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="h-wrapper">
        <div className="h-container">
            <section class="bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
                <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
                    <div class="mt-4 inline-flex justify-between items-center py-1 px-1 pe-4 mb-7 ">
                    <img class="w-10 h-10 rounded-full" src={Profile} alt="Rounded avatar"/>
                    </div>
                    <p class="mb-4 text-4xl font-thin tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Hello, i'm <span className='font-bold'>Collins</span>.</p>
                    <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">A web developer proficient with react and django techstack.</p>
                    <div className="flex justify-center items-center gap-4">
                            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "><div className="h-buttons flex justify-center gap-4 items-center">
                                contact me here <FaArrowRightLong />
                                </div>
                            </button>
                            <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                <div className="h-buttons flex items-center gap-2">
                                    Resume
                                    <IoMdDownload />
                                </div>
                            </button>
                            <div className="h-social-linkeln">
                                <div className="social-linkeln bg-white ">
                                    <TiSocialLinkedin size={24} color='black' />
                                </div>
                            </div>
                            <div className="h-social-github">
                                <div className="social-github bg-white">
                                <FaSquareGithub size={24} color='black' />
                                </div>
                            </div>
                    </div>
                  

                </div>
                <div class="bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900 w-full h-full absolute top-0 left-0 z-0">
        
                </div>
            </section>
        </div>
    </section>
  )
}

export default Hero