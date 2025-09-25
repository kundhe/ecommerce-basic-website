// import axios from "axios";
// import { useEffect, useState } from "react";



// export const useApi = ()=>{
//     type apiprops = {
//         id: number;
//         title: string;
//         price: number;
//         description: string;
//         category: string;
//         image: string;
//       };
//       const apiLink = import.meta.env.VITE_BASE_URL;
//     //   const apiSpecifiedLink = import.meta.env.VITE_BASE2_URL;
    
//       const [apiData, setApiData] = useState<apiprops[]>();
//     //   const [apiSpecifiedData, setApiSpecifiedData] = useState<apiprops[]>();
    
//       useEffect(() => {
//         getApiLinks();
//         // getSpecifiedApiLinks();
//       }, []);
    
//       const getApiLinks = () => {
//         axios
//           .get(apiLink)
//           .then((response) => {
//             setApiData(response.data);
//           })
//           .catch((error) => {
//             console.error("Wahala", error);
//           });
//       };
//       return{                   
//         apiData,
//         apiLink
//       }
    
// }