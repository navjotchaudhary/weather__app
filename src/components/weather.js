import React, {Component}from 'react';

class Weather extends Component{
    render(){
        return(
            <div>
            <p>
            
            Location:{this.props.city},{this.props.country}<br />
            temprature:{this.props.temprature}<br />
            humidity:{this.props.humidity}<br />
            pressure:{this.props.pressure}<br />

            </p>
            <hr />
        </div>
        )
        
        
    }
}

export default Weather;