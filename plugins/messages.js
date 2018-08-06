import Vue from 'vue'
import Messages from './messages/index'

export default ({store}) => {
    Vue.use(Messages, store)
}