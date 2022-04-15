<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">

        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">{{ isLogin ? 'sign in' : 'sign up'}}</h1>
          <p class="text-xs-center">
            <nuxt-link v-if="isLogin" to="/register">Need an account?</nuxt-link>
            <nuxt-link v-else to="/login">Have an account?</nuxt-link>
          </p>

          <ul class="error-messages">
            <template v-for="(value, key) in errors">
              <li v-for="(message, index) in value" :key="index">{{ key }} {{ message }}</li>
            </template>
          </ul>

          <form @submit.prevent="onSubmit">
            <fieldset v-if="!isLogin" class="form-group">
              <input v-model="user.username" class="form-control form-control-lg" type="text" placeholder="Your Name" required>
            </fieldset>
            <fieldset class="form-group">
              <input v-model="user.email" class="form-control form-control-lg" type="email" placeholder="Email" required>
            </fieldset>
            <fieldset class="form-group">
              <input v-model="user.password" class="form-control form-control-lg" type="password" placeholder="Password" required minlength="8">
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">
              {{ isLogin ? 'sign in' : 'sign up'}}
            </button>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import {request} from "@/plugins/request";
import { login, register } from "~/api/user";
const jsCookie = process.client ? require('js-cookie') : undefined
console.log('-----------------process.client-----------------')
console.log(process.client)
console.log('-----------------process.client-----------------')
export default {
  middleware: 'notAuthenticate',
  name: "LoginPage",
  data() {
    return {
      user: {
        username: '',
        email: '',
        password: '',
      },
      errors: {},
    }
  },
  computed: {
    isLogin() {
      return this.$route.name === 'login'
    }
  },
  methods: {
    async onSubmit() {
      try {
        const request = this.isLogin ? login : register
        const { data } = await request({
          user: this.user
        })
        this.$store.commit('setUser', data.user)
        jsCookie.set('user', JSON.stringify(data.user))
        await this.$router.push('/')
      } catch (e) {
        this.errors = e.response.data.errors
      }
    }
  }
}
</script>

<style scoped>

</style>
