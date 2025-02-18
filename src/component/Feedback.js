import React from 'react'
import { signUpSchema } from './schemas/Main1';
import { useFormik } from 'formik';
import { useEffect } from 'react';

const initialValues={
  email:"",
  feedback:"",
}

function Feedback() {

 const {values,handleSubmit,handleChange,handleBlur
,errors,touched}= useFormik({
        initialValues:initialValues,
        validationSchema:signUpSchema,
        onSubmit:(values,action)=>{
            console.log("values",values);
            alert("you clicked submit button");
            action.resetForm();
           
        }
    })


 useEffect(()=>{alert("start your journey with Explore India's Heritage")},[])
   
    
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:-  </label>
      <input 
      type="email"
      id="email"
      name="email"
      value={values.email}
      onChange={handleChange}
      onBlur={handleBlur}
      />{errors.email&&touched.email?<><p>{errors.email}</p></>:""}
      <br/>
      
      <label htmlFor="feedback">Feedback:-  </label>
      <textarea
      id="feedback"
      name="feedback"
      value={values.feedback}
      onChange={handleChange}
      onBlur={handleBlur}
      row="5" />{errors.feedback&&touched.feedback?<><p>{errors.feedback}</p></>:""}
     <br/>
     <input type="submit"/>

      </form>
    </div>
  )
}

export default Feedback
