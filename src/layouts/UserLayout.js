import React from 'react';
import { Fragment } from 'react';
import { Link, Redirect, Switch, Route } from 'dva/router';
import DocumentTitle from 'react-document-title';
import { Icon } from 'antd';
import Texty from 'rc-texty';
import TweenOne from 'rc-tween-one';
import GlobalFooter from '../components/GlobalFooter';
import styles from './UserLayout.less';
import logo from '../assets/logo.jpg';
import { getRoutes } from '../utils/utils';
//声明登录页面底部的链接
const links = [
  {
    key: 'help',
    title: '',
    href: 'https://www.baidu.com/',
  },
];

const copyright = (
  <Fragment>
    <TweenOne animation={{ delay: 2000, width: 0, x: 158, type: 'from', ease: 'easeInOutExpo' }} />
    <Texty className="content" type="bottom" split={this.getSplit} delay={2200} interval={30}>
      Copyright 2018 中堃数据
    </Texty>
  </Fragment>
);

class UserLayout extends React.PureComponent {
  getPageTitle() {
    const { routerData, location } = this.props;
    const { pathname } = location;
    let title = '南极机械';
    if (routerData[pathname] && routerData[pathname].name) {
      title = `${routerData[pathname].name} - 南极机械`;
    }
    return title;
  }

  geInterval = e => {
    switch (e.index) {
      case 0:
        return 0;
      case 1:
        return 150;
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        return 150 + 450 + (e.index - 2) * 10;
      default:
        return 150 + 450 + (e.index - 6) * 150;
    }
  };

  getEnter = e => {
    const t = {
      opacity: 0,
      scale: 0.8,
      y: '-100%',
    };
    if (e.index >= 2 && e.index <= 6) {
      return { ...t, y: '-30%', duration: 150 };
    }
    return t;
  };

  getSplit = e => {
    const t = e.split(' ');
    const c = [];
    t.forEach((str, i) => {
      c.push(<span key={`${str}-${i}`}>{str}</span>);
      if (i < t.length - 1) {
        c.push(<span key={` -${i}`} />);
      }
    });
    return c;
  };

  render() {
    const { routerData, match } = this.props;
    return (
      <DocumentTitle title={this.getPageTitle()}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.top}>
              <div className={styles.header}>
                <Link to="/">
                  <p>
                    <img src={logo} alt="" />
                  </p>
                  <span className={styles.title}>
                    <Texty
                      className="title"
                      type="mask-top"
                      delay={400}
                      enter={this.getEnter}
                      interval={this.geInterval}
                      component={TweenOne}
                      componentProps={{
                        animation: [
                          { x: 130, type: 'set' },
                          { x: 100, delay: 500, duration: 450 },
                          {
                            ease: 'easeOutQuart',
                            duration: 300,
                            x: 0,
                          },
                          {
                            letterSpacing: 0,
                            delay: -300,
                            scale: 0.9,
                            ease: 'easeInOutQuint',
                            duration: 1000,
                          },
                          {
                            scale: 1,
                            width: '100%',
                            delay: -300,
                            duration: 1000,
                            ease: 'easeInOutQuint',
                          },
                        ],
                      }}
                    >
                      南极机械大数据展示平台
                    </Texty>
                  </span>
                </Link>
              </div>
            </div>

            <Switch>
              {getRoutes(match.path, routerData).map(item => (
                <Route
                  key={item.key}
                  path={item.path}
                  component={item.component}
                  exact={item.exact}
                />
              ))}
              <Redirect exact from="/user" to="/user/login" />
            </Switch>
          </div>
          <GlobalFooter links={links} copyright={copyright} />
        </div>
      </DocumentTitle>
    );
  }
}

export default UserLayout;
