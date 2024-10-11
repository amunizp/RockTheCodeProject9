import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/scrape')
      const data = await response.json()
      console.log(data)
    }
    fetchData()
  }, [])

  return <div>Hello World</div>
}
