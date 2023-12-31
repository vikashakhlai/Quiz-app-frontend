import { IMenu } from './menu.interface';

export const firstMenu: IMenu = {
	title: 'Menu',
	items: [
		{
			icon: 'MdHome',
			link: '/',
			title: 'Home',
		},
		{
			icon: 'Md18UpRating',
			link: '/quizzes',
			title: 'Quizzes',
		},
		{
			icon: 'Md16Mp',
			link: '/friends',
			title: 'Friends',
		},
	],
};

export const userMenu: IMenu = {
	title: 'General',
	items: [],
};
