// app/(frontend)/posts/page.tsx
import { getPayload } from 'payload'
import configPromise from '@payload-config'

export default async function PostsPage() {
  const payload = await getPayload({ config: configPromise })

  const { docs: posts } = await payload.find({
    collection: 'posts',
  })

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>{post.title as string}</div>
      ))}
    </div>
  )
}