import React from 'react'
import {TbTruckDelivery} from 'react-icons/tb'
import {MdSecurity} from 'react-icons/md'
import {GiReceiveMoney} from 'react-icons/gi'
import {RiSecurePaymentLine} from 'react-icons/ri'
import './Showcase.scss'

const Showcase = () => {
  return (
    <div className="showcase container">
        <div className="delivery">
            <TbTruckDelivery />
            <p>Super Fast and Free Delivery</p>
        </div>

        <div className="assurance">
            <div className="secure">
                <MdSecurity />
                <p>Non-contact Shipping</p>
            </div>
            <div className="guarantee">
                <GiReceiveMoney />
                <p>Money-back Guaranteed</p>
            </div>
        </div>

        <div className="payment-system">
            <RiSecurePaymentLine />
            <p>Super Secure Payment System</p>
        </div>
    </div>
  )
}

export default Showcase