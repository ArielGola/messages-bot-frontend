import Axios from 'axios';
import jwt from 'jsonwebtoken';


const DELETE_ACCOUNT = 'http://localhost:4000/mba/user/delete/';


export function getToken() {
    let token = document.cookie.split('=')[1];
    return token;
};


export function deleteToken() {
    let date = new Date();
    date.setTime(date.getTime() -10);
    document.cookie = `token=; expires=${date.toGMTString()}`;
};


export function initInterceptor() {
    Axios.interceptors.request.use((config) => {
        const token = getToken();

        if (token) {
            config.headers.Authorization = `bearer ${token}`;
        };

        return config;
    });

    Axios.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            return error;
        }
    );
};


export const sessionOut = () => {
    deleteToken();
    window.location.href = "/signin";
};


export const deleteAccount = async () => {
    try {
        const token = document.cookie.split('=')[1];
        const decoded = jwt.verify(token, process.env.REACT_APP_JWT_SECRET);
        
        if (window.confirm("Are you sure of delete your account? It will be permanentlly.")) {
            await Axios.delete(`${DELETE_ACCOUNT}${decoded.id}`);

            sessionOut();
        };

    } catch (error) {
        console.error(error);
    };
};