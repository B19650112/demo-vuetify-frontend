import axios from 'axios'

export default {
  getListProduct(mSearch) {
    return axios.get('grp01/listtblproduct', {params: {searchname:mSearch}})
      .then(response=> { return response.data })
  },
  getViewProduct(id) { 
    return axios.get('grp01/viewtblproduct/'+id).then(response=> { return response.data })
  },
};
