import { routerRedux } from 'dva/router';
import { stringify } from 'qs';
import { fakeAccountLogin } from '../services/api';
import { setAuthority } from '../utils/authority';
import { reloadAuthorized } from '../utils/Authorized';
import { getPageQuery } from '../utils/utils';

export default {
  namespace: 'login',

  state: {
    status: undefined,
  },

  effects: {
    *login({ payload }, { call, put }) {
      const response = yield call(fakeAccountLogin, payload);
      yield put({
        type: 'changeLoginStatus',
        payload: response,
      });
      // Login successfully
      reloadAuthorized();
      yield put(routerRedux.push('/'));
      /*if (response.success === 'true') {
        //登录成功的时候显示菜单数据
        //用yield call调用service里面的方法
        //const menu = yield call(queryMenuData,payload);
        //将菜单数据缓存到本地
        //1,key值  value
        //sessionStorage.setItem("menu",JSON.stringify(menu))//转化为字符串
        localStorage.removeItem('userName');
        localStorage.setItem('access-token', response.accessToken);
        localStorage.setItem('userName', payload.username);
        localStorage.setItem('menu', JSON.stringify(response.loginMenu));
      }*/
    },
    *logout(_, { put }) {
      yield put({
        type: 'changeLoginStatus',
        payload: {
          status: false,
          currentAuthority: 'guest',
        },
      });
      reloadAuthorized();
      yield put(
        routerRedux.push({
          pathname: '/user/login',
          search: stringify({
            redirect: window.location.href,
          }),
        })
      );
    },
  },

  reducers: {
    changeLoginStatus(state, { payload }) {
      setAuthority(payload.currentAuthority);
      return {
        ...state,
        status: payload.status,
        type: payload.type,
      };
    },
  },
};
