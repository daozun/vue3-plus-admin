<template>
	<el-table :data="tableData" border style="width: 100%">
		<el-table-column prop="ID" label="ID" width="180" align="center" />
		<el-table-column prop="Date" label="Date" width="180" align="center" />
		<el-table-column prop="Title" label="Title" align="center" />
		<el-table-column prop="Author" label="Author" width="180" align="center" />
		<el-table-column prop="Importance" label="Importance" width="180" align="center" />
		<el-table-column prop="Readings" label="Readings" align="center" />
		<el-table-column prop="Status" label="Status" width="180" align="center" />
	</el-table>
</template>

<script lang="ts">
import { reactive, ref, toRefs } from 'vue';

export default {
	props: {
		name: {
			type: String,
			defalut: 'JS',
		},
	},
	setup(props) {
		console.log('props', props.name);
		const tableData = reactive([
			{
				ID: 1,
				Date: '1005/08/20',
				Title: 'hahah',
				Author: 'LQ',
				Importance: 'important',
				Readings: '1',
				Status: 'open',
			},
		]);

		return {
			...toRefs(tableData),
		};
	},
};
</script>
