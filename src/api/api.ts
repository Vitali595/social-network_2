import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "81f111a3-dbd6-4bbb-8779-941304d3b0f1"
    }
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    unfollow(userId: number) {
     return instance.delete(`follow/${userId}`)
    },
    follow(userId: number) {
     return instance.post(`follow/${userId}`)
    },
    getProfile(userId: number) {
        return instance.get(`profile/${userId}`)
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}