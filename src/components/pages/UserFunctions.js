import axios from 'axios'

export const register = newUser => {
  return axios
    .post('http://localhost:3500/homemedic/register', {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password,
      gender:newUser.gender,
      phone:newUser.phone
    })
    .then(response => {
      console.log('Registered')
    })
}

export const logins = user => {
  
        return axios
          .post('http://localhost:3500/homemedic/login', {
            email: user.email,
            password: user.password
          })
          .then(response => {
            console.log(response.data);
            if (typeof response.data === 'string'){
            localStorage.setItem('usertoken', response.data)
            } else {
              return ("password incorrect");
            }
            return response.data
          })
          .catch(err => {
            console.log(err)
          })   
}

export const getProfile = token => {
  return axios
    .get('http://localhost:3500/homemedic/profile', {
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


/*  then(response => {
    console.log(response.data);
    if (typeof response.data === 'string'){
    localStorage.setItem('usertoken', response.data)
    } else {
      console.log("password incorrect");
    }
    return response.data
  }) */

