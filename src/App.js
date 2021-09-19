// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Form from './UIComponents/Form';
import CardList from './UIComponents/CardList';
import axios from 'axios';

class App extends React.Component {
  constructor(){
    super();
    this.state = {profiles: []};
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  addNewProfile = (profileData) => {
  	this.setState(prevState => ({
    	profiles: [...prevState.profiles, profileData],
    }));
  };

  render(){
    return (
      <div className="container">
        <Form onSubmit={this.addNewProfile} />
        <CardList carditems={this.state.profiles}/>
      </div>
    );
  }
}

export default App;
