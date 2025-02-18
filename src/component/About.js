import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "./Loading";

function About() {
  const [userData, setUserData] = useState([]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.interceptors.request.use(
      (config) => {
        // setLoading(true);
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    axios.interceptors.response.use(
      (response) => {
        setLoading(false);
        return response;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  });

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
        setUserData(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  });
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="data">
          {userData.map((item) => (
            <p key={item.id}>
              <p className="name">Name:{item.name}</p>
              <p>User name:{item.username}</p>
              <p>Email:{item.email}</p>
            </p>
          ))}
        </div>
      )}
    </>
  );
}

export default About;

// import React, { useEffect, useState } from "react";
// const API = "https://api.restful-api.dev/objects";

// function About() {
//   const [userData, setUserData] = useState([]);

//   const userApi = async () => {
//     try {
//       const res = await fetch(API);
//       const data = await res.json();
//       console.log(data);
//       setUserData(data);
//     } catch (e) {
//       console.error(e);
//     }
//   };

//   useEffect(() => {
//     userApi(API);
//   }, []);
//   return (
//     <div>
//       {userData.map((item) => (
//         <p key={item.id}>
//           {item.id},{item.name}
//         </p>
//       ))}
//     </div>
//   );
// }

// export default About;
