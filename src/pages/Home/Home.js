import React from 'react'
import './Home.css'
import { Hero, Popular, Gaming } from '../../sections/index'
const Home = () => {
    return (
        <>
            <Hero />
            <Popular />
            <Gaming />
        </>
    )
}

export default Home