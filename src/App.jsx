import img from './photos/Instagram.png';
import Post from './Post';
import {useState, useEffect}  from 'react';
import { db, auth} from "./firebse";
import { collection, getDocs } from "firebase/firestore";
import Modal from "@material-ui/core/Modal";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { async } from '@firebase/util';

function App() { 
  const [posts, setposts] = useState([]);
  const [open, setopen] = useState(false);
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [user, setUser] = useState(null);


  useEffect (()=>{
    if(authUser){

      console.log(authUser);
      setUser(authUser);

      if(authUser.displayName){
      }
      else{
        return authUser.updateProfile({
          displayName: username
        })

      }
    }
    else{
      setUser(null);
    }
  })

  useEffect(()=>{
  const postcollection = collection(db, 'posts');
  getDocs(postcollection)
  .then(responce => {
   const  all_post = responce.docs.map(doc=>(
   {
    data: doc.data(),
    id: doc.id,
   })); 
   setposts(all_post);
  })
  .catch(error => console.log(error.message));
  // console.log(posts);
 }, [])

 const signup = async (event)=>
 {
   console.log(`${email} ${password}`);
    event.preventDeafault();
    try{
      const newuser = await createUserWithEmailAndPassword(
        auth, 
        email,
        password
      );
      console.log(newuser);
    }
    catch(error){
      console.log(error.message);
    }
  

 }
  return (
   <div className="app bg-stone-100 h-screen relative">
      <Modal   
        open={open} onClose={()=>setopen(false)} >
        <div class="translate-x-1/2 translate-y-1/2 
        flex-col  w-80 h-48 transform
         border-2  space-y-4 bg-slate-500 border-stone-700 shadow-md ">
            <div class="pt-2">
            <img src={img} alt="" class="translate-x-20"/>
            </div>
            <div>
            <form class="flex flex-col space-y-2 px-2">
              <input type="text" placeholder='username' value={username} onChange={(e)=> setUserName(e.target.value)}/>
              <input type="text" placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
              <input type="text" placeholder='Password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
              <button type="submit" onClick={signup} className="bg-purple-700 uppercase font-bold ring-2"> sign up</button>
            </form>
            </div>
        </div>
      </Modal>

      <div className="app_header bg-white p-5 border-b-gray-300 border-b-2">
        <img src={img} alt="" className="header_image object-contain"/>
      </div>
      <button onClick={()=>setopen(true)} class="p-2  bg-purple-700 uppercase font-bold ring-2"> sign up</button>
    {
      posts.map((value)=>{
        {/* console.log(value); */}
        return <Post id={value.id} imgeurl={value.data.imgeurl} username={value.data.username} 
        caption={value.data.caption} />;
      })
    }  
   </div>
  );
}

export default App;
