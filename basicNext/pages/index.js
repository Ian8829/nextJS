import React, { Component } from 'react';

import BasicPage from '../templates/basicPage';
import Cosmic from '../models/cosmic';

export default class Home extends Component {
  static async getInitialProps() {
    return await Cosmic.getPage('home');
  }

  render() {
    const page = this.props.object;
    return <BasicPage page={page}/>
  }
}