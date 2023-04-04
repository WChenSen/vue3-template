export const TOKEN_KEY = 'i84icToken'

//获取token
export function getToken(): string | null {
    return window.localStorage.getItem(TOKEN_KEY)
}
//设置token
export function setToken(token: string): void {
    token && window.localStorage.setItem(TOKEN_KEY, token)
}
//删除token
export function removeToken() {
    window.localStorage.removeItem(TOKEN_KEY)
}
