import React, { Component } from 'react'

export class extra extends Component {
 
  getPosts(){
    fetch('http://localhost:3500/homemedic/api/doctor/signup/get')
    .then((res) => res.json())
    .then((data) => {
      let output = '<h2 class="mb-4">Posts</h2>';
      data.forEach(function(post){
        output += `
          <div class="card card-body mb-3">
            <h3> DR. ${post.firstName}</h3>
            <p>${post.qualification}</p>
            <p>${post.specialisation}</p>
            <p>${post.workexp}</p>
          </div>
        `;
      });
      document.getElementById('output').innerHTML = output;
    })
  }


  render() {
    return (
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Fetch API Sandbox</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossOrigin="anonymous" />
        <div className="container">
          <h1 className="display-4 mb-4">Fetch API Sandbox</h1>
          <div className="d-flex">
            <button className="btn btn-primary mr-4" id="getText">Get Text</button>
            <button className="btn btn-success mr-4" id="getUsers">Get JSON</button>
            <button className="btn btn-warning mr-4" id="getPosts" onClick={this.getPosts}>Get API DATA</button>
          </div>
          <hr />
          <div id="output" />
          <form id="addPost">
            <div className="form-group">
              <input type="text" id="title" className="form-control" placeholder="Title" />
            </div>
            <div className="form-group">
              <textarea id="body" className="form-control" placeholder="Body" defaultValue={""} />
            </div>
            <input type="submit" className="btn btn-secondary" defaultValue="Submit" />
          </form>
        </div>
      </div>
    

    )
  }
}

export default extra
