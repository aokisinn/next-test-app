import { useRouter } from 'next/router'

export default function MessagePage() {
    const router = useRouter()
    const { message } = router.query
    return (
        <div>
            Hello {message}
        </div>
    )
}