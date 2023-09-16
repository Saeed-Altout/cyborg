import React from 'react'
import './Buttons.css'
const ButtonsPrimary = (props) => {
    return (
        <div className='button primary-button'>
            <a href='/#'>{props.title}</a>
        </div>
    )
}
const ButtonsSecondray = (props) => {
    return (
        <div className='button secondray-button'>
            <a href='/#' >{props.title}</a>
        </div>
    )
}

export default ButtonsPrimary
export { ButtonsSecondray }
