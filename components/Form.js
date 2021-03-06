import React, { useState, useRef } from 'react';

// import firebase
import firebase from 'firebase/app';
import 'firebase/storage'

function Form({ createPost }) {

    // create states
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [progressValue, setProgressValue] = useState(0)
    const [imageUrl, setImageUrl] = useState("")

    // create ref for first input
    const titleRef = useRef(null)
    const imageRef = useRef(null)

    function submitHandler(event) {
        event.preventDefault()

        if (title === '' || desc === '') {
            return false
        }

        createPost({
            title: title,
            description: desc
        }, imageUrl, imageRef.current.files[0] ? imageRef.current.files[0].name : "")

        // clear state
        setTitle('')
        setDesc('')
        setProgressValue(0)
        setImageUrl('')

        imageRef.current.value = ''
        titleRef.current.focus()
    }


    const uploadFile = () => {
        let file = ""

        // if the file exists
        if (imageRef.current.files.length) {
            file = imageRef.current.files[0]
        } else {
            return false
        }
        
        let storageRef = firebase.storage().ref('post_images/' + file.name)
        let task = storageRef.put(file)

        task.on('state_changed',
            (snapshot) => {
                // loading
                let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgressValue(progress)
            },
            (error) => {
                // Handle unsuccessful uploads
            },

            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                task.snapshot.ref.getDownloadURL().then((downloadURL) => {
                    setImageUrl(downloadURL)
                });
            }
        );
    }

    return (
        <form className='mb-5' onSubmit={submitHandler}>

            <div className="progress mb-2">
                <div className="progress-bar" role="progressbar" style={{width: progressValue + "%"}} aria-valuenow={progressValue} aria-valuemin="0" aria-valuemax="100"></div>
            </div>

            <div className="mb-3">
                <label htmlFor="formFile" className="form-label">???????????????? ????????...</label>
                <input className="form-control" type="file" id="formFile" onChange={uploadFile} ref={imageRef} required />
            </div>

            <div className="mb-3">
                <label htmlFor="post_title" className="form-label">???????????????? ??????????</label>
                <input type="text" className="form-control" placeholder="???????????????? ??????????" id="post_title" aria-describedby="emailHelp" value={title} onChange={(event) => setTitle(event.target.value)} ref={titleRef} autoComplete='off' required />
            </div>

            <div className="mb-3">
                <label htmlFor="post_description" className="form-label">???????????????? ??????????</label>
                <textarea className="form-control" id="post_description" placeholder="???????????????? ??????????" value={desc} onChange={(event) => setDesc(event.target.value)} required rows='6'></textarea>
            </div>

            <button type="submit" className="btn btn-success">?????????????? ????????</button>

        </form>
    )
}

export default Form;