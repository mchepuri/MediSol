import {
  graphql,
  requestSubscription
} from 'react-relay';
import environment from '../Environment';
const newDoctorSubscription = graphql`
  subscription NewDoctorsSubscription {
    # 1
    Doctors(filter: {
      mutation_in: [CREATED,UPDATED]
    }) {
      # 2
      node {
        id
        firstname
        lastname
        description
      }
    }
  }
`;
const errorFunc=(error)=>{
  console.log('An error ocurred', error);
}
export default () => {

  const subscriptionConfig = {
    subscription: newDoctorSubscription,
    variables: {},
    onError: error=>errorFunc(error),
  }

  requestSubscription(
    environment,
    subscriptionConfig
  )
}
