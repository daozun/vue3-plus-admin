import { App } from 'vue';
import ElementPlus from './element';
import VueGridLayout from './vueGridLayout';
import { i18n } from '@/i18n/index';
import { Local } from '@/utils/storage';
/**
 * 全局组件大小
 * @returns 返回 `window.localStorage` 中读取的缓存值 `globalComponentSize`
 */
const globalComponentSize = Local.get('themeConfig')?.globalComponentSize;

// config plugins
export function setPlugins(app: App<Element>) {
	// 设置Ui框架
	app.use(ElementPlus, { i18n: i18n.global.t, size: globalComponentSize });
	// 使用布局框架
	app.use(VueGridLayout);
	// 使用国际化
	app.use(i18n);
}
