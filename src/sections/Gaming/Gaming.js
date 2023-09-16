import React from 'react'
import './Gaming.css'
import { SectionWrapper, SectionHeader, GamingCard } from '../../components/index'
import GamingData from '../../Data/GamingData'
const Gaming = () => {
    const cards = GamingData.map(card => {
        return <GamingCard
            Key={card.id}
            src={card.src}
            title={card.title}
            platform={card.platform}
            date_added={card.date_added}
            hours_played={card.hours_played}
            download={card.download}
        />
    })
    return (
        <>
            <SectionWrapper>
                <SectionHeader title="Your Gaming " subTitle="Library" />
                <div className='gaming-library-cards'>
                    {cards}
                </div>
            </SectionWrapper>
        </>
    )
}

export default Gaming