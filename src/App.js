import React, { Component } from 'react';

import './App.css';
import Form from './components/Form';
import Weather from './components/weather';
import Title from './components/title';

const API_KEY = "90664b6a40039ed741a5d60d74f1e2c9";
                
class App extends Component {
  state = {
    city :undefined,
    country:null,
    temprature:null,
    humidity:null,
    pressure:null

  }
  getWeather = async (e) => {
    e.preventDefault();
    const City = e.target.elements.City.value;
    const Country = e.target.elements.Country.value;
    const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${City},${Country}&appid=${API_KEY}&units=metric`);
    const data = await apiCall.json();
    console.log(data);
    this.setState({
      city:data.name,
      country:data.sys.country,
      temprature:data.main.temp,
      humidity:data.main.humidity,
      pressure:data.main.pressure

    });
    
    
   
  }
  render() {
    return (
    <div>
        <p>this is a weather app</p>
        <Title />
        <Form getWeather={this.getWeather}/>
        <Weather city={this.state.city}
        country={this.state.country}
        temprature={this.state.temprature}
        humidity ={this.state.humidity}
        pressure ={this.state.pressure}
        />
    </div>
      
    );
  }
}

export default App;
