import Carousel from './components/carousel'


export default function App() {
  return (
    <div className='min-h-screen w-screen flex justify-center items-center bg-gradient-to-t from-zinc-950 to-slate-900'>
      <div className='container mx-auto'>
        <Carousel />
      </div>
    </div>
  )
}