import './css/main.css'

export default function Home() {
  return (
    <main className='flex p-5 items-center justify-center relative bg-black w-screen h-screen'>
      <div className='absolute w-full h-full bg-violet-900/10'/>

      <section className='grid lg:flex'>

        <div className='relative order-2 lg:order-1 flex flex-col gap-10 bg-black p-5 lg:p-14'>
          <div className='absolute w-full h-full bg-violet-900/40 top-0 left-0' />

          <div className='flex flex-col gap-5 z-10 items-center lg:items-start'>

            <h3 className='text-2xl lg:text-3xl text-white font-bold text-center lg:text-left'>Get <span className='text-violet-500'>insights</span> that help <br /> your business grow.</h3>            
            <p className='text-white text-sm font-light text-center lg:text-left'>
              Discover the benefits of data analytics and make <br />
              better decisions regarding revenue, customer <br />
              experience, and overall efficiency.
            </p>

          </div>

          <div className='flex flex-col gap-5 lg:flex-row items-center justify-between z-10'>

            <div className='flex flex-col text-center'>
              <h4 className='text-white text-2xl font-bold'>10k+</h4>
              <p className='text-white capitalize font-light text-sm'>Companies</p>
            </div>

            <div className='flex flex-col text-center'>
              <h4 className='text-white text-2xl font-bold'>314</h4>
              <p className='text-white capitalize font-light text-sm'>Templates</p>
            </div>

            <div className='flex flex-col text-center'>
              <h4 className='text-white text-2xl font-bold'>12M+</h4>
              <p className='text-white capitalize font-light text-sm'>Queries</p>
            </div>

          </div>

        </div>

        <div id='header-image' className='relative order-1 lg:order-2 w-auto h-64 lg:w-96 lg:h-auto bg-cover bg-center'>
          <div className='absolute w-full h-full top-0 left-0 bg-purple-900/60' />
        </div>

      </section>

    </main>
  )
}
