import { useEffect, useState } from "react"
import Layout from "../components/Layout"

export default function PublicHolidaysListPage() {
    const [holidays, setHolidays] = useState([])
    useEffect(() => {
        fetch("/api/holidays")
            .then(r => r.json())
            .then(data => {
                setHolidays(data)
            })
    }, [])
    return (
        <Layout>
            <div>
                {holidays.map(day => <div key={day.name}>{day.localName}</div>)}
            </div>
        </Layout>
    )
}