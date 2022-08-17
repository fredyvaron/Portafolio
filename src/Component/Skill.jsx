import React from 'react'
import Reactsvg from "../assets/skill/react-2.svg"
import Reduxsvg from "../assets/skill/redux.svg"
import Htmlsvg from "../assets/skill/w3_html5-icon.svg"
import Expresvg from "../assets/skill/express-js-icon.svg"
import Cssvg from "../assets/skill/icons8-css3.svg"
import Githubsvg from "../assets/skill/icons8-github.svg"
import Bootstarpsvg from "../assets/skill/icons8-oreja.svg"
import TailwindCssvg from "../assets/skill/icons8-tailwind-css.svg"
import Nodesvg from "../assets/skill/nodejs-icon.svg"
import Postgressvg from "../assets/skill/postgresql-icon.svg"


function Skill() {
  return (
    <div name="skill">
               <section className="bg-white dark:bg-gray-900">
        <div className="py-10 px-4 mx-auto max-w-screen-lg lg:py-16 lg:px-6 ">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-8  text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Skill 
            </h2>
            <div className="grid gap-3 mb-6 lg:mb-16 md:grid-cols-5 grid-cols-2 justify-center">
            <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <img className="w-full" src={Reactsvg} alt="" draggable="false"/>
</div>
<div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <img className="w-full" src={Reduxsvg} alt="" draggable="false"/>
            
</div>
<div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <img className="w-full" src={Htmlsvg} alt="" draggable="false"/>
</div>
<div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <img className="w-full" src={Expresvg} alt="" draggable="false"/>
</div>
<div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <img className="w-full" src={Cssvg} alt="" draggable="false"/>
</div>
<div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <img className="w-full" src={Githubsvg} alt="" draggable="false"/>
</div>
<div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <img className="w-full" src={Bootstarpsvg} alt="" />
</div>
<div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <img className="w-full" src={TailwindCssvg} alt="" draggable="false"/>
</div>
<div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <img className="w-full" src={Nodesvg} alt="" draggable="false"/>
</div>
<div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <img className="w-full" src={Postgressvg} alt="" draggable="false"/>
</div>
            </div>
      </div>
          </div>
          </section>
    </div>
  )
}

export default Skill