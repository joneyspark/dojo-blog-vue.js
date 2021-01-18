<template>
    <div class="tag-cloud">
        <h1>Tags</h1>
        <hr />
        <div v-for="tag in tags" :key="tag">
            <router-link :to="{name: 'Tag', params: {tag: tag}}">#{{tag}}</router-link>
            
        </div>
    </div>
</template>
<script>
import useTags from '../composable/useTags'
export default {
    props: ["posts"],
    setup(props) {
        const { tags } = useTags(props.posts)

        return { tags }
    }
}
</script>
<style>
    .tag-cloud > div {
        display: inline-block;
        margin-right: 10px;
        background: aliceblue;
        padding: 5px;
        border-radius: 15px;
    }
  .tag-cloud > div a {
        color: #adadad;
        font-size: 14px;
        text-decoration: none;
    }
</style>