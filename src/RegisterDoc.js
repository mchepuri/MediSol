import React,{Component} from 'react';
import {FormGroup,ControlLabel,FormControl} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';
import DatePicker from 'react-date-picker';
import CreateDoctorsMutation from './Mutations/CreateDoctorsMutation';
import './App.css';
class RegisterDoc extends Component {
  state = {
    firstname: '',
    lastname: '',
    subTitle: '',
    description: '',
    title: '',
    datelicensed:'',
    visitCharge:'',
  }
  render() {
    return (
      <div>
        <FormGroup
            controlId="formBasicText">
            <ControlLabel>Please fill your details</ControlLabel>
            <br/>
            <FormControl
              type="text"
              bsClass="TxtBox"
              value={this.state.firstname}
              placeholder="Enter First Name"
              onChange={(e) => this.setState({firstname: e.target.value})}
            />
            <FormControl
              type="text"
              bsClass="TxtBox"
              value={this.state.lastname}
              placeholder="Enter Last Name"
              onChange={(e) => this.setState({lastname: e.target.value})}
            /><br/>
            <FormControl
              type="text"
              bsClass="TxtBox"
              value={this.state.title}
              placeholder="Enter Title"
              onChange={(e) => this.setState({title: e.target.value})}
            />
            <FormControl
              type="text"
              bsClass="TxtBox"
              value={this.state.subTitle}
              placeholder="Enter Sub Title"
              onChange={(e) => this.setState({subTitle: e.target.value})}
            />
            <br/>
            <DatePicker id="example-datepicker"
              value={this.state.datelicensed}
              onChange={(e) => this.setState({datelicensed: e.target.value})} />
            <br/>
            <FormControl
              bsClass="TxtBox"
              value={this.state.description}
              componentClass="textarea"
              placeholder="Enter description"
              onChange={(e) => this.setState({description: e.target.value})}
            /><br/>
            <FormControl
              bsClass="TxtBox"
              value={this.state.visitCharge}
              componentClass="textarea"
              placeholder="Enter price"
              onChange={(e) => this.setState({visitCharge: e.target.value})}
            />
          </FormGroup>
          <Link to='/' className='fixed bg-white top-0 right-0 pa4 ttu dim black no-underline'>
            <Button bsStyle='success'> Back</Button>
          </Link>
          <Button bsStyle='primary' onClick={this._handleSave.bind()}>+ Save</Button>
      </div>
    );
  }
  _handleSave=()=>{
    console.log("save clicked");
    const {firstname,lastname,description,title,subTitle,datelicensed,visitCharge} = this.state
    CreateDoctorsMutation(firstname,lastname,description,title,subTitle,datelicensed,Number.parseInt(visitCharge), () => this.props.history.replace('/'));
  }
}
export default RegisterDoc;
