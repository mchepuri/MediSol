import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import environment from './Environment';
import {Button} from 'react-bootstrap';
import ListView from './ListView';
import { Link } from 'react-router-dom';
import {
  QueryRenderer,
  graphql
} from 'react-relay';
const AppAllDocsQuery = graphql`
  query AppAllDocsQuery {
    viewer{
        ...ListView_viewer
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
                    <ListView viewer={props.viewer}/>
                    <Link to='/reg_doc' className='fixed bg-white top-0 right-0 pa4 ttu dim black no-underline'>
                      <Button bsStyle='success'>+ Create</Button>
                    </Link>
                </div>
            }
            return <div>Loading</div>
          }}
        />
    );
  }
}

export default App;
