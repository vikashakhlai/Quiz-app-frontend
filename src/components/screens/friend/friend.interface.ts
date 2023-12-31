export interface IFriend {
	id: number;
	email: string;
}

export interface IUserFriend extends Pick<IFriend, 'email'> {}
