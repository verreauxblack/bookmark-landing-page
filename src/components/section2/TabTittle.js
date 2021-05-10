import React from 'react'

function TabTittle(props) {
    
    return (
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <a
                class={
                    "text-xs px-5 py-3 block leading-normal " +
                    (props.openTab === props.tab
                        ? "border-b-4 border-softRed"
                        : "border-transparent")
                }
                onClick={props.onclick}
                data-toggle="tab"
                href={props.href}
                role="tablist"
            >
                {props.content}
            </a>
            
        </li>
    )
}

export default TabTittle
