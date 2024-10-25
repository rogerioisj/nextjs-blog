'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Post {
    title: string;
    body: string;
}

export default function PostPage() {
    const { id } = useParams();
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`); // Replace with your API endpoint
                if (!response.ok) {
                    throw new Error('Post not found');
                }
                const data: Post = await response.json();
                setPost(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchPost();
        }
    }, [id]);

    if (loading) return <div className="text-3xl font-bold flex items-center justify-center min-h-screen">Loading...</div>;
    if (error) return <div className="text-3xl font-bold flex items-center justify-center min-h-screen">Error: {error}</div>;

    return (
        <div>
            <h1 className="text-3xl font-bold">{post?.title}</h1>
            <p className="mt-4">{post?.body}</p>
        </div>
    )
}