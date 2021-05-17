import React , { useState } from 'react'

import EachTab from './EachTab';

function Accordion() {
    const [openTab, setOpenTab] = useState(0);
    const onclick = (tab) => (e) =>{
        e.preventDefault();
        setOpenTab(tab);
    }
    return (
        <ul class=" lg:w-3/6 list-none md:w-9/12 py-10 px-5" role="tablist">
            <EachTab 
                id="1"
                openTab={openTab} 
                tab={1}
                onclick={onclick(1)}
                question="What is Bookmark?"
                answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis."
            />
            <EachTab 
                id="2"
                openTab={openTab} 
                tab={2}
                onclick={onclick(2)}
                question=" How can I request a new browser?"
                answer=" Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. 
                Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, 
                ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. 
                Mauris augue massa, ultricies non ligula. Suspendisse imperdiet."
            />
            <EachTab 
                id="3"
                openTab={openTab} 
                tab={3}
                onclick={onclick(3)}
                question="Is there a mobile app?"
                answer="Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum 
                urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed 
                sollicitudin ex et ultricies bibendum."
            />
            <EachTab 
                id="4"
                openTab={openTab} 
                tab={4}
                onclick={onclick(4)}
                question="  What about other Chromium browsers?"
                answer="  Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam 
                vitae neque eget nisl gravida pellentesque non ut velit."
            />
        </ul>
    )
}

export default Accordion
