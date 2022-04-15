<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">

        <div class="col-md-10 offset-md-1 col-xs-12">
          <form>
            <fieldset>
              <fieldset class="form-group">
                <input v-model="article.title" type="text" class="form-control form-control-lg" placeholder="Article Title">
              </fieldset>
              <fieldset class="form-group">
                <input v-model="article.description" type="text" class="form-control" placeholder="What's this article about?">
              </fieldset>
              <fieldset class="form-group">
                <textarea v-model="article.body" class="form-control" rows="8" placeholder="Write your article (in markdown)"></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input @keyup.enter="addTag" v-model="article.curTag" type="text" class="form-control" placeholder="Enter tags">
                <div class="tag-list">
                  <span v-for="tag in article.tagList" :key="tag" class="tag-default tag-pill ng-binding ng-scope">
                    <i class="ion-close-round"></i>
                    {{ tag }}
                  </span>
                </div>
              </fieldset>
              <button @click="publishArticle" class="btn btn-lg pull-xs-right btn-primary" type="button">
                Publish Article
              </button>
            </fieldset>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import {createArticle, getArticle, updateArticle} from "@/api/article";

export default {
  middleware: 'authenticate',
  name: "Editor",
  async asyncData({params}) {
    let article
    if (params.slug) {
      const {data} = await getArticle(params.slug)
      article = data.article
    }
    return {
      article: article || {
        title: '',
        description: '',
        body: '',
        curTag: '',
        tagList: [],
      }
    }
  },
  data() {
    return {}
  },
  methods: {
    addTag() {
      this.article.tagList.push(this.article.curTag)
      this.article.curTag = ''
    },
    async publishArticle() {
      let slug
      if (this.$route.name === 'editor') {
        const {data} = await createArticle({
          article: this.article
        })
        slug = data.article.slug
      } else {
        const {data} = await updateArticle({
          article: this.article
        })
        slug = data.article.slug
      }
      await this.$router.push('/article/' + slug)
    }
  }
}
</script>

<style scoped>

</style>
