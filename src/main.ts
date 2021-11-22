import { createApp } from 'vue';
import App from './App.vue';
import { setupRouter } from '@/router';
import { setupStore } from '@/store';
import { setupGlobDirectives } from '@/directives';
import { setGlobalProperties } from '@/global';
import { setPlugins } from '@/plugin';
import '@/theme/index.scss';

async function bootstrap() {
	const app = createApp(App);
	// 注册路由
	setupRouter(app);
	// 注册Store
	setupStore(app);
	// 注册第三方Ui库、注册插件
	setPlugins(app);
	// 注册全局方法
	setGlobalProperties(app);
	// 注册全局指令
	setupGlobDirectives(app);

	app.mount('#app');
}

bootstrap();
