import axios from 'axios'
import React, { useEffect,useState } from 'react'


function About() {

  const {data,setData} = useState([]);

  useEffect(()=>{
    axios.get("https://api.restful-api.dev/objects")
    .then((res)=>{
      console.log(res.data);
        setData(res.data);
    })
  },[])
  return (
    <><p>this is about page</p></>
  )
}

export default About










// import React, { useEffect ,useState} from 'react'
// const API="https://api.restful-api.dev/objects";

// function About() {
// const [userData,setUserData]=useState([]);
  
//   const userApi = async()=>{
//     try{
//     const res=await fetch(API);
//     const data=await res.json();
//     console.log(data);
//     setUserData(data);

//     }catch(e){
//       console.error(e);
//     }
//   }

//   useEffect(()=>{userApi(API)},[])
//   return (
//     <div>
//      {userData.map((item)=><p key={item.id}>{item.id},{item.name}</p>)}
//     </div>
//   )
// }

// export default About
