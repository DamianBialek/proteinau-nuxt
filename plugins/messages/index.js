import MesssageComponent from './components/Messages'
import {messageHub} from "./messageHub"

const Message = {
    install(Vue, store) {
        if (this.installed) {
            return
        }

        this.installed = true

        const message = function(params) {
            if(params === 'hideMessage')
                messageHub.$emit("hideMessage")
            else
                messageHub.$emit("showMessage", params)
        }

        Vue.component('message-notification', MesssageComponent)
        Vue.prototype.$message = message
        Vue.message = message
    }
}

export default Message