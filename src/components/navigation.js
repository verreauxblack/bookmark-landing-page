/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import logo from '../images/logo-bookmark.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
// import {faBookmark} from '@fortawesome/free-regular-svg-icons'

import { faFacebookSquare, faTwitter } from '@fortawesome/free-brands-svg-icons'

function Navbar({ fixed }) {

    const [navbarOpen, setNavbarOpen] = React.useState(false);

    return (
        <nav class={" relative flex flex-wrap items-center justify-between px-2 md:px-36 py-3  mb-3 "+ 
                        (navbarOpen? "bg-veryDarkBlue" : "white")}>
            <div class={"container px-4 mx-auto flex flex-wrap items-center justify-between " + 
                        (navbarOpen ? "bg-veryDarkBlue text-white" : "white")}>
                <div class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <a  class="text-l font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase" href= "#">
                        <img src={logo}/>
                    </a>
                    <button
                        class={"text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none " +
                                (navbarOpen? "text-white" : "")}
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <FontAwesomeIcon icon={(navbarOpen ? faTimes : faBars)} />
                    </button>
                </div>
                <div
                    class={
                        "lg:flex flex-grow items-center " +
                        (navbarOpen ? "flex bg-veryDarkBlue bg-opacity-80 justify-between flex-col text-white w-80 h-full"  : "hidden")
                    }
                    id="example-navbar-danger"
                >
                    <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
                        <li class="nav-item">
                            <a class={"px-8 py-3 flex items-center justify-center font-normal text-xs uppercase  leading-snug hover:text-softRed " +
                                        (navbarOpen ? "border-b border-t border-solid border-white w-40 border-opacity-70" : "")}
                                href= "#" >
                                Features
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class={"px-8 py-3 flex items-center justify-center font-normal text-xs uppercase  leading-snug hover:text-softRed " +
                                        (navbarOpen ? "border-b border-solid border-white w-40 border-opacity-60" : "")}
                                href= "#" >
                                Pricing
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class={"px-8 py-3 flex items-center justify-center font-normal text-xs uppercase  leading-snug hover:text-softRed " +
                                        (navbarOpen ? "border-b border-solid border-white w-40 border-opacity-60" : "")}
                                href= "#" >
                                Contact
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class={"px-8 flex items-center justify-center text-xs uppercase leading-snug border border-solid rounded-md " +
                                        (!navbarOpen ? "text-white py-3  bg-softRed hover:bg-white hover:border-softRed hover:text-black" : "mt-3 py-2")}
                                href= "#" 
                                type="button">
                                Login
                            </a>
                        </li>

                    </ul>

                    <div class={" flex items-center justify-between w-12 pt-10 h-20" + 
                            (!navbarOpen ? " hidden" : " ")}>
                            <FontAwesomeIcon icon={( faFacebookSquare)} />
                            <FontAwesomeIcon icon={( faTwitter)} />
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default Navbar;