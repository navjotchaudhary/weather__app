import React, {Component}from 'react';

class Form extends Component{
    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     this.props.getWeather(e);
    //     //console.log(e.target)
    // }
    render(){
        return(
            <div>
                
                <form onSubmit={this.props.getWeather}>
                    <label htmlFor="City" placeholder="City...">City</label>
                    <input type="text" name="city" id="City"></input><br />
                    <label htmlFor="Country" placeholder="Country...">Country</label>
                    <input type="text" name="Country" id="Country"></input>
                    <button type="Submit">Submit</button>
                </form>
                
            </div>
        )
        
        
    }
}

export default Form;