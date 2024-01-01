import blogPosts from '../../../data/blogPosts.json';

export default (req, res) => { 
 const post = blogPosts;

 if (!post) {
   res.status(404).json({ error: 'Blog post not found' });
 } else {
   res.status(200).json(post);
 }
};
