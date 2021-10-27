import React from 'react'
import './index.scss'
import { FaVk, FaOdnoklassniki, FaInstagram, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa'


export default function Social() {
  return (
    <div className='Social'>
      <ul>
        <li><a href="/"><FaOdnoklassniki /></a></li>
        <li><a href="/"><FaVk /></a></li>
        <li><a href="/"><FaInstagram /></a></li>
        <li><a href="/"><FaTelegramPlane /></a></li>
        <li><a href="/"><FaWhatsapp /></a></li>
      </ul>
    </div>
  )
}
