import { useState, useEffect } from 'react'
// import { useSelector } from 'react-redux'
import env from 'react-dotenv'
import axios from 'axios'

function useApi(urls = '') {
    // const { token } = useSelector((state) => state.users)
    const token = ''

    const [requests, setRequests] = useState({
        baseURL: env.BASE_API_URL || urls,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })

    const setConfig = () => {
        setRequests({
            ...requests,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
    }

    useEffect(() => {
        setConfig()
    }, [])

    return { requests: axios.create(requests) }
}

export default useApi
