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
			icon: 'Md16Mp',
			link: '/friends',
			title: 'Friends',
		},
		{
			icon: 'MdOutlineQuiz',
			link: '/quizzes/friend',
			title: 'Friend quizzes',
		},
		{
			icon: 'MdQuiz',
			link: '/quizzes',
			title: 'Quizzes',
		},
		{
			icon: 'MdQuestionMark',
			link: '/questions',
			title: 'Questions',
		},
	],
};

export const userMenu: IMenu = {
	title: 'General',
	items: [],
};
