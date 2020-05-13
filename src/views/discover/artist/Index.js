import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom';
import ExtendRoute from '@/components/ExtendRoute';

class Artist extends Component {
  render() {
    return (
      <div className="content">
        <ul>
          <li><Link to="/discover/artist">推荐歌手</Link></li>
          <li><Link to="/discover/artist/cat">流行歌手</Link></li>
        </ul>
        <div className="cn-main">
          <div className="cn-main-inner">
            {
              this.props.routes.map((route, index) => (
                <ExtendRoute key={index} {...route} />
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Artist;