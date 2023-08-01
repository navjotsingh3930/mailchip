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
                imgUrl:"https://eep.io/images/yzco4xsimv0y/67trWJLKtKcvrqlKYSlskE/696ad499e0cc60aa7392521a6a7cfd90/Instagram__1_.jpg?w=196&fm=webp&q=70",
                heading:"Instagram",
                content:"Promote and share your Instagram posts in email campaigns."
            },
            {
                imgUrl:"https://eep.io/images/yzco4xsimv0y/44dW9Z4hibyDYi0qggfets/b01884985e996ffb5dc133556b92bb7a/Shopify__1_.jpg?w=196&fm=webp&q=70",
                heading:"Shopify",
                content:"Sync Shopify customers, products, and purchase data to Mailchimp."
            },
            {
                imgUrl:"https://eep.io/images/yzco4xsimv0y/7mpZ7UZrdzk2BmWX1OnRvb/5e610ecd21eeb25d0b82b098ce424e34/Google_Analytics2.jpg?w=196&fm=webp&q=70",
                heading:"Google Analytics",
                content:"Unlock powerful insights with campaign, website, or landing page data. "
            },
            {
                imgUrl:"https://eep.io/images/yzco4xsimv0y/2uruOq31Y1FKdghFWn5zMg/8a35f3f9e463ba34038f3c3f16ccb635/WooCommerce.jpg?w=196&fm=webp&q=70",
                heading:" WooCommerce ",
                content:"Power your ecommerce store with smart marketing features."
            },
            {
                imgUrl:"https://eep.io/images/yzco4xsimv0y/uZVnrVt3DO1G4Ec5G4pvs/e6c9d3c2613827f7dd238f1c5e0b02d9/Quickbooks.jpg?w=196&fm=webp&q=70",
                heading:"QuickBooks Online",
                content:"Bring together your marketing tools and invoice data."
            },
            {
                imgUrl:"https://eep.io/images/yzco4xsimv0y/2klSrOoLZKmLuGKZjKT9o3/ca400f60c2f3673f3ab9b52f4d03360d/Squarespace.jpg?w=196&fm=webp&q=70",
                heading:" Squarespace Commerce",
                content:" Market your ecommerce business and drive sales."
            },
            {
                imgUrl:"https://eep.io/images/yzco4xsimv0y/26deBkGp3A5Pj7suZ9oV7V/858e8a4603707166988a3282bca7e29b/Zapier.jpg?w=196&fm=webp&q=70",
                heading:"Zapier",
                content:"Automatically pass data between web services without a single line of code."
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
