import React from 'react'
import { Footer } from 'flowbite-react'
import Githubsvg from "../assets/Footer/code-github-hosting-svgrepo-com.svg"
import Curriculosvg from "../assets/Footer/curriculum-portfolio-svgrepo-com.svg"
import Linkedinsvg from "../assets/Footer/linkedin-icon-svgrepo-com.svg"
import Cv from "../assets/Footer/CV-FredyAlbertoVaron-FullStackDeveloper (1).pdf"
function Foote() {
  return (
    <div>
      <footer class="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="/" class="hover:underline">Fredy Alberto™</a>
    </span>
    <ul class="flex flex-wrap items-end mt-3 space-x-6  text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="https://www.linkedin.com/in/fredyalbertovaronguzman/" target={'_blank'}class="mr-8 hover:underline md:mr-6 "> <img className='w-8 h-8 rounded-md hover:bg-blue-300' src={Linkedinsvg} draggable="false"/></a>
        </li>
        <li>
            <a href="https://github.com/fredyvaron" target={'_blank'}class="mr-4 hover:underline md:mr-6"><img className='w-8 h-8 rounded-full hover:bg-blue-300' src={Githubsvg} draggable="false"/></a>
        </li>
        <li>
            <a href={Cv} target={'_blank'}class="mr-4 hover:underline md:mr-6"><img className='w-8 h-8 rounded-full hover:bg-blue-300' src={Curriculosvg} draggable="false"/></a>
        </li>

    </ul>
</footer>


    </div>
  )
}

export default Foote