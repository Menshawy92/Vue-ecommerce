<template>
    <div class="header">
        <button @click="navT()" type="submit" class="btntoggle">
            <div class="lineMenu">
                <span class="lineMenu-1"></span>
                <span class="lineMenu-2"></span>
                <span class="lineMenu-3"></span>
            </div>
        </button>
        <div class="headerList">
            <ul>
                <li :class="{ active: $route.name === 'admin' }">
                    <router-link to="/admin">Home</router-link>
                </li>
                <li :class="{ active: $route.name === 'products' }">
                    <router-link to="/admin/products">Products</router-link>
                </li>
                <li :class="{ active: $route.name === 'category' }">
                    <router-link to="/admin/category">Category</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'headerPage',
    data() {
        return {}
    },
    computed: {
        navVisibility() {
            return this.$store.state.admin.navVisibility
        },
    },
    methods: {
        navT() {
            this.$store.commit('updateNavVisibility', !this.navVisibility)
        },
    },
}
</script>
<style lang="scss">
.header {
    position: fixed;
    top: 0;
    left: 0;
    transition: all 0.5s;
    .nav-open & {
        left: 250px;
        transition: all 0.5s;
    }
    .headerList {
        background-color: black;
        position: fixed;
        top: 0;
        left: -250px;
        height: 100%;
        width: 250px;
        transition: all 0.5s;
        .nav-open & {
            left: 0;
        }
        ul {
            padding: 0;
            margin: 0;
            li {
                a {
                    color: #fff;
                    display: block;
                    padding: 10px;
                    text-decoration: none;
                    text-transform: capitalize;
                    font-size: 16px;
                    border-bottom: 1px solid #333;
                    transition: all 0.5s;
                    &:hover {
                        background-color: #333;
                    }
                }
                &.active {
                    background-color: #333;
                }
            }
        }
    }
    .btntoggle {
        background-color: #000;
        height: 50px;
        outline: 0;
        cursor: pointer;
        .lineMenu {
            span {
                background-color: #fff;
                height: 4px;
                display: block;
                width: 35px;
                transition: all 0.4s;
                &.lineMenu-1 {
                    transform: translateY(-8px);
                }
                &.lineMenu-3 {
                    transform: translateY(8px);
                }
                .nav-open & {
                    transform-origin: center;
                    &.lineMenu-1 {
                        transform: translateY(5px) rotate(45deg);
                    }
                    &.lineMenu-2 {
                        opacity: 0;
                    }
                    &.lineMenu-3 {
                        transform: translateY(-2px) rotate(-45deg);
                    }
                }
            }
        }
    }
}
</style>
