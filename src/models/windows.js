import { queryNews, queryNewsInfo} from '../services/api';

export default {
  namespace: 'windows',

  state: {
    prtkList: [],
    newList:[],
    honList:[],
    aptList:[],
    newsInfo:[],
    compList:[],
  },

  effects: {
    *fetch({ payload,callback }, { call, put }) {
      const response = yield call(queryNews, payload);
      yield put({
        type: 'queryList',
        payload: response,
      });
      if(callback) callback();
    },
    *fetchNewsInfo({ payload,callback }, { call, put }) {
      const response = yield call(queryNewsInfo, payload);
      yield put({
        type: 'newsInfo',
        payload: response.newsInfo,
      });
      if(callback) callback();
    },
  },

  reducers: {
    queryList(state, {payload}) {
      return {
        ...state,
        ...payload
      };
    },
    newsInfo(state, action) {
      return {
        ...state,
        newsInfo:action.payload
      };
    },
  },
};
