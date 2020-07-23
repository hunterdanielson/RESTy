export const requestAPI = (urlRequest, method, body) => {
  if(method === 'GET') {
    return fetch(urlRequest)
      .then(res => res.json());
  }
  
  return fetch(urlRequest, {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    body
  })
    .then(res => res.json());

};
