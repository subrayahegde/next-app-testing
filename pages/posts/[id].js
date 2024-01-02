import Link from 'next/link';

const pathUrl = process.env.NEXT_PUBLIC_API_URL + "/api/blogPosts";

const PostIndex = ({ post }) => {
 return (
   <div>
     <h1>Blog Post Details for PostId: {post.id} </h1>
     <p>Id: {post.id} </p>
     <p>Title: {post.title} </p>
     <p>Content: {post.content} </p>     
   </div>
 );
};

export async function getStaticPaths() {   
 
  const res = await fetch(pathUrl);
  const users = await res.json();
  
  const paths = users.map((user) => ({
    params: { id: user.id.toString() },
  }))
  return { paths, fallback: false }
};

export async function getStaticProps( {params} ) {
 const propsUrl = pathUrl + "/" + params.id;
 const response = await fetch(propsUrl);
 const data = await response.json(); 
 return {
   props: {
     post: data
   }
 };
}

export default PostIndex;
