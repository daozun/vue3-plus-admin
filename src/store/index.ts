import { App, InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';
import { RootStateTypes } from '@/store/interface';
import modules from './modules';

export const key: InjectionKey<Store<RootStateTypes>> = Symbol();

export const store = createStore<RootStateTypes>({ modules });

export function useStore() {
	return baseUseStore(key);
}

export function setupStore(app: App<Element>) {
	console.info(store);
	app.use(store, key);
}
