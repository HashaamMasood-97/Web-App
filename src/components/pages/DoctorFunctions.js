import axios from 'axios'

export const registerDoc = newUser => {
  return axios
    .post('http://localhost:3500/homemedic/register/doctor', {
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
      password: newUser.password,
      gender:newUser.gender,
      contact:newUser.contact,
      CNIC: newUser.CNIC,
      DOB: newUser.DOB,
      specialisation: newUser.specialisation,
      workexp: newUser.workexp,
      qualification: newUser.qualification,
      nationality:newUser.nationality
    })
    .then(response => {
      console.log('Registered')
    })
}

export const loginsDoc = user => {
  
        return axios
          .post('http://localhost:3500/homemedic/login/doctor', {
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

export const getProfileDoc = token => {
  return axios
    .get('http://localhost:3500/homemedic/profile/doctor', {
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