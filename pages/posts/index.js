import MainLayout from '../../layout/MainLayout'

import Form from '../../components/Form'
import Post from '../../components/Post'

import React, { useState, useEffect } from 'react';

// import firebase
import firebase from 'firebase'
import "firebase/database"
import Loader from '../../components/Loader';

function Posts({ posts }) {

  const [newPosts, setNewPosts] = useState(posts)

  useEffect(() => {

    async function load() {
      const all_posts = (await firebase.database().ref("posts/").once('value')).val()
      const data = Object.keys(all_posts || []).map(key => ({ ...all_posts[key], id: key }))

      setNewPosts(data)
    }

    if (!posts) {
      load()
    }

  }, [])

  const createPost = (data, imageUrl, imageName) => {

    const info = {
      title: data.title,
      description: data.description,
      image: imageUrl,
      imageName: imageName,
      category: "Программирование",
      date_pub: new Intl.DateTimeFormat("ru-RU", { day: "numeric", year: "numeric", month: "long" }).format()
    }

    const key = firebase.database().ref("posts/").push(info).key
    info.id = key

    // change state
    setNewPosts(newPosts.concat([info]))

  }

  return (
    <MainLayout>
      <Form createPost={createPost} />

      <h3>Посты</h3>

      <div className='mb-5'>
        {!newPosts ? <Loader /> :
          <div className="row row-cols-md-2 row-cols-lg-4 row-cols-sm-1 g-4">
            {newPosts.map((post, index) => {
              return <Post post={post} key={index} />
            })}
          </div>
        }
      </div>

    </MainLayout>
  )
}

export default Posts;


// get posts from database on server (query on server)
Posts.getInitialProps = async ({req}) => {

  if (!req) {
    return {posts: null }
  }

  const all_posts = (await firebase.database().ref("posts/").once('value')).val()
  const posts = Object.keys(all_posts || []).map(key => ({...all_posts[key], id: key}))

  return {posts}
}