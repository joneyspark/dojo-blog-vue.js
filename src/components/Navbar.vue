<template>
    <header>
        <h1>The Dojo Blog</h1>
        <nav>
            <router-link to="/about">Blog Post</router-link> |
            <router-link :to="{ name: 'Create'}">Create Post</router-link>
        </nav>
    </header>
</template>
<script>
export default {
    
}
</script>
<style>
    
</style>