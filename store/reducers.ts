import { combineReducers } from 'redux';
import orderListSlice from './slices/ordersList/index'; // Importa tu reducer específico

const rootReducer = combineReducers({
    orderListSlice: orderListSlice, // Asigna el reducer a una clave específica en el estado global
});

export default rootReducer;
