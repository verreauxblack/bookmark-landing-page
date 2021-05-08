import React from 'react'

import Card from './reusable/Card'

function Section3() {
    return (
        <section class="relative flex flex-wrap flex-col items-center justify-between px-0  md:px-24 py-10 h-full">
            <div class=" max-w-lg  flex flex-col justify-center items-center text-center ">
                <h2 class="font-medium text-xl lg:text-3xl leading-tight">Download the extension</h2>
                <p class="text-grayishBlue opacity-60 px-5 lg:px-0 py-5">We’ve got more browsers in the pipeline. Please do let us know if you’ve 
  got a favourite you’d like us to prioritize.</p>
            </div>
            <div class="relative flex flex-wrap flex-row justify-around items-center w-3/4 md:w-3/5 ">
                <Card logo="Chrome" browser={0} version="62"/>
                <div class="relative top-10">
                    <Card logo="Firefox" browser={1} version="55"/>
                </div>
                <div class="relative top-20">
                    <Card logo="Opera" browser={2} version="46"/>
                </div>
            </div>
        </section>
    )
}

export default Section3
