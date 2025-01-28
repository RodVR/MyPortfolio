import React from 'react'
import './intro.css'
import bg from '../../assets/image.png'
import btnImg from '../../assets/btnImg.png'
import {Link} from 'react-scroll'

//USE <BR> TO BREAK LINE IF INTROPARA IS TOO LONG TO FIT OK?
const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Rodolfo</span><br />Junior Software Engineer</span>
            <p className="introPara">I'm a Junior Software Engineer looking for my first professional experience!</p> 
            <Link><button className="btn"><img src={btnImg} alt="Hire me" className="btnImg"/>Hire me</button></Link>
        </div>
        <img src={bg} alt="Profile" className='bg'/>
    </section>
  )
}

export default Intro
