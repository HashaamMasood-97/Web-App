import React, { Component } from 'react'

import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

import axios from 'axios';

export class weeklytimetable extends Component {
  constructor (props){
    super(props)


    
    this.onSubmit=this.onSubmit.bind(this);
  
     this.state = {
        slot1: new Date(),
        slot2: new Date(),
        slot3: new Date(),
        slot4: new Date(),
        slot5: new Date(),
     
  
       
      };

    }
      
      handleChange1 = date1 => {
        this.setState({
          slot1: date1
        });
      };

      handleChange2 = date2 => {
        this.setState({
          slot2: date2
        });
      };


      handleChange3 = date3 => {
        this.setState({
          slot3: date3
        });
      };


      handleChange4 = date4 => {
        this.setState({
          slot4: date4
        });
      };

      handleChange5 = date5 => {
        this.setState({
          slot5: date5
        });
      };


      
      onSubmit(e){
        e.preventDefault();
        const user = {
        
            slot1: this.state.slot1,
            slot2: this.state.slot2,
            slot3: this.state.slot3,
            slot4: this.state.slot4,
            slot5: this.state.slot5,
            
          }
        axios.post('http://localhost:3500/homemedic/doctor/update/timeslot/'+ this.props.match.params.id, user)
              .then(res => console.log(res.data));
              
         //return to homepage after once it is updated
         
         this.props.history.push('/profiledoc');
       
           }
     
      render() {
        return (
        
         <div >
         <h1   style={{textAlign:"center"}}>Select Your Available timeslots for the week</h1>
          <form id="timetable">
            
            <h1  style={{display: "inline-block" , marginTop:"30px"}}>Slot 1</h1>
            <DatePicker  style={{display: "inline-block" }}
            selected={this.state.slot1}
            onSelect={this.handleSelect} 
            onChange={this.handleChange1}
            showTimeSelect
            dateFormat="Pp"
          />
          <br/>
          <h1  style={{display: "inline-block" , marginTop:"30px"}}>Slot 2</h1>
          <DatePicker  style={{display: "inline-block" }}
          selected={this.state.slot2}
          onSelect={this.handleSelect} 
          onChange={this.handleChange2}
          showTimeSelect
          dateFormat="Pp"
        /><br/>
        <h1  style={{display: "inline-block" , marginTop:"30px"}}>Slot 3</h1>
        <DatePicker  style={{display: "inline-block"}}
        selected={this.state.slot3}
        onSelect={this.handleSelect} 
        onChange={this.handleChange3}
        showTimeSelect
        dateFormat="Pp"
      /><br/>
      <h1  style={{display: "inline-block" , marginTop:"30px"}}>Slot 4</h1>
      <DatePicker  style={{display: "inline-block"}}
      selected={this.state.slot4}
      onSelect={this.handleSelect} 
      onChange={this.handleChange4}
      showTimeSelect
      dateFormat="Pp"
    /><br/>
    <h1  style={{display: "inline-block" , marginTop:"30px"}}>Slot 5</h1>
           <DatePicker  style={{display: "inline-block"}}
        selected={this.state.slot5}
                onSelect={this.handleSelect} 
               onChange={this.handleChange5}
                 showTimeSelect
                 dateFormat="Pp"
                        /><br/>
              <input type="submit"  style={{background: "#E77" , textAlign:"center", marginTop:"50px" }} value="Update Profile" className="btn btn-primary" onClick={this.onSubmit}/>

</form>
 
</div>
        );
      }
    }


export default weeklytimetable

    
    
    
    
    
     



