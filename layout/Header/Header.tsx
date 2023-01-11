import { HeaderProps } from './Header.props';
import styles from './Header.module.css';
import Link from 'next/link';
import { Htag } from '../../Components/Htag/Htag';
import { SearchAndUser } from '../../Components/SearchAndUser/SearchAndUser';
import { useEffect, useState } from 'react';

export const Header = ({ searchInput }: HeaderProps): JSX.Element => {
	const [userId, setUserId] = useState<string>('');

	useEffect(() => {
        let id = localStorage.getItem('user_id');

        if (id) {
            setUserId(id);
        }
    })

	let link = '/login';

	if (userId) {
		link = '/user';
	}

	
	switch (searchInput) {
		case true:
			return (
				<header className={styles.header}>
					<Link href="/" className={styles.link}>
						<Htag tag='logo'>[xd]</Htag>
					</Link>
					<SearchAndUser userId={userId} link={link} className={styles.searchAndUser} />
				</header>
			);
		default:
			return (
				<header className={styles.header}>
					<Link href="/" className={styles.link}>
						<Htag tag='logo'>[xd]</Htag>
					</Link>
				</header>
			);
	}

};