import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
 
function EachTab(props) {
    return (
        <li class="w-full last:border-b faq">
          <label class={"font-normal pointer border-t border-solid block border-grayishBlue border-opacity-60 hover:text-softRed bg-white py-5 w-full z-10 flex justify-between items-center " +
            (props.id === "4" ? props.openTab === props.tab  ? "border-b-transparent" : "border-b" : "" )  
        }
                 onClick={props.onclick}
            >
                {props.question} <span class={"span  " + 
                (props.openTab === props.tab ? "transform rotate-180 text-softRed" : "text-softBlue")
            }><FontAwesomeIcon size="xs" icon={faChevronDown}/></span>
            </label>
          <div class={"font-thin opacity-70 my-0 mx-auto transition-all leading-7 text-sm border- border-solid border-grayishBlue  h-0 " +
          (props.openTab === props.tab  ? props.openTab === 4 ? "block h-auto border-b mt-3 pb-3" : "block h-auto mt-3 mb-2" : " hidden" )
            
        }>{props.answer}</div>
        </li>
    )
}

export default EachTab
