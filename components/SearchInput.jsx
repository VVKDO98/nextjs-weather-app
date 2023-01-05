import React from 'react'

function SearchInput({ open, setInputValue }) {
    
  return (
    <>
    {open
    ? 
    (
    <div className='fixed top-6 right-50 transition-all duration-300 ease-in-out'>
        <input type="text" name="" onChange={(e) => setInputValue(e.target.value)}/>
    </div>
    )
    :
    <div className='fixed top-6 -right-52 transition-all duration-300 ease-in-out'>
        <input type="text" name=""/>
    </div>
}
    </>
  )
}

export default SearchInput