import Link from 'next/link'

function Post({ post }) {
    return (

        <div className="card text-center col-lg-6 col-md-8 col-sm-12 mb-5">
            <div className="card-header">
                {post.category}
            </div>
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.description}</p>
              <Link href={`/posts/${post.id}`}><a className="btn btn-sm btn-primary">Подробнее</a></Link>
            </div>
            <div className="card-footer text-muted">
              {post.date_pub}
            </div>
        </div>
        
    )
}

export default Post;