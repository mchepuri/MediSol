const {
  Environment,
  Network,
  RecordSource,
  Store
} = require('relay-runtime');
const network = Network.create((operation,variables)=>{
  return fetch('https://api.graph.cool/relay/v1/cj9n63e180f6b01082x4d0rmv',{
  method: 'POST',
  headers:{
    'Accept' : 'application/json',
    'Content-Type' : 'application/json'
  } ,
  body: JSON.stringify({
    query: operation.text,
    variables,
  }),
  }
).then(response => {
   return response.json()
})
})//close create

const source = new RecordSource()
const store = new Store(source)

const environment = new Environment ({
  network,
  store,
})

export default environment
