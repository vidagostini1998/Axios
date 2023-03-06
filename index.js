const axios = require('axios');

/* Promisses com AXIOS
axios
    .get('https://api.github.com/users/vidagostini1998')
    .then(response =>axios.get(response.data.repos_url))
    .then(repos => console.log(repos.data))
    .catch(error => console.log(error))
    */



/*Promisses em concorrencia


Promise.all(
    [
        axios.get('https://api.github.com/users/vidagostini1998'),
        axios.get('https://api.github.com/users/vidagostini1998/repos')
    ]
)
.then(responses =>{
    console.log(responses[0].data.login)
    console.log(responses[1].data.length)
})
.catch(erro => console.log(erro.message))

*/