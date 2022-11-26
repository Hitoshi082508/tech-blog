import Link from 'next/link'
import { client } from '@/lib/client'

export default function Home({ blog }) {
  return (
    <div>
      <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`/${blog.id}`}>
              <div>{blog.title}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'blogs' })

  return {
    props: {
      blog: data.contents,
    },
  }
}
