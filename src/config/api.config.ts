export const API_URL = `${process.env.APP_URL}/api`;

export const getAuthUrl = (string: string) => `/auth/${string}`;
export const getQuizzesUrl = (string: string) => `/quizzes/${string}`;
export const getFriendsUrl = (string: string) => `/friends/${string}`;
export const getUsersUrl = (string: string) => `/users/${string}`;
