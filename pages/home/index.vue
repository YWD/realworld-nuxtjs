<template>
 <div class="home-page">

   <div class="banner">
     <div class="container">
       <h1 class="logo-font">conduit</h1>
       <p>A place to share your knowledge.</p>
     </div>
   </div>

   <div class="container page">
     <div class="row">

       <div class="col-md-9">
         <div class="feed-toggle">
           <ul class="nav nav-pills outline-active">
             <li class="nav-item">
               <nuxt-link
                 v-if="user"
                 class="nav-link"
                 exact
                 :class="{
                   active: tab === 'your_feed'
                 }"
                 :to="{
                   name: 'home',
                   query: {
                     tab: 'your_feed'
                   }
                 }"
               >Your Feed</nuxt-link>
             </li>
             <li class="nav-item">
               <nuxt-link
                 class="nav-link"
                 exact
                 :class="{
                   active: tab === 'global_feed'
                 }"
                 :to="{
                   name: 'home',
                   query: {
                     tab: 'global_feed'
                   }
                 }"
               >Global Feed</nuxt-link>
             </li>
             <li v-if="tag" class="nav-item">
               <nuxt-link
                 class="nav-link active"
                 :to="{
                   name: 'home',
                   query: {
                     tab: 'tag',
                     tag,
                   }
                 }"
               >#{{ tag }}</nuxt-link>
             </li>
           </ul>
         </div>

         <div class="article-preview" v-for="article in articles">
           <div class="article-meta">
             <nuxt-link
               :to="{
                 name: 'profile',
                 params: {
                   username: article.author.username
                 }
               }"
             >
               <img :src="article.author.image"/>
             </nuxt-link>
             <div class="info">
               <nuxt-link
                 :to="{
                   name: 'profile',
                   params: {
                     username: article.author.username
                   }
                 }"
                 class="author"
               >{{ article.author.username }}</nuxt-link>
               <span class="date">{{ article.createdAt | date }}</span>
             </div>
             <button
               class="btn btn-outline-primary btn-sm pull-xs-right"
               :class="{
                 active: article.favorited,
               }"
               @click="onFavorite(article)"
               :disabled="article.favoriteDisabled"
             >
               <i class="ion-heart"k></i> {{ article.favoritesCount }}
             </button>
           </div>
           <nuxt-link
             :to="{
               name: 'article',
               params: {
                 slug: article.slug
               }
             }" class="preview-link">
             <h1>{{ article.title }}</h1>
             <p>{{ article.description }}</p>
             <span>Read more...</span>
             <ul class="tag-list">
               <li
                 v-for="tag in article.tagList"
                 :key="tag"
                 class="tag-default tag-pill tag-outline"
               >{{ tag }}</li>
             </ul>
           </nuxt-link>
         </div>

         <nav>
           <ul class="pagination">
             <li
               class="page-item ng-scope"
               v-for="item in totalPage"
               :class="{
                 active: page === item
               }"
             >
               <nuxt-link
                 class="page-link ng-binding"
                 :to="{
                   name: 'home',
                   query: {
                     tab: $route.query.tab,
                     tag: $route.query.tag,
                     page: item,
                   }
                 }"
               >{{ item }}</nuxt-link>
             </li>
           </ul>
         </nav>
       </div>

       <div class="col-md-3">
         <div class="sidebar">
           <p>Popular Tags</p>

           <div class="tag-list">
             <nuxt-link
               v-for="tag in tags"
               :key="tag"
               class="tag-pill tag-default"
               :to="{
                 name: 'home',
                 query: {
                   tab: 'tag',
                   tag,
                 }
               }"
             >
               {{ tag }}
             </nuxt-link>
           </div>
         </div>
       </div>

     </div>
   </div>

 </div>
</template>

<script>
import {getArticles, getFeedArticles, addFavorite, deleteFavorite} from "@/api/article";
import {getTags} from "@/api/tag";
import {mapState} from "vuex";

export default {
  name: "HomePage",
  watchQuery: ['page', 'tag', 'tab'],
  async asyncData({ query, store }) {
    const tab = query.tab || 'global_feed'
    const tag = query.tag

    const limit = 5
    let page = parseInt(query.page || 1)

    const loadArticles = store.state.user && tab === 'your_feed' ? getFeedArticles : getArticles
    const [articleRsp, tagRsp] = await Promise.all([
      loadArticles({
        limit,
        offset: (page - 1) * limit,
        tag,
      }),
      getTags(),
    ])
    const {articles, articlesCount} = articleRsp.data
    // 直接用不是动态响应的
    for (let i = 0; i < articles.length; i++) {
      articles[i].favoriteDisabled = false
    }
    const {tags} = tagRsp.data
    return {
      articles,
      articlesCount,
      limit,
      page,
      tags,
      tag,
      tab,
    }
  },
  computed: {
    ...mapState(['user']),
    totalPage() {
      return Math.ceil(this.articlesCount / this.limit)
    }
  },
  methods: {
    async onFavorite(article) {
      article.favoriteDisabled = true
      if (article.favorited) {
        await deleteFavorite(article.slug)
        article.favoritesCount -= 1
        article.favorited = false
      } else {
        await addFavorite(article.slug)
        article.favoritesCount += 1
        article.favorited = true
      }
      article.favoriteDisabled = false
    }
  }
}
</script>

<style scoped>

</style>
