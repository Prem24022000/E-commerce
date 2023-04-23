import React from 'react'
import Button from './Button'
import {BsFacebook} from 'react-icons/bs'
import {FaInstagramSquare} from 'react-icons/fa'
import {AiFillYoutube} from 'react-icons/ai'
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer container'>
        <div>
            <h6>Prem Technical</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className='flex'>
            <h6>Subscribe to get important updates</h6>
            <input type="email" placeholder='Email' />
            <Button>SUBSCRIBE</Button>
        </div>
        
        <div>
            <h6>Follow Us</h6>

            <div className="footer__social-media">
                <div>
                    <a href=""><BsFacebook /></a>
                </div>

                <div>
                    <a href=""><FaInstagramSquare /></a>
                </div>

                <div>
                    <a href=""><AiFillYoutube /></a>
                </div>
            </div>
        </div>

        <div>
            <h6>Call Us</h6>
            <h6>+91 6261430475</h6>
        </div>
    </div>
  )
}

export default Footer