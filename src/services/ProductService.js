import axios from 'axios'

export default {
  getListProduct(mStart,mEnd,mSearch) {
    return axios.get('grp01/listtblproduct', {params: {mstart:mStart,mend:mEnd,searchname:mSearch}})
          .then(response=> {
            return response.data 
          })
  },
  getViewProduct(id) {
    return axios.get('grp01/viewtblproduct/'+id)
          .then(response=> {
            return response.data 
          })
  },
  getDefaultPage() {
    return axios.get('grp99/defaultpage').then(response=> { return response.data })
  },
  getPagination(moption,mStart,mEnd,mSearch) {
    return axios.get('grp99/pagination',{params: {moption:moption,mstart:mStart,mend:mEnd,searchname:mSearch}})
          .then(response=> {
            return response.data
          })
  },
};
