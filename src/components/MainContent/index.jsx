import React from 'react'
import './index.scss'
import Img1 from './../../img/i.jpg'
import Img2 from './../../img/850c7b8f0a3746788ed3f79b540af395.jpg'
import Phone from '../Phone'

export default function MainContent() {
  return (
    <div className='MainContent'>
      <h1>Доставка любых напитков в Астрахани</h1>
      <h2>Доставляем любые напитки в любое время суток!</h2>
      <div className="MainContent__content">
        <div>
          <p><strong>Доставка любых напитков ночью</strong> - это во всех отношениях выгодная услуга, позволяющая продлить комфортное времяприпровождения в обществе друзей и единомышленников. Именно поэтому многие страханцы обращаются ко мне на постоянной основе. Предлагаемая услуга оставляет только положительные впечатления и жители Астрахани уже не раз в этом убедились.</p>
          <Phone position={'text'} />
        </div>
        <img src={Img2} alt="." />
      </div>
      <h2>Скорость доставки и цены тебя приятно удивят.</h2>
      <div className="MainContent__content MainContent__content-left">
        <img src={Img1} alt="." />
        <div>
          <p>Упомянутое обслуживание характеризуется наличием ряда приятных особенностей. </p>
            <ul>
              <li>Во-первых, доставка напитков возможна в любую точку Астрахани, а итоговая продолжительность транспортировки не превышает 30 минут.</li>
              <li>Во-вторых, в актуальном ассортименте присутствует только оригинальные напитки.</li>
              <li>В-третьих, обходительность и расторопность курьеров находится на высшем уровне, а потому доставка любых напитков ночью проходит гладко и дарит заказчикам лишь положительные впечатления.</li>
            </ul>
          <Phone position={'text'} />
        </div>
        {/* <p>v7698296@yandex.ru</p> */}
        {/* <p>Оперативность доставки мой конек, я мигом привезу добавки. </p>
        <p>Мы все прекрасно поинмаем, когда ты с друзьями отлично проводишь время и не хочится прерывать торжество.</p> */}
      </div>
    </div>
  )
}
