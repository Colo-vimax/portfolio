import React from 'react'
import projectImg from '../assets/projectimg.png'
import Moneyapp from '../assets/moneyapp.png'
import Harvesthub from '../assets/harvesthub.png'
import Recipeapp from '../assets/recipeApp.png'

const Projects = () => {
  return (
    <div className='p-wrapper'>
      <div className="p-container-title flex justify-center my-8">
             <h4 className='my-4 text-2xl font-bold tracking-normal dark:text-white'>My Projects</h4>
      </div>
      <div className="p-container flex justify-center">      
        <div class="grid grid-cols-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">         
              <div class="p-5">
                  <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Harvest Hub</h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">A web app that allows farmers to upload their produce,listing and location.It can also analytic functionality to enable estimate their produce</p>
              </div>   
              <div className="img">
                        <a href="#">
                            <img class="rounded-t-lg h-48" src={Harvesthub} alt="" />
                        </a>
              </div> 
              <div className="flex buttons">
                        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  focus:ring-4 focus:outline-none focus:ring-blue-300">
                        <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">React</button>
                        </a>
                        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  focus:ring-4 focus:outline-none focus:ring-blue-300">
                        <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Tailwindcss</button>
                        </a>
                        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  focus:ring-4 focus:outline-none focus:ring-blue-300">
                        <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Firebase</button>
                        </a>
               </div>               
        </div>           
      </div>
      <div className="p-container flex justify-center my-4">      
        <div class="grid grid-cols-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">         
              <div class="p-5">
                  <a href="https://mymoney-bfbc9.firebaseapp.com/">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">MoneyApp</h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">A webApp that allows users to manage their expenditure by adding transaction item name and amount and listings them.</p>
              </div>   
              <div className="img">
                        <a href="#">
                            <img class="rounded-t-lg h-48" src={Moneyapp} alt="" />
                        </a>
              </div> 
              <div className="flex buttons">
                        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  focus:ring-4 focus:outline-none focus:ring-blue-300">
                        <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">React</button>
                        </a>
                        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  focus:ring-4 focus:outline-none focus:ring-blue-300">
                        <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Tailwindcss</button>
                        </a>
                        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  focus:ring-4 focus:outline-none focus:ring-blue-300">
                        <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Firebase</button>
                        </a>
               </div>               
        </div>       
      
      </div>
      <div className="p-container flex justify-center my-4">      
        <div class="grid grid-cols-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">         
              <div class="p-5">
                  <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Vimax's Recipe</h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">A simple recipe app that allows users to  create, edit, display & delete their food recipe procedure.</p>
              </div>   
              <div className="img">
                        <a href="#">
                            <img class="rounded-t-lg h-48" src={Recipeapp} alt="" />
                        </a>
              </div> 
              <div className="flex buttons">
                        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  focus:ring-4 focus:outline-none focus:ring-blue-300">
                        <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">React</button>
                        </a>
                        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  focus:ring-4 focus:outline-none focus:ring-blue-300">
                        <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Tailwindcss</button>
                        </a>
                        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  focus:ring-4 focus:outline-none focus:ring-blue-300">
                        <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Firebase</button>
                        </a>
               </div>               
        </div>       
      
      </div>
      <div className="p-container flex justify-center my-4">      
        <div class="grid grid-cols-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">         
              <div class="p-5">
                  <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy</h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order</p>
              </div>   
              <div className="img">
                        <a href="#">
                            <img class="rounded-t-lg h-48" src={projectImg} alt="" />
                        </a>
              </div> 
              <div className="flex buttons">
                        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  focus:ring-4 focus:outline-none focus:ring-blue-300">
                        <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">React</button>
                        </a>
                        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  focus:ring-4 focus:outline-none focus:ring-blue-300">
                        <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Tailwindcss</button>
                        </a>
                        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  focus:ring-4 focus:outline-none focus:ring-blue-300">
                        <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Firebase</button>
                        </a>
               </div>               
        </div>       
      
      </div>
    </div>
  )
}

export default Projects