import Vue from 'vue'
import {getUserFromCookie, getUserFromLocalStorage, getToken} from "@/utils/auth";

export default ({ store, redirect, req}) => {
    if(process.server && !req) return

    if (process.server && !req) return
    const loggedUser = process.server ? getUserFromCookie(req) : getUserFromLocalStorage()
    store.commit('SET_ADMIN', loggedUser)

    Vue.message("hideMessage")

    if(!store.getters.isAuthenticatedAdmin) {
        return redirect({name: 'admin-login'})
    }

    Vue.http.interceptors.push(function(request, next) {
        const token = getToken(req)
        request.headers.set('Authorization', 'Bearer '+ token);

        next(function(response){
            if(response.status >= 400 && response.status <= 500) {
                redirect({name: 'admin-login'})
            }
        })
    });
}