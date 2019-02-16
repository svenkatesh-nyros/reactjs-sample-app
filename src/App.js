import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import './App.css';

import FormError from './Components/FormError/FormError';
import SearchBox from './Components/SearchBox/SearchBox';
import UsersList from './Components/UsersList/UsersList';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
        users: ['Smith','Dawson','Daniel','John','Logan','Lincoln','Sarah','Parker','Potter',],
        search_res: [],
        search_value: '',
        search_err_status: false,
        search_err_msg: '',
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
  }

  handleSearch = (event) => {
      var txt = event.target.value;

      var matches = this.state.users.filter(function(item){
          if(item.toLowerCase().indexOf(txt.toLowerCase()) !== -1) return true;
      })
      
      if(txt === '')
      {
          this.setState({
              search_res: [],
              search_value: txt,
          })
      }
      else
      {
          this.setState({
              search_res: matches,
              search_value: txt,
              search_err_status:false,
          })   
      }
  }

  submitSearch = () => {
      var txt = this.state.search_value;
      var matches = this.state.users.filter(function(item){
          if(item.toLowerCase().indexOf(txt.toLowerCase()) !== -1) return true;
      })
      if(txt === '')
      {
          this.setState({
              search_err_status: true,
              search_err_msg: '* please enter your search input',
          })
      }
      else
      {
          this.setState({
              search_res: matches,
              search_value: txt,
          }) 
      }
  }

  render() {
    return (
        <Container className="app_container" textAlign="center">
            <div>
                <div className="header_blk">
                    <h3>Sample Search App</h3>
                    <SearchBox 
                        search_value={this.state.search_value} 
                        onClick={() => this.submitSearch()} 
                        onChange={(event) => this.handleSearch(event)} 
                    />
                    <FormError 
                        err_status={this.state.search_err_status} 
                        err_msg={this.state.search_err_msg} 
                    />
                    <UsersList 
                        users={this.state.users} 
                        res_status={false} 
                    />
                    <h3>Search Results </h3>
                    <UsersList 
                        users={this.state.search_res} 
                        res_status={true} 
                    />
                </div>
            </div>
        </Container>
    );
  }
}

export default App;
