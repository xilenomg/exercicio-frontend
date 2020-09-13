import axios from 'axios';

// criando instancia do axios
const instance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 1000,
});

const request = (options = {}) => {
  // aqui podemos fazer qualquer customização de requisição
  return instance(options);
};

export default request;
