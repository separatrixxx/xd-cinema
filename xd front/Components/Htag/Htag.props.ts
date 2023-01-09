import { ReactNode } from 'react';

export interface HtagProps {
	tag: 'notFound' | 'genre' | 'logo' | 'xl' | 'l' | 'm' | 's';
	children: ReactNode;
}