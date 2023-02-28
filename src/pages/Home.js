import React from 'react'
import Card from '../components/Card'
import Header from '../components/Header'
import Style from './Home.module.css'
import img from '../asset/image/image2.png'
import beni from '../asset/image/beneficiaries.png'
import { BsPlusCircle } from "react-icons/bs";
function Home() {
  const cardData = [
    {
      name:"Enterprise Search",
      desc:"Create and search experiences in the comfort of API's",
      color:"#DDBBFF"
    },
    {
      name:"Observability",
      desc:"Consolidate your logs, metrics, application traces and system availability",
      color:"#FFFCBB"
    },
    {
      name:"Security",
      desc:"Prevent, collect, detect and response to threats",
      color:"#BBFFFF"
    },
    {
      name:"Analytics",
      desc:"Explore, visualize and analyze your data using powerful suite of analytical tools",
      color:"#BBFFDB"
    }
  ]
  return (
    <div className={Style.cont}>
        <Header />
        
        <div style={{padding:"0px 20px"}}>
        <div className={Style.section1}>
        {
          cardData.map((val)=>(<Card name={val.name} desc={val.desc} color={val.color} />))
        }
        </div>
        </div>

        <div className={Style.section2}>

        <div className={Style.desc}>
            <p style={{fontSize:"20px",fontWeight:"700",color:"#212529"}}>
            Get started by adding integrations
            </p>
            <p style={{fontSize:"14px",color:"#5B5B5B"}}>
            To start working with your data, use one of our many ingest options. Collect data from an app or service, or upload a file. If you're not ready to use your own data, play with a sample data set.
            </p>
            <div className={Style.integrationBtn}>
            <BsPlusCircle color='#ffffff' />
            <p style={{marginBottom:"19px"}}>Add integrations</p> 
            </div>
        </div>

        <div className={Style.pic}>
          <img src={img} alt='' />
        </div>

        </div>


        <div className={Style.section3}>
            <p style={{fontSize:"20px",fontWeight:"700",color:"#212529"}}>Management</p>
            
            <div className={Style.cardCont}>
               
                <div className={Style.card}>
                <div style={{display:"flex",alignItems:"center",gap:"15px"}}>
                <img width={20} height={20} alt='' src={beni}/>
                <p style={{fontSize:"15px",fontWeight:"600",color:"#212529"}}>Manage permissions</p>
                </div>
                    <p style={{fontSize:"14px",color:"#5B5B5B"}}>
                    Control who has access and what tasks they can perform.
                    </p>
                </div>


                <div className={Style.card}>
                <div style={{display:"flex",alignItems:"center",gap:"15px"}}>
                <img width={20} height={20} alt='' src={beni}/>
                <p style={{fontSize:"15px",fontWeight:"600",color:"#212529"}}>Monitor the stack</p>
                </div>
                    <p style={{fontSize:"14px",color:"#5B5B5B"}}>
                    Track the real-time health and performance of your deployment.                    
                    </p>
                </div>


                <div className={Style.card}>
                <div style={{display:"flex",alignItems:"center",gap:"15px"}}>
                <img width={20} height={20} alt='' src={beni}/>
                <p style={{fontSize:"15px",fontWeight:"600",color:"#212529"}}>Back up and restore</p>
                </div>
                    <p style={{fontSize:"14px",color:"#5B5B5B"}}>
                    Save snapshots to a backup repository, and restore to recover index and cluster state
                    </p>
                </div>


                <div className={Style.card}>
                <div style={{display:"flex",alignItems:"center",gap:"15px"}}>
                <img width={20} height={20} alt='' src={beni}/>
                <p style={{fontSize:"15px",fontWeight:"600",color:"#212529"}}>Manage Index Lifecycles</p>
                </div>
                    <p style={{fontSize:"14px",color:"#5B5B5B"}}> 
                    Define lifecycle policies to automatically perform operations as an index ages.
                    </p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Home