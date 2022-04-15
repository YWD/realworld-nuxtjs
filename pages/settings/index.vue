<template>
  <div class="settings-page">
    <div class="container page">
      <div class="row">

        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Your Settings</h1>

          <form>
            <fieldset>
              <fieldset class="form-group">
                <input v-model="form.image" class="form-control" type="text" placeholder="URL of profile picture">
              </fieldset>
              <fieldset class="form-group">
                <input v-model="form.username" class="form-control form-control-lg" type="text" placeholder="Your Name">
              </fieldset>
              <fieldset class="form-group">
                            <textarea v-model="form.bio" class="form-control form-control-lg" rows="8"
                                      placeholder="Short bio about you"></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input v-model="form.email" class="form-control form-control-lg" type="text" placeholder="Email">
              </fieldset>
              <fieldset class="form-group">
                <input v-model="form.pwd" class="form-control form-control-lg" type="password" placeholder="Password">
              </fieldset>
              <button @click.prevent="settingsUpdate" class="btn btn-lg btn-primary pull-xs-right">
                Update Settings
              </button>
            </fieldset>
          </form>
          <hr>
          <button @click="logout" class="btn btn-outline-danger">
            Or click here to logout.
          </button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex"
import {updateSettings} from "@/api/settings";
const jsCookie = process.client ? require('js-cookie') : undefined
export default {
  middleware: 'authenticate',
  name: "Settings",
  data() {
    return {
      form: {
        image: '',
        username: '',
        bio: '',
        email: '',
        pwd: '',
      }
    }
  },
  computed: {
    ...mapState(['user'])
  },
  mounted() {
    this.form.image = this.user.image
    this.form.username = this.user.username
    this.form.bio = this.user.bio
    this.form.email = this.user.email
    this.form.pwd = this.user.pwd
  },
  methods: {
    async settingsUpdate() {
      const {data} = await updateSettings({
        user: this.form
      })
      this.$store.commit('setUser', data.user)
      jsCookie.set('user', JSON.stringify(data.user))
      await this.$router.push('/profile/' + data.user.username)
    },
    logout() {
      jsCookie.remove('user')
      this.$store.commit('setUser', null)
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>

</style>
