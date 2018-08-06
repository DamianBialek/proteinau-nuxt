<template>
    <div v-if="show" class="message-notification-box">
        <div v-if="type === 'danger'" class="alert alert-danger" role="alert">
            {{date}}: <b>{{message}}</b>
        </div>
        <div v-else-if="type === 'success'" class="alert alert-success" role="alert">
            {{date}}: <b>{{message}}</b>
        </div>
    </div>
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
                visibleToNextTick: true
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
                this.type = params.type
                this.message = params.message
                this.show = true
                this.visibleToNextTick = false
            })
            messageHub.$on("hideMessage", () => {
                this.hideMessages()
            })
        },
        methods: {
            hideMessages(){
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