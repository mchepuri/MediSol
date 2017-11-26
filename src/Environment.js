import { SubscriptionClient } from 'subscriptions-transport-ws';
const {
  Environment,
  Network,
  RecordSource,
  Store
} = require('relay-runtime');

const fetchQuery = (operation,variables)=>{
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
};

const setupSubscription = (config, variables, cacheConfig, observer) => {
  const query = config.text

  const subscriptionClient = new SubscriptionClient('wss://subscriptions.us-west-2.graph.cool/v1/cj9n63e180f6b01082x4d0rmv', {reconnect: true})
  subscriptionClient.subscribe({query, variables}, (error, result) => {
    observer.onNext({data: result})
  })
 }

const network = Network.create(fetchQuery,setupSubscription); //close create

const source = new RecordSource()
const store = new Store(source)

const environment = new Environment ({
  network,
  store,
})

export default environment
