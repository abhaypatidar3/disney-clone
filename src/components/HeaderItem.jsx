import React from 'react'

const HeaderItem = ({name, Icon}) => {
  return (
    <div className='text-white flex items-center gap-2 
    text-[18px] font-stretch-semi-bold cursor-pointer hover:underline underline-offset-7 mb-2'>
        <Icon/>
        <h2 className=''>{name}</h2>
    </div>
  )
}

export default HeaderItem
