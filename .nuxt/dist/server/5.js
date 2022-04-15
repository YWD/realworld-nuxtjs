exports.ids = [5];
exports.modules = {

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return profile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return userFollow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return userUnfollow; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

const login = data => Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
  url: '/api/users/login',
  method: 'POST',
  data
});
const register = data => Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
  url: 'api/users',
  method: 'POST',
  data
});
const profile = username => Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
  url: 'api/profiles/' + username,
  method: 'GET'
});
const userFollow = username => Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
  url: `/api/profiles/${username}/follow`,
  method: 'POST'
});
const userUnfollow = username => Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
  url: `/api/profiles/${username}/follow`,
  method: 'DELETE'
});

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=template&id=1740813e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"auth-page"},[_vm._ssrNode("<div class=\"container page\" data-v-1740813e>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-1740813e>","</div>",[_vm._ssrNode("<div class=\"col-md-6 offset-md-3 col-xs-12\" data-v-1740813e>","</div>",[_vm._ssrNode("<h1 class=\"text-xs-center\" data-v-1740813e>"+_vm._ssrEscape(_vm._s(_vm.isLogin ? 'sign in' : 'sign up'))+"</h1> "),_vm._ssrNode("<p class=\"text-xs-center\" data-v-1740813e>","</p>",[(_vm.isLogin)?_c('nuxt-link',{attrs:{"to":"/register"}},[_vm._v("Need an account?")]):_c('nuxt-link',{attrs:{"to":"/login"}},[_vm._v("Have an account?")])],1),_vm._ssrNode(" <ul class=\"error-messages\" data-v-1740813e>"+(_vm._ssrList((_vm.errors),function(value,key){return ((_vm._ssrList((value),function(message,index){return ("<li data-v-1740813e>"+_vm._ssrEscape(_vm._s(key)+" "+_vm._s(message))+"</li>")})))}))+"</ul> <form data-v-1740813e>"+((!_vm.isLogin)?("<fieldset class=\"form-group\" data-v-1740813e><input type=\"text\" placeholder=\"Your Name\" required=\"required\""+(_vm._ssrAttr("value",(_vm.user.username)))+" class=\"form-control form-control-lg\" data-v-1740813e></fieldset>"):"<!---->")+" <fieldset class=\"form-group\" data-v-1740813e><input type=\"email\" placeholder=\"Email\" required=\"required\""+(_vm._ssrAttr("value",(_vm.user.email)))+" class=\"form-control form-control-lg\" data-v-1740813e></fieldset> <fieldset class=\"form-group\" data-v-1740813e><input type=\"password\" placeholder=\"Password\" required=\"required\" minlength=\"8\""+(_vm._ssrAttr("value",(_vm.user.password)))+" class=\"form-control form-control-lg\" data-v-1740813e></fieldset> <button class=\"btn btn-lg btn-primary pull-xs-right\" data-v-1740813e>"+_vm._ssrEscape("\n            "+_vm._s(_vm.isLogin ? 'sign in' : 'sign up')+"\n          ")+"</button></form>")],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=template&id=1740813e&scoped=true&

// EXTERNAL MODULE: ./plugins/request.js
var plugins_request = __webpack_require__(5);

// EXTERNAL MODULE: ./api/user.js
var user = __webpack_require__(29);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=script&lang=js&
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
console.log('-----------------process.client-----------------');
console.log(false);
console.log('-----------------process.client-----------------');
/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  middleware: 'notAuthenticate',
  name: "LoginPage",

  data() {
    return {
      user: {
        username: '',
        email: '',
        password: ''
      },
      errors: {}
    };
  },

  computed: {
    isLogin() {
      return this.$route.name === 'login';
    }

  },
  methods: {
    async onSubmit() {
      try {
        const request = this.isLogin ? user["a" /* login */] : user["c" /* register */];
        const {
          data
        } = await request({
          user: this.user
        });
        this.$store.commit('setUser', data.user);
        jsCookie.set('user', JSON.stringify(data.user));
        await this.$router.push('/');
      } catch (e) {
        this.errors = e.response.data.errors;
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/login/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1740813e",
  "55947170"
  
)

/* harmony default export */ var login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=5.js.map