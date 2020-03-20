<script>
import Home from './components/Home.vue'
import About from './components/About.vue'
import Terms from './components/Terms.vue'
import Privacy from './components/Privacy.vue'
import Support from './components/Support.vue'
import Contact from './components/Contact.vue'
import Cancel from './components/Cancel.vue'
import SignUp from './components/SignUp.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import Membership from './components/Membership.vue'
import Payments from './components/Payments.vue'
import Cookie from './components/Cookie.vue'
import Receipt from './components/Receipt.vue'

export default {
  name: 'app',
  components: {
    Home, About, Footer, Header, Support, Contact, Cancel, SignUp, Membership, Payments, Receipt, Terms, Privacy, Cookie
  },
  data: function () {
    return {
      page: 'cookie'
    }
  },
}
</script>

<template>
  <div id="app" style=" overflow: hidden; max-width: 100vw;">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap" rel="stylesheet">
    <Header/>
    <Home v-if="page==='home'"/>
    <About v-if="page==='about'"/>
    <Terms v-if="page==='terms'"/>
    <Privacy v-if="page==='privacy'"/>
    <Support v-if="page==='support'"/>
    <Contact v-if="page==='contact'"/>
    <Cancel v-if="page==='cancel'"/>
    <Cookie v-if="page==='cookie'"/>
    <SignUp v-if="page==='signup'"/>
    <Membership v-if="page==='membership'"/>
    <Payments v-if="page==='payments'"/>
    <Receipt v-if="page==='receipt'"/>
    <Footer/>
  </div>
</template>

<style>
  @import 'assets/css/bootstrap.css';
  @import 'assets/css/colors.css';
  @import 'assets/css/styles.css';
</style>
