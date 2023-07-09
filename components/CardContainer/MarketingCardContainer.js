import React from "react";
import styles from "./marketingCardContainer.module.css";
import MarketingCard from "./MarketingCard";
const MarketingCardContainer = () => {
    const card = [
        {
            heading:"Drive more repeat business with marketing automations",
            content:"Customer Journey Builder automations generated up to 4x more orders for Essentials Plan users with connected stores than bulk emails.*",
            imgUrl:"https://eep.io/images/yzco4xsimv0y/4yNdXpHp8YNq8brNoWIkPG/e78d5be54a89220df36cde3f23e7ec04/Guesswork-Customer-Journey-Builder.png?w=842&fm=webp&q=70",
            btnContent:"Start automating",
            imgPosition:"right"
        },
        {
            heading:"Keep customers ready to buy with optimized content",
            content:"Content Optimizer analyzes an average of 20 million data points to offer personalized suggestions for each email.*",
            imgUrl:"https://eep.io/images/yzco4xsimv0y/26h1rMWcib36EZ2UDeBORY/b551de097441907656d87c73ca2dd699/Guesswork-Content-Optimizer.png?w=842&fm=webp&q=70",
            btnContent:"Start optimizing",
            imgPosition:"left"
        },
        {
            heading:"Identify and target your most valuable customers",
            content:"Marketers saw up to 88% more revenue from their connected stores when they used Customer Lifetime Value and Likelihood to Purchase Segments with their emails than when they didn't.*",
            imgUrl:"https://eep.io/images/yzco4xsimv0y/5W2Af3BfPJakzRV5RFQPhX/8e801a5d650bc091dca9f3e2c92e3162/Guesswork-Customer-Profile.png?w=842&fm=webp&q=70",
            btnContent:"Start targeting",
            imgPosition:"right"
        },
    ]
  return (
    <div>
      { card.map((content, index)=>{
        return(<MarketingCard
            Heading={content.heading}
            Content={content.content}
            ImgUrl={content.imgUrl}
            BtnContent={content.btnContent}
            ImgPosition={content.imgPosition}
            key={index}
          />)
      })
      }
    </div>
  );
};

export default MarketingCardContainer;
