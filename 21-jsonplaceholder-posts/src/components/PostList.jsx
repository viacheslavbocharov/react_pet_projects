import React, { useEffect, useState } from 'react'
import Post from './Post'

const API_URL = 'https://jsonplaceholder.typicode.com/posts'

export default function PostList() {
    const [posts, setPosts] = useState([])
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(API_URL)
            .then((res) => { return res.json() })
            .then(posts => {
                console.log(posts)
                setPosts(posts)
            })
            .catch((error) => setError(error.message))
            .finally(() => setIsLoading(false))
    }, [])


    if (error) {
        return <h1>Error: {error}</h1>
    }


    return (
        <>
            <h1>Posts</h1>
            <hr />
            {isLoading ? (
                <h1>Loading...</h1>
            ) : (
                posts.map((post) => (<Post key={post.id} {...post} />))
            )}
        </>
    )
}
