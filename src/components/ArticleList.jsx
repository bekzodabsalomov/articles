import Link from "next/link"
function ArticleList( {articles} ) {
  return (
    <div className='prose'>
        <ul className='list-none p-0 m-0'>
            {articles.map((article)=> {
                return <li key={article.id}>
                    <h1>{article.title}</h1>
                    <p>Author: {article.author}</p>
                    <Link href={'/articles/${article.id}'}>Read More</Link>
                </li>
            })}
        </ul>
    </div>
  )
}

export default ArticleList