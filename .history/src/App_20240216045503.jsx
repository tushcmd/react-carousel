import Carousel from './components/carousel'


export default function App() {
  return (
    <div className='min-h-screen w-screen flex justify-center items-center bg-gradient-to-l from-zinc-950 to-zinc-900'>
      <div className='container mx-auto'>
        <Carousel />
      </div>
    </div>
  )
}