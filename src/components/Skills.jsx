import React from 'react'

const Skills = () => {
  return (
    <div className='s-wrapper'>
      <div className="s-container ">
        <div className="s-container-title">
           <h4 className='my-8 text-2xl font-bold tracking-normal flex justify-center'>My skills</h4>
        </div>
        <div className="s-container-tabs flex justify-center">
            <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                <li class="me-2">
                    <a href="#" class="inline-block px-4 py-3 text-white bg-blue-600 rounded-lg active" aria-current="page">REACT.JS</a>
                </li>
                <li class="me-2">
                    <a href="#"  class="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">HTML</a>
                </li>
                <li class="me-2">
                    <a href="#" class="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">CSS</a>
                </li>
                <li class="me-2">
                    <a href="#" class="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">JAVASCRIPT</a>
                </li>
                <li class="me-2">
                    <a href="#" class="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">PYTHON</a>
                </li>
                <li class="me-2">
                    <a href="#" class="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">DJANGO</a>
                </li>
                {/* <li>
                    <a class="inline-block px-4 py-3 text-gray-400 rounded-lg cursor-not-allowed dark:text-gray-500">FIREBASE</a>
                </li> */}
                 <li class="me-2">
                    <a href="#" class="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">FIREBASE</a>
                </li>
            </ul>
        </div>

      </div>

    </div>
  )
}

export default Skills  