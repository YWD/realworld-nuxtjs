<template>
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
     >
       {{ article.author.username }}
     </nuxt-link>
     <span class="date">{{ article.createdAt | date('MMM DD, YY') }}</span>
   </div>
   <span class="ng-scope" v-if="article.author.username === user.username">
    <nuxt-link
      class="btn btn-outline-secondary btn-sm"
      :to="{
        name: 'editor-edit',
        params: {
          slug: article.slug
        }
      }"
    >
      <i class="ion-edit"></i> Edit Article
    </nuxt-link>
     <button @click="articleDelete" class="btn btn-outline-danger btn-sm">
      <i class="ion-trash-a"></i> Delete Article
    </button>
  </span>
   <template v-else>
     <button
       class="btn btn-sm btn-outline-secondary"
       :class="{
       active: article.author.following
     }"
     >
       <i class="ion-plus-round"></i>
       Follow {{ article.author.username }}
     </button>
     <button
       class="btn btn-sm btn-outline-primary"
       :class="{
       active: article.favorited
     }"
     >
       <i class="ion-heart"></i>
       Favorite Post <span class="counter">({{ article.favoritesCount }})</span>
     </button>
   </template>
 </div>
</template>

<script>
import {mapState} from "vuex"
import {deleteArticle} from "@/api/article";
export default {
  name: "article-meta",
  props: {
    article: {
      type: Object,
      required: true,
    }
  },
  computed: {
    ...mapState(['user']),
  },
  methods: {
    async articleDelete() {
      await deleteArticle(this.article.slug)
      await this.$router.back()
    }
  }
}
</script>

<style scoped>

</style>
