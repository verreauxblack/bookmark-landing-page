/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import Tab1 from '../../images/illustration-features-tab-1.svg';
import Tab2 from '../../images/illustration-features-tab-2.svg';
import Tab3 from '../../images/illustration-features-tab-3.svg';

import Tabtittle from './TabTittle';
import Tab from './Tab';


function AcordionTabs() {
    const [openTab, setOpenTab] = React.useState(1);
    const onclick = (tab) => (e) =>{
        e.preventDefault();
        setOpenTab(tab);
    }
    return (
        <>
            <div class=" flex flex-wrap">
                <div class="w-full">
                    <ul
                      class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-col md:flex-row"
                      role="tablist"
                    >   
                        <Tabtittle 
                            openTab={openTab} 
                            tab={1}
                            onclick={onclick(1)}
                            href="#link1"
                            content="Simple Bookmarking"
                        />
                        <Tabtittle 
                            openTab={openTab} 
                            tab={2}
                            onclick={onclick(2)}
                            href="#link2"
                            content="Speedy Searching"
                        />
                        <Tabtittle 
                            openTab={openTab} 
                            tab={3}
                            onclick={onclick(3)}
                            href="#link3"
                            content="Easy Sharing"
                        />

                    </ul>

                    <div class="relative flex flex-row md:flex-col min-w-0 break-words bg-white w-full mb-6 ">
                        <div class="px-4 py-5 flex-auto">
                            <div class="tab-content tab-space">
                                <Tab 
                                    openTab={openTab} 
                                    tab={1} 
                                    src={Tab1} 
                                    h2="Bookmark in one click"
                                    p="Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites." 
                                />
                                <Tab 
                                    openTab={openTab} 
                                    tab={2} 
                                    src={Tab2} 
                                    h2="Intelligent search"
                                    p="Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites." 
                                />
                                <Tab 
                                    openTab={openTab} 
                                    tab={3} 
                                    src={Tab3} 
                                    h2="Share your bookmarks"
                                    p="Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button." 
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default AcordionTabs
