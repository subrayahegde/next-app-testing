import Head from "next/head";
import Link from "next/link";
import styles from './Index.module.css'

const Post = ({ data }) => {
  return (  
  
      <div className="flex h-screen">
        <div className="m-auto">
          <h1 className={styles.header}><u>LIST OF BLOG POSTS</u></h1>
          <br />
          <ul className="list-disc list-inside">
           {data.map((post) => (
           <li key={post.id}>
           <Link href={`/posts/${post.id}`}>
             {post.title}
           </Link>
           </li>
           ))}
          </ul>    
          <br />
          <p className={styles.title}>
            Sample title using module level CSS
          </p>  
          <br />
          <h1 className={styles.h1}>
            Another sample title using module level CSS
          </h1>
        </div>
      </div>        
  );
}

export const getStaticProps = async () => {
   const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/blogPosts");
   const data = await response.json();
  
  return {
    props: {
      data,
    },
  revalidate: 10, // In seconds
  };
};

export default Post;
