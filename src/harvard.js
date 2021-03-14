// import React, { useState, useEffect } from 'react'


// export default function HarvardArt() {

//     const [art, setArt] = useState();

//     const headers = {
//         query: {
//             apikey: "ac622520-8e83-11e3-bc70-7d9574e88e08"
          
//         }
//     }


//     useEffect(() => {
//         fetch("https://api.harvardartmuseums.org/color", headers)
//             .then(res => res.json())
//             .then((response) => {
//                 console.log("hi", response)


//             },
//                 (error) => {
//                     console.log("sad!!!", error)
//                 }

//             ).catch(error => {

//                 console.log(error);
//             })
//     }, [])




//     return (

//         <div>
//             ART FART
//         </div>
//     )
// }