import React from 'react'
import './index.scss'
import { FaVk, FaOdnoklassniki, FaInstagram, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa'


export default function Social({position}) {
  if (position === 'header') {
    return (
      <div className='Social Social__header'>
        <ul>
          <li><a href="/"><FaOdnoklassniki /></a></li>
          <li><a href="/"><FaVk /></a></li>
          <li><a href="/"><FaInstagram /></a></li>
          <li><a href="/"><FaTelegramPlane /></a></li>
          <li><a href="/"><FaWhatsapp /></a></li>
        </ul>
      </div>
    )
  } else if (position === 'footer') {
    return (
      <div className='Social Social__footer'>
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
}
