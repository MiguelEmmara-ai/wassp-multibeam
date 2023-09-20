import ButtonUsage from '@/components/Button'

const Home = () => {
  return (
    <section className="flex">
      <div className="container">
        <h1>Test Normal Button</h1>
        <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'
        >CLICK ME!</button>
      </div>

      <div className="container">
        <h1>Test MUI Button</h1>
        <ButtonUsage />
      </div>
    </section>
  )
}

export default Home
