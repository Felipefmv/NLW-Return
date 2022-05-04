import { ChatTeardropDots } from 'phosphor-react'
import { useState } from 'react'
import { Popover } from '@headlessui/react'

export function Widget(){
 
  
  return (
    <Popover  className="absolute bottom-4 right-4">
      <Popover.Panel>Hello</Popover.Panel> 
      <Popover.Button  className="flex items-center rounded-full bg-brand-500 px-3 h-12 text-white group">
        <ChatTeardropDots className="w-6 h-6"/>
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500">
          <span className="pl-2"></span>
          Feedback
        </span>
      </Popover.Button>
    </Popover>  
  )
}