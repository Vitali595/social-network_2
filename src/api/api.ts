import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "79b3771d-7f5d-45fb-9808-deb870df3f40"
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