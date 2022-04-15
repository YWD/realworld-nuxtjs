<template>
  <div class="article-page">

    <div class="banner">
      <div class="container">

        <h1>{{ article.title }}</h1>

        <article-meta :article="article"></article-meta>

      </div>
    </div>

    <div class="container page">

      <div class="row article-content">
        <div class="col-md-12" v-html="article.body">
        </div>
      </div>

      <hr/>

      <div class="article-actions">
        <article-meta :article="article"></article-meta>
      </div>

      <div class="row">
        <article-comments :slug="article.slug"></article-comments>
      </div>

    </div>

  </div>
</template>

<script>
import {getArticle} from "@/api/article";
import MarkdownIt from 'markdown-it'
import ArticleMeta from "@/pages/article/components/article-meta";
import ArticleComments from "@/pages/article/components/article-comments";
export default {
  name: "Article",
  components: {ArticleComments, ArticleMeta},
  async asyncData({params}) {
    const {data} = await getArticle(params.slug)
    const md = new MarkdownIt()
    const article = data.article
    article.body = md.render(article.body)
    return {
      article,
    }
  },
  head() {
    return {
      title: `${this.article.title} - RealWorld`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.description
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
