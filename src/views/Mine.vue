<template>
    <div id="main">
        <Header title="我的喵喵"></Header>
        <Login/>
        <Fotter></Fotter>
    </div>
</template>

<script>
import Header from '@/components/Header'
import Fotter from '@/components/Fotter'
import Login from '@/components/Login'
export default {
    name: 'Mine',
    components:{
        Header,
        Fotter,
        Login
    }
}
</script>

<style lang="stylus" scoped>
#main{ height: 100%; display: flex; flex-direction:column;}
</style>