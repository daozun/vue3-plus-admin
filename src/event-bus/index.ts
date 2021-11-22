/*
 * @Date: 2021-09-23 13:26:16
 * @Last Modified by: Yolo
 * @Last Modified time: 2021-10-12 16:30:31
 * 跨模块通信
 */
import { EventBus } from 'base-core-lib-ts';
import message from '@/event-bus/message.events';
// import { setStore, getStore, removeStore } from '@/utils/store'

/**
 * 登录成功后，跳转首页
 */
const loginSuccess = () => {};

// 装载functions
const events = {
	loginSuccess,
	...message,
};
Object.keys(events).forEach((eventName: string) => {
	EventBus.on(eventName, (events as any)[eventName]);
});
