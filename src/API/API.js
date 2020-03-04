import axios, {AxiosResponse} from "axios";
import {ProfileType} from '../types/types';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://www.filltext.com/',
});

const BD_API = {};