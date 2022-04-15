<template>
  <div class="profile-page">

    <div class="user-info">
      <div class="container">
        <div class="row">

          <div class="col-xs-12 col-md-10 offset-md-1">
            <img :src="profile.image" class="user-img"/>
            <h4>{{ profile.username }}</h4>
            <p>
              {{ profile.bio }}
            </p>
            <button
              @click="followUser"
              v-if="profile.username !== user.username"
              class="btn btn-sm btn-outline-secondary action-btn"
              :class="{
                active: profile.following
              }"
            >
              <i class="ion-plus-round"></i>&nbsp;
              {{ profile.following ? 'Unfollow' : 'Follow'}} {{ profile.username }}
            </button>
          </div>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">

        <div class="col-xs-12 col-md-10 offset-md-1">
          <div class="articles-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <nuxt-link
                  class="nav-link"
                  :class="{

                  }"
                  :to="{
                    name: 'profile',
                    params: {
                      username: profile.username,
                    }
                  }"
                >My Articles</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link
                  class="nav-link"
                  :to="{
                    name: 'profile-favorites',
                    params: {
                      username: profile.username,
                    }

                  }"
                >Favorite Articles</nuxt-link>
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
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import {profile, userFollow, userUnfollow} from "@/api/user";
import {mapState} from "vuex";
import {getArticles} from "@/api/article";

export default {
  middleware: 'authenticate',
  name: "Profile",
  computed: {
    ...mapState(['user']),
  },
  async asyncData({params, route}) {
    let articleParams
    if (route.name === 'profile-favorites') {
      articleParams = {
        favorited: params.username
      }
    } else {
      articleParams = {
        author: params.username
      }
    }
    const {data: articlesData} = await getArticles(articleParams)
    const {data} = await profile(params.username)
    return {
      profile: data.profile,
      articles: articlesData.articles
    }
  },
  methods: {
    async followUser() {
      const followAction = this.profile.following ? userUnfollow : userFollow
      const {data} = await followAction(this.profile.username)
      this.profile = data.profile
    }
  }
}
</script>

<style scoped>

</style>
