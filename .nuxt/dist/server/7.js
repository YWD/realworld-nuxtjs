exports.ids = [7];
exports.modules = {

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/settings/index.vue?vue&type=template&id=8f2c7e98&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"settings-page"},[_vm._ssrNode("<div class=\"container page\" data-v-8f2c7e98><div class=\"row\" data-v-8f2c7e98><div class=\"col-md-6 offset-md-3 col-xs-12\" data-v-8f2c7e98><h1 class=\"text-xs-center\" data-v-8f2c7e98>Your Settings</h1> <form data-v-8f2c7e98><fieldset data-v-8f2c7e98><fieldset class=\"form-group\" data-v-8f2c7e98><input type=\"text\" placeholder=\"URL of profile picture\""+(_vm._ssrAttr("value",(_vm.form.image)))+" class=\"form-control\" data-v-8f2c7e98></fieldset> <fieldset class=\"form-group\" data-v-8f2c7e98><input type=\"text\" placeholder=\"Your Name\""+(_vm._ssrAttr("value",(_vm.form.username)))+" class=\"form-control form-control-lg\" data-v-8f2c7e98></fieldset> <fieldset class=\"form-group\" data-v-8f2c7e98><textarea rows=\"8\" placeholder=\"Short bio about you\" class=\"form-control form-control-lg\" data-v-8f2c7e98>"+_vm._ssrEscape(_vm._s(_vm.form.bio))+"</textarea></fieldset> <fieldset class=\"form-group\" data-v-8f2c7e98><input type=\"text\" placeholder=\"Email\""+(_vm._ssrAttr("value",(_vm.form.email)))+" class=\"form-control form-control-lg\" data-v-8f2c7e98></fieldset> <fieldset class=\"form-group\" data-v-8f2c7e98><input type=\"password\" placeholder=\"Password\""+(_vm._ssrAttr("value",(_vm.form.pwd)))+" class=\"form-control form-control-lg\" data-v-8f2c7e98></fieldset> <button class=\"btn btn-lg btn-primary pull-xs-right\" data-v-8f2c7e98>\n              Update Settings\n            </button></fieldset></form> <hr data-v-8f2c7e98> <button class=\"btn btn-outline-danger\" data-v-8f2c7e98>\n          Or click here to logout.\n        </button></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/settings/index.vue?vue&type=template&id=8f2c7e98&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// EXTERNAL MODULE: ./plugins/request.js
var request = __webpack_require__(5);

// CONCATENATED MODULE: ./api/settings.js

const updateSettings = data => Object(request["b" /* request */])({
  url: 'api/user',
  method: 'PUT',
  data
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/settings/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


const jsCookie =  false ? undefined : undefined;
/* harmony default export */ var settingsvue_type_script_lang_js_ = ({
  middleware: 'authenticate',
  name: "Settings",

  data() {
    return {
      form: {
        image: '',
        username: '',
        bio: '',
        email: '',
        pwd: ''
      }
    };
  },

  computed: { ...Object(external_vuex_["mapState"])(['user'])
  },

  mounted() {
    this.form.image = this.user.image;
    this.form.username = this.user.username;
    this.form.bio = this.user.bio;
    this.form.email = this.user.email;
    this.form.pwd = this.user.pwd;
  },

  methods: {
    async settingsUpdate() {
      const {
        data
      } = await updateSettings({
        user: this.form
      });
      this.$store.commit('setUser', data.user);
      jsCookie.set('user', JSON.stringify(data.user));
      await this.$router.push('/profile/' + data.user.username);
    },

    logout() {
      jsCookie.remove('user');
      this.$store.commit('setUser', null);
      this.$router.push('/login');
    }

  }
});
// CONCATENATED MODULE: ./pages/settings/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_settingsvue_type_script_lang_js_ = (settingsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/settings/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_settingsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "8f2c7e98",
  "37baf60c"
  
)

/* harmony default export */ var settings = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=7.js.map