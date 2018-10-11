import { queryNews, queryInfo} from '../services/api';

export default {
  namespace: 'product',

  state: {
    compList:[],
    pluList:[],
    pluList_:[],
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
    *fetchInfo({ payload,callback }, { call, put }) {
      const response = yield call(queryInfo, payload);
      yield put({
        type: 'queryInfo',
        payload: response.pluList,
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
    queryInfo(state, action) {
      return {
        ...state,
        pluList_:action.payload
      };
    },
  },
};
