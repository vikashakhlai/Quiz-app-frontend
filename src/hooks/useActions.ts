import { allActions } from '@/store/rootActions';
import { bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';

export const useActions = () => {
	const dispath = useDispatch();

	return useMemo(() => bindActionCreators(allActions, dispath), [dispath]);
};
