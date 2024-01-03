export interface ITableItem {
	id: number;
	editUrl: string;
	playUrl?: string;
	isBlocked?: boolean;
	isQuizFriends?: boolean;
	items: string[];
}

export interface IUserTableItem {
	tableItem: ITableItem;
	removeHandler: () => void;
}
