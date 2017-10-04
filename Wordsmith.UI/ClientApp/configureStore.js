import { createStore, applyMiddleware, compose, combineReducers, GenericStoreEnhancer, Store, StoreEnhancerStoreCreator, ReducersMapObject } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import allReducers from './allReducers';
import { History } from 'history';
import rootSaga from './rootSaga';

export default function configureStore(history, initialState) {
    // Build middleware. These are functions that can process the actions before they reach the store.
    const windowIfDefined = typeof window === 'undefined' ? null : window;
    // If devTools is installed, connect to it
    const devToolsExtension = windowIfDefined && windowIfDefined.devToolsExtension;

    const sagaMiddleware = createSagaMiddleware();

    const createStoreWithMiddleware = compose(
        applyMiddleware(sagaMiddleware, routerMiddleware(history)),
        devToolsExtension ? devToolsExtension() : (next) => next
    )(createStore);

    // Combine all reducers and instantiate the app-wide store instance
    const store = createStoreWithMiddleware(allReducers, initialState);

    sagaMiddleware.run(rootSaga);

    // Enable Webpack hot module replacement for reducers
    if (module.hot) {
        module.hot.accept('./allReducers', () => {
            store.replaceReducer(allReducers);
        });
    }

    return store;
}

// function buildRootReducer(allReducers) {
//     return combineReducers(Object.assign({}, allReducers, { routing: routerReducer }));
// }
