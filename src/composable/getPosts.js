
import { ref } from 'vue'

const getPosts = () => {
    const posts = ref([])
    const error = ref(null)

    const load = async() => {
        try {
            //simpulate dealy
            await new Promise(resolve => {
                setTimeout(resolve, 2000)
            })
            let data = await fetch('http://localhost:3000/posts')
            if(!data.ok) {
                throw Error('No data available')
            }
            // console.log(data.json());
            
            posts.value = await data.json()

        } catch (error) {
            error.value = error.message
            // console.log(error.value)
            }
    }

    return { posts, error, load}

}

export default getPosts;