import React from 'react';
import styles from './SocialNetworksLinks.module.css';
import cn from 'classnames';
import { SocilaNetworksLinksProps } from './SocilaNetworksLinks.props';
import { FaTelegramPlane, FaDiscord, FaYoutube, FaTwitter, FaVk } from "react-icons/fa";

export const SocialNetworksLinks = ({ className, ...props }: SocilaNetworksLinksProps): JSX.Element => {
	return (
		<div className={cn(className, styles.linksForm)} {...props}>
			<a href='https://vk.com' target='_blank' rel='noreferrer' className={styles.vk}><FaVk /></a>
			<a href='https://telegram.com' target='_blank' rel='noreferrer' className={styles.telegram}><FaTelegramPlane /></a>
			<a href='https://discord.com' target='_blank' rel='noreferrer' className={styles.discord}><FaDiscord /></a>
			<a href='https://youtybe.com' target='_blank' rel='noreferrer' className={styles.youtube}><FaYoutube /></a>
			<a href='https://twitter.com' target='_blank' rel='noreferrer' className={styles.twitter}><FaTwitter /></a>
		</div>
	);
};