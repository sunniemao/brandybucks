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

exports.getAllStudents = () => {
  console.log('getAllStudent called')
  return axios.get('http://localhost:3000/api/students/getAll')
};

exports.getStudentByName = (name) => {
  return axios.get('http://localhost:3000/api/students/name', {
    params: {
    name: name
    }
  })
};

exports.addStudent = (student) => {
  return axios({
    method: 'POST',
    url: 'http://localhost:3000/api/students',
    data: student
  });
};