import React, { Component } from 'react';
import './App.css';
import {
  createFragmentContainer,
  graphql
} from 'react-relay';
import NewDoctorsSubscription from './Subscriptions/NewDoctorsSubscription';
class ListView extends Component {
  componentDidMount(){
    NewDoctorsSubscription();
  }
  render() {
    return (
      <div>
        <p/>
        {this.props.viewer.allDoctorses.edges.map(({node}) =>
        <p>
          {node.description}
        </p>
        )}
      </div>
    );
  }
}
export default createFragmentContainer(ListView,graphql`
  fragment ListView_viewer on Viewer{
    allDoctorses(last:200){
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
`);
