/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
function button(props) {
    return (
        <div>
            <a class={`px-8 flex max-w-max items-center justify-center text-xs leading-snug border border-solid rounded-md text-${(props.text) ? props.text : "white"} py-3   hover:bg-white hover:border-${props.bg} hover:text-black bg-${props.bg}`}
                href= {(props.href ? props.href : "#")} 
                type="button">
                {props.label}
                </a>
        </div>
    )
}
export default button;


