<template>
    <section class="container">
        <b-navbar>
            <template #end>
                <b-navbar-item href="/">
                    Home
                </b-navbar-item>
                <b-navbar-item href="/#order">
                    Order
                </b-navbar-item>
                <b-navbar-dropdown label="Info">
                    <b-navbar-item href="/#about">
                        About
                    </b-navbar-item>
                    <b-navbar-item href="/#contact">
                        Contact
                    </b-navbar-item>
                    <b-navbar-item href="/privacy-policy">
                        Privacy Policy
                    </b-navbar-item>
                </b-navbar-dropdown>
                <b-navbar-item tag="router-link" :to="{ path: '/' }">
                    <Logo />
                </b-navbar-item>
            </template>

        </b-navbar>
    </section>
</template>

<script>
import Logo from '@/components/logo';

    export default {
        components: {Logo}
        
    }
</script>
