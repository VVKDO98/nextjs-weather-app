import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Home() {
  // const {isLoading, error, data} = useSWR(`https://api.openweathermap.org/data/2.5/weather?q=charleroi&appid=${process.env.API_KEY}`, fetcher)
  
  // if (error) return <div>Failed to load</div>
  // if (isLoading) return <div>Loading ..</div>

  // console.log(data);
  console.log(process.env.API_KEY);
  return (
    <>
      <main>
        <h1>Test</h1>
      </main>
    </>
  )
}
