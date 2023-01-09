import { Switch } from '@headlessui/react'
import React, { useEffect } from 'react'
import { useState } from 'react'
import {IoCloseOutline} from 'react-icons/io5'


function SettingsModal({isOpen, setIsOpen, isMetric, setIsMetric, isDark, setIsDark}) {
  
  useEffect(() => {
    const html = document.querySelector("html")
    isDark ? html.classList.add("dark") : html.classList.remove('dark')
  },[isDark])
    
    

  return (
    <div className={`${isOpen === true ? 'fixed top-0 right-0' : 'fixed top-0 -right-full'}  flex flex-col items-start p-5 w-1/6 h-full bg-slate-50/10 shadow-2xl shadow-zinc-800`}>
        <IoCloseOutline className='text-2xl self-end' onClick={() => setIsOpen(false)}/>
        <div className='flex flex-row items-center gap-3'>
          <Switch checked={isMetric} onChange={setIsMetric}
            className={`${!isMetric ? 'bg-blue-600' : 'bg-gray-200' } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span className={`${!isMetric ? 'translate-x-6' : 'translate-x-1' } inline-block h-4 w-4 transform rounded-full bg-white transition`}/>
          </Switch>
          <p>Imperial unit</p>
        </div>
        <div className='flex flex-row items-center gap-3'>
          <Switch checked={isDark} onChange={setIsDark}
            className={`${isDark ? 'bg-blue-600' : 'bg-gray-200' } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span className={`${isDark ? 'translate-x-6' : 'translate-x-1' } inline-block h-4 w-4 transform rounded-full bg-white transition`}/>
          </Switch>
          <p>Darkmode</p>
        </div>
    </div>
  )
}

export default SettingsModal