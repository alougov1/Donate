import axios from 'axios';
const API_URL = 'http://localhost:3000';
const client = axios.create({
                             baseURL: 'http://localhost:3000/',
                             json: true
                           })

export default {

  async execute (method, resource, data) {
    return client({
                    method,
                    url: resource,
                    data,
                  }).then(req => {
      return req.data
    })
  },

  test() {
    return this.execute('get', '/api/users')
  }
}
