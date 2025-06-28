import React from 'react'
import "./hero.css"
import Speech from './Speech'

const Hero = () => {
  return (
    <div className='hero'>

      <div className='hSection left'>

        <h1 className='hTitle'>Hi there!<br /><span>I&apos;m Abdullah</span></h1>

        <div className='awards'>
          <h2>Top rated developer</h2>
          <p>Description</p>
          <div className='awardList'>
            <img src="/award1.png" alt="award1" />
            <img src="/award2.png" alt="award2" />
            <img src="/award3.png" alt="award3" />
          </div>
        </div>

        <a href='#services' className='scroll'>
          <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 6V14" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M15 11L12 14L9 11" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </a>

      </div>

      <div className='hSection right'>

        <div className='follow'>
          <a href="/"><img src="/instagram.png" alt="insta" /></a>
          <a href="/"><img src="/youtube.png" alt="yt" /></a>
          <a href="/"><img src="/facebook.png" alt="fb" /></a>
          <div className='followTextContainer'>
            <p>FOLLOW ME</p>
          </div>
        </div>

        <Speech />

        <div className='certificate'>
          <img src="/certificate.png" alt="certificate" />
          CERTIFIED <br /> PROFESSIONAL  <br /> DEVELOPER
        </div>
        <a href="#contact" className='contactLink'>
          <svg width="150" height="150" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="90" fill="pink" />
            <path id="innerCirclePath" fill="none" d="M 100, 100 m -60, 0 a 60, 60 0 1, 1 120, 0 a 60, 60 0 1, 1 -120, 0" />
            <text className='circleText'>
              <textPath href='#innerCirclePath'>Hire now</textPath>
              <textPath href='#innerCirclePath' startOffset="50%">Contact me</textPath>
            </text>
          </svg>
          <div className='arrow'>
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3545 22.2323C15.3344 21.7262 11.1989 20.2993 7.44976 16.5502C3.70065 12.8011 2.2738 8.66559 1.76767 6.6455C1.47681 5.48459 2.00058 4.36434 2.88869 3.72997L5.21694 2.06693C6.57922 1.09388 8.47432 1.42407 9.42724 2.80051L10.893 4.91776C11.5152 5.8165 11.3006 7.0483 10.4111 7.68365L9.24234 8.51849C9.41923 9.1951 9.96939 10.5846 11.6924 12.3076C13.4154 14.0306 14.8049 14.5807 15.4815 14.7576L16.3163 13.5888C16.9517 12.6994 18.1835 12.4847 19.0822 13.1069L21.1995 14.5727C22.5759 15.5257 22.9061 17.4207 21.933 18.783L20.27 21.1113C19.6356 21.9994 18.5154 22.5232 17.3545 22.2323ZM8.86397 15.136C12.2734 18.5454 16.0358 19.8401 17.8405 20.2923C18.1043 20.3583 18.4232 20.2558 18.6425 19.9488L20.3056 17.6205C20.6299 17.1665 20.5199 16.5348 20.061 16.2171L17.9438 14.7513L17.0479 16.0056C16.6818 16.5182 16.0047 16.9202 15.2163 16.7501C14.2323 16.5378 12.4133 15.8569 10.2782 13.7218C8.1431 11.5867 7.46219 9.7677 7.24987 8.7837C7.07977 7.9953 7.48181 7.31821 7.99439 6.95208L9.24864 6.05618L7.78285 3.93893C7.46521 3.48011 6.83351 3.37005 6.37942 3.6944L4.05117 5.35744C3.74413 5.57675 3.64162 5.89565 3.70771 6.15943C4.15989 7.96418 5.45459 11.7266 8.86397 15.136Z" fill="#0F0F0F"></path> </g></svg>
          </div>
        </a>

      </div>

    </div>
  )
}

export default Hero