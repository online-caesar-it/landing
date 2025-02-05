export type TClientReviewsContext = {
	selectedCategory: string | null;
	setSelectedCategory: (el: string) => void;
	filteredData: TMockReview[];
};

export type ClientReviewsProviderProps = {
	children?: React.ReactNode;
};

export type TMockReview = {
	id: number;
	color: string;
	name: string;
	description: string;
};
