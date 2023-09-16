import React from 'react'
import './Card.css'
import '../../assets/css/all.min.css'
import { } from "react-icons/fa";
const Card = (props) => {
    return (
        <div className='most-popular-item'>
            <div className='card-wrapper'>
                <img className='most-popular-item-image' src={props.src} alt='Image Poplar' />
                <div className='most-popualr-item-content'>
                    <h4 className='most-popualr-item-title'>
                        {props.title}<br />
                        <span>{props.platform}</span>
                    </h4>
                    <ul>
                        <li><i className="fa-solid fa-star" style={{ color: "yellow" }}></i> <span>{props.rate}</span></li>
                        <li><i className="fa-solid fa-download" style={{ color: "var(--color-primary)" }}></i> <span>{props.download}</span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Card