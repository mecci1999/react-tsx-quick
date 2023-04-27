import {
  combineReducers,
  configureStore,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

// 定义state类型
type State = { count: number };

// 定义初始形态
const initialState: State = { count: 0 };

// 创建slice
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.count++;
    },

    decrement(state) {
      state.count--;
    },

    add(state, action: PayloadAction<number>) {
      state.count += action.payload;
    },
  },
});

// 导出 actions 和 reducer
export const { increment, decrement, add } = counterSlice.actions;

export const counterReducer = counterSlice.reducer;

const rootRecuder = combineReducers({ counter: counterReducer });

export type RootState = ReturnType<typeof rootRecuder>;

// 创建 store
const store = configureStore({ reducer: rootRecuder });

export default store;
