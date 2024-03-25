import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;



app.get('/posts', (req, res) => {
    res.json(blogs)
})

app.get('/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const foundBlog = blogs.find((blog) => blog.id === id);
    res.json(foundBlog);
})


app.post('/posts', (req, res) => {
    const newPost = {
        id: blogs.length + 1,
    };
    blogs.push(newPost);
    console.log(blogs.slice(-1));
    res.json(newPost);
})

app.put('/posts/:id', (req, res) => {
    const blogId = parseInt(req.params.id)
    const blogIndex = blogs.find(blog => blog.id === blogId)
    res.json(blogs[blogIndex])
})

app.delete('/posts/:id', (req, res) => {
    const blogsId = parseInt(req.params.id);
    const blogIndex = blogs.findIndex((blog) => blog.id === blogsId);
    if (blogIndex > -1) {
        blogs.splice(blogIndex, 1)
        res.json('deleted');
    } else {
        res
            .status(404)
            .json({ error: `Joke with id: ${id} not found. No jokes were deleted.` });
    }
})

app.get('/posts/:id/comments', (req, res) => {
    const id = parseInt(req.params.id);
    const foundBlog = blogs.find((blog) => blog.id === id);
    res.json(foundBlog.comment);
})

app.post('/posts/:id/comments', (req, res) => {
    const blogsId = parseInt(req.params.id);
    const blogIndex = blogs.findIndex((blog) => blog.id === blogsId);
    const newComment = {
        comment: "nice blog!"
    };
    blogs[blogIndex].push(newComment);
    console.log(blogs.slice(-1));
    res.json(newComment);
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

var blogs = [
    {
        id: 1,
        title: "first blog",
        comment: "this is good"
    },
    {
        id: 2,
        title: "second blog",
        comment: "keep it up"
    },
    {
        id: 3,
        title: "third blog",
        comment: "give up"
    }
]