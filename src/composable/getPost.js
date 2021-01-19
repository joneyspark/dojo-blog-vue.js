import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getPost = (id) => {
    const post = ref(null)
    const error = ref(null)

    const load = async() => {
        try {

            const res = await projectFirestore.collection('posts').doc(id).get()

            if(!res.exists) {
                error.value = "That post does not exists"
                throw Error('That post does not exists')
            }

            post.value = {...res.data(), id: res.id}

            console.log(post.value)
        
            /* //simulate delay
            await new Promise(resolve => {
                setTimeout(resolve, 2000)
            })
            
            let data = await fetch('http://localhost:3000/posts/' + id)
            if(!data.ok) {
                throw Error('That post is not exists')
            }
        
            post.value = await data.json() */

        } catch (error) {
            error.value = error.message
            // console.log(error.value)
            }
    }

    return { post, error, load }
}

export default getPost