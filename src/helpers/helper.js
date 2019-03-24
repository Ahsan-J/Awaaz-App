import _ from 'lodash';

export function getFormData(data) {
  var formData = new FormData();
  _.forEach(data,(value,key)=>{
    formData.append(key,value)
  })
  return formData;
}