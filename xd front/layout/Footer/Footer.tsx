import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';
import cn from 'classnames';
import { format } from 'date-fns';
import { SocialNetworksLinks } from '../../Components/SocialNetworksLinks/SocialNetworksLinks';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
	return (
		<footer className={cn(className, styles.footer)} {...props}>
			<p className={styles.copyright}>
				<span className={styles.name}>[xd]</span> © 2022 - {format(new Date(), 'yyyy')} Все права защищены
			</p>
			<SocialNetworksLinks className={styles.links} />
			<p className={styles.by}>by <span className={styles.name}>separatrix</span></p>
		</footer>
	);
};