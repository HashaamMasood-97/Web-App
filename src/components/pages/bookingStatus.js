import React, { Component } from 'react'



import axios from 'axios';
import './admin.css';

export class bookingStatus extends Component {
  constructor (props){
    super(props)



    this.onChangeBookingStatus=this.onChangeBookingStatus.bind(this);
    this.onChangeReason=this.onChangeReason.bind(this);
    
    this.onSubmit=this.onSubmit.bind(this);
  
     this.state = {
     
        bookingstatus:'',
        reason:''
     
  
       
      };

    }


   

  
    onChangeBookingStatus(e){
      this.setState({
       bookingstatus: e.target.value
      });
  }

  

  onChangeReason(e){
      this.setState({
       reason: e.target.value
      });
  }


      
      onSubmit(e){
        e.preventDefault();
        const user = {
        
            bookingstatus: this.state.bookingstatus,
            reason:this.state.reason

            
          }
        axios.post('http://localhost:3500/homemedic/api/patient/update/bookingstatus/'+ this.props.match.params.id, user)
              .then(res => console.log(res.data));
              
         //return to homepage after once it is updated
         
         this.props.history.push('/profiledoc');
       
           }
     
      render() {
        return (
         <div>
        
          <form id="bookingnew">
          <h1 style={{ textAlign:"center"}}>Booking Status</h1>
          <div className="form-group"   style={{ textAlign:"center"}}>
                 
       
                        <div className="form-check form-check-inline">
                           <input className="form-check-input"
                    type="radio"
                    name="priorityOption"
                    id="priorityLow"
                    value="Booking Completed"
                    checked={this.state.bookingstatus=='Booking Completed'}
                    onChange={this.onChangeBookingStatus}
                    />
             <label className="form-check-label">      Completed     </label>

                    
             <input className="form-check-input"
                    type="radio"
                    name="priorityOption"
                    id="priorityMedium"
                    value="Booking Accepted"
                    checked={this.state.bookingstatus=='Booking Accepted'}
                    onChange={this.onChangeBookingStatus}
                    />
             <label className="form-check-label" >   Accepted   </label>

                  
                 <input className="form-check-input"
                    type="radio"
                    name="priorityOption"
                    id="priorityMediumss"
                    value="Booking Declined"
                    checked={this.state.bookingstatus=='Booking Declined'}
                    onChange={this.onChangeBookingStatus}
                    />
             <label className="form-check-label" >   Declined   </label>
                  </div>   

                  </div>

                  <h3  style={{ textAlign:"center", marginTop:"50px"}}>  Reason of Decline</h3>
                    <textarea style={{ textAlign:"center"}} className="input100" name="If" placeholder="(If any)" defaultValue={""}  value={this.state.reason}  onChange={this.onChangeReason}/>
               
         

            
              <input type="submit"  value="Update" className="btn btn-primary" onClick={this.onSubmit}/>

</form>

</div>
        );
      }
    }


export default bookingStatus
//style={{ textAlign:"center", marginLeft:"280px", marginTop:"50px"}} 
    
    
    
    
    
     




