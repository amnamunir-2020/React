import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Asslamoalikum ReactWorld!
        </a>
      </header>
    </div>
  );
}

export default App;


//CLASS COMPONENT----------------------
// class App extends React.Component{
//   render(){
//     return(

 //jsx javascrpt extensible

//       <div>
//         <h1>Asslamoalaikum Warhmatullahi Wabarakatuhu!</h1>
//       </div>
//     )
//   }
// }
//export default App

//FUNCTION COMPONENT------------------------
// function App(){
//     return(

//       <div>
//         <h1>Asslamoalaikum--!</h1>
//       </div>
//     )
// }

// export default App



//Variable in class function-------
// class App extends React.Component{
//   render(){

//     let name="Amna Munir"
//     return(
// //jsx mai jubbi javascript istemal kernihai tou curly braces used!!
//       <div>
    
//     <h1>{name}</h1>
//       </div>
//     )
//   }
// }
// export default App


//parsing error---if any one mistake full page  console error for javascript
//react auto refresh   

// --variable in class function-------Concatenate templae literals and array----------------------------------
// class App extends React.Component{
//   render(){

//     let firstname="Maher";
//     let lastname="Zain";
//      let array=[10,61,19]
//     return(
// //jsx mai jubbi javascript istemal kernihai tou curly braces used!! 
//       <div>
     
//     <h1>{`${firstname} ${lastname}`}</h1>
//   <h1>{array}</h1>
//       </div>
//     )
//   }
// }
// export default App







