import React from 'react'
import './Popular.css'
import { SectionWrapper, Card, SectionHeader } from '../../components/index'
import MostPopularData from '../../Data/MostPopularData'

const Popular = () => {
    const cards = MostPopularData.map(card => {
        return <Card
            Key={card.id}
            src={card.src}
            title={card.title}
            platform={card.platform}
            rate={card.rate}
            download={card.download}
        />
    })

    return (
        <>
            <SectionWrapper>
                <SectionHeader title="Most Popular" subTitle="Right Now" />
                <div className='most-popular-items'>
                    {cards}
                </div>
            </SectionWrapper>
        </>
    )
}

export default Popular