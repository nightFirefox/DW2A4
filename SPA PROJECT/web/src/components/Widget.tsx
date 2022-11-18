import {ChatTeardropDots} from 'phosphor-react';
{/*import { useState } from 'react';*/}
import { Popover } from '@headlessui/react';
import { WidgetForm } from './WidgetForm';


export function Widget(){

    
    {/* ALTERAÇÃO DO ESTADO MANUAL (SEM POPOVER)
        const [isWidgetOpen, setIsWidgetOpen] = useState(false)

        function toggleWidgetVisibility() {
            setIsWidgetOpen(!isWidgetOpen)
        }
    */}

    return (
        <Popover className='absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end'>

            {/* {isWidgetOpen ? <p>Hello World</p> : null} -> usado quando se tem "else" */}
            {/* {isWidgetOpen && <p>Hello World</p>} usado quando não tem "else" */}
            
            <Popover.Panel>
                <WidgetForm />
            </Popover.Panel>

            <Popover.Button className='bg-brand-500 rounded-full px-3 h-12 flex items-center group'>
                <ChatTeardropDots className='w-6 h-6 text-white'/>

                <span className='text-white max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'> 
                    <span className='pl-2'></span>
                    Feedback
                </span>
            </Popover.Button>

            
        </Popover>     
    )
}