import { appRx } from './defaultConfig/indexRx';
import { errorCatcher, errorHandle, filter } from 'base-core-lib-ts';
import { API_GET_ADMIN_MENU, API_GET_TEST_MENU } from '@/api';

export const getMenuAdmin = appRx.get(API_GET_ADMIN_MENU, errorCatcher, errorHandle, filter);
export const getMenuTest = appRx.get(API_GET_TEST_MENU, errorCatcher, errorHandle, filter);
