import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface SearchAndUserProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { 
    link: string;
}