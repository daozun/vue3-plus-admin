<template>
	<slot v-if="getUserAuthBtnList" />
</template>

<script lang="ts">
import { computed } from 'vue';
import { useStore } from '@/store/index';
import { isArrayValueEqual } from 'base-core-lib-ts';
export default {
	name: 'authAll',
	props: {
		value: {
			type: Array,
			default: () => [],
		},
	},
	setup(props) {
		const store = useStore();
		// 获取 vuex 中的用户权限
		const getUserAuthBtnList = computed(() => {
			return isArrayValueEqual(props.value, store.state.userInfos.userInfos.authBtnList);
		});
		return {
			getUserAuthBtnList,
		};
	},
};
</script>
