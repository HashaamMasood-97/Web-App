import React, { Component } from 'react'

export class extra extends Component {
 getPosts =() =>{
  fetch('http://localhost:3500/homemedic/api/doctor/signup/get')
    .then((res) => res.json())
    .then((data) => {
      let output = '<h2 class="mb-4">Posts</h2>';
      data.forEach(function(post){
        output += `
          <div class="card card-body mb-3">
            <h3> DR.${post.firstName}</h3>
            <p>${post.qualification}</p>
            <p>${post.specialisation}</p>
            <p>${post.workexp}</p>
          </div>
        `;
      });
      document.getElementById('output').innerHTML =output;
    })
  }


  render() {
    return (
    
       
          <div id="output" >
      
          {this.getPosts()}
          </div>
       
      

    )
  }
}

export default extra
