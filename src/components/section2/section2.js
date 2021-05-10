import React from 'react'

import Tab from './acordionTabs';
import H2p from '../reusable/H2p';

function section2() {
    return (
        <section  class="relative flex flex-wrap flex-col items-center justify-between px-2  md:px-24 py-10 h-full">
            <H2p h2="Features" p=" Our aim is to make it quick and easy for you to access your favourite websites. 
  Your bookmarks sync between your devices so you can access them on the go."/>
            <div>
                <Tab/>
            </div>

        </section>
    )
}

export default section2
