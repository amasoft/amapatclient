import "./post.css"
import {Link} from "react-router-dom"
import Comment from "../comments/Comment"
export default function Post({post}) {
  const PF="http://localhost:5000/images/"
  return (
    <div className="post">
      {post.photo && (
        <img
      className="postImg"
      // src={require('../assets/work2.webp')}
      src={PF+ post.photo}
      alt=""
      />
      )}
      
      <div className="postInfor">
        <div className="postCats">
          {post.categories.map((c)=>{
            <span className="postCat">{c.name}</span>

          })}
           
        </div>
        <Link to={`/post/${post._id}`} className="link">
        <span className="postTitle">{post.title}</span>
        </Link>
        <hr/>
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  )
}
