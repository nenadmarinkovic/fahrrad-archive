import dynamic from 'next/dynamic'

function MapComponent() {
  const Map = dynamic(
    () => import('../components/WienMap'), // replace '@components/map' with your component's location
    { ssr: false } // This line is important. It's what prevents server-side render
  )
  return <Map />
}

export default MapComponent