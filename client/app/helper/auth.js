import axios from 'axios';

exports.login = (user) => {
  return axios({
    method: 'POST',
    url: '/api/login',
    data: user
  });
};

exports.signup = (user) => {
  return axios({
    method: 'POST',
    url: '/api/signup',
    data: user
  });
};
