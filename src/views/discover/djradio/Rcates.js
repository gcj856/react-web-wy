import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom';
import { Spin } from 'antd';
import '@/assets/less/cates.less';

class Rcates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currIndex: 0,
    }
  }
  componentDidMount() {

  }
  //当父组件props变化的时候，子组件变化
  componentWillReceiveProps(nextProps) {
    const { cates, cateId } = nextProps;
    cates.forEach((i, index) => {
      if (i.map(item => item.id).indexOf(Number(cateId)) !== -1) {
        this.chooseIndex(index);
      }
    })

  }
  chooseIndex(index) {
    let _this = this;
    if (index < 0 || index > _this.props.cates.length - 1) {
      return false;
    }
    _this.setState({
      currIndex: index
    })
  }
  render() {
    const { cates } = this.props;
    let { currIndex } = this.state;
    if (!cates.length) {
      return (<div className="loading"><Spin tip='加载中。。。' /></div>)
    }

    return (
      <div className="rcates">
        <div className="c-box">
          <div className="c-box-inner" style={{ transform: `translateX(-${currIndex * 900}px)` }}>
            {
              cates.map((group, index) => (
                <ul key={index} className="c-list" >
                  {
                    group.map((item, idx) => (
                      <li key={idx}>
                        <Link to={`/discover/djradio/category?id=${item.id}`}
                          activeClassName="active">
                          <div className="dc-pic" style={{ backgroundImage: `url(${item.picPCBlackUrl})` }}></div>
                          <span className="dc-text">{item.name}</span>
                        </Link>
                      </li>
                    ))
                  }
                </ul>
              ))
            }
          </div>
        </div>
        <div className="ra-btn ra-left" onClick={() => this.chooseIndex(currIndex - 1)}>向左</div>
        <div className="ra-btn ra-right" onClick={() => this.chooseIndex(currIndex + 1)}>向右</div>
        <div className="ra-dot">
          {cates.map((d, dx) => (
            <span key={dx} onClick={() => this.chooseIndex(dx)} className={currIndex === dx ? 'dot-active' : 'dot'}></span>
          ))}
        </div>
      </div>
    )
  }
}


export default Rcates;