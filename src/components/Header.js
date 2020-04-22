import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

//import { changeUserInfo } from '@/store/actions/user';

import '@/assets/less/header.less'

const navConfig = [
  { path: '/', name: '推荐', exact: true },
  { path: '/discover/toplist', name: '排行榜' },
  { path: '/discover/playlist', name: '歌单' },
  { path: '/discover/djradio', name: '主播电视台' },
  { path: '/discover/artist', name: '歌手' },
  { path: '/discover/album', name: '新碟上架' },
]

class Header extends Component {

  render() {
    let userInfor = null;
    let userBox = null;
    const pathname = this.props.location.pathname;
    console.log(pathname);
    if (!userInfor) {
      userBox = (<div className="loginIn">
        <a className="link">登录</a>
      </div>)
    } else {
      userBox = (<div className="m-tophead">
        <div className="head">
          <img alt='' src={userInfor.avatarUrl} />
        </div>
      </div>)
    }
    return (
      <div className="hd-topbar">
        <div className="hd-inner">
          <div className="logo"><a href='/'>网易云音乐</a></div>
          <Nav />
          <div className='hd-search'>
            <Input
              placeholder="音乐视频电视台"
              prefix={<SearchOutlined className="site-form-item-icon" />}
            />
          </div>
          <a href="#" className="hd-creater">创作中心</a>
          {userBox}
        </div>
        <div className='m-subnav'>
          <div className="wrapper pr">
            <ul className="nav">
              {
                navConfig.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link to={item.path} exact={item.exact} activeClassName="active">
                        {item.name}
                      </Link>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

class Nav extends Component {
  render() {
    return (
      <ul className='hd-nav'>
        <li>
          <Link to='/' exact activeClassName='active'>发现音乐</Link>
        </li>
        <li>
          <Link to='/my' activeClassName='active'>我的音乐</Link>
        </li>
        <li>
          <Link to='/friend' activeClassName='active'>朋友</Link>
        </li>
        <li>
          <a rel="noopener noreferrer" href='https://music.163.com/store/product' target="_blank">商城</a>
        </li>
        <li>
          <a rel="noopener noreferrer" href='https://music.163.com/nmusician/web/index#/' target="_blank">音乐人</a>
        </li>
        <li>
          <Link to='/download' activeClassName='active'>下载客户端</Link>
        </li>
      </ul>
    )
  }
}

// Header.prototype = {
//   userInfor: Prototype.object,
// }

// function select(state) {
//   return {
//     userInfor: state.userInfor
//   }
// }

export default withRouter(Header);