import { AuthFormProps } from './AuthForm.props';
import styles from './AuthForm.module.css';
import cn from 'classnames';
import { Input } from '../Input/Input';
import Link from 'next/link';
import { useState } from 'react';
import { checkEmail, checkUser } from '../../helpers/helpers_auth';
import { BsEyeFill } from "react-icons/bs";

export const AuthForm = ({ type, className, ...props }: AuthFormProps): JSX.Element => {
	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [confirmPassword, setConfirmPassword] = useState<string>('');

	const [pswdType, setPswdType] = useState<string>('password');
	const [confPswdType, setConfPswdType] = useState<string>('password');

	const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

	const LoginUser = () => {
		if (!EMAIL_REGEXP.test(email)) {
			alert('Неверный формат E-mail');
		} else if (password.length < 8) {
			alert('Пароль не должен быть короче 8 символов');
		} else {
			checkUser(email, password);
		}
	};

	const RegisterUser = () => {
		if (name.length === 0) {
			alert('Введите имя');
		} else if (!EMAIL_REGEXP.test(email)) {
			alert('Неверный формат E-mail');
		} else if (password.length < 8) {
			alert('Пароль не должен быть короче 8 символов');
		} else if (password !== confirmPassword) {
			alert('Пароли не совпадают');
		} else {
			checkEmail(name, email, password);
		}
	};

	if (type === 'login') {
		return (
			<div className={cn(className, styles.form)} {...props}>
				<h1 className={styles.h}>С возвращением!</h1>
				<Input type='email' text='E-mail' value={email}
					onChange={(e) => setEmail(e.target.value)} />
				<label className={styles.label}>
					<span className={styles.icon} 
						onMouseEnter={() => setPswdType('text')}
						onMouseLeave={() => setPswdType('password')}
						onClick={() => setPswdType('text')}>
						<BsEyeFill />
					</span>
					<Input type={pswdType} text='Пароль' value={password}
						onChange={(e) => setPassword(e.target.value)} />
				</label>
				<button className={styles.button} onClick={LoginUser}>Войти</button>
				<p className={styles.p}>Нет аккаунта? <span>
						<Link href="/registration" className={styles.link}>
							Зарегистрироваться
						</Link>
					</span>
				</p>
			</div>
		);
	} else {
		return (
			<div className={cn(className, styles.form)} {...props}>
				<h1 className={styles.h}>Добро пожаловать!</h1>
				<Input type='text' text='Имя' value={name}
					onChange={(e) => setName(e.target.value)} />
				<Input type='email' text='E-mail' value={email}
					onChange={(e) => setEmail(e.target.value)} />
				<label className={styles.label}>
					<span className={styles.icon} 
						onMouseEnter={() => setPswdType('text')}
						onMouseLeave={() => setPswdType('password')}
						onClick={() => setPswdType('text')}>
						<BsEyeFill />
					</span>
					<Input type={pswdType} text='Пароль' value={password}
						onChange={(e) => setPassword(e.target.value)} />
				</label>
				<label className={styles.label}>
					<span className={styles.icon} 
						onMouseEnter={() => setConfPswdType('text')}
						onMouseLeave={() => setConfPswdType('password')}
						onClick={() => setPswdType('text')}>
						<BsEyeFill />
					</span>
					<Input type={confPswdType} text='Повторите пароль' value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)} />
				</label>
				<button className={styles.button} onClick={RegisterUser}>Зарегистрироваться</button>
				<p className={styles.p}>Уже есть аккаунт? <span>
						<Link href="/login" className={styles.link}>
							Войти
						</Link>
					</span>
				</p>
			</div>
		);
	}
};