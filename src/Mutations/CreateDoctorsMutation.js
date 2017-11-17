import {commitMutation,graphql} from 'react-relay';
import environment from '../Environment'

const mutation = graphql`
  mutation CreateDoctorsMutation($input: CreateDoctorsInput!){
    createDoctors(input : $input){
        doctors{
          lastname
        }
    }
  }
`
export default function CreateDoctorsMutation(firstname,
  lastname,
  description,
  title,
  subTitle,
  datelicensed,
  visitCharge,
  callback){
      const variables={
        input:{
          firstname,
          lastname,
          description,
          title,
          subTitle,
          datelicensed,
          visitCharge,
          clientMutationId: ""
        },
      }
      commitMutation(
        environment,
        {
          mutation,
          variables,
          onCompleted: (response) => {
            console.log(response, environment)
            callback()
          },
          onError: err => console.error(err),
        },
      )
  }
