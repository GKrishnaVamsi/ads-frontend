import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import Navbar from "./Navbar";
import 'date-fns'
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns'
import {MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker} from '@material-ui/pickers';
import logo from "../Components/pictures/logo5.png";
import { Link } from "react-scroll";
// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    const [loginData, setLoginData] = useState(
        localStorage.getItem("loginData")
        ? JSON.parse(localStorage.getItem("loginData"))
        : null
    );

    const handleFailure = (result) => {
        alert(result);
    };

    const handleLogin = async (googleData) => {
    const res = await fetch('/api/google-login', {
      method: 'POST',
      body: JSON.stringify({
        token: googleData.tokenId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    setLoginData(data);
    localStorage.setItem('loginData', JSON.stringify(data));
  };
  const handleLogout = () => {
    localStorage.removeItem('loginData');
    setLoginData(null);
  };

  const [selectedDate, setSelectedDate] = React.useState(
    new Date('2014-08-18T21:11:54')
  );

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <div>
              <nav className="navbar navbar-expand-lg navbar-light bg-black fixed-top">
            <div className="container">

                <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo..." /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link smooth = {true} to = "home" offset={-110} className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>

                        </li>

                    </ul>

                </div>

            </div>
        </nav>
        <div id="home" className="header-wrapper">
            <div className="main-info">

                <h1> Mjölnir </h1>

                <div className="btn-main-offer">
                    {loginData ? (
                    <div>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify="space-around">
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            margin="normal"
                            id="date-picker"
                            label="Date Picker"
                            format="MM/dd/yyyy"
                            value={selectedDate}
                            onChange = {handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date'
                            }}
                            />
                        <KeyboardTimePicker 
                            margin="normal"
                            id="time-picker"
                            label = 'Time Picker'
                            value={selectedDate}
                            onChange = {handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change time'
                            }}
                            />
                            </Grid>
                            </MuiPickersUtilsProvider>
                     <h3>You logged in as {loginData.name}</h3>
                     <button onClick={handleLogout}>Logout</button>
                    </div>
                    ) : (
                    
                    <GoogleLogin
                    clientId='332100088618-bu9ktvl1h1hk9fvujl402r8p6k5ih8nc.apps.googleusercontent.com'
                    buttonText="Login with Google Account"
                    onSuccess={handleLogin}
                    onFailure={handleFailure}
                    cookiePolicy={'single_host_origin'}
                    >
                    </GoogleLogin>
                    )}
                </div>

            </div>
        </div>
        </div>
    )
}
export default Header