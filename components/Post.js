import Link from 'next/link'


function Post({ post }) {
    return (

      <div className="col">
      <div className="card">

        <img src={post.image} className="card-img-top" alt="..." />

        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.description}</p>

          <Link href={"/posts/" + post.id}><a role='button' className="btn btn-primary">Редактировать</a></Link>
        </div>
      </div>
    </div>
        
    )
}

export default Post;