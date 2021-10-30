import React from 'react'
import Phone from '../Phone'
import Social from '../Social'
import './index.scss'

export default function Footer() {
  return (
    <div className='Footer'>
      <Phone position={'footer'} />
      <Social position={'footer'} />
    </div>
  )
}
