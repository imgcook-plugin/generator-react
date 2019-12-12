'use strict';

import React, { Component } from 'react';

import styles from './style.js';

class Page_0 extends Component {
  render() {
    const url = 'https://img.alicdn.com/tfs/TB1dZPqpxD1gK0jSZFKXXcJrVXa-236-236.png';
    return (
      <div style={styles.block}>
        <img style={styles.pic} src={url} alt="" />
        <span style={styles.imgcook}>imgcook</span>
        <span style={styles.info}>imgcook pull -a 「moduleId」</span>
        <span style={styles.info_2}>来拉取您的应用</span>
        <span style={styles.desc}>阿里经济体前端委员会 · 智能化小组出品</span>
      </div>
    );
  }
}
export default Page_0;
