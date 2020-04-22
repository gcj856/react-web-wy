import React, { Component } from 'react';
import { chunk } from '@/utils/array';

import Rcates from './Rcates';

import '@/assets/less/cates.less';

import { getCatelist } from '@/api/djradio'

class DjRadio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cates: [],
    }
  }
  componentDidMount() {
    this.getCateList()
  }
  getCateList = () => {
    let _this = this;
    getCatelist().then((res) => {
      _this.setState({
        cates: chunk(res.categories, 18)
      })
    })
  }

  render() {
    let { cates } = this.state;
    return (
      <div className="catecon">
        <div className="catecon-inner">
          <Rcates cates={cates} />
          <div className="cate-con">
            <h1>电台分类首页具体内容</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default DjRadio;