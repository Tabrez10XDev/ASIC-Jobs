import axios from 'axios';

export const apiGetMethod = async ({ endpoint, token = null }) => {
  let header = { headers: { 'Content-Type': 'application/json', Accept: 'application/json' } };
  return new Promise((resolve, reject) => {
    axios.get(endpoint, header).then((response) => {
      resolve(response?.data);
    }).catch(error => {
      reject(error);
    })
  })
};

export const apiPostMethod = async ({ endpoint, params = {}, token = null, headers = {} }) => {
  let header = { headers: { 'Content-Type': 'application/json', Accept: 'application/json' } };
  if (token) {
    header = { headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json', Accept: 'application/json' } }
  }
  if (headers) {
    header = headers;
  }
  return new Promise((resolve, reject) => {
    // console.log("params=======>", params)
    axios.post(endpoint, params, header)
      .then(response => {
        resolve(response?.data);
      }).catch(error => {
        reject(error);
      })
  })
};

export const apiPostFormDataMethod = async ({ endpoint, params, token = null }) => {
  let header = { 'Content-Type': 'multipart/form-data', Accept: 'application/json' }
  if (token) {
    header = { 'Authorization': `Bearer ${token}`, 'Content-Type': 'multipart/form-data', Accept: 'application/json' }
  }

  return new Promise((resolve, reject) => {
    axios.post(endpoint, params, header)
      .then(response => {
        resolve(response?.data);
      }).catch(error => {
        reject(error);
      })
  })
};

export const apiDeleteMethod = async ({ endpoint, token = null }) => {
  let header = { headers: { 'Content-Type': 'application/json', Accept: 'application/json' } };
  return new Promise((resolve, reject) => {
    axios.delete(endpoint, header).then((response) => {
      resolve(response?.data);
    }).catch(error => {
      reject(error);
    })
  })
};

export const apiPatchMethod = async ({ endpoint, params = {}, token = null }) => {
  let header = { headers: { 'Content-Type': 'application/json', Accept: 'application/json' } };
  if (token) {
    header = { headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json', Accept: 'application/json' } }
  }
  return new Promise((resolve, reject) => {
    axios.patch(endpoint, params, header)
      .then(response => {
        resolve(response?.data);
      }).catch(error => {
        reject(error);
      })
  })
};

export const apiPutMethod = async ({ endpoint, params = {}, token = null, headers = {} }) => {
  let header = { headers: { 'Content-Type': 'application/json', Accept: 'application/json' } };
  if (token) {
    header = { headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json', Accept: 'application/json' } }
  }
  if (headers) {
    header = headers;
  }
  return new Promise((resolve, reject) => {
    axios.put(endpoint, params, header)
      .then(response => {
        resolve(response?.data);
      }).catch(error => {
        reject(error);
      })
  })
};