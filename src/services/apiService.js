import axios from "axios";

import {baseURL, urls} from "../constants";
import {authService} from "./authService";
import {router} from "../router";

export const apiService = axios.create({ baseURL });

let isRefreshing = false;
let waitList = [];

apiService.interceptors.request.use(req => {
    const access = authService.getAccessToken();
    if (access) {
        req.headers.Authorization = `Bearer ${access}`;
    }
    return req;
});

apiService.interceptors.response.use(
    res => res,
    async (error) => {
        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._retry) {
            if (originalRequest.url === urls.auth.refresh) {
                authService.deleteTokens();
                await router.navigate('/login?SessionExpired=true');
                return Promise.reject(error);
            }

            if (!isRefreshing) {
                isRefreshing = true;
                originalRequest._retry = true;

                try {
                    const newTokens = await authService.refresh();
                    console.log('newTokens', newTokens);
                    isRefreshing = false;
                    onRefreshed(newTokens.accessToken);
                    return apiService(originalRequest);
                } catch (err) {
                    isRefreshing = false;
                    authService.deleteTokens();
                    await router.navigate('/login?SessionExpired=true');
                    return Promise.reject(err);
                }
            }

            return new Promise(resolve => {
                subscribeToWaitList((token) => {
                    originalRequest.headers.Authorization = `Bearer ${token}`;
                    resolve(apiService(originalRequest));
                });
            });
        }

        return Promise.reject(error);
    }
);

const subscribeToWaitList = (cb) => {
    waitList.push(cb);
};

const onRefreshed = (token) => {
    waitList.forEach(cb => cb(token));
    waitList = [];
};
