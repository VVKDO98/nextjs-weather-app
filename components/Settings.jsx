import React, { useState } from 'react'
import {BsGearFill} from 'react-icons/bs'
import SettingsModal from './SettingsModal'

function Settings({isCelsius, setIsCelcius}) {
    const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='fixed bottom-5 right-5'>
        {!isOpen ? <BsGearFill className='text-2xl' onClick={() => setIsOpen(true)}/> : <BsGearFill className='text-2xl hidden' onClick={() => setIsOpen(true)}/>}
        <SettingsModal isOpen={isOpen} setIsOpen={setIsOpen} isCelsius={isCelsius} setIsCelcius={setIsCelcius} />
    </div>
  )
}

export default Settings