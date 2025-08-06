import React, { useState } from 'react'

import logo from './../assets/Images/logo.png'
import {
    HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
    HiTv
} from "react-icons/hi2";

import { HiPlus, HiMiniEllipsisVertical } from 'react-icons/hi2';
import HeaderItem from './HeaderItem';




const Header = () => {

    const[toggle,setToggle] = useState(false);

    const menu = [
        {
            name:'HOME',
            icon: HiHome
        },
        {
            name:'SEARCH',
            icon: HiMagnifyingGlass
        },
        {
            name:'WATCH LIST',
            icon: HiPlus
        },
        {
            name:'ORIGINALS',
            icon: HiStar
        },
        {
            name:'Movies',
            icon: HiPlayCircle
        },
        {
            name:'SERIES',
            icon: HiTv
        }
    ]
  return (
    <div className='flex item-center justify-between p-5' >
        <div className='flex gap-10 item-center'>
            <img src={logo} alt="" className='w-[80px] md:w-[115px] object-cover' />
            <div className='hidden md:flex gap-8' >
                {menu.map((item)=>(
                <HeaderItem name={item.name} Icon={item.icon} />
                 ))}
            </div>
            <div className='gap-5 md:hidden flex'>
                {menu.map((item,index)=> index<3&&(
                <HeaderItem name={''} Icon={item.icon} />
                 ))}

                <div className='md:hidden flex' onClick={()=>setToggle(!toggle)}>
                    <HeaderItem name={''} Icon={HiMiniEllipsisVertical}/>
                    {toggle?<div className='absolute mt-10 bg-gray-900 pb-3 p-3 border-[1px] border-gray-600 px-5 py-4 rounded-2xl' >
                        {menu.map((item,index)=> index>2&&(
                        <HeaderItem name={item.name} Icon={item.icon} />
                        ))}
                    </div>:null}
                </div>
            </div>
        </div>
        <img className='size-[50px] rounded-full'
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQN6r35hHOnaPSm4iZesPIzmwX1_kCPswjpg&s" alt="AB" />
    </div>
  )
}

export default Header
