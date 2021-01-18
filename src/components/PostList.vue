<template>
    <div class="post-list">
        <h1>Post List</h1>
        <div v-for="post in posts" :key="post.id">
            <SinglePost :post="post" />
        </div>
    </div>
</template>
<script>
import SinglePost from './SinglePost'



export default {
    props: ['posts'],
    components: {
        SinglePost,
    },
    setup(props) {
        // console.log(props.posts)
    }
}
</script>
<style>
    
</style>