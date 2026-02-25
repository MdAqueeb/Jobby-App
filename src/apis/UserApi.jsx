import axios from 'axios';

const url = "http://localhost:10000"; 

export const Loginapi = (credential) => {
    return axios.post(`${url}/login`, credential)
        .then((res) => {
            console.log(res," res true");
            return res.data;
        })
        .catch((err) => {
            if (err.response) {
                console.log(err.response.data, "err response"); 
                throw err.response.data;                         
            } else {
                console.log(err, "err network");                
                throw err;
            }
        })
}

export const Signupapi = (user) => {
    // user_id, user_profile, username, password, short_bio
    return axios.post(`${url}/singup`, user)
        .then((res) => {
            console.log(res," res ")
        })
        .catch((err) => {
            if(err.response) {
                console.log(err.response.data, "err response"); 
                throw err.response.data;
            } else {
                console.log(err, "err network");                
                throw err;
            }
        })
}