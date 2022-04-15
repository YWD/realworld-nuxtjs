exports.ids = [1];
exports.modules = {

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return updateArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getFeedArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return deleteFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return deleteArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getComments; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

const getArticles = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    url: 'api/articles',
    method: 'GET',
    params
  });
};
const createArticle = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    url: 'api/articles',
    method: 'POST',
    data
  });
};
const updateArticle = data => {
  console.log(data);
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    url: 'api/articles/' + data.article.slug,
    method: 'PUT',
    data: data
  });
};
const getFeedArticles = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    url: 'api/articles/feed',
    method: 'GET',
    params
  });
};
const addFavorite = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    url: `api/articles/${slug}/favorite`,
    method: 'POST'
  });
};
const deleteFavorite = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    url: `api/articles/${slug}/favorite`,
    method: 'DELETE'
  });
};
const getArticle = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    url: `/api/articles/${slug}`,
    method: 'GET'
  });
};
const deleteArticle = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    url: `/api/articles/${slug}`,
    method: 'DELETE'
  });
};
const getComments = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    url: `/api/articles/${slug}/comments`,
    method: 'GET'
  });
};

/***/ }),

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

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=template&id=3db8d74a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"profile-page"},[_vm._ssrNode("<div class=\"user-info\" data-v-3db8d74a><div class=\"container\" data-v-3db8d74a><div class=\"row\" data-v-3db8d74a><div class=\"col-xs-12 col-md-10 offset-md-1\" data-v-3db8d74a><img"+(_vm._ssrAttr("src",_vm.profile.image))+" class=\"user-img\" data-v-3db8d74a> <h4 data-v-3db8d74a>"+_vm._ssrEscape(_vm._s(_vm.profile.username))+"</h4> <p data-v-3db8d74a>"+_vm._ssrEscape("\n            "+_vm._s(_vm.profile.bio)+"\n          ")+"</p> "+((_vm.profile.username !== _vm.user.username)?("<button"+(_vm._ssrClass("btn btn-sm btn-outline-secondary action-btn",{
              active: _vm.profile.following
            }))+" data-v-3db8d74a><i class=\"ion-plus-round\" data-v-3db8d74a></i>"+_vm._ssrEscape(" \n            "+_vm._s(_vm.profile.following ? 'Unfollow' : 'Follow')+" "+_vm._s(_vm.profile.username)+"\n          ")+"</button>"):"<!---->")+"</div></div></div></div> "),_vm._ssrNode("<div class=\"container\" data-v-3db8d74a>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-3db8d74a>","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-10 offset-md-1\" data-v-3db8d74a>","</div>",[_vm._ssrNode("<div class=\"articles-toggle\" data-v-3db8d74a>","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills outline-active\" data-v-3db8d74a>","</ul>",[_vm._ssrNode("<li class=\"nav-item\" data-v-3db8d74a>","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{

                },attrs:{"to":{
                  name: 'profile',
                  params: {
                    username: _vm.profile.username,
                  }
                }}},[_vm._v("My Articles")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-3db8d74a>","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":{
                  name: 'profile-favorites',
                  params: {
                    username: _vm.profile.username,
                  }

                }}},[_vm._v("Favorite Articles")])],1)],2)]),_vm._ssrNode(" "),_vm._l((_vm.articles),function(article){return _vm._ssrNode("<div class=\"article-preview\" data-v-3db8d74a>","</div>",[_vm._ssrNode("<div class=\"article-meta\" data-v-3db8d74a>","</div>",[_c('nuxt-link',{attrs:{"to":{
               name: 'profile',
               params: {
                 username: article.author.username
               }
             }}},[_c('img',{attrs:{"src":article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\" data-v-3db8d74a>","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
                 name: 'profile',
                 params: {
                   username: article.author.username
                 }
               }}},[_vm._v(_vm._s(article.author.username))]),_vm._ssrNode(" <span class=\"date\" data-v-3db8d74a>"+_vm._ssrEscape(_vm._s(_vm._f("date")(article.createdAt)))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrAttr("disabled",article.favoriteDisabled))+(_vm._ssrClass("btn btn-outline-primary btn-sm pull-xs-right",{
               active: article.favorited,
             }))+" data-v-3db8d74a><i k class=\"ion-heart\" data-v-3db8d74a></i>"+_vm._ssrEscape(" "+_vm._s(article.favoritesCount)+"\n            ")+"</button>")],2),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"preview-link",attrs:{"to":{
             name: 'article',
             params: {
               slug: article.slug
             }
           }}},[_c('h1',[_vm._v(_vm._s(article.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(article.description))]),_vm._v(" "),_c('span',[_vm._v("Read more...")]),_vm._v(" "),_c('ul',{staticClass:"tag-list"},_vm._l((article.tagList),function(tag){return _c('li',{key:tag,staticClass:"tag-default tag-pill tag-outline"},[_vm._v(_vm._s(tag))])}),0)])],2)})],2)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=template&id=3db8d74a&scoped=true&

// EXTERNAL MODULE: ./api/user.js
var user = __webpack_require__(29);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// EXTERNAL MODULE: ./api/article.js
var article = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=script&lang=js&
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
//



/* harmony default export */ var profilevue_type_script_lang_js_ = ({
  middleware: 'authenticate',
  name: "Profile",
  computed: { ...Object(external_vuex_["mapState"])(['user'])
  },

  async asyncData({
    params,
    route
  }) {
    let articleParams;

    if (route.name === 'profile-favorites') {
      articleParams = {
        favorited: params.username
      };
    } else {
      articleParams = {
        author: params.username
      };
    }

    const {
      data: articlesData
    } = await Object(article["f" /* getArticles */])(articleParams);
    const {
      data
    } = await Object(user["b" /* profile */])(params.username);
    return {
      profile: data.profile,
      articles: articlesData.articles
    };
  },

  methods: {
    async followUser() {
      const followAction = this.profile.following ? user["e" /* userUnfollow */] : user["d" /* userFollow */];
      const {
        data
      } = await followAction(this.profile.username);
      this.profile = data.profile;
    }

  }
});
// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_profilevue_type_script_lang_js_ = (profilevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/profile/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_profilevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3db8d74a",
  "1a8abef0"
  
)

/* harmony default export */ var profile = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=1.js.map