import {
    browserHistory,
    createRouterState,
    HistoryAdapter,
    RouterStore,
} from 'mobx-state-router';
import RootStore from '../stores/RootStore';

export const notFound = createRouterState('notFound');

export const routes = [
    {
        name: 'HomePage',
        pattern: '/',
    },
    {
        name: 'CartPage',
        pattern: '/cart',
    },
    {
        name: 'notFound',
        pattern: '/not-found',
    },
];

export function initRouter() {
    // const routerStore = new RouterStore(routes, notFound);

    // const historyAdapter = new HistoryAdapter(routerStore, browserHistory);
    // historyAdapter.observeRouterStateChanges();

    // return routerStore;

    const rootStore = new RootStore()
    const {routerStore} = rootStore
    const historyAdapter = new HistoryAdapter(routerStore, browserHistory);
    historyAdapter.observeRouterStateChanges();

    return rootStore

}