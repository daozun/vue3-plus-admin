/*
 * @Date: 2020-05-30 13:11:38
 * @Last Modified by: Yolo
 * @Last Modified time: 2021-10-12 16:30:24
 */
import { ElMessage } from 'element-plus';

const error = (message: string, title?: string) => {
	ElMessage({
		showClose: true,
		message,
		type: 'error',
	});
};
const success = (message: string, title?: string) => {
	ElMessage({
		showClose: true,
		message,
		type: 'success',
	});
};
const warning = (message: string, title?: string) => {
	ElMessage({
		showClose: true,
		message,
		type: 'warning',
	});
};
const info = (message: string, title?: string) => {
	ElMessage({
		showClose: true,
		message,
	});
};

export default {
	error,
	success,
	warning,
	info,
};
