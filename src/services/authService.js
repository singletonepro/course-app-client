import {apiService} from "./apiService";
import {urls} from "../constants";


const accessTokenKey = 'access';
const refreshTokenKey = 'refresh';

export const authService = {
    register(data) {
        return apiService.post(urls.auth.registration, data);
    },
    async login(user) {
        const {data} = await apiService.post(urls.auth.login, user);
        this.setTokens(data);
    },
    me() {
        return apiService.get(urls.auth.me);
    },
    async refresh() {
        const refresh = this.getRefreshToken();
        const {data} = await apiService.post(urls.auth.refresh, {refresh});
        this.setTokens(data);
    },
    setTokens({accessToken, refreshToken}) {
        localStorage.setItem(accessTokenKey, accessToken);
        localStorage.setItem(refreshTokenKey, refreshToken);
    },
    getAccessToken() {
        return localStorage.getItem(accessTokenKey);
    },
    getRefreshToken() {
        return localStorage.getItem(refreshTokenKey);
    },
    deleteTokens() {
        localStorage.removeItem(accessTokenKey);
        localStorage.removeItem(refreshTokenKey);
    }
};
