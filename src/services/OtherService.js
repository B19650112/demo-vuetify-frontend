import axios from 'axios'

export default {

  getListPerson() {
    return axios.get('grp02/listtblresume').then(response=> { return response.data })
  },
  
};
