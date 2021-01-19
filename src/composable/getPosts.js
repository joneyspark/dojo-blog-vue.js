
import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getPosts = () => {
    const posts = ref([])
    const error = ref(null)

    const load = async() => {
        try {

            const res = await projectFirestore.collection('posts')
            .orderBy('title', 'desc')
            .get()

            posts.value = res.docs.map(doc => {
                return { ...doc.data(), id: doc.id }
                
            })
            /* //simpulate dealy
            await new Promise(resolve => {
                setTimeout(resolve, 2000)
            })
            let data = await fetch('http://localhost:3000/posts')
            if(!data.ok) {
                throw Error('No data available')
            }
            // console.log(data.json());
            
            posts.value = await data.json() */

        } catch (error) {
            error.value = error.message
            // console.log(error.value)
            }
    }

    return { posts, error, load}

}

export default getPosts;