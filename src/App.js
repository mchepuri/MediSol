import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import environment from './Environment';
import {
  QueryRenderer,
  graphql
} from 'react-relay';
const AppAllPostsQuery = graphql`
  query AppAllPostsQuery {
    viewer{
        allPosts(last:2){
         edges{
          	node{
              description
            }
        	}
          }
    }
  }
`
const AppAllDocsQuery = graphql`
  query AppAllDocsQuery {
    viewer{
        allDoctorses(last:2){
            edges{
                node{
          				firstname,
          				lastname,
          				subTitle,
                  description
                }
              }
          }
        }
    }
`
class App extends Component {
  render() {
    return (
      <QueryRenderer
          environment={environment}
          query={AppAllDocsQuery}
          render={({error, props}) => {
            if (error) {
              return <div>{error.message}</div>
            } else if (props) {
              return   <div className='w-100' style={{ maxWidth: 400 }}>
                  {props.viewer.allDoctorses.edges.map(({node}) =>
                    <div style={{height:100}}>{node.description}</div>
                  )}
                </div>
            }
            return <div>Loading</div>
          }}
        />
    );
  }
}

export default App;
