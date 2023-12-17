import React, { useState } from 'react'
import Logo from '../Resources/images/logo.png'
import ogl from '../Resources/images/ogl.png'
import crest from '../Resources/images/crest.png'
import {useNavigate} from 'react-router-dom'

function GetLicense() {
    const [licenseNumber,setLicenseNumber]=useState("")
    const [postCode,setPostCode]=useState("")
    const [insuranceNumber,setInsuranceNumber]=useState("")
    const navigate=useNavigate()
   const handleSubmit=(e)=>{
    e.preventDefault()
    if(licenseNumber){
        navigate(`/driving-record/${licenseNumber}`)
    }else{
        console.log("Failed")
    }
   }
  return (
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
        </div>
        <div className="details">
          <h2>Enter details</h2> 
          <p>You should only use this service to view or share your own driving licence.</p>
          <p>Use a different service if you want to  <a style={{color:'#005EA5'}} href=""> check someone else’s driving licence information.</a></p>
            <form className='formgroup'>
                <div className="detail">
                    <label>Your driving licence number</label>
                    <p>Example: MORGA657054SM9IJ</p>
                    <input type="text" onChange={(e)=>{
                        setLicenseNumber(e.target.value)
                    }}/>
                </div>
                <div className="greater">
                <span style={{color:'#005EA5'}}>►</span>
                    <p><a href='' style={{color:'#000'}}>Where to find your driving licence number</a></p>

                </div>
                <div className="detail">
                    <label>Your National Insurance number</label>
                    <p>Example:QQ123456C</p>
                    <input type="text" onChange={(e)=>{
                        setInsuranceNumber(e.target.value)
                    }}/>
                </div>
                <div className="greater">
                <span style={{color:'#005EA5'}}>►</span>
                    <p><a href='' style={{color:'#000'}}>Where to find your National Insurance Number</a></p>

                </div>
                <div className="detail">
                    <label>Postcode</label>
                    <p>Example:EH1 9SP</p>
                    <input type="text" onChange={(e)=>{
                        setPostCode(e.target.value)
                    }} />
                </div>
                <div className="notice">
                    <p>
                    To access this service online, details from your DVLA record and your National Insurance number will be shared with other government departments (HMRC and DWP) to check your identity, as described in our <a href='' style={{color:'#005EA5'}}>privacy policy.</a>
                    <span>
                    I would like to use this service and understand that my data will be shared as explained above.
                    </span>
                    </p>
                    <input type="checkbox" />
                    <label > I agree</label>

                </div>
                <button onClick={(e)=>{
                    handleSubmit(e)
                }}>View Now</button>

                <p className='know'>Don’t know your driving licence number? <a href='' style={{color:'#005EA5'}}>Search for your licence using your personal details.</a> Alternatively, you can return to the
<a href='' style={{color:'#005EA5'}}> Start Now </a>page.</p>
  

            </form>
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

export default GetLicense