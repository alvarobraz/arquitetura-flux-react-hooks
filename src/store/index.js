import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

//import reducer from '../store/modules/cart/reducer'
import rooReducer from './modules/rootReducer';
import rooSaga from './modules/rootSaga';

const sagaMonitor =
process.env.NODE_ENV === 'development'
  ? console.tron.createSagaMonitor()
  : null;

const sagaMiddleware = createSagaMiddleware({
    sagaMonitor,
});

const enhancer = process.env.NODE_ENV === 'development'
? compose(
    console.tron.createEnhancer(),
    applyMiddleware(sagaMiddleware)
  )
: applyMiddleware(sagaMiddleware);

const store = createStore(rooReducer, enhancer);

sagaMiddleware.run(rooSaga);

export default store;
