<script>
  import Home from './components/Home.vue'
  import Terms from './components/Terms.vue'
  import Privacy from './components/Privacy.vue'
  import Cookie from './components/Cookie.vue'
  import Footer from './components/Footer.vue'
  import Header from './components/Header.vue'
  import Payments from './components/Payments.vue'
  import Pricing from './components/Pricing.vue'
  import SignUp from './components/SignUp.vue'
  import Send from './components/Send.vue'
  import Support from './components/Support.vue'
  import Receipt from './components/Receipt.vue'


export default {
  name: 'app',
  components: {
    Home, Footer, Header, Payments, Terms, Privacy, Cookie, SignUp, Send, Support, Pricing,Receipt
  },
  data: function () {
    return {
      page: 'receipt'
    }
  },
}
</script>

<template>
  <div id="app" style=" overflow: hidden; max-width: 100vw;">
    <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700&display=swap" rel="stylesheet">
    <Header/>
    <Home v-if="page==='home'"/>
    <Terms v-if="page==='terms'"/>
    <Privacy v-if="page==='privacy'"/>
    <Payments v-if="page==='payments'"/>
    <Cookie v-if="page==='cookie'"/>
    <Pricing v-if="page==='pricing'"/>
    <SignUp v-if="page==='signup'"/>
    <Send v-if="page==='send'"/>
    <Receipt v-if="page==='receipt'"/>
    <Support v-if="page==='support'"/>
    <Footer/>
  </div>
</template>

<style>
  @import 'assets/css/bootstrap.css';
  @import 'assets/css/colors.css';
  @import 'assets/css/styles.css';
</style>
