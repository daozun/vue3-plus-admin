import modulesBusiness from '@/business';
import keepAliveNamesModule from './keepAliveNames';
import requestOldRoutesModule from './requestOldRoutes';
import routesListModule from './routesList';
import tagsViewRoutesModule from './tagsViewRoutes';
import themeConfigModule from './themeConfig';
import userInfosModule from './userInfos';

export default {
	...modulesBusiness,
	themeConfig: themeConfigModule,
	routesList: routesListModule,
	keepAliveNames: keepAliveNamesModule,
	tagsViewRoutes: tagsViewRoutesModule,
	userInfos: userInfosModule,
	requestOldRoutes: requestOldRoutesModule,
};
