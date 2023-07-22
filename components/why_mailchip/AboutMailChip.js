import React from 'react'
import styles from './aboutMailChip.module.css'
import AboutCard from './AboutCard'
const AboutMailChip = () => {
    const Arr_obj = [
        {
            imgUrl:"https://eep.io/images/yzco4xsimv0y/3eP8OgM8vC8uqQEgQeAi6A/f3733910413eb83a1b7a30c6da5d023b/thumbnails_mc-101_1520x855.jpg?w=540&fm=avif&q=60",
            heading:"Mailchimp 101",
            subHeading:"",
            content:"Get an intro to the basics so you know what to expect along the way.",
        },
        {
            imgUrl:"https://eep.io/images/yzco4xsimv0y/1SB1jCYU95Dh5YDdrucTh0/add18363e44ff00d54254592c7c0860c/Intuit_Mailchimp_-_Wordmark_2023_-_Recirculation_.png?w=540&fm=avif&q=60",
            heading:"Mailchimp, Klaviyo and Hubspot: See how we compare",
            subHeading:"Resources",
            content:"More than 12 million users trust Mailchimp’s data-driven tools to help them learn what works, improve future campaigns, and turn insights into action. See how we compare so you can confidently make the switch to Mailchimp.",
        },
        {
            imgUrl:"https://eep.io/images/yzco4xsimv0y/2DPB6iRIAhMAhexACQowFx/ab87f109958a8cffb5006341aa1b4230/marketing-library-recirculation.jpeg?w=540&fm=avif&q=60",
            heading:"Marketing Resources",
            subHeading:"",
            content:"Find detailed advice on how to start, grow, and market your business, along with inspiring stories from real entrepreneurs.",
        },
    ]
  return (
    <div className={styles.container}>
        <h2>Continue reading about Mailchimp</h2>
        <div className={styles.AboutCards}>
        {
            Arr_obj.map((content, index)=>{
                return (
                    <AboutCard imgUrl={content.imgUrl}  heading={content.heading} subHeading={content.subHeading} content={content.content} key={index}/>
                    )
                })
            }
            </div>
    </div>
  )
}

export default AboutMailChip