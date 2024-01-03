import { getKeys } from '../object/getKeys';

export const convertStatusToDate = (
	status: string,
	updatedAt: Date,
	isPassed: boolean
) => {
	const obj = { week: 7, one_day: 1, three_day: 3, month: 30, year: 365 };

	const mas: number[] = [];

	const keys = getKeys(obj);
	const res = keys.forEach((key) => {
		if (key === status) {
			mas.push(obj[key]);
		}
	});

	const countDay = res;
	var toDay = new Date();
	const day = toDay.setDate(toDay.getDate() + mas[0]);

	const dateUnblocked = new Date().getDate() + Number(countDay);

	if (
		toDay.getDate() >= new Date().getDay() &&
		toDay.getMonth() >= new Date().getMonth()
	) {
		// QuizService.updateNoPassed(id);
	}

	// if (isPassed) {
	// 	return convertPostgreDate(toDay.toString());
	// } else {
	// 	return convertPostgreDate(new Date().toString());
	// }
	return null;
};
