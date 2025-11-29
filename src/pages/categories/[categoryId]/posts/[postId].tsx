import { useRouter } from 'next/router'

export default function PostDetails() {
	const router = useRouter()
	console.log(router.query)
	return <div>PostDetails id: {router.query.postId}</div>
}
