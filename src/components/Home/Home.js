import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './Home.css';
import Feed from '../Feed/Feed';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';

class Home extends Component {

  componentDidMount() {
    this.setFeed();
  }

  setFeed = () => {
    this.props.dispatch({
      type: 'FETCH_POST',
    });
  }

  onLogin = (event) => {
    this.props.history.push('/login');
  };

  render() {
    return (
      <div className="home">
        <Header/>
        <Hero/>
        <Feed/>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(Home);
