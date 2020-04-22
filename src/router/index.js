// 根路由配置文件 router.js
import React from 'react';
import {
    Router,
    Switch,
    Route,
} from "react-router-dom";
import { createBrowserHistory } from 'history';
//import { createHashHistory } from 'history/createHashHistory';
import App from '../App';
import ExtendRoute from '@/components/ExtendRoute';
import DRecommend from '@/views/discover/Recommend';
import DTopList from '@/views/discover/TopList';
import DPlayList from '@/views/discover/PlayList';
import DDjRadio from '@/views/discover/djradio/Index';
import DDjRadioCategory from '@/views/discover/djradio/Category';
import DArtist from '@/views/discover/artist/Index';
import DArtistRcmd from '@/views/discover/artist/Recommend';
import DArtistCat from '@/views/discover/artist/Cat';
import DAlbum from '@/views/discover/Album';

import My from '../views/my/Index';

import Friend from '../views/friend/Index';
// const DRecommend = () => import('@/views/discover/Recommend');

const history = createBrowserHistory();

const routes = [
    //发现音乐/推荐
    {
        path: '/',
        exact: true,
        component: DRecommend,
    },
    //发现音乐/排行榜
    {
        path: '/discover/toplist',
        component: DTopList
    },
    //发现音乐/歌单
    {
        path: '/discover/playlist',
        component: DPlayList
    },
    //发现音乐/电台主播
    {
        path: '/discover/djradio',
        exact: true,
        component: DDjRadio
    },
    //发现音乐/电台主播/分类
    {
        path: '/discover/djradio/category',
        component: DDjRadioCategory
    },
    //发现音乐/歌手
    {
        path: '/discover/artist',
        component: DArtist,
        routes: [
            //推荐歌手
            {
                path: '/discover/artist',
                exact: true,
                component: DArtistRcmd,
            },
            //分类歌手
            {
                path: '/discover/artist/cat',
                component: DArtistCat,
            }
        ]
    },
    // 发现音乐/新碟上架
    {
        path: '/discover/album',
        component: DAlbum,
    },
    // 我的音乐
    {
        path: '/my',
        component: My,
    },
    // 朋友
    {
        path: '/friend',
        component: Friend,
    },
]

const router = (
    <Router history={history}>
        <App history={history}>
            <Switch>
                {
                    routes.map((route, index) => (
                        <ExtendRoute key={index} {...route} />
                    ))
                }
            </Switch>
        </App>
    </Router>
);

export default router;
