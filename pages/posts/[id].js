import { useState, useEffect } from 'react';

import { useRouter } from 'next/router'
import MainLayout from '../../layout/MainLayout'

// import firebase
import firebase from 'firebase'
import "firebase/database"

// components
import UpdatePostForm from '../../components/UpdatePostForm'
import Loader from '../../components/Loader';

function PagePostDetail({ serverPost }) {

    const [post, setPost] = useState(serverPost)
    const router = useRouter()

    useEffect(() => {
        async function load() {
            const data = (await firebase.database().ref("posts/").child(router.query.id).once('value')).val()
            setPost({...data, id: router.query.id})
        }

        if (!serverPost) {
            load()
        }
    }, [])

    if (!post) {
        return (
            <MainLayout>
                <Loader />
            </MainLayout>
        )
    }

    return (
        <MainLayout>
            <UpdatePostForm post={post} />
        </MainLayout>

    )
 
}

export default PagePostDetail;


PagePostDetail.getInitialProps = async ({ query, req }) => {

    if (!req) {
        return {serverPost: null}
    }

    const serverPost = (await firebase.database().ref("posts/").child(query.id).once('value')).val()

    serverPost.id = query.id
    return { serverPost }
}

// для исключительно серверных запросов
// export async function getServerSideProps({ query, req }) {
//     // if (!req) {
//     //     return { props: { serverPost: null } }
//     // }

//     const serverPost = (await firebase.database().ref("posts/").child(query.id).once('value')).val()
//     serverPost.id = query.id

//     return { props: { serverPost } }
// }