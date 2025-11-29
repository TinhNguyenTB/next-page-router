import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Home() {
	const router = useRouter()
	const goToPostDetail = () => {
		router.push({
			pathname: '/categories/[categoryId]/posts/[postId]',
			query: {
				categoryId: 1,
				postId: 2,
			},
		})
	}
	return (
		<div>
			<h5>Hello world</h5>
			<Link href={'/blog'}>Go to blog</Link>
			<button
				className="border block p-2 rounded-md mt-2 hover:bg-amber-50 cursor-pointer transition-all"
				onClick={goToPostDetail}
			>
				Go to post detail
			</button>
		</div>
	)
}
