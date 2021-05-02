/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

import Button from './reusable/button';

import Hero from '../images/illustration-hero.svg'

function section1() {
    return (
        <section class="relative flex flex-wrap flex-col-reverse lg:flex-row justify-between px-2  md:px-24 py-10 h-full">
            <div class=" max-w-lg  flex flex-col justify-center items-center text-center lg:text-left lg:items-start">
                <h1 class="font-medium text-3xl lg:text-5xl leading-tight">A Simple Bookmark Manager</h1>
                <p class="text-grayishBlue opacity-60 px-5 lg:px-0 py-5">A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
                <div class="flex justify-between w-80">
                    <Button label="Get it on Chrome" bg="softBlue" />
                    <Button label="Get it on Firefox" bg="gray-100"  text="black"/>
                </div>
            </div>
            <div class="relative top-5 h-3/5 lg:h-1/2 mb-20">
                <div class="lg:w-5/6 w-5/6 h-3/5 lg:h-3/4 blueBG absolute -bottom-2 -right-2 lg:-bottom-10 lg:-right-24 bg-softBlue z-0"></div>
                <img src={Hero} class="z-10 relative"/>
            </div>

        </section>
    )
}

export default section1
