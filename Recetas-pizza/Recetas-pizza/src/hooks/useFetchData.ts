import { useState, useEffect } from "react";

function useFetchData<T>(url: string) {
    const [data, setData] = useState<T | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string>('')

 useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error('Error a recopilar los datos')
        }
        const jsonData = await response.json()
setData(jsonData.data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error ')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [url])

  return { data, loading, error }
}

export default useFetchData
