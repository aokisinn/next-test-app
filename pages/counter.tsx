import { useState } from "react"

/**
 * データを事前に決める必要がある場合はこちらに処理を記述
 * サーバー側で描画をする
 */
export const getServerSideProps = () => {
    // ここで初期値が色々設定可能
    return { props: { initialCount: 10 } }
}

export default function Home({ initialCount }) { // initiaCountがgeterverSidePropsから受け取れる
    const [count, setCount] = useState(initialCount)
    return (
        <div>
            <div>{count}</div>
            <div>
                <button onClick={() => setCount(cnt => cnt + 1)}>
                    increment
                </button>
                <button onClick={() => setCount(cnt => cnt - 1)}>
                    decrement
                </button>
            </div>
        </div>
    )
}