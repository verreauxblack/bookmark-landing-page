/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import Button from './reusable/button';
import Tab1 from '../images/illustration-features-tab-1.svg';
import Tab2 from '../images/illustration-features-tab-2.svg';
import Tab3 from '../images/illustration-features-tab-3.svg';

function AcordionTabs() {
    const [openTab, setOpenTab] = React.useState(1);
    return (
        <>
            <div class=" flex flex-wrap">
                <div class="w-full">
                    <ul
                      class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-col md:flex-row"
                      role="tablist"
                    >
                        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                class={
                                    "text-xs px-5 py-3 block leading-normal " +
                                    (openTab === 1
                                        ? "border-b-4 border-softRed"
                                        : "border-transparent")
                                }
                                onClick={e=>{
                                    e.preventDefault();
                                    setOpenTab(1);
                                }}
                                data-toggle="tab"
                                href="#link1"
                                role="tablist"
                            >
                                 Simple Bookmarking
                            </a>
                            
                        </li>
                        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                class={
                                    "text-xs px-5 py-3 block leading-normal " +
                                    (openTab === 2
                                        ? "border-b-4 border-softRed"
                                        : "border-transparent")
                                }
                                onClick={e=>{
                                    e.preventDefault();
                                    setOpenTab(2);
                                }}
                                data-toggle="tab"
                                href="#link2"
                                role="tablist"
                            >
                                 Speedy Searching
                            </a>
                            
                        </li>
                        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                class={
                                    "text-xs  px-5 py-3 block leading-normal " +
                                    (openTab === 3
                                        ? "border-b-4 border-softRed"
                                        : "border-transparent")
                                }
                                onClick={e=>{
                                    e.preventDefault();
                                    setOpenTab(3);
                                }}
                                data-toggle="tab"
                                href="#link3"
                                role="tablist"
                            >
                                Easy Sharing
                            </a>
                            
                        </li>

                    </ul>

                    <div class="relative flex flex-row md:flex-col min-w-0 break-words bg-white w-full mb-6 ">
                        <div class="px-4 py-5 flex-auto">
                            <div class="tab-content tab-space">
                                <div class={"flex flex-col md:flex-row w-full justify-around " + 
                                    (openTab=== 1 ? "block" : "hidden")} 
                                    id="link1"
                                >
                                    <div class=" w-3/4 md:w-2/5 h-2/5 lg:h-3/4 blueBGSection2  absolute bottom-48 -left-2 lg:-bottom-10 lg:-left-24 bg-softBlue z-0"></div>
                                    <img src={Tab1} class="md:w-1/3 z-10 mr-5 relative" />
                                    <div class="md:w-1/2 md:ml-5 text-center md:text-left mt-10">
                                        <h2 class="font-bold text-xl md:px-5">Bookmark in one click</h2>
                                        <p class="text-grayishBlue opacity-60 md:px-5 py-5">  Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.</p>
                                         <span class="relative hidden md:block md:left-5"><Button label="More Info" bg="softBlue"/></span>
                                    </div>

                                </div>
                                <div class={"flex flex-col md:flex-row w-full justify-around " + 
                                    (openTab=== 2 ? "block" : "hidden")} 
                                    id="link1"
                                >
                                    <div class=" w-3/4 md:w-2/5 h-2/5 lg:h-3/4 blueBGSection2  absolute bottom-48 -left-2 lg:-bottom-10 lg:-left-24 bg-softBlue z-0"></div>
                                    <img src={Tab2} class="md:w-1/3 z-10 mr-5 relative" />
                                    <div class="md:w-1/2 md:ml-5 text-center md:text-left mt-10">
                                        <h2 class="font-bold text-xl md:px-5">Intelligent search</h2>
                                        <p class="text-grayishBlue opacity-60 md:px-5 py-5"> Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.</p>
                                         <span class="relative hidden md:block md:left-5"><Button label="More Info" bg="softBlue"/></span>
                                    </div>

                                </div>
                                <div class={"flex flex-col md:flex-row w-full justify-around " + 
                                    (openTab=== 3 ? "block" : "hidden")} 
                                    id="link1"
                                >
                                    <div class=" w-3/4 md:w-2/5 h-2/5 lg:h-3/4 blueBGSection2  absolute bottom-48 -left-2 lg:-bottom-10 lg:-left-24 bg-softBlue z-0"></div>
                                    <img src={Tab3} class="md:w-1/3 z-10 mr-5 relative" />
                                    <div class="md:w-1/2 md:ml-5 text-center md:text-left mt-10">
                                        <h2 class="font-bold text-xl md:px-5">Share your bookmarks</h2>
                                        <p class="text-grayishBlue opacity-60 md:px-5 py-5"> Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.</p>
                                         <span class="relative hidden md:block md:left-5"><Button label="More Info" bg="softBlue"/></span>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default AcordionTabs
