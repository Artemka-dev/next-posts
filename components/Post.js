import Link from 'next/link'


function Post({ post }) {
    return (

      <div className="col">
        <div className="card h-100">

          <img src={post.image} className="card-img-top" alt="..." style={{objectFit: "cover", height: "200px"}} />

          <div className="card-body" style={{height: "170px", overflow: "scroll"}}>
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.description}</p>

          </div>
          <div className="card-footer" style={{backgroundColor: 'white', padding: "10px"}}>
          <Link href={"/posts/" + post.id}><a role='button' className="btn btn-primary">Редактировать</a></Link>
          </div>
        </div>
      </div>
        
    )
}

export default Post;