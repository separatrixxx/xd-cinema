import { ReactNode } from 'react';

export interface TrProps {
	date?: string;
	country?: string;
	genres?: string;
	producer?: string;
	children: ReactNode;
}