import React from 'react'
import IntegratedCard from './IntegratedCard'
import styles from './integratedCardContainer.module.css'
const IntegratedCardContainer = () => {
    // obj -> heading , [cardContent]
    const integratedCards ={
        heading:"Bring in more data, drive more growth with our integrations",
        cardContent:[
            {
                imgUrl:"https://eep.io/images/yzco4xsimv0y/egMxvwdsj41K5eESLhWBO/cf823adbd311e33919f97ffc5bf3181d/Canva.jpg?w=196&fm=webp&q=70",
                heading:"Canva",
                content:"Create compelling visuals for your marketing."
            },
            {
                imgUrl:"https://eep.io/images/yzco4xsimv0y/51oq4AakIqo8fATlHgqHK0/02a750b1c1a16745296dca6fa7cb830c/Salesforce__1_.jpg?w=196&fm=webp&q=70",
                heading:"Mailchimp for Salesforce",
                content:"Sync your Mailchimp subscribers and Salesforce® leads across platforms."
            },
            {
                imgUrl:"",
                heading:"",
                content:""
            },
            {
                imgUrl:"",
                heading:"",
                content:""
            },
            {
                imgUrl:"",
                heading:"",
                content:""
            },
            {
                imgUrl:"",
                heading:"",
                content:""
            },
            {
                imgUrl:"",
                heading:"",
                content:""
            },
            {
                imgUrl:"",
                heading:"",
                content:""
            },
            {
                imgUrl:"",
                heading:"",
                content:""
            },
        ]
    }
    return (
    <div className={styles.__multiCardContainer}>
    <div className={styles.cardHeading}>
        <h2>{integratedCards.heading}</h2>
    </div>
    <div className={styles.cardBody}>
        {
            integratedCards.cardContent.map((content, index)=>{
                return<IntegratedCard ImgUrl={content.imgUrl} Heading={content.heading} Content={content.content} key={index}/>
        })}
    </div>
    </div>
    )
}

export default IntegratedCardContainer
