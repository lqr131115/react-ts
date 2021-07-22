import { User } from "./types/user"


const BASE_URL = process.env.REACT_APP_DEV_URL

const localStorageKey = '__auth__provider_key__'

export const getToken = () => window.localStorage.getItem(localStorageKey)

export const handleUseResponse = ({ user }: { user: User }) => {
    window.localStorage.setItem(localStorageKey, user.token || '')
    return user
}

export const login = (data: { username: string, password: string }) => {
    return fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then(async res => {
        if (res.ok) {
            return handleUseResponse(await res.json())
        } else {
            return Promise.reject(await res.json())
        }
    })
}

export const register = (data: { username: string, password: string }) => {
    return fetch(`${BASE_URL}/register`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then(async res => {
        if (res.ok) {
            return handleUseResponse(await res.json())
        } else {
            return Promise.reject(await res.json())
        }
    })
}

export const logout = async () => window.localStorage.removeItem(localStorageKey)
