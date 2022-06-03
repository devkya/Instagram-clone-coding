import React, {useEffect, useState} from "react";
import Post from "components/Post";
import Axios from "axios";

const apiUrl = "http://localhost:8000/api/posts/"
function PostList(){
const [postList, setPostList] = useState([]);

    useEffect(() => {
        Axios.get(apiUrl)
            .then(response => {
                const { data } = response;
                console.log("loaderd response :", response);
                setPostList(data);
            })
            .catch(error => {
                // error.response
            });
        console.log('mounted');
    }, []);
    return (
        <div>
        <h2>PostList</h2>
        {postList.map(post => {
            return <Post post={post} key={ post.id }/>
             })
        }   
 
    </div>
    );
}

export default PostList;