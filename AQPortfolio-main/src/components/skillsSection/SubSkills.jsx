import React from 'react'
import subskills from '../../assets/subSkills.jpg'

export default function SubSkills() {
  return (
    <div className="border-y-2 border-lightGrey relative ">
      <div className="absolute bg-gradient-to-r from-orange to-cyan opacity-50 w-full h-full"></div>
      <img
        src={subskills}
        alt="subSkills image"
        className=""
      />
    </div>
  )
}
