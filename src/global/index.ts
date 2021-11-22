import { App } from 'vue';
import { EventBus } from 'base-core-lib-ts';
import '@/event-bus';

/**
 * 设置全局方法
 * @param app app实体
 */
export const setGlobalProperties = (app: App<Element>) => {
	const globalProperties = app.config.globalProperties;
	globalProperties.EventBus = EventBus;
};
