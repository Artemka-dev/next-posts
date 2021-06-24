import { useRouter } from 'next/router'

import firebase from 'firebase/app'
import 'firebase/database'

import { useState, useRef } from 'react'

function UpdatePostForm({ post }) {

    const router = useRouter()

    // create states
    const [title, setTitle] = useState(post.title)
    const [description, setDescription] = useState(post.description)


    function submitHandler(event) {
        event.preventDefault()

        if (title === '' || description === '') {
            return false
        }
        
        firebase.database().ref("/posts").child(post.id).update({title, description})

        // push router to all posts
        router.push('/posts')
    }

    const removePost = () => {
        firebase.database().ref("/posts").child(post.id).remove()
        firebase.storage().ref("post_images/").child(post.imageName).delete()

        // push router to all posts
        router.push('/posts')
    }

    return (
        <>
            <form className='mb-5' onSubmit={submitHandler}>
                <div className="mb-3">
                    <label htmlFor="post_title" className="form-label">Название поста</label>
                    <input type="text" className="form-control" placeholder="Название поста" id="post_title" aria-describedby="emailHelp" value={title} onChange={(event) => setTitle(event.target.value)} autoComplete='off' />
                </div>

                <div className="mb-3">
                    <label htmlFor="post_description" className="form-label">Название поста</label>
                    <textarea className="form-control" id="post_description" placeholder="Описание поста" value={description} onChange={(event) => setDescription(event.target.value)} rows='6'></textarea>
                </div>

                <button type="submit" className="btn btn-warning">Изменить пост</button>&nbsp;
                <button type="button" onClick={removePost} className="btn btn-danger">Удалить пост</button>
            </form>
        </>
    )
}

export default UpdatePostForm