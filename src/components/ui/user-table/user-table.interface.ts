export interface ITableItem {
	id: number;
	editUrl: string;
	items: string[];
}

export interface IUserTableItem {
	tableItem: ITableItem;
	removeHandler: () => void;
}
