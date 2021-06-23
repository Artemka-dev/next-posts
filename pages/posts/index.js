import MainLayout from '../../layout/MainLayout'

import Form from '../../components/Form'
import Post from '../../components/Post'

import React, { useState } from 'react';

// import firebase
import firebase from 'firebase'
import "firebase/database"

import slugify from 'react-slugify';

function Posts({ posts }) {

  const [newPosts, setNewPosts] = useState(posts)

  const createPost = (data) => {

    const info = {
      title: data.title,
      description: data.description,
      category: "Программирование", 
      date_pub: new Intl.DateTimeFormat("ru-RU", {day: "numeric", year: "numeric", month: "long"}).format()
    }

    // get key for id in info data
    const key = firebase.database().ref("posts/").push(info).key
    info.id = key

    // change state
    setNewPosts(newPosts.concat([info]))
    
  }

  return (
    <MainLayout>
        <Form createPost={createPost} />
        
        <h3>Посты</h3>

        {newPosts.map((post, index) => {
          return <Post post={post} key={index} />
        })}

    </MainLayout>
  )
}

export default Posts;


// get posts from database on server (query on server)
Posts.getInitialProps = async (ctx) => {
  const all_posts = (await firebase.database().ref("posts/").once('value')).val()
  const posts = Object.keys(all_posts || []).map(key => ({...all_posts[key], id: key}))

  return { posts }
}