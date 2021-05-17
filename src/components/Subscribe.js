import React, { useState } from 'react'


function Subscribe() {

    const [email, setEmail] = useState("");


    const handleChange = (e)=>{
        // e.preventDefault();
        setEmail(e.target.value);
    }

    const handleSubmit = () => {
        console.log(email);
    }

    const typeValid = (value) => {
        (value.validity.typeMismatch) ? value.setCustomValidity('Whoops, make sure it\'s an email') : value.setCustomValidity("") ;
        return true;
    }
    return (
        <div class="flex justify-center items-center text-white flex-col bg-softBlue w-full h-80 ">
            <p class=" text-sm uppercase leading-loose opacity-80 already">35,000+ already joined</p>
            <h2 class="text-2xl md:text-3xl w-80 md:w-96 text-center font-medium py-3 md:pt-6 md:pb-0">
            Stay up-to-date with what we’re doing
            </h2>
            <form id="subscribe" class=" flex items-center flex-col md:flex-row h-32 w-full md:w-2/6 space-y-9 md:space-y-0 md:space-x-5" onSubmit={handleSubmit}>
                <div class="relative">
                    <input 
                    class=" relative ivisible text-xs p-3 w-80 md:w-60 rounded-md text-black focus:outline-none z-10" 
                    type="email" 
                    placeholder="Enter your email address "
                    onInvalid={(e)=>typeValid(e.target)} 
                    onChange={handleChange}/>
                    {/* <label class="opacity-50 absolute top-2 left-2 text-gray-500">Enter your email address</label> */}
                    <div class="requirements bg-softRed text-white flex items-end h-0 overflow-hidden rounded-md delay-75 md:w-60  w-80 pr-7 md:pr-2 pl-12 md:pl-2 z-0 top-0 italic text-sm md:text-xs">Whoops, make sure it's an email</div>
                </div>
                <input class="px-8 flex w-80 h-10 md:max-w-max items-center justify-center text-sm md:text-xs leading-snug  border border-solid  bg-softRed border-softRed rounded-md hover:bg-white hover:text-black" type="submit" value="Contact Us" />
            </form>
        </div>
    )
}

export default Subscribe
