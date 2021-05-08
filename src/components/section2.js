import React from 'react'

import Tab from "./acordionTabs";

function section2() {
    return (
        <section  class="relative flex flex-wrap flex-col items-center justify-between px-2  md:px-24 py-10 h-full">
            <div  class=" max-w-lg  flex flex-col justify-center items-center text-center ">
                <h2 class="font-medium text-xl lg:text-3xl leading-tight">Features</h2>
                <p class="text-grayishBlue opacity-60 px-5 lg:px-0 py-5">  Our aim is to make it quick and easy for you to access your favourite websites. 
  Your bookmarks sync between your devices so you can access them on the go.</p>
            </div>
            <div>
                <Tab/>
            </div>

        </section>
    )
}

export default section2
