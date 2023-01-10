import { AuthProps } from './AythPage.props';
import styles from './AuthPage.module.css';
import { AuthForm } from '../../Components/AuthForm/AuthForm';
import { ArrowBack } from '../../Components/ArrowBack/ArrowBack';

export const AuthPage = ({ type }: AuthProps): JSX.Element => {
	return (
		<>
			<ArrowBack />
			<div className={styles.authPage}>
				<AuthForm type={type} className={styles.authForm} />
			</div>
		</>
	);
};