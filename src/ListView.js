import React, { Component } from 'react';
import './App.css';
import {
  createFragmentContainer,
  graphql
} from 'react-relay';

class ListView extends Component {
  render() {
    return (
      <div>
        {this.props.viewer.allDoctorses.edges.map(({node}) =>
        node.description
        )}
      </div>
    );
  }
}
export default createFragmentContainer(ListView,graphql`
  fragment ListView_viewer on Viewer{
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
`);
