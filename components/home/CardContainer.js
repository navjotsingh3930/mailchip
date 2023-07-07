import React from 'react'
import styles from './cardContainer.module.css';
import Card from './Card';
const CardContainer = () => {
    const cards = [
        {  
            img:"/images/Desktop_Feature_Cards_1_Automations.webp",
            bg_color:"#d99536",
            cardHeading:"convert with Automations",
            cardDescription:" Send the right message at the right time to convert more customers.",
            buttonDesc:"Start Converting"
        },
        {
            img:"/images/Desktop_Feature_Cards_2_Analytics.webp",
            bg_color:"#e7b75f",
            cardHeading:"Optimize with AI & Analytics",
            cardDescription:"Get AI-assisted suggestions to help make your content more engaging.",
            buttonDesc:"Start Optimizing"
        },
        {
            img:"/images/Desktop_Feature_Cards_3_Segmentation.webp",
            bg_color:"#fdf8ea",
            cardHeading:"Target with Segmentation",
            cardDescription:"Boost customer loyalty by predicting the right ones to target.",
            buttonDesc:"Start Targeting"
        },
        {
            img:"/images/Desktop_Feature_Cards_4_Integrations.webp",
            bg_color:"#ffffff",
            cardHeading:"Sync with Integrations",
            cardDescription:"Send the right message at the right time to convert more customers.",
            buttonDesc:"Start Syncing"
        },
    ]
return (
    <div className={styles.cardContainer}>
        {
            cards.map((data, index)=>{
                return(
                    <Card Img={data.img} BgColor={data.bg_color} CardHeading={data.cardHeading} CardDescription={data.cardDescription} ButtonDesc={data.buttonDesc} key={index} />
                )
            })
        }
    </div>
)
}

export default CardContainer
