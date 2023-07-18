import React from "react";
import styles from "./companyContainer.module.css";
const CompanyContainer = () => {
  const imageUrls=[
    {
      imgUrl:"/images/EastFork.webp",
      alt:"navjot singh is hero"
    },
    {
      imgUrl:"/images/chronicle-books-logo.webp",
      alt:"navjot singh is super hero"
    },
    {
      imgUrl:"/images/Fader-Logo-800px-144dpi.webp",
      alt:"navjot singh is hero"
    },
    {
      imgUrl:"/images/Sweat.webp",
      alt:"navjot singh is hero"
    },
  ]
  return (
    <div className={styles.container}>
      <h1>You ll be in good company</h1>
      <p>12 million businesses use Mailchimp.</p>
      <div className={styles.imgContainer}>
        {
          imageUrls.map((content , index)=>{
            return (
              <img src={content.imgUrl} alt={content.alt} key={index} />
            )
          })
        }
      </div>
    </div>
  );
};

export default CompanyContainer;
