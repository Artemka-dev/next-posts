import '../styles/globals.css'
import NextNprogress from 'nextjs-progressbar';

import firebase from 'firebase/app'

// Initialize Firebase

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyBErQTW5Hfy4R0l7tGQnf2ogPI13_1IM0U",
    authDomain: "posts-f9da9.firebaseapp.com",
    projectId: "posts-f9da9",
    storageBucket: "posts-f9da9.appspot.com",
    messagingSenderId: "566278268363",
    appId: "1:566278268363:web:83e5f468ed4665de40424e"
  })
}

function MyApp({ Component, pageProps }) {
  return (
    <>
    
      <NextNprogress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
