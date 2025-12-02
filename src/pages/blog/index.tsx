import { useRouter } from 'next/router'

export default function Blog() {
	const router = useRouter()
	console.log('blog query:', router.query)

	return <div>Blog</div>
}

export async function getServerSideProps() {
	return {
		props: {},
	}
}
