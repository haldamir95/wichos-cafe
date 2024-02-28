import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ORDERS_LIST } from './constants';
import { Order } from '@/types';

interface OrderListState{
    orderList: Order[]
}
const initialState:OrderListState ={
    orderList: [{drink:'caca'}]
}

const orderListSlice = createSlice({
  name: ORDERS_LIST,
  initialState,
  reducers: {
    addOrder: (state, action:PayloadAction<Order>) => {
      state.orderList.push(action.payload);
    },
  },
});

export const { addOrder } = orderListSlice.actions;
export default orderListSlice.reducer;
