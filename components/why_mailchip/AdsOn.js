import React from 'react'
import styles from './adsOn.module.css'
import AdsOnCards from './AdsOnCards'
const AdsOn = () => {
    const cards = [
        {
            imgUrl:"/images/support1_b_w.webp",
            heading:"Award-winning support",
            content:"Get answers when you need them from our team and marketing resources.",
            link:"/",
            linkContent:"learn more"
        },
        {
            imgUrl:"/images/thumbsup_b_w.webp",
            heading:"300+ app integrations",
            content:"Connect your favorite apps to send more targeted campaigns.",
            link:"/",
            linkContent:"Explore apps"
        },
        {
            imgUrl:"/images/trustedpros_b_w.webp",
            heading:"Expert guidance",
            content:"Work with a Mailchimp partner to take your marketing to the next level.",
            link:"/",
            linkContent:"Browse partners"
        },
    ]
  return (
    <div className={styles.container}>
     {
        cards.map((content , index)=>{
          return(<AdsOnCards imgUrl={content.imgUrl}  heading={content.heading} content={content.content} link={content.link} linkContent={content.linkContent} key={index}/>)
        })
    } 
    </div>
  )
}

export default AdsOn
