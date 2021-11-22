declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '@ckeditor/ckeditor5-vue';
declare module '@ckeditor/ckeditor5-build-decoupled-document';
declare module 'vue-grid-layout';
// 声明文件，定义全局变量。其它 app.config.globalProperties.xxx，使用 getCurrentInstance() 来获取
interface Window {
	nextLoading: boolean;
}

declare module '*.json';
declare module '*.png';
declare module '*.jpg';
declare module '*.scss';
declare module '*.ts';
declare module '*.js';
