export default {
  namespace: 'AppMd',
  state: {
    pageNavTitle:"钢加ERP系统",
    animateCls:'right'
  },
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },
  effects: {
  },
  reducers: {
    setCurAnimate(state, action) {
      console.log(action.curAnimate);
      //动态修改当前动画参数  要么是left 要么是right
      return { ...state, animateCls:action.curAnimate};
    }
  },
};
