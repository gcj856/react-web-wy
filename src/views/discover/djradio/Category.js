import React, { Component } from 'react';
import qs from 'query-string';
import Rcates from './Rcates';

import '@/assets/less/cates.less';
import { chunk } from '@/utils/array';
import { getCatelist, getDjRecommendByCate } from '@/api/djradio';
class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cates: [],
      currId: '',
      radioData: null
    }
  }
  componentDidMount() {
    let query = qs.parse(this.props.location.search);
    let id = query.id;
    this.setState({
      currId: id
    })
    this.getCateList();
    this.getDjRecommendByCate(id);
  }
  componentWillReceiveProps(nextProps) {
    let id = qs.parse(nextProps.location.search).id;
    let prevId = qs.parse(this.props.location.search).id;
    if (Number(id) !== Number(prevId)) {
      this.getCateList();
      this.getDjRecommendByCate(id);
    }
  }
  //获取电台分类
  getCateList = () => {
    let _this = this;
    getCatelist().then((res) => {
      _this.setState({
        cates: chunk(res.categories, 18)
      })
    })
  }
  //获取选择电台信息
  getDjRecommendByCate = (id) => {
    let _this = this;
    let params = {
      type: id,
      offset: 0,
      limit: 5
    }
    getDjRecommendByCate(params).then((res) => {
      _this.setState({
        radioData: res.djRadios
      })
    })
  }
  render() {
    let { cates, currId } = this.state;
    return (
      <div className="content">
        <Rcates cates={cates} cateId={currId} />
        <div className="cates-con">
          <h1>对应电台内容</h1>
        </div>
      </div>
    )
  }
}

export default Category;