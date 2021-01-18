<template>
  <div class="about">
    
    <div v-if="error">{{error}}</div>
    <div v-if="posts.length" class="postlist-wrapper">
      <PostList :posts="posts" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import PostList from '../components/PostList'
import getPosts from '../composable/getPosts'
import Spinner from '../components/Spinner'
import TagCloud from '../components/TagCloud'

export default {
  name: 'About',
  components: { PostList, Spinner, TagCloud },
  setup() {
    
    const { posts, error, load } = getPosts()

    load()

    return { posts, error }
  }
}
</script>

<style scoped>
  .about{
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
    text-align: left;
  }
  .postlist-wrapper{
    display: grid;
    grid-template-columns: 3fr 1fr;
    
  }
  
</style>