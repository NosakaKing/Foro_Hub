import apiClient from "@/services/apiClient";
import { createAuthAdapter } from "../adapters/auth.adapter";
import { AuthFormData, Whoami } from "../types/auth";

export const authLogin = async (user: AuthFormData) => {
    const adapterUser =  createAuthAdapter(user);
    const response = await apiClient.post('/auth/login', adapterUser);
    return response.data;
}

export const authLogout = async () => {
    const response = await apiClient.post('/auth/logout');
    return response.data;
}

export const fetchWhoami = async () => {
    const response = await apiClient.get<Whoami>('/auth/whoami');
    return response.data;
}
