export interface IUser {
	id: string;
	email: string;
	password: string;
	createdAt: string;
}

export interface IUserWithFriendId extends IUser {
	friendId: string;
}
