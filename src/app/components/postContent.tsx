interface Post {
    title: string;
    body: string;
}

export default function PostContentComponent(post: Post) {
    return (
        <div>
            <h1 className="text-3xl font-bold">{post.title}</h1>
            <p className="mt-4">{post.body}</p>
        </div>
    )
}