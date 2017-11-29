import React, { Component } from 'react';
import './App.css';
import RestPersonList from './RestPersonList';
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';
class RestApp extends Component {
  render() {
    return (
      <div>
      <Link to='/reg_doc' className='fixed bg-white top-0 right-0 pa4 ttu dim black no-underline'>
        <Button bsStyle='success'>+ Create</Button>
      </Link>
      <RestPersonList/>
    </div>
    );
  }
}

export default RestApp;
