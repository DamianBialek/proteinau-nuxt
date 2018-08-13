<template>
    <transition name="message">
    <div v-if="show" class="message-notification-box">
        <div v-if="type === 'danger'" class="alert alert-danger" role="alert">
            <span v-if="showDate">{{date}}: </span> <b>{{message}}</b>
            <button type="button" class="close" aria-label="Close" @click="closeMessage">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div v-else-if="type === 'success'" class="alert alert-success" role="alert">
            <span v-if="showDate">{{date}}: </span> <b>{{message}}</b>
            <button type="button" class="close" aria-label="Close" @click="closeMessage">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    </div>
    </transition>
</template>

<script>
    import {messageHub} from "../messageHub"

    export default {
        name: "Messages",
        data(){
            return {
                show: false,
                type: "danger",
                message: '',
                visibleToNextTick: true,
                keepAlive: false,
                showDate: true
            }
        },
        computed:{
            date: function(){
                let date = new Date()
                return date.toLocaleString('pl-PL');
            }
        },
        mounted(){
            messageHub.$on("showMessage", (params) => {
                console.log(params)
                this.type = params.type
                this.message = params.message
                this.show = true
                this.visibleToNextTick = false
                this.keepAlive = (params.keepAlive ? true : false)
                this.showDate = (params.date !== undefined ? params.date : true)
            })
            messageHub.$on("hideMessage", () => {
                this.hideMessages()
            })
        },
        methods: {
            hideMessages(){
                if(this.keepAlive)
                    this.keepAlive = false
                else
                    this.show = false
            },
            closeMessage(){
                this.keepAlive = false
                this.show = false
            }
        }
    }
</script>

<style lang="scss">
    .message-enter-active, .message-leave-active {
        transition: all .5s ease-out;
    }

    .message-enter, .message-leave-to {
        max-height: 0;
    }

    .message-enter-to, .message-leave {
        max-height: 70px;
    }
    .message-notification-box{
        overflow: hidden;
    }
</style>