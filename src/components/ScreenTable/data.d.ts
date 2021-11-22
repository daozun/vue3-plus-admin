export interface PaginationConfig {
	layout?: string;
	total: number;
	current: number;
	pageSize: number;
	// eslint-disable-next-line no-unused-vars
	onChange: (page: number) => void;
}
