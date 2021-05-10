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
            <form class=" flex justify-around items-center flex-col md:flex-row h-32 w-full md:w-1/4" onSubmit={handleSubmit}>
                <input 
                class="text-xs p-3 w-80 md:w-56 rounded-md text-black focus:outline-none" 
                type="email" 
                placeholder="Enter your email address"
                onInvalid={(e)=>typeValid(e.target)} 
                onChange={handleChange}/>
                <input class="px-8 flex w-80 h-10 md:max-w-max items-center justify-center text-sm md:text-xs leading-snug  border border-solid  bg-softRed border-softRed rounded-md hover:bg-white hover:text-black" type="submit" value="Contact Us" />
            </form>
        </div>
    )
}

export default Subscribe
