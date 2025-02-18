import { useFormik } from 'formik';
import React from 'react';
import { signUpSchema } from './schemas/Main';

const initialValues={
    title:"",
    address:"",
    information:"",
    image:"",
}

const Addform = ({visible,addItem}) =>{
   const {values,handleSubmit,handleChange,handleBlur
,errors,touched}= useFormik({
        initialValues:initialValues,
        validationSchema:signUpSchema,
        onSubmit:(values,action)=>{
            console.log("values",values);
            alert("you clicked submit button");
            visible();
            action.resetForm();
            addItem(values);
        }
    })

return(
    <>
    <div>
                <div className="Add-element">
                    <form  onSubmit={handleSubmit}>
                        <label htmlFor="title">Title:-</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            placeholder='here,enter title'
                            value={values.title}
                            onChange={handleChange}
                            onBlur={handleBlur}
                           
                        />
                        {errors.title&&touched.title?<><p>{errors.value}</p></>:""}
                        <br />
                        <label htmlFor="address">Adress:-</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            placeholder='here,enter address'
                            value={values.address}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            />{errors.address&&touched.address?<><p>{errors.address}</p></>:""}
                        <br/>
                        <label hrmlfor="information">Information:-</label>
                        <input
                            type="text"
                            id="information"
                            name="information"
                            placeholder='here,enter information'
                            value={values.information}
                            onChange={handleChange}
                            onBlur={handleBlur} 
                           />{errors.information&&touched.information?<><p>{errors.information}</p></>:""}
                        <br />
                        <label htmlFor="image">Image:-</label>
                        <input
                            type="text"
                            id="image"
                            name="image" 
                            placeholder='here,enter image'
                            value={values.image}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          /><br/>{errors.image&&touched.image?<><p>{errors.image}</p></>:""}
                       <input type="submit"/>
                    </form>
                </div>
                
            </div>
    </>
)
}
export default Addform;

// function Addform({addItem,visible,item}) {
//     const [additem,setAddItem]=useState({});
   
//     const handleAddForm = (e) =>{
//         setAddItem({...additem,[e.target.name]:e.target.value})
        
//     }

//     const handleSubmit = (e)=>{
//          e.preventDefault();
//          addItem(additem);
//          alert("you clicked submit button");
//         visible();
//     };

//     return (
//         <>
//             <div>
//                 <div className="Add-element">
//                     <form onSubmit={handleSubmit}>
//                         <label htmlFor="title">Title:-</label>
//                         <input
//                             type="text"
//                             id="title"
//                             name="title"
//                             value={additem.title ? additem.title : ""}
//                             onChange={handleAddForm}
//                         />
//                         <br />
//                         <label htmlFor="address">Adress:-</label>
//                         <input
//                             type="text"
//                             id="address"
//                             name="address"
//                             value={additem.address ? additem.address : ""}
//                             onChange={handleAddForm} />
//                         <br />
//                         <label hrmlfor="information">Information:-</label>
//                         <input
//                             type="text"
//                             id="information"
//                             name="information" 
//                             value={additem.information ? additem.information : ""}
//                             onChange={handleAddForm}/>
//                         <br />
//                         <label htmlFor="image">Image:-</label>
//                         <input
//                             type="text"
//                             id="image"
//                             name="image" 
//                             value={additem.image ? additem.image : ""}
//                             onChange={handleAddForm}/><br/>
//                        <button type="submit" >Submit</button>
//                     </form>
//                 </div>
                
//             </div>
//         </>
//     )
// }

// export default Addform
