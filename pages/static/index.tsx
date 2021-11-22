import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
    return (
        <div>
            <Head>
                <title>static site</title>
            </Head>
            <h1>This is static Site!</h1>
            <div>Hello !</div>
            <Link href="./about">about</Link>
        </div>
    )
}