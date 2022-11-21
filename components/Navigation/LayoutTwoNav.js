/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { VscChevronDown, VscChevronRight } from 'react-icons/vsc'

const LayoutTwoNav = () => {
  return (
    <>
        <div className='flex justify-between py-2 pl-5 pr-5 text-[12.5px]'>
            EXPLORER
            <VscChevronDown strokeWidth={0.7} size={16} />
        </div>
        <div>
            <div className='flex gap-1 py-2 text-[12.7px] text-white/90 bg-[rgb(45,45,46)] font-bold'>
                <VscChevronDown strokeWidth={0.7} size={16} />
                OBINNA'S-PORTFOLIO
            </div>
            <div>
                book
            </div>
        </div>

        <div className='font-bold'>
            <div className='flex gap-1'>
                <VscChevronRight strokeWidth={0.7} size={16} />
                OUTLINE
            </div>
            <div className='flex gap-1'>
                <VscChevronRight strokeWidth={0.7} size={16} />
                TIMELINE
            </div>
        </div>
    </>
  )
}

export default LayoutTwoNav