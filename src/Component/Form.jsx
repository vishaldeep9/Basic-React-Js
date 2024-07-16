import React, { useState } from 'react'
import './formcss.css'
const Form = () => {
    const[name,setName]=useState("")
    const[course,setCourse]=useState("")
    const[comment,setComment]=useState("")

    const handleName=(event)=>{
        setName(event.target.value)
    }
    const handleCourse=(e)=>{
        setCourse(e.target.value)
    }
    const handleComment=(event)=>{
        setComment(event.target.value)
    }
    const handleSubmit=(event)=>{
      event.preventDefault() //to prevent from refreshing (all input data will be clear)
      alert(` ${name} ${course} ${comment}`)
    }
  return (
   <form onSubmit={handleSubmit}  className="form-container">
   <div className="form-group">
    <label>Name</label>
    <input value={name} onChange={handleName} placeholder='enter your name'/>
   </div>
   <div className="form-group">
    <label>Select Course</label>
    <select value={course} onChange={handleCourse} > 
     <option value="Select Course">select course</option>
     <option value="React js">React js</option>
     <option value="Spring Boot">Spring Boot</option>
     <option value="Java">Java</option>
    </select>
   </div>
    <div className="form-group">
        <label>Comments</label>
        <textarea value={comment} onChange={handleComment} placeholder='write your comments'/>
    </div>

   <button type='submit'>submit</button>
   </form>
  )
}
export default Form
