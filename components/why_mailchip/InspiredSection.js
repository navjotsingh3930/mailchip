import React from 'react'
import styles from './inspired.module.css'
import Link from 'next/link'

const card = (imgUrl , heading , content , link="/", index="") => {
    return (
                <div className={styles.card} key={index}>
                    <img src={imgUrl} alt='navjot is hero' />
                    <h4>{heading}</h4>
                    <p>{content}</p>
                    <Link href={link}>learn more</Link>
                </div>
    )
}
const cards = [
    {
        imgUrl:"https://eep.io/images/yzco4xsimv0y/3Pix1lPASAb6ljTQ5ykjS4/c7909ae63bb71157eaf4b33e1b525af4/courier-logo.png?w=820&fm=avif&q=60",
        heading:"Courier",
        content:"Stay inspired from fellow entrepreneurs on how to work better and live smarter.",
        link:"/"
    },
    {
        imgUrl:"https://eep.io/images/yzco4xsimv0y/2BlDdTKmfJoLrk2kEJQINI/00efc392417ca7a972bf12f941938231/mailchimp-presents-logo.png?w=820&fm=avif&q=60",
        heading:"Mailchimp Presents",
        content:"Explore our collection of original content that celebrates the entrepreneurial spirit.",
        link:"/"
    },
]
const InspiredSection = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.OverFlowImg}>
                <img src='/images/why-mailchimp_ovelflowImg.png' alt='' />
            </div>
            <div className={styles.contentContainer}>
                <h2>Here to keep you inspired</h2>
                <p>We understand the wide spectrum of challenges that small business operators face. So we’ve drawn on the guidance you need to stay informed, motivated, and ahead of the competition.</p>
            </div>
            <div className={styles.cardContainer}>
            {
                cards.map((content, index)=>{
                    return (
                        card(content.imgUrl,content.heading,content.content,content.link , index)
                    )
                })
            }
            </div>
        </div>
    )
}

export default InspiredSection
