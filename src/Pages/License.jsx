import React, { useEffect, useState } from 'react'
import Logo from '../Resources/images/logo.png'
import ogl from '../Resources/images/ogl.png'
import crest from '../Resources/images/crest.png'
import { useParams } from 'react-router-dom'
import axios from 'axios'
function License() {
    const [boxClick1,setBoxClick1]=useState(true)
    const [boxClick2,setBoxClick2]=useState(false)
    const [boxClick3,setBoxClick3]=useState(false)
    const [boxClick4,setBoxClick4]=useState(false)
    const [data,setData]=useState(null)
    const {id}=useParams();
    console.log(id)

    useEffect(()=>{
        axios.post('http://localhost:5000/api/license/get',{
            licenseNumber:id
        }).then(response=>{
            setData(response.data)
            console.log(response.data)
        }).catch(error=>{
            console.log(error)
        })



    },[id])
    
 const formatDateFromMongoDB = (mongoDBDate) => {
        // Assuming mongoDBDate is a string in ISO format, e.g., "1992-07-16T00:00:00.000Z"
        const dateObject = new Date(mongoDBDate);
        const options = { day: 'numeric', month: 'short', year: 'numeric' };
        const formattedDate = dateObject.toLocaleDateString('en-US', options);
      
        return formattedDate;
      };
  return (
    <div>
        <div className='registerlicense'>
         <div className="registerheader">
            <div className="logo">
            <img src={Logo} alt="" />
            <h2>GOV.UK</h2>
            </div>
            <p>View your driving licence information</p>
        </div>
        <div className="bluebar">  
        </div>
        <div className="feedback">
            <p>We welcome your <a style={{color:'#005EA5'}} href="">feedback</a> to help us improve this service</p>
            <p> <a style={{color:'#005EA5'}} href="">Logout</a></p>
        </div>
        <div className="box-section">
            <span className={boxClick1==true?'boxClicked':'boxunclicked'} onClick={(e)=>{
                setBoxClick1(true)
                console.log(boxClick1)
                setBoxClick2(false)
                setBoxClick3(false)
                setBoxClick4(false)
            }}>Your details</span>
            <span className={boxClick2?'boxClicked':'boxunclicked'} onClick={(e)=>{
                setBoxClick1(false)
                setBoxClick2(true)
                setBoxClick3(false)
                setBoxClick4(false)
            }}>Vehicle you can drive</span>
            <span className={boxClick3?'boxClicked':'boxunclicked'}
            onClick={(e)=>{
                setBoxClick1(false)
                setBoxClick2(false)
                setBoxClick3(true)
                setBoxClick4(false)
            }}>Penalties and <br />disqualifications</span>
            <span className={boxClick4?'boxClicked':'boxunclicked'} onClick={()=>{
                setBoxClick1(false)
                setBoxClick2(false)
                setBoxClick3(false)
                setBoxClick4(true)
            }}>Get Your Check Code</span>
        </div>

        {data&&(
            <div className="licencedetails">
            <h2>{data.name}</h2>
            <div className="licencedetail">
                <p>Date of birth</p>
                <span>{formatDateFromMongoDB(data.dateOfBirth)}</span>
            </div>
            <div className="licencedetail">
                <p>Gender</p>
                <span>{data.gender}</span>
            </div>
            <div className="licencedetail">
                <p>Address</p>
                <span>{data.address}</span>
            </div>
            <div className="licencedetail">
                <p className='secbreak'>Licence details</p>
                <span></span>
            </div>
            <div className="licencedetail">
                
                <p>Driving status</p>
                <span>{data.drivingStatus}</span>
            </div>
            <div className="licencedetail">
                <p>License valid from</p>
                <span>{formatDateFromMongoDB(data.validFrom)}</span>
            </div>
            <div className="licencedetail">
                <p>License valid to</p>
                <span>{formatDateFromMongoDB(data.validTo)}</span>
            </div>
            <div className="licencedetail">
                <p>Driving licence number</p>
                <span>{data.licenseNumber}</span>
            </div>
            <div className="licencedetail">
                <p>License issue number</p>
                <span>{data.issueNumber}</span>
            </div>
            <div  className='footnote'>
            <p>To update or renew your driving licene details visit the <a style={{color:'#005EA5'}} href="">driving licence section</a></p>

            </div>
            
        </div>
        )}
    </div>

    <div className="footer">
        <div className="footersect1">
            <div className="footerlink">
                <a href="" style={{color:"#454A4C"}}>Feedback</a>
                <a href="" style={{color:"#454A4C"}}>Cookies</a>
                <a href="" style={{color:"#454A4C"}}>Terms & Conditions</a>
                <a href="" style={{color:"#454A4C"}}>Privacy Policy</a>
                <a href="" style={{color:"#454A4C"}}> Cymraeg</a>
            </div>
            <span>Built by the <a href="" style={{color:"#454A4C"}}>Driver and Vehicle Licensing Agency</a></span>
            <div className="ogl">
                <img src={ogl} alt="" />
                <p>All content is available under the<a href="" style={{color:"#454A4C"}}>Open Government Licence v3.0</a>, except where otherwise stated</p>
            </div>
        </div>
        <div className="fotersec2">
            <img src={crest} alt="" />
            <p>© Crown copyright</p>
        </div>
    </div>
    </div>
  )
}

export default License