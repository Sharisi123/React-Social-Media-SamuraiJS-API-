import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "d716a52b-3d05-4330-871c-c6df274d09c5"
    }

})

export let usersAPI = {
    postFollow(userId) {
        return instance.post(`follow/${userId}`, {}).then(res => res.data)
    },
    deleteFollow(userId) {
        return instance.delete(`follow/${userId}`).then(res => res.data)
    },
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(res => res.data)
    },
    getProfile(userId) {
        return profileAPI.getProfile(userId)
    }
}
export let profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`).then(res => res.data)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, { status: status })
    }
}
export let authAPI = {
    authMe() {
        return instance.get(`auth/me`).then(res => res.data)
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe })
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}