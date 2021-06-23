import { useRouter } from 'next/router'
import MainLayout from '../../layout/MainLayout'

// import firebase
import firebase from 'firebase'
import "firebase/database"
import UpdatePostForm from '../../components/UpdatePostForm'

function PagePostDetail({ post }) {

    return (
        <MainLayout>
            <UpdatePostForm post={post} />
        </MainLayout>

    )
}

export default PagePostDetail;


PagePostDetail.getInitialProps = async (router) => {
    const post = (await firebase.database().ref("posts/").child(router.query.id).once('value')).val()
    post.id = router.query.id

    return { post }
}