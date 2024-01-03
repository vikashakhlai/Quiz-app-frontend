export const convertPostgreDate = (date: string) =>
	new Date(date).toLocaleDateString('ru');
