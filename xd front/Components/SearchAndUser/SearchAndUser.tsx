import { SearchAndUserProps } from './SearchAndUser.props';
import styles from './SearchAndUser.module.css';
import Link from 'next/link';
import { IoIosSearch } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { useState } from 'react';
import { useRouter } from 'next/router';

export const SearchAndUser = ({ link, className, ...props }: SearchAndUserProps): JSX.Element => {
	const [search, setSearch] = useState<string>('');
	const router = useRouter();

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
};