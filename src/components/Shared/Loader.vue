<template>
    <div class="lds-ring" :class="`color-${color}`">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</template>
<script>
export default {
    name: 'loader',
    props: {
        color: {
            type: String,
            required: false,
            default: 'default',
            validator: function (value) {
                return ['default', 'green'].indexOf(value) !== 1
            },
        },
    },
}
</script>
<style lang="scss" scoped>
.lds-ring {
    display: flex;
    align-items: center;
    position: relative;
    div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: 4px solid #fff;
        border-color: #fff transparent transparent transparent;
        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    }

    &.color-green {
        background-color: #dedede5e;
        width: 200px;
        height: 200px;
        margin: 100px auto;
        justify-content: center;
        div {
            border: 4px solid #42b983;
            border-color: #42b983 transparent transparent transparent;
        }
    }
    &.default div {
        border: 4px solid #fff;
        border-color: #fff transparent transparent transparent;
    }
}

.lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
}
@keyframes lds-ring {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
