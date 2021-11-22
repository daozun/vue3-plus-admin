import Mock from 'mockjs';
import adminMenu from './adminMenu.json';

export default ({ mock }) => {
	if (!mock) return;
	Mock.mock('/getMenu', 'get', () => {
		debugger;
		return adminMenu;
	});
};
