/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Button from '../reusable/button';
function Tab(props) {
    return (
        <div class={"flex flex-col md:flex-row w-full justify-around " + 
        (props.openTab=== props.tab ? "block" : "hidden")} 
        id="link1"
    >
        <div class=" w-3/4 md:w-2/5 h-2/5 lg:h-3/4 blueBGSection2  absolute bottom-48 -left-2 lg:-bottom-10 lg:-left-24 bg-softBlue z-0"></div>
        <img src={props.src} class="md:w-1/3 z-10 mr-5 relative" />
        <div class="md:w-1/2 md:ml-5 text-center md:text-left mt-10">
            <h2 class="font-bold text-xl md:px-5">{props.h2}</h2>
            <p class="text-grayishBlue opacity-60 md:px-5 py-5"> {props.p} </p>
             <span class="relative hidden md:block md:left-5"><Button label="More Info" bg="softBlue"/></span>
        </div>

    </div>
    )
}

export default Tab
