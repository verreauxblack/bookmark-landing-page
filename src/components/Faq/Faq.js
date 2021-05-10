import React from 'react'

import Accordion from './Accordion';
import Button from '../reusable/button';
import H2p from '../reusable/H2p';
function Faq() {
    return (
        <section class="relative flex flex-wrap flex-col items-center justify-between px-0  md:px-24 py-10 h-full mb-20">
            <H2p 
                h2=" Frequently Asked Questions"
                p="Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us."
            />
            <Accordion />
            <Button label="More Info" bg="softBlue" />
        </section>
    )
}

export default Faq
