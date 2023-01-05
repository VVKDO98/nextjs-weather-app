import React from 'react'
import {BsSearch} from 'react-icons/bs'

function SearchButton({onClick}) {
  return (
    <>
        <button onClick={onClick}
          className='h-10 w-10 
                    fixed top-5 right-5
                    flex items-center justify-center
                    text-zinc-50 text-xl
                    bg-zinc-900/75 hover:bg-zinc-700
                    rounded-full
                    transition duration-200 ease-in-out'
        >
            <BsSearch/>
        </button>
    </>
  )
}

export default SearchButton