import React from 'react'

function H2p(props) {
    return (
        <div  class=" max-w-lg  flex flex-col justify-center items-center text-center ">
                <h2 class="font-medium text-xl lg:text-3xl leading-tight">{props.h2}</h2>
                <p class="text-grayishBlue opacity-60 px-5 lg:px-0 py-5"> {props.p}</p>
        </div>
    )
}

export default H2p
