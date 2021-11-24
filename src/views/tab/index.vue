<template>
	<div class="tab">
		<el-tabs v-model="activeName" type="border-card">
			<el-tab-pane v-for="item in tabList" :key="item.name" :label="item.label" :name="item.name">
				<TabPane :name="activeName" v-if="activeName == item.name" />
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script lang="ts">
import { reactive, ref } from 'vue';
import TabPane from '@/views/tab/components/TabPane.vue';

export default {
	name: 'tab',
	components: { TabPane },
	setup() {
		const activeName = ref('JS');
		const tabList = reactive([
			{ label: 'Javascript', name: 'JS' },
			{ label: 'Java', name: 'JAVA' },
			{ label: 'Python', name: 'PY' },
			{ label: 'PHP', name: 'PHP' },
		]);

		return {
			activeName,
			tabList,
		};
	},
};
</script>

<style lang="scss" scoped>
.tab {
}
</style>
