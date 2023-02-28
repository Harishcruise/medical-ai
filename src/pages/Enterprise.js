import React from 'react'
import Header from '../components/Header'
import Style from './Enterprise.module.css'
import img from '../asset/image/image3.png'
import img2 from '../asset/image/image4.png'
import img3 from '../asset/image/external-link.png'
import img4 from '../asset/image/image5.png'
import img5 from '../asset/image/image6.png'
import img6 from '../asset/image/image7.png'
import { BsPlusCircle } from "react-icons/bs";

function Enterprise() {
  return (
    <div style={{fontFamily:"'DM Sans', sans-serif"}}>
        <Header />

        <div style={{padding:"0px 15px",marginTop:"30px"}}>
            <div style={{borderBottom:"solid 1px #CDCDCD",padding:"0px 40px"}}>
                <p style={{fontSize:"24px",fontWeight:"700",color:"#212529"}}>Welcome to the Enterprise Search</p>
            </div>
        </div>

        <div className={Style.section1}>
          <div className={Style.cont1}>
            <p style={{fontSize:"20px",fontWeight:"700",color:"#212529"}}>Add data and start searching</p>
            <p style={{fontSize:"14px",color:"#5B5B5B",lineHeight:"24px"}}>Your content is stored in an Nostrum AI index. Get started by creating an Nostrumsearch index and selecting an ingestion method. Options include the Nostrum web crawler, third party data integrations, or using Nostrumsearch API endpoints.</p>
            <p style={{fontSize:"14px",color:"#5B5B5B",lineHeight:"24px"}}>Whether you're building a search experience with App Search or Nostrumsearch, you can now get started here.</p>
            <div className={Style.integrationBtn}>
            <BsPlusCircle color='#ffffff' />
            <p style={{marginBottom:"19px"}}>Create an Nostrum Index</p> 
            </div>
          </div>

          <div className={Style.cont2}>
            <img alt='' src={img} />
          </div>
        </div>


        <div className={Style.section2}>

        <p style={{fontSize:"24px",fontWeight:"700",color:"#212529"}}>Search experiences for every use case</p>

        <div className={Style.card}>

        <img src={img4} alt='' />

        <div style={{width:"400px"}}>
        <p style={{fontSize:"24px",fontWeight:"700",color:"#212529",marginTop:"0px"}}>Nostrum search</p>
        <p style={{fontSize:"14px",color:"#434343",lineHeight:"24px"}}>Your content is stored in an Nostrum AI index. Get started by creating an Nostrumsearch index and selecting an ingestion method. Options include the Nostrum web crawler, third party data integrations, or using Nostrumsearch API endpoints.</p>
        
        <div className={Style.integrationBtn}>
            {/* <BsPlusCircle color='#ffffff' /> */}
            <p style={{marginBottom:"19px"}}>View the setup guide</p> 
            </div>
        </div>
        
        <div>
        <div style={{display:"flex",flexDirection:"row",alignItems:"center",gap:"10px"}}> <img src={img2} alt='' width={20} height={20}/> <p style={{fontSize:"14px",color:"#5B5B5B",lineHeight:"24px"}}>Integrate with databases, websites, and more</p> </div>
        <div style={{display:"flex",flexDirection:"row",alignItems:"center",gap:"10px"}}> <img src={img2} alt='' width={20} height={20}/> <p style={{fontSize:"14px",color:"#5B5B5B",lineHeight:"24px"}}>Build custom tooling</p> </div>
        <div style={{display:"flex",flexDirection:"row",alignItems:"center",gap:"10px"}}> <img src={img2} alt='' width={20} height={20}/> <p style={{fontSize:"14px",color:"#5B5B5B",lineHeight:"24px"}}>Build custom search experiences</p> </div>
        </div>

        <div>
        <p style={{fontSize:"18px",fontWeight:"700",color:"#212529"}}>Resources</p>
        <div style={{fontSize:"14px",fontWeight:"500",color:"#1C77F4",display:"flex",alignItems:"center",gap:"10px"}}><p>Getting started with Nostrum search</p> <img src={img3} width={15} height={15} alt=""/></div>
        <div style={{fontSize:"14px",fontWeight:"500",color:"#1C77F4",display:"flex",alignItems:"center",gap:"10px"}}><p>Create a new Index</p> <img src={img3} width={15} height={15} alt=""/></div>
        <div style={{fontSize:"14px",fontWeight:"500",color:"#1C77F4",display:"flex",alignItems:"center",gap:"10px"}}><p>Set-up a language client</p> <img src={img3} width={15} height={15} alt=""/></div>
        <div style={{fontSize:"14px",fontWeight:"500",color:"#1C77F4",display:"flex",alignItems:"center",gap:"10px"}}><p>Search UI for Nostrum search</p> <img src={img3} width={15} height={15} alt=""/></div>
        </div>

        </div>


        <div className={Style.card}>

        <img src={img5} alt='' />

        <div style={{width:"400px"}}>
        <p style={{fontSize:"24px",fontWeight:"700",color:"#212529",marginTop:"0px"}}>App search</p>
        <p style={{fontSize:"14px",color:"#434343",lineHeight:"24px"}}>Ideal for apps and websites, App Search helps you design, deploy, and manage powerful search experiences.</p>
        
        <div className={Style.integrationBtn}>
            {/* <BsPlusCircle color='#ffffff' /> */}
            <p style={{marginBottom:"19px"}}>Open App search</p> 
            </div>
        </div>
        
        <div style={{marginRight:"80px"}}>
        <div style={{display:"flex",flexDirection:"row",alignItems:"center",gap:"10px"}}> <img src={img2} alt='' width={20} height={20}/> <p style={{fontSize:"14px",color:"#5B5B5B",lineHeight:"24px"}}>Ingest with a web crawler, API,</p> </div>
        <div style={{display:"flex",flexDirection:"row",alignItems:"center",gap:"10px"}}> <img src={img2} alt='' width={20} height={20}/> <p style={{fontSize:"14px",color:"#5B5B5B",lineHeight:"24px"}}>Search management dashboards</p> </div>
        <div style={{display:"flex",flexDirection:"row",alignItems:"center",gap:"10px"}}> <img src={img2} alt='' width={20} height={20}/> <p style={{fontSize:"14px",color:"#5B5B5B",lineHeight:"24px"}}>Search-optimized APIs</p> </div>
        </div>

        <div>
        <p style={{fontSize:"18px",fontWeight:"700",color:"#212529"}}>Resources</p>
        <div style={{fontSize:"14px",fontWeight:"500",color:"#1C77F4",display:"flex",alignItems:"center",gap:"10px"}}><p>Getting started with Nostrum search</p> <img src={img3} width={15} height={15} alt=""/></div>
        <div style={{fontSize:"14px",fontWeight:"500",color:"#1C77F4",display:"flex",alignItems:"center",gap:"10px"}}><p>Create a new Index</p> <img src={img3} width={15} height={15} alt=""/></div>
        <div style={{fontSize:"14px",fontWeight:"500",color:"#1C77F4",display:"flex",alignItems:"center",gap:"10px"}}><p>Set-up a language client</p> <img src={img3} width={15} height={15} alt=""/></div>
        <div style={{fontSize:"14px",fontWeight:"500",color:"#1C77F4",display:"flex",alignItems:"center",gap:"10px"}}><p>Search UI for Nostrum search</p> <img src={img3} width={15} height={15} alt=""/></div>
        </div>

        </div>


        <div className={Style.card}>

<img src={img6} alt='' />

<div style={{width:"400px"}}>
<p style={{fontSize:"24px",fontWeight:"700",color:"#212529",marginTop:"0px"}}>Workplace Search</p>
<p style={{fontSize:"14px",color:"#434343",lineHeight:"24px"}}>Ideal for internal teams, Workplace Search helps unify your content in one place with instant connectivity to popular productivity tools.</p>

<div className={Style.integrationBtn}>
    {/* <BsPlusCircle color='#ffffff' /> */}
    <p style={{marginBottom:"19px"}}>Open Workshop search</p> 
    </div>
</div>

<div>
<div style={{display:"flex",flexDirection:"row",alignItems:"center",gap:"10px"}}> <img src={img2} alt='' width={20} height={20}/> <p style={{fontSize:"14px",color:"#5B5B5B",lineHeight:"24px"}}>Ingest from third-party sources</p> </div>
<div style={{display:"flex",flexDirection:"row",alignItems:"center",gap:"10px"}}> <img src={img2} alt='' width={20} height={20}/> <p style={{fontSize:"14px",color:"#5B5B5B",lineHeight:"24px"}}>Search management dashboards</p> </div>
<div style={{display:"flex",flexDirection:"row",alignItems:"center",gap:"10px"}}> <img src={img2} alt='' width={20} height={20}/> <p style={{fontSize:"14px",color:"#5B5B5B",lineHeight:"24px"}}>Search experiences for authenticated users</p> </div>
</div>

<div>
<p style={{fontSize:"18px",fontWeight:"700",color:"#212529"}}>Resources</p>
<div style={{fontSize:"14px",fontWeight:"500",color:"#1C77F4",display:"flex",alignItems:"center",gap:"10px"}}><p>Getting started with Nostrum search</p> <img src={img3} width={15} height={15} alt=""/></div>
<div style={{fontSize:"14px",fontWeight:"500",color:"#1C77F4",display:"flex",alignItems:"center",gap:"10px"}}><p>Create a new Index</p> <img src={img3} width={15} height={15} alt=""/></div>
<div style={{fontSize:"14px",fontWeight:"500",color:"#1C77F4",display:"flex",alignItems:"center",gap:"10px"}}><p>Set-up a language client</p> <img src={img3} width={15} height={15} alt=""/></div>
<div style={{fontSize:"14px",fontWeight:"500",color:"#1C77F4",display:"flex",alignItems:"center",gap:"10px"}}><p>Search UI for Nostrum search</p> <img src={img3} width={15} height={15} alt=""/></div>
</div>

</div>


        </div>


    </div>
  )
}

export default Enterprise