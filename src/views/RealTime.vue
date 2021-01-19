<template>
    <div class="post-list">
        <div v-for="post in posts" :key="post.id">
            <SinglePost :post="post" />
            <hr>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'
import SinglePost from '../components/SinglePost'
export default {
    components: { SinglePost },
    setup() {
        const posts = ref([])

        projectFirestore.collection('posts')
        .orderBy('title', 'desc')
        .onSnapshot((snap => {
            let docs = snap.docs.map( doc => {
                return { ...doc.data(), id: doc.id }
            })
            console.log('document>>>', docs)
            posts.value = docs
        }))

        return { posts }
    }    
}
</script>
<style>
    
</style>