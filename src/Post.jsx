
import Avatar from "@material-ui/core/Avatar";

function Post(props) {
    return (
     <div class="max-w-md border-gray-300 border-1 mb-14 pt-4 shadow-lg shadow-slate-300">
     <div class="Post_header flex items-center p-5 space-x-2 ">
     <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        <h1>Username</h1>
     </div >
        <img src={props.imgeurl} alt="" className="post_image object-contain w-full" />
         <h4 className="py-8"><span className="m-2 font-semibold">{props.username}</span>{props.caption}</h4>
     </div>
    ); 
  }
  export default Post;
  