import axios, { AxiosResponse } from "axios";
import { UserItem } from "../interfaces/movies.interface";

export async function checkEmail(signUpName: string, signUpEmail: string, signUpPassword: string) {
    let { data: user }: AxiosResponse<UserItem> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN + '/user/get/email/?email=' + signUpEmail);

    if (user.id === undefined) {
        let now = new Date();
        let regDate = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate()
            + 'T' + now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();

        await axios.post(process.env.NEXT_PUBLIC_DOMAIN + '/user/create/', {
            name: signUpName,
            email: signUpEmail,
            registration_date: regDate,
            password: signUpPassword,
        }).then(function (response) {            
            window.location.href = '/login';
        })
        .catch(function (error) {
            console.log("Ошибка HTTP при создании пользователя: " + error);
        });
        
    } else {
        alert('Пользователь с таким E-mail уже существует');
    }
}

export async function checkUser(signInEmail: string, signInPassword: string) {
    let { data: user }: AxiosResponse<UserItem> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN + '/user/get/email/?email=' + signInEmail);

    if (user.id !== undefined) {
        let { data: isCompare }: AxiosResponse = await axios.get(process.env.NEXT_PUBLIC_DOMAIN + '/user/compare/?id=' + user.id
        + '&password=' + signInPassword);

        if (isCompare.Compare === 'True') {
            localStorage.setItem('user_id', String(user.id));
            window.location.href = '/';
        } else {
            alert('Неверно введён пароль');
        }

    } else {
        alert('Не найдено пользователя с таким E-mail');
    }
}
