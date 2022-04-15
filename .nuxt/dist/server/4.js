exports.ids = [4];
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

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=template&id=7cf260fc&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home-page"},[_vm._ssrNode("<div class=\"banner\" data-v-7cf260fc><div class=\"container\" data-v-7cf260fc><h1 class=\"logo-font\" data-v-7cf260fc>conduit</h1> <p data-v-7cf260fc>A place to share your knowledge.</p></div></div> "),_vm._ssrNode("<div class=\"container page\" data-v-7cf260fc>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-7cf260fc>","</div>",[_vm._ssrNode("<div class=\"col-md-9\" data-v-7cf260fc>","</div>",[_vm._ssrNode("<div class=\"feed-toggle\" data-v-7cf260fc>","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills outline-active\" data-v-7cf260fc>","</ul>",[_vm._ssrNode("<li class=\"nav-item\" data-v-7cf260fc>","</li>",[(_vm.user)?_c('nuxt-link',{staticClass:"nav-link",class:{
                  active: _vm.tab === 'your_feed'
                },attrs:{"exact":"","to":{
                  name: 'home',
                  query: {
                    tab: 'your_feed'
                  }
                }}},[_vm._v("Your Feed")]):_vm._e()],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-7cf260fc>","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{
                  active: _vm.tab === 'global_feed'
                },attrs:{"exact":"","to":{
                  name: 'home',
                  query: {
                    tab: 'global_feed'
                  }
                }}},[_vm._v("Global Feed")])],1),_vm._ssrNode(" "),(_vm.tag)?_vm._ssrNode("<li class=\"nav-item\" data-v-7cf260fc>","</li>",[_c('nuxt-link',{staticClass:"nav-link active",attrs:{"to":{
                  name: 'home',
                  query: {
                    tab: 'tag',
                    tag: _vm.tag,
                  }
                }}},[_vm._v("#"+_vm._s(_vm.tag))])],1):_vm._e()],2)]),_vm._ssrNode(" "),_vm._l((_vm.articles),function(article){return _vm._ssrNode("<div class=\"article-preview\" data-v-7cf260fc>","</div>",[_vm._ssrNode("<div class=\"article-meta\" data-v-7cf260fc>","</div>",[_c('nuxt-link',{attrs:{"to":{
                name: 'profile',
                params: {
                  username: article.author.username
                }
              }}},[_c('img',{attrs:{"src":article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\" data-v-7cf260fc>","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
                  name: 'profile',
                  params: {
                    username: article.author.username
                  }
                }}},[_vm._v(_vm._s(article.author.username))]),_vm._ssrNode(" <span class=\"date\" data-v-7cf260fc>"+_vm._ssrEscape(_vm._s(_vm._f("date")(article.createdAt)))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrAttr("disabled",article.favoriteDisabled))+(_vm._ssrClass("btn btn-outline-primary btn-sm pull-xs-right",{
                active: article.favorited,
              }))+" data-v-7cf260fc><i k class=\"ion-heart\" data-v-7cf260fc></i>"+_vm._ssrEscape(" "+_vm._s(article.favoritesCount)+"\n            ")+"</button>")],2),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"preview-link",attrs:{"to":{
              name: 'article',
              params: {
                slug: article.slug
              }
            }}},[_c('h1',[_vm._v(_vm._s(article.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(article.description))]),_vm._v(" "),_c('span',[_vm._v("Read more...")]),_vm._v(" "),_c('ul',{staticClass:"tag-list"},_vm._l((article.tagList),function(tag){return _c('li',{key:tag,staticClass:"tag-default tag-pill tag-outline"},[_vm._v(_vm._s(tag))])}),0)])],2)}),_vm._ssrNode(" "),_vm._ssrNode("<nav data-v-7cf260fc>","</nav>",[_vm._ssrNode("<ul class=\"pagination\" data-v-7cf260fc>","</ul>",_vm._l((_vm.totalPage),function(item){return _vm._ssrNode("<li"+(_vm._ssrClass("page-item ng-scope",{
                active: _vm.page === item
              }))+" data-v-7cf260fc>","</li>",[_c('nuxt-link',{staticClass:"page-link ng-binding",attrs:{"to":{
                  name: 'home',
                  query: {
                    tab: _vm.$route.query.tab,
                    tag: _vm.$route.query.tag,
                    page: item,
                  }
                }}},[_vm._v(_vm._s(item))])],1)}),0)])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-md-3\" data-v-7cf260fc>","</div>",[_vm._ssrNode("<div class=\"sidebar\" data-v-7cf260fc>","</div>",[_vm._ssrNode("<p data-v-7cf260fc>Popular Tags</p> "),_vm._ssrNode("<div class=\"tag-list\" data-v-7cf260fc>","</div>",_vm._l((_vm.tags),function(tag){return _c('nuxt-link',{key:tag,staticClass:"tag-pill tag-default",attrs:{"to":{
                name: 'home',
                query: {
                  tab: 'tag',
                  tag: tag,
                }
              }}},[_vm._v("\n              "+_vm._s(tag)+"\n            ")])}),1)],2)])],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=template&id=7cf260fc&scoped=true&

// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(28);

// EXTERNAL MODULE: ./plugins/request.js
var request = __webpack_require__(5);

// CONCATENATED MODULE: ./api/tag.js

const getTags = params => Object(request["b" /* request */])({
  url: 'api/tags',
  method: 'GET',
  params
});
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=script&lang=js&
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



/* harmony default export */ var homevue_type_script_lang_js_ = ({
  name: "HomePage",
  watchQuery: ['page', 'tag', 'tab'],

  async asyncData({
    query,
    store
  }) {
    const tab = query.tab || 'global_feed';
    const tag = query.tag;
    const limit = 5;
    let page = parseInt(query.page || 1);
    const loadArticles = store.state.user && tab === 'your_feed' ? api_article["h" /* getFeedArticles */] : api_article["f" /* getArticles */];
    const [articleRsp, tagRsp] = await Promise.all([loadArticles({
      limit,
      offset: (page - 1) * limit,
      tag
    }), getTags()]);
    const {
      articles,
      articlesCount
    } = articleRsp.data; // 直接用不是动态响应的

    for (let i = 0; i < articles.length; i++) {
      articles[i].favoriteDisabled = false;
    }

    const {
      tags
    } = tagRsp.data;
    return {
      articles,
      articlesCount,
      limit,
      page,
      tags,
      tag,
      tab
    };
  },

  computed: { ...Object(external_vuex_["mapState"])(['user']),

    totalPage() {
      return Math.ceil(this.articlesCount / this.limit);
    }

  },
  methods: {
    async onFavorite(article) {
      article.favoriteDisabled = true;

      if (article.favorited) {
        await Object(api_article["d" /* deleteFavorite */])(article.slug);
        article.favoritesCount -= 1;
        article.favorited = false;
      } else {
        await Object(api_article["a" /* addFavorite */])(article.slug);
        article.favoritesCount += 1;
        article.favorited = true;
      }

      article.favoriteDisabled = false;
    }

  }
});
// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_homevue_type_script_lang_js_ = (homevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/home/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_homevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7cf260fc",
  "ca2bbe94"
  
)

/* harmony default export */ var home = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=4.js.map