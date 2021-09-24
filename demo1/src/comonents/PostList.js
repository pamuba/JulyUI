import React, { Component } from 'react'
import axios from 'axios'

export class PostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts: [],
             msg:null
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response)
                this.setState({posts:response.data})
            })
            .catch(err=>{
                console.log(err)
                this.setState({msg:'Error getting data'})
            })
    }
    render() {
        const {posts, msg} = this.state
        return (
            <div>
                List of Posts
                {
                    posts.length ? 
                    posts.map(post => <div key={post.id}>{post.title}</div>):null
                }
                {
                    msg ? <h1>{msg}</h1>:null
                }
            </div>
        )
    }
}

export default PostList
