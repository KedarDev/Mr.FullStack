// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


// const Visitors = () => {
//     const [visitorData, setVisitorData] = useState({});

//     // useEffect(() => {
//     //     document.title = "Visitors | Portfolio APP";
//     //   }, []);

//     // useEffect(() => {
//     //     const fetchVisitorData = async () => {
//     //         try {
//     //             const response = await axios.get(`${VITE_API_BASE_URL}`);
//     //             setVisitorData(response.data.data);
//     //         } catch (error) {
//     //             console.error('Error fetching visitor data:', error);
//     //         }
//     //     };

//     //     fetchVisitorData();
//     // }, []);

//     return (
//         <div className='text-white'>
//             <h2>Visitor Information</h2>
//             <p>IP Address: {visitorData.ipAddress}</p>
//             <p>City: {visitorData.city}</p>
//             <p>Country: {visitorData.country}</p>
//         </div>
//     );
// };

// export default Visitors














// const Visitors = () => {

//     const [ip, setIP] = useState("");
//     const [country, setCountry] = useState("");
//     const [city, setCity] = useState("");


//     const getLocation = async () => {
//         const res = await axios.get("http://ip-api.com/json");
//         setCountry(res.data.country);
//         setCity(res.data.city);
//       };

//       const getData = async () => {
//         const res = await axios.get("https://api.ipify.org/?format=json");
//         setIP(res.data.ip);
//       }

//       useEffect(() => {
//         getLocation();
//       }, []);

//       useEffect(() => {
//         getData();
//       }, []);

//   return (
//     <div>
//     {ip}
//     {country}
//     {city}
// </div>
    
//   )
// }

// export default Visitors