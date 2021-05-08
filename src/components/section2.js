import React from 'react'

import Tab from "./acordionTabs";

function section2() {
    return (
        <section  class="relative flex flex-wrap flex-col items-center justify-between px-2  md:px-24 py-10 h-full">
            <div  class=" max-w-lg  flex flex-col justify-center items-center text-center ">
                <h2 class="font-medium text-3xl lg:text-5xl leading-tight">Features</h2>
                <p class="text-grayishBlue opacity-60 px-5 lg:px-0 py-5">Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
            </div>
            <div>
                {/* <div class="lg:w-5/6 w-5/6 h-3/5 lg:h-3/4 blueBGSection2  absolute -bottom-2 -left-2 lg:-bottom-10 lg:-left-24 bg-softBlue z-0"></div> */}
                <Tab/>
            </div>

        </section>
    )
}

export default section2
