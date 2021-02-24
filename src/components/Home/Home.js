import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './Home.css';
import Hero from '../../images/Hero-Small.png';

class Home extends Component {
  state = {
    heading: "Angie's B00bz",
  };

  componentDidMount() {
    this.setFeed();
  }

  setFeed = () => {
    this.props.dispatch({
      type: 'FETCH_FEED',
      payload: 'angiemtrudeau'
    });
  }

  onLogin = (event) => {
    this.props.history.push('/login');
  };

  render() {
    return (
      <div className="hero">
        <img src={Hero}></img>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(Home);
