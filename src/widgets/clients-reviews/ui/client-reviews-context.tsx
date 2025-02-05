'use client';

import { reviews } from '@/shared/constants';
import type {
	TClientReviewsContext,
	ClientReviewsProviderProps,
} from '../model';
import { createContext, useContext, useState } from 'react';

const ClientReviewsContext = createContext<TClientReviewsContext | null>(null);

export const ClientReviewsProvider = (props: ClientReviewsProviderProps) => {
	const { children } = props;
	const [selectedCategory, setSelectedCategory] = useState<string | null>(
		'category1'
	);

	const filteredData = selectedCategory
		? reviews.find(category => category.value === selectedCategory)?.reviews ||
		  []
		: reviews.flatMap(category => category.reviews);

	return (
		<ClientReviewsContext.Provider
			value={{ selectedCategory, setSelectedCategory, filteredData }}
		>
			{children}
		</ClientReviewsContext.Provider>
	);
};

export const useClientReviewsContext = () => {
	const context = useContext(ClientReviewsContext);
	return { ...context };
};
