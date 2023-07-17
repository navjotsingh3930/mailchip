import React from 'react'
import styles from './adsOn.module.css'
import AdsOnCards from './AdsOnCards'
const AdsOn = () => {
    const cards = [
        {
            imgUrl:"https://eep.io/images/yzco4xsimv0y/1zWDKFXdQBZGeColFCtHgf/aa379dc2696f582b48f0e399c8a5f871/support1_b_w.png?w=820&fm=avif&q=60",
            heading:"Award-winning support",
            content:"Get answers when you need them from our team and marketing resources.",
            link:"/",
            linkContent:"learn more"
        },
        {
            imgUrl:"https://eep.io/images/yzco4xsimv0y/2OBlZ0Aun44giirtdr6Fx4/e592f63930574780f28fb792318c5899/thumbsup_b_w.png?w=820&fm=avif&q=60",
            heading:"300+ app integrations",
            content:"Connect your favorite apps to send more targeted campaigns.",
            link:"/",
            linkContent:"Explore apps"
        },
        {
            imgUrl:"https://eep.io/images/yzco4xsimv0y/5ZD6ImzMGdQbhR59NIQB7a/b1dbe083df8adfceab2c75a1d66066e4/trustedpros_b_w.png?w=820&fm=avif&q=60",
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
