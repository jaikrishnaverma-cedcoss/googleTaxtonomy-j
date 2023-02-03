// import data from "./data.txt";
// // import data from "./data1.txt";
// import "./App.css";
// import { useEffect, useState } from "react";
// // import Optioner from "./option";
// function App() {
//   let [lineSubArray, setLineSubArray] = useState([]);

//   const spliter = (text) => {
//     text = text.toString();
//     let x = text.split(">");
//     text = x.map((h) => h.trim());
//     return text;
//   };
//   useEffect(() => {
//     fetch(data)
//       .then((r) => r.text())
//       .then((text) => {
//         let x = text.split("\n");
//         x.splice(0, 1);
//         setLineSubArray([...x]);
//       });
//   }, []);

//   const Taxtonomy = () => {
//     let obj = [];
//     lineSubArray.map((x) => {
//       // return spliter(x)    
//       createNestedObject( obj, spliter(x) )
//     });
//     return obj;
//   };

//   // const arrayRec = (arr, level = 0, row = 0, col = 0, farr = []) => {
//   //   if (row == arr.length) return farr;

//   //   if (col <= level){
//   //     if (farr[arr[row][col]] == undefined) {
//   //       if(col!==0)
//   //       farr[arr[row][col]] = arr[row][col];
//   //     }
//   //   else{
//   //     // farr[arr[row][col]].


      
//   //   }
//   //   }

//   //   if (col + 1 < arr[row].length && col<=level) return arrayRec(arr, level, row, col + 1, farr);
//   //   else return arrayRec(arr, level, row + 1, 0 , farr);
//   // };

  
//   // ['Animals & Pet Supplies', 'Live Animals']
//   var createNestedObject = ( base, names )=>{
//     for( var i = 0; i < names.length; i++ ) {
//         base = base[ names[i] ] = base[ names[i] ]|| {};
//     }
    
// };


//   console.log(Taxtonomy())
//   return (
//     <div className="App">
//       <p>
//         {" "}
//         <pre>{JSON.stringify(Taxtonomy(), null, 4)}</pre>
//       </p>
//     </div>
//   );
// }
// export default App;
