'use client';

import { createContext, useContext, useState } from 'react';

type AccordionContextType = {
	openIndex: number | null;
	toggle: (index: number) => void;
} | null;

const AccordionContext = createContext<AccordionContextType>(null);

type AccordionProviderProps = {
	children: React.ReactNode;
};

export function AccordionProvider({ children }: AccordionProviderProps) {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const toggle = (index: number) => {
		setOpenIndex(prev => (prev === index ? null : index));
	};

	return (
		<AccordionContext.Provider value={{ openIndex, toggle }}>
			{children}
		</AccordionContext.Provider>
	);
}

export function useAccordion() {
	const context = useContext(AccordionContext);
	if (!context) {
		throw new Error('useAccordion must be used within an AccordionProvider');
	}
	return context;
}
