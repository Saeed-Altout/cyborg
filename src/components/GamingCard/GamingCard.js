import React from 'react'
import './GamingCard.css'
import { ButtonsSecondray } from '../index'
const GamingCard = (props) => {
    return (
        <div className='gaming-library-card'>
            <ul>
                <li><img src={props.src} alt='Gamin Images' /></li>
                <li><h4>{props.title}</h4><span>{props.platform}</span></li>
                <li><h4>Date Added</h4><span>{props.date_added}</span></li>
                <li><h4>Hours Played</h4><span>{props.hours_played}</span></li>
                <li><h4>Currently</h4><span>{props.download}</span></li>
                <ButtonsSecondray title="Download" />
            </ul>
        </div>
    )
}

export default GamingCard