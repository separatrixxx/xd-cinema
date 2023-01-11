import { SearchAndUserProps } from './SearchAndUser.props';
import styles from './SearchAndUser.module.css';
import Link from 'next/link';
import { IoIosSearch } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export const SearchAndUser = ({ userId, link, className, ...props }: SearchAndUserProps): JSX.Element => {
	const [search, setSearch] = useState<string>('');
	const router = useRouter();
	const [userName, setUserName] = useState<string>('');

	if (userId) {
		let user = axios.get(process.env.NEXT_PUBLIC_DOMAIN + '/user/get/?id=' + userId);
  
		user.then((response) => {
		  setUserName(response.data.name);
		});
	}

	const goToSearch = () => {
		router.push({
			pathname: '/search',
			query: {
				search: search
			}
		});
	};

	const handleKeyDown = (e: any) => {
		if (e.key == 'Enter') {
			goToSearch();
		}
	};

	if (userId) {
		return (
			<div className={styles.searchDiv} {...props}>
				<label className={styles.label}>
					<span className={styles.icon}>
						<IoIosSearch />
					</span>
					<input className={styles.input}
						placeholder=""
						type="search"
						aria-label="Поиск"
						name="search"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						onKeyDown={handleKeyDown} />
				</label>
	
				<Link href={link}>
					<div className={styles.user}>{userName.toUpperCase()[0]}</div>
				</Link>
			</div>
		);
	} else {
		return (
			<div className={styles.searchDiv} {...props}>
				<label className={styles.label}>
					<span className={styles.icon}>
						<IoIosSearch />
					</span>
					<input className={styles.input}
						placeholder=""
						type="search"
						aria-label="Поиск"
						name="search"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						onKeyDown={handleKeyDown} />
				</label>
	
				<Link href={link}>
					<div className={styles.user}><FaRegUserCircle /></div>
				</Link>
			</div>
		);
	}
};