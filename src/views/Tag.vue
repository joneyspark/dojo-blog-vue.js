<template>
    <div class="tag">
        <h1>Tag Page</h1>
        <h1>{{getTag}}</h1>
        <div v-if="error">{{error}}</div>
        <div v-if="posts.length">
            <PostList :posts="postWithTag" />
        </div>
        <div v-else>
            <Spniner />
        </div>
    </div>
</template>
<script>
import { computed, ref } from 'vue'

import { useRoute } from 'vue-router'
import Spniner from '../components/Spinner'
import PostList from '../components/PostList'
import getPosts from '../composable/getPosts'

export default {
    components: { PostList, Spniner },
    setup(props) {
        const route = useRoute()
        const getTag = ref(route.params.tag)
        
        const { posts, error, load } = getPosts()

        load()

        const postWithTag = computed(() => {
            return posts.value.filter((p) => p.tags.includes(route.params.tag))
        })

        return { posts, error, getTag, postWithTag }
    }
}
</script>
<style>
    
</style>