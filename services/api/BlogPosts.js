
import butter from '../../plugins/butter.js'

export default {
    getPosts() {
        return butter.post.list({
            page:1,
        }).then(response => {
            return response.data
        })
    },
    getEntry(slug){
        return butter.post.retrieve(slug)
            .then(response => {
                return response.data
            })
    }
}

