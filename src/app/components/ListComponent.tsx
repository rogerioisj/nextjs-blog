'use client';

interface Article {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export default function ListComponent( { articles }: { articles: Article[] } ) {
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
                <a key={article.id} href={`/post/${article.id}`}>
                    <div className="p-4 border rounded hover:bg-gray-700 transition duration-200">
                        <h2 className="text-lg font-semibold">{article.title}</h2>
                    </div>
                </a>
            ))}
        </div>
    )
}