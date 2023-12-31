import React from 'react'
import styles from './footer.module.css'
import Link from 'next/link'
import Image from 'next/image';
// import mailChipPresent from '../public/svg/mailchipPresent.svg'
const Footer = () => {
    const footerContent={
        "Related Links":{
        heding:"Related Links :",
        content:[
            {
                link:"",data:"Win customers with the #1 email marketing and automations brand*"
            },
            {
                link:"",data:"How to Use Mailchimp"
            },
            {
                link:"",data:"What Is Marketing Automation?"
            },
        ]
    },
    "Products":{
        heding:"Related Links :",
        content:[
            {
                link:"/why_mailchip",data:"Why Mailchimp?"
            },
            {
                link:"",data:"Product Updates"
            },
            {
                link:"",data:"Email Marketing"
            },
            {
                link:"",data:"Websites"
            },
            {
                link:"",data:"Transactional"
            },
            {
                link:"",data:"Email"
            },
            {
                link:"",data:"How We Compare"
            },
            {
                link:"",data:"GDPR Compliance"
            },
            {
                link:"",data:"Security"
            },
            {
                link:"",data:"Status"
            },
            {
                link:"",data:"Mobile App"
            },
        ]
    },
    "Resources":{
        heding:"Resources",
        content:[
            {
                link:"",data:"Marketing Library"
            },
            {
                link:"",data:"Free Marketing Tools"
            },
            {
                link:"",data:"Marketing Glossary"
            },
            {
                link:"",data:"Integrations Directory"
            },
        ]
    },
    "Community":{
        heding:"Community",
        content:[
            {
                link:"",data:"Agencies & Freelancers"
            },
            {
                link:"",data:"Developers"
            },
            {
                link:"",data:"Events"
            },
        ]
    },
    "Company":{
        heding:"Company",
        content:[
            {
                link:"",data:"Our Story"
            },
            {
                link:"",data:"Newsroom"
            },
            {
                link:"",data:"Give Where You Live"
            },
            {
                link:"",data:"Careers"
            },
            {
                link:"",data:"Accessibility"
            },
        ]
    },
    "Help":{
        heding:"Help",
        content:[
            {
                link:"",data:"Contact Us"
            },
            {
                link:"",data:"Hire an Expert"
            },
            {
                link:"",data:"Help Center"
            },
            {
                link:"",data:"Talk to Sales"
            },
        ]
    },
    }
return (
    <div className={styles.footer}>
    <div className={styles.topFooter}>
    <h3 className={styles.linkHeading}>{footerContent['Related Links'].heding}</h3>
    {
        footerContent['Related Links'].content.map((content,index)=>{
            return(
                <Link href={content.link} key={index}>{content.data}</Link>
            )
        })
    }
    </div>
    <div className={styles.middleFooter}>
    <div className={styles.ProductsLinks}>
        <h2>{footerContent.Products.heding}</h2>
        {
            footerContent.Products.content.map((content, index)=>{
                return (
                    <Link href={content.link} key={index}>{content.data}</Link>
                )
            })
        }
    </div>
    <div className={styles.ResourcesLinks}>
    <h2>{footerContent.Resources.heding}</h2>
        {
            footerContent.Resources.content.map((content, index)=>{
                return (
                    <Link href={content.link} key={index}>{content.data}</Link>
                )
            })
        }
    </div>
    <div className={styles.CommunityLinks}>
    <h2>{footerContent.Community.heding}</h2>
        {
            footerContent.Community.content.map((content, index)=>{
                return (
                    <Link href={content.link} key={index}>{content.data}</Link>
                )
            })
        }
        </div>
      <div className={styles.CompanyLinks}>
      <h2>{footerContent.Company.heding}</h2>
        {
            footerContent.Company.content.map((content, index)=>{
                return (
                    <Link href={content.link} key={index}>{content.data}</Link>
                )
            })
        }
        </div>
    <div className={styles.HelpLinks}>
    <h2>{footerContent.Help.heding}</h2>
        {
            footerContent.Help.content.map((content, index)=>{
                return (
                    <Link href={content.link} key={index}>{content.data}</Link>
                )
            })
        }
        </div>
      <div className={styles.about}>
        <div className={styles.mailchimpPresent}>
            {/* {mailChipPresent} */}
            <Image src={"/images/mailChimpPresent_ (2).png"} width={100} height={100} alt='navjot is hero' />
          {/* <Image src={"https://eep.io/images/yzco4xsimv0y/73ZAoe8O3Y7SXQLeCNTq5u/8ddf1f63b4abdf7f67149d3a9d74a0bd/MCP.svg?w=260&q=70"} alt='Navjot' width={70} height={50}/> */}
          <p>Films, podcasts, and original series that celebrate the entrepreneurial spirit.</p>
          <button>Check it out</button>
        </div>
        <div className={styles.mailchimpCourier}>
        <Image src={"/images/mailChimpCourier (3).png"} width={100} height={100} alt='navjot is hero' />
          <p>Expert insights, industry trends, and inspiring stories that help you live and work on your own terms.</p>
          <button>Learn More</button>
        </div>
      </div>
    </div>
    <div className={styles.bottomFooter}>
      <div className={styles.mobileDownloadLink}>
        <Link href="">
          <img src="https://eep.io/images/yzco4xsimv0y/1u3hha7FE0Q402e2qsMu6a/5e403548149c1618b64034284f692ff1/icon-ios.svg?w=320&q=70" alt="navjot is hero"/>
        </Link>
        <Link href="">
          <img src="https://eep.io/images/yzco4xsimv0y/64EpnI4RsQI66c2y2O60G2/4c34d7bc4dd7a4362c7e19a06c109e21/icon-android.svg?w=320&q=70" alt="navjot is hero"/>
        </Link>
      </div>
      <div className={styles.socialLink}>
        <Link href="/" className={styles.facebookIcon}>
          <img src="https://eep.io/images/yzco4xsimv0y/5daYAeMRSgIUUiSquGwsgI/1904e3f818575ec9625fa15dab193243/icon-facebook.svg?w=320&q=70" alt="facebook"/>
        </Link>
        <Link href="/" className={styles.twitterIcon}>
          <img src="https://eep.io/images/yzco4xsimv0y/3VjJhbqftKuok6gqYuUQKy/328d56c5d13ad50b9679b11e716bb218/icon-twitter.svg?w=320&q=70" alt="twitter"/>
        </Link>
        <Link href="/" className={styles.instagramIcon}>
          {/* <img src="https://eep.io/images/yzco4xsimv0y/RlNw7Xkw8uKYAUoYU4aQw/ff3eada8736da9e63fbd9f929c6a677c/icon-instagram.svg?w=320&q=70" alt="instagram"/> */}
        </Link>
        <Link href="/" className={styles.linkedInIcon}>
          <img src="https://eep.io/images/yzco4xsimv0y/n5saFR4miW4U4ygUIQo0A/8f9c60cb133b80fda2fe9bdb825b4a5f/icon-linkedin.svg?w=320&q=70" alt="linkedIn"/>
        </Link>
        <Link href="/" className={styles.facebookIcon}>
          <img src="https://eep.io/images/yzco4xsimv0y/2z1ra9BrgQewIqMQckMasg/58e3e8ec04acd60f0642f89dfbd71218/icon-youtube.svg?w=320&q=70" alt="facebook"/>
        </Link>
        <Link href="/" className={styles.pinterestIcon}>
          <img src="https://eep.io/images/yzco4xsimv0y/7nawBEArBKpxRukK66OZtN/7bcc76998f783f3953b86214bfe9aa43/pinterest-logo.svg?w=320&q=70" alt="pinterest"/>
        </Link>
      </div>
      <div className={styles.trust}>
        <Link href="/">
          <img src="https://eep.io/images/yzco4xsimv0y/5YvMZrsHz6u8Xl3dbjlPWD/fc92d9d1bba0e3b04409d37654dc6087/EN.svg?w=1600&q=70" alt="trust"/>
        </Link>
      </div>
      <div className={styles.aboutUs}>
        <div className={styles.dropDown}>
          <select id="_">
            <option defaultValue="English">English</option>
            <option defaultValue="Español">Español</option>
            <option defaultValue="Français">Français</option>
            <option defaultValue="Português" >Português</option>
            <option defaultValue="Deutsch">Deutsch</option>
            <option defaultValue="Italiano" >Italiano</option>
          </select>
        </div>
        <div className={styles.companyDesc}>
          <p>©2001-2023 All Rights Reserved. Mailchimp® is a registered trademark of The Rocket Science Group. Apple and the Apple logo are trademarks of Apple Inc. Mac App Store is a service mark of Apple Inc. Google Play and the Google Play logo are trademarks of Google Inc. </p>
        </div>
        <div className={styles.someMoreLink}>
          <Link href="">Privacy</Link>
          <Link href="">Terms</Link>
          <Link href="">Cookie Preferences</Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Footer;
