import React, { useState, useRef } from 'react'

function Form({ createPost }) {

    // create states
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')

    // create ref for first input
    const titleRef = useRef(null)

    function submitHandler(event) {
        event.preventDefault()

        if (title === '' || desc === '') {
            return false
        }

        createPost({
            title: title,
            description: desc
        })

        setTitle('')
        setDesc('')

        titleRef.current.focus()
    }

    return (
        <form className='mb-5' onSubmit={submitHandler}>
            <div className="mb-3">
                <label htmlFor="post_title" className="form-label">Название поста</label>
                <input type="text" className="form-control" placeholder="Название поста" id="post_title" aria-describedby="emailHelp" value={title} onChange={(event) => setTitle(event.target.value)} ref={titleRef} autoComplete='off' />
            </div>

            <div className="mb-3">
                <label htmlFor="post_description" className="form-label">Название поста</label>
                <textarea className="form-control" id="post_description" placeholder="Описание поста" value={desc} onChange={(event) => setDesc(event.target.value)}></textarea>
            </div>

            <button type="submit" className="btn btn-success">Создать пост</button>
        </form>
    )
}

export default Form;