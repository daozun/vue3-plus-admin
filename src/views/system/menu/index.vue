<template>
	<div class="system-menu-container">
		<screen-table
			class="indexlayout-main-conent"
			row-key="path"
			:data="menuTableData"
			:loading="false"
			:tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
			:pagination="{
				current: 0,
				pageSize: 10,
				total: 1000,
				onChange: (page) => {},
			}"
		>
			<template #header>
				<el-row>
					<el-col :span="8">
						<el-button type="primary"> 新增 </el-button>
					</el-col>
					<el-col :span="16" class="text-align-right">
						<el-input style="width: 200px; margin-left: 16px" placeholder="请输入搜索内容">
							<template #suffix>
								<i class="el-input__icon el-icon-search cursor-pointer" />
							</template>
						</el-input>
						<el-button style="margin-left: 8px"> 高级搜索 </el-button>
					</el-col>
				</el-row>
			</template>

			<el-table-column label="菜单名称" show-overflow-tooltip>
				<template #default="scope">
					<i :class="scope.row.meta.icon"></i>
					<span class="ml10">{{ $t(scope.row.meta.title) }}</span>
				</template>
			</el-table-column>
			<el-table-column prop="path" label="路由名称" show-overflow-tooltip width="150"></el-table-column>
			<el-table-column label="组件地址" show-overflow-tooltip>
				<template #default="scope">
					<span>{{ scope.row.component }}</span>
				</template>
			</el-table-column>
			<el-table-column label="隐藏" show-overflow-tooltip width="70">
				<template #default="scope">
					<span v-if="scope.row.meta.isHide" class="color-primary">是</span>
					<span v-else class="color-info">否</span>
				</template>
			</el-table-column>
			<el-table-column label="缓存" show-overflow-tooltip width="70">
				<template #default="scope">
					<span v-if="scope.row.meta.isKeepAlive" class="color-primary">是</span>
					<span v-else class="color-info">否</span>
				</template>
			</el-table-column>
			<el-table-column label="固定" show-overflow-tooltip width="70">
				<template #default="scope">
					<span v-if="scope.row.meta.isAffix" class="color-primary">是</span>
					<span v-else class="color-info">否</span>
				</template>
			</el-table-column>
			<el-table-column label="外链" show-overflow-tooltip width="70">
				<template #default="scope">
					<span v-if="scope.row.meta.isLink && !scope.row.meta.isIframe" class="color-primary">是</span>
					<span v-else class="color-info">否</span>
				</template>
			</el-table-column>
			<el-table-column label="iframe" show-overflow-tooltip width="70">
				<template #default="scope">
					<span v-if="scope.row.meta.isLink && scope.row.meta.isIframe" class="color-primary">是</span>
					<span v-else class="color-info">否</span>
				</template>
			</el-table-column>
			<el-table-column label="权限标识" show-overflow-tooltip>
				<template #default="scope">
					<span>{{ scope.row.meta.auth }}</span>
				</template>
			</el-table-column>
			<el-table-column label="操作" show-overflow-tooltip width="125">
				<template #default="scope">
					<el-button size="mini" type="text" @click="onOpenAddMenu(scope.row)">新增</el-button>
					<el-button size="mini" type="text" @click="onOpenEditMenu(scope.row)">修改</el-button>
					<el-button size="mini" type="text" @click="onTabelRowDel(scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</screen-table>
		<AddMenu ref="addMenuRef" />
		<EditMenu ref="editMenuRef" />
	</div>
</template>

<script lang="ts">
import { ref, toRefs, reactive, computed } from 'vue';
import { ElMessageBox } from 'element-plus';
import { useStore } from '@/store/index';
import ScreenTable from '@/components/ScreenTable/index.vue';
import AddMenu from '@/views/system/menu/component/addMenu.vue';
import EditMenu from '@/views/system/menu/component/editMenu.vue';
export default {
	name: 'systemMenu',
	components: { AddMenu, EditMenu, ScreenTable },
	setup() {
		const store = useStore();
		const addMenuRef = ref();
		const editMenuRef = ref();
		const state = reactive({});
		// 获取 vuex 中的路由
		const menuTableData = computed(() => {
			return store.state.routesList.routesList;
		});
		// 打开新增菜单弹窗
		const onOpenAddMenu = (row: object) => {
			addMenuRef.value.openDialog(row);
		};
		// 打开编辑菜单弹窗
		const onOpenEditMenu = (row: object) => {
			editMenuRef.value.openDialog(row);
		};
		// 删除当前行
		const onTabelRowDel = (row: object) => {
			ElMessageBox.confirm('此操作将永久删除路由, 是否继续?', '提示', {
				confirmButtonText: '删除',
				cancelButtonText: '取消',
				type: 'warning',
			})
				.then(() => {
					console.log(row);
				})
				.catch(() => {});
		};
		return {
			addMenuRef,
			editMenuRef,
			onOpenAddMenu,
			onOpenEditMenu,
			menuTableData,
			onTabelRowDel,
			...toRefs(state),
		};
	},
};
</script>
