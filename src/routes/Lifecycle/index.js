import React, { PureComponent } from 'react';
import { Route, Redirect, Switch } from 'dva/router';
import NotFound from '../Exception/404';
import { getRoutes } from '../../utils/utils';



export default class Lifecycle extends PureComponent {
  getCurrentStep() {
    const { location } = this.props;
    const { pathname } = location;
    const pathList = pathname.split('/');
    switch (pathList[pathList.length - 1]) {
      case 'info':
        return 0;
      case 'confirm':
        return 1;
      case 'result':
        return 2;
      default:
        return 0;
    }
  }

  render() {
    const { match, routerData, location } = this.props;
    return (
      <Switch>
        {getRoutes(match.path, routerData).map(item => (
          <Route
            key={item.key}
            path={item.path}
            component={item.component}
            exact={item.exact}
          />
        ))}
        <Redirect exact from="/lifecycle" to="/lifecycle/menu" />
        <Route render={NotFound} />
      </Switch>
    );
  }
}
