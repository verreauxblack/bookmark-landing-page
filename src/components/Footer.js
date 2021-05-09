/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitter } from '@fortawesome/free-brands-svg-icons'
// import {faBookmark} from '@fortawesome/free-regular-svg-icons'

function Footer() {
    return (
        <footer class="w-full md:h-16 bg-veryDarkBlue text-white flex flex-col md:flex-row flex-wrap justify-center relative md:justify-between  items-center px-2  md:px-32 md:py-5 py-8 text-center bottom-0">
            <div class="flex flex-col md:flex-row flex-wrap md:justify-between itmes-center h-full w-full md:w-1/3 mb-10">
            <a  class="text-l font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase w-full md:w-max flex items-center justify-center " href= "#">
                        {/* <i class="bg-blue w-2 h-2 py-4"><FontAwesomeIcon icon={faBookmark} mask={['far', 'circle']} /></i>  */}
                        bookmark
                    </a>
                <div class="flex flex-col md:flex-row flex-wrap w-70 justify-between h-full">
                    <a class=" py-3 flex items-center justify-center font-normal text-xs uppercase  leading-snug w-full md:w-20  opacity-60 hover:text-softRed hover:opacity-100">
                    Features
                    </a>
                    <a class=" py-3 flex items-center justify-center font-normal text-xs uppercase  leading-snug w-full  md:w-20 opacity-60 hover:text-softRed hover:opacity-100">
                        Pricing
                    </a>
                    <a class=" py-3 flex items-center justify-center font-normal text-xs uppercase  leading-snug w-full md:w-20 opacity-60 hover:text-softRed hover:opacity-100">
                    Contact
                    </a>
                </div>
            </div>
            <div class="w-16 text-xl flex justify-between items-center md:pb-8">
                <span class="hover:text-softRed"><FontAwesomeIcon icon={( faFacebookSquare)} /></span>
                <span class="hover:text-softRed"><FontAwesomeIcon icon={( faTwitter)} /></span>
            </div>
            
        </footer>
    )
}

export default Footer
