// 通用函数
import useClipboard from 'vue-clipboard3';
import { ElMessage } from 'element-plus';
import { dayjs } from 'base-core-lib-ts';
import { useI18n } from 'vue-i18n';

export default function () {
	const { t } = useI18n();
	const { toClipboard } = useClipboard();
	/**
	 * 百分比格式化
	 *
	 * @param cellValue 数值
	 * @returns 格式化后的格式  空值返回 -
	 */
	const percentFormat = (cellValue: any) => {
		return cellValue ? `${cellValue}%` : '-';
	};
	/**
	 * 列表日期时间格式化 YYYY-MM-DD
	 *
	 * @param cellValue 需要格式化日期
	 * @returns
	 */
	const dateFormatYMD = (cellValue: any) => {
		if (!cellValue) return '-';
		return dayjs(cellValue).format('YYYY-MM-DD');
	};
	/**
	 * 列表日期时间格式化 YYYY-MM-DD HH:mm:ss
	 *
	 * @param cellValue 需要格式化日期
	 * @returns
	 */
	const dateFormatYMDHMS = (cellValue: any) => {
		if (!cellValue) return '-';
		return dayjs(cellValue).format('YYYY-MM-DD HH:mm:ss');
	};
	/**
	 * 列表日期时间格式化 HH:mm:ss
	 *
	 * @param cellValue 需要格式化日期
	 * @returns
	 */
	const dateFormatHMS = (cellValue: any) => {
		if (!cellValue) return '-';
		let time = 0;
		if (typeof cellValue === 'number') time = cellValue;
		return dayjs(time * 1000).format('HH:mm:ss');
	};
	/**
	 * 小数格式化
	 *
	 * @param value 格式化数字
	 * @param scale 保留小数位数
	 * @returns
	 */
	const scaleFormat = (value: any = 0, scale: number = 2) => {
		return Number.parseFloat(value).toFixed(scale);
	};

	/**
	 * 点击复制文本
	 *
	 * @param text 复制的文本
	 * @returns
	 */
	const copyText = (text: string) => {
		return new Promise((resolve, reject) => {
			try {
				//复制
				toClipboard(text);
				//下面可以设置复制成功的提示框等操作
				ElMessage.success(t('message.layout.copyTextSuccess'));
				resolve(text);
			} catch (e) {
				//复制失败
				ElMessage.error(t('message.layout.copyTextError'));
				reject(e);
			}
		});
	};
	return {
		percentFormat,
		dateFormatYMD,
		dateFormatYMDHMS,
		dateFormatHMS,
		scaleFormat,
		copyText,
	};
}
