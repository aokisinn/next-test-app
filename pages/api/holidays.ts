import fetch from 'node-fetch'

export default (req, res) => {
    res.statusCode = 200
    fetch("https://date.nager.at/api/v2/PublicHolidays/2020/JP")
        .then(r => r.json())
        .then(data => res.json(data))
}