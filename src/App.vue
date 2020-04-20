<template>
    <div id="app">
        <link
            href="https://fonts.googleapis.com/css?family=Baloo+Chettan+2:400,500,600,700,800&display=swap"
            rel="stylesheet"
        />
        <router-view />
        <div class="home">
            <div :class="{ active: $route.name === 'admin' }">
                <router-link to="/admin">Home</router-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/style/style.scss';
body {
    margin: 0;
    font-family: 'Baloo Chettan 2', cursive;
}
</style>
