import React from 'react'
import { useState } from 'react'
import {IoCloseOutline} from 'react-icons/io5'

function SettingsModal({isOpen, setIsOpen, isCelsius, setIsCelcius}) {

  return (
    <div className={`${isOpen === true ? 'fixed top-0 right-0' : 'fixed top-0 -right-full'}  flex flex-col items-center p-5 w-1/6 h-full bg-slate-50/10 shadow-2xl shadow-zinc-800`}>
        <IoCloseOutline className='text-2xl self-end' onClick={() => setIsOpen(false)}/>
        <input type="checkbox" onClick={() => isCelsius ? setIsCelcius(false) : setIsCelcius(true)}/>
        <h1>aaaa</h1>
    </div>
  )
}

export default SettingsModal