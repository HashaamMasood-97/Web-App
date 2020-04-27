/* import React, { Component } from 'react'
import axios from 'axios'

const getProfile = token => {
  return axios
    .get('http://localhost:3500/homemedic/api/account/signup/get', {
      headers: { Authorization: ` ${token}` }
    })
    .then(response => {
      console.log(response)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export class extra extends Component {
  constructor() {
    super()
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      errors: {}
    }
  }

  
    componentDidMount() {
        const token = localStorage.usertoken
        getProfile(token).then(res => {
          this.setState({
            first_name: res.first_name,
            last_name: res.last_name,
            email: res.email
          })
        })
      }
    
   

  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">PROFILE</h1>
          </div>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>Fist Name</td>
                <td>{this.state.first_name}</td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>{this.state.last_name}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{this.state.email}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
export default extra


 getPosts =() =>{
  fetch('http://localhost:3500/homemedic/api/account/signup/get')
      .then((res) => res.json())
      .then((data) => {
        let output = '<h2 class="mb-4">Posts</h2>';
        data.forEach(function(post){
          output += `
            <div class="card card-body mb-3">
              <h3> DR.${post.firstName}</h3>
              <p>${post.lastName}</p>
              <p>${post.contact}</p>
            
            </div>
          `;
        });
        document.getElementById('output').innerHTML =output;
      })
    } 
  
 }
 
 
    <div id='output'>  
      {this.getPosts()}
    </div>       */