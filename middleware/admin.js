import Vue from 'vue'
export default ({store, redirect}) => {
    if(!store.state.admin)
        redirect({name: 'admin-login'})

    Vue.message("hideMessage")

    Vue.http.interceptors.push(function(request, next) {
        next(function(response){
            if(response.status >= 400 && response.status <= 500)
                redirect({name: 'admin-login'})
        })
    });
}