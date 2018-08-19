import jwtDecode from 'jwt-decode'
import Cookie from 'js-cookie'

export const setToken = (token) => {
    if (process.SERVER_BUILD) return
    window.localStorage.setItem('token', token)
    window.localStorage.setItem('user', JSON.stringify(jwtDecode(token)))
    Cookie.set('jwt', token)
}

export const getUserFromCookie = (req) => {
    const jwt = getTokenFromCookie(req)
    if(!jwt) return
    return jwtDecode(jwt)
}

export const getUserFromLocalStorage = () => {
    const json = window.localStorage.user
    return json ? JSON.parse(json) : undefined
}

export const getToken = (req) => {
    const token = process.server ? getTokenFromCookie(req) : getTokenFromLocalStorage()

    return token
}

const getTokenFromCookie = (req) => {
    if (!req.headers.cookie) return
    let jwtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('jwt='))

    if (!jwtCookie) return
    const jwt = jwtCookie.split('=')[1]

    return jwt
}

const getTokenFromLocalStorage = () => {
    return localStorage.getItem("token")
}