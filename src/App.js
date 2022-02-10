// import './App.css';
// import "bootstrap/dist/css/bootstrap.min.css";
// import GoogleLogin from "react-google-login"
// import React, { Component } from 'react';
// import Navbar from './Components/Navbar';
// import Header from "./Components/Header";

// // export class App extends Component {
// //   responseGoogle = (response) => {
// //     console.log(response);
// //     console.log(response.profileObj);
// // }

//   function App () {
//   return (
//     // <div> 
//     <Navbar />
//     <Header />
//     //   {/* <GoogleLogin
//     //   clientId='1059849906986-g02a8atiq4f20oemdbco481odou01nv6.apps.googleusercontent.com'
//     //   buttonText='Login'
//     //   onSuccess={this.responseGoogle}
//     //   onFailure={this.responseGoogle}
//     //   cookiePolicy={'single_host_origin'}
//     //   /> */}
//     // </div>
//   );
// }

// export default App;


import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from "./Components/Navbar";
import Header from "./Components/Header";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Header />
    </>
  );
}

export default App;