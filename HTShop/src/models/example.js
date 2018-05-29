
export default {

  namespace: 'example',

  state: {
    count:1,
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },

    *add({ payload }, { call, put, select }){
      console.log("click btn2");
      yield put(
        {
          type:'addone',
          payload:{
            count:2
          }
        }
      );
    }

  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    addone(state, action){
      return {...state, ...action.payload};
    }
  },

};
