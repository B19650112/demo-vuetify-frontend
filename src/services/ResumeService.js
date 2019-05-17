import axios from 'axios'

export default {

  getListResume() {
    return axios.get('grp02/listtblresume').then(response=> { return response.data })
  },
  
};
