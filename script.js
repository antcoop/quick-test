const options = {
  method: 'GET',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'credentials': 'include',
    'app_id': '4f674bbe',
    'app_key': '874c4dbbaaf0f8e139c64ee1ee2ad27c',
    'content-type': 'application/json'
  },
  url: 'https://od-api.oxforddictionaries.com/api/v2/entries/en-us/hello',
};

axios(options)
  .then(function (response) {
    console.log(response);
  })
  .catch(function(err) {
    console.log(err);
  });
