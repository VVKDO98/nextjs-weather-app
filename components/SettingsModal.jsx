import React from 'react'
import { useState } from 'react'
import {IoCloseOutline} from 'react-icons/io5'

function SettingsModal({isOpen, setIsOpen, isMetric, setIsMetric}) {

  return (
    <div className={`${isOpen === true ? 'fixed top-0 right-0' : 'fixed top-0 -right-full'}  flex flex-col items-center p-5 w-1/6 h-full bg-slate-50/10 shadow-2xl shadow-zinc-800`}>
        <IoCloseOutline className='text-2xl self-end' onClick={() => setIsOpen(false)}/>
        <div className='mt-10 flex flex-rox items-center gap-2'>
          <input type="checkbox" onClick={() => isMetric ? setIsMetric(false) : setIsMetric(true)}/>
          <p>Imperial unit</p>
        </div>
    </div>
  )
}

export default SettingsModal