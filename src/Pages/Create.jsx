import React, { useState } from 'react'
import axios from 'axios'
import Logo from '../Resources/images/logo.png'
import './license.css'
import ogl from '../Resources/images/ogl.png'
import crest from '../Resources/images/crest.png'
import {useNavigate} from 'react-router-dom'


function Create() {
    const [name,setName]=useState('')
    const [dob,setDob]=useState('')
    const [gender,setGender]=useState('')
    const [address,setAddress]=useState('')
    const [validFrom,setValidFrom]=useState('')
    const [validTo,setValidTo]=useState('')
    const [licenseNumber,setLicenseNumber]=useState('')
    const [issueNumber,setIssueNumber]=useState('')
    const [drivingStatus,setDrivingStatus]=useState('')
    const [succeed,setSucceed]=useState(false)
    const [error,setError]=useState(null)
    const navigate=useNavigate('')

    const handleSubmit=(e)=>{
        e.preventDefault()
        setError(false)
        setSucceed(false)
        console.log(name)
        axios.post('http://localhost:5000/api/license/create',{
            name:name,
            dateOfBirth:dob,
            gender:gender,
            address:address,
            validFrom:validFrom,
            validTo:validTo,
            licenseNumber:licenseNumber,
            issueNumber:issueNumber,
            drivingStatus:drivingStatus

        }).then(response=>{
            setSucceed(true)
            navigate(`/driving-record/${response.data.licenseNumber}`)
        }).catch(error=>{
            setError(error.response.data.error)
        })

    }
       
  return (
    

    <div>
        <div className="registerheader">
            <div className="logo">
            <img src={Logo} alt="" />
            <h2>GOV.UK</h2>
            </div>
            <p>Register License</p>
        </div>
        <div className="bluebar">
            
        </div>
        <div className="details">
          <h2>Enter License Details</h2> 
          <p>Fill the Forms Below Correctly to register a Licence</p>
            <form className='formgroup'>
                <div className="detail">
                    <label>Name</label>
                    <p>Example: John Doe</p>
                    <input type="text" onChange={(e)=>{
                        setName(e.target.value)
                
                    }} value={name}/>
                </div>
                <div className="detail">
                    <label>Date of birth</label>
                    <p>Example:12/12/2023</p>
                    <input type="date" onChange={(e)=>{
                        setDob(e.target.value)
                    }} value={dob}/>
                </div>
                <div className="detail">
                    <label>Gender</label>
                    <p>Example:Male/Female/Other</p>
                    <input type="text" onChange={(e)=>{
                        setGender(e.target.value)
                    }} value={gender}/>
                </div>
                <div className="detail">
                    <label>Address</label>
                    <p>Example:Male/Female/Other</p>
                    <input type="text" onChange={(e)=>{
                        setAddress(e.target.value)
                    }} value={address}/>
                </div>
                <div className="detail">
                    <label>Driving Status</label>
                    {/* <p>Example:Male/Female/Other</p> */}
                    <input type="text" onChange={(e)=>{
                        setDrivingStatus(e.target.value)
                    }} value={drivingStatus}/>
                </div>
                <div className="detail">
                    <label>Licence valid from</label>
                    <p>Example:12/12/2023</p>
                    <input type="date" onChange={(e)=>{
                        setValidFrom(e.target.value)
                    }} value={validFrom}/>
                </div>
                <div className="detail">
                    <label>Licence valid to</label>
                    <p>Example:12/12/2023</p>
                    <input type="date"  onChange={(e)=>{
                        setValidTo(e.target.value)
                    }} value={validTo}/>
                </div>
                <div className="detail">
                    <label>Driving licence number</label>
                    <p>Example:12/12/2023</p>
                    <input type="text"  onChange={(e)=>{
                        setLicenseNumber(e.target.value)
                    }} value={licenseNumber}/>
                </div>
                <div className="detail">
                    <label>Licence issue number</label>
                    <p>Example:12/12/2023</p>
                    <input type="number"  onChange={(e)=>{
                        setIssueNumber(e.target.value)
                    }} value={issueNumber}/>
                </div>

                <button onClick={(e)=>{
                    handleSubmit(e)
                }}>Register</button>

                {
                    succeed&&(
                        <p style={{color:'green'}}>Data Saved Successfully</p>
                    )
                }
                {
                    error&&(
                        <p style={{color:'red'}}>{error}</p>
                    )
                }


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


export default Create