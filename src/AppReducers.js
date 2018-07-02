import {combineReducers}        from 'redux';
import {authReducer as auth}    from './components/auth/WcMiddlewareWorker';
import {kontenDashboardReduce as dashboard}    from './components/konten/WcMiddlewareWorker';

const rootReducer = combineReducers({
    auth, dashboard
});

export default rootReducer;