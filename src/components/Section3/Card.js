import React from 'react'

import Button from '../reusable/button';

import Chrome from '../../images/logo-chrome.svg';
import Firefox from '../../images/logo-firefox.svg';
import Opera from '../../images/logo-opera.svg';

function Card(props) {
    const browser = [Chrome, Firefox, Opera]
    return (
        <div class="relative flex flex-col justify-center rounded-xl items-center shadow-lg h-80">
            
                <img src={browser[props.browser] } alt={props.logo} />
                <h2 class="font-bold text-base tracking-wide pt-2 px-5">Add to {props.logo}</h2>
                <p class="text-grayishBlue text-xs opacity-60 py-1">Minimum version {props.version}</p>
            <div class=" p-5 relative  -bottom-8 border-t-2  border-dashed border-softBlue border-opacity-60">
                <Button label={"Add & Install Extension"} text="white" bg="softBlue" />
            </div>
        </div>
    )
}



export default Card
