const App = () => {
  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-emerald-900 via-lime-50 to-lime-900 h-[100vh] w-full">
      <section className="w-full md:max-w-[500px] p-4 flex flex-col text-center items-center justify-center md:px-10 lg:p-24 h-full lg:h-[500px] bg-white bg-opacity-20 backdrop-blur-ls rounded drop-shadow-lg text-zinc-700">
        <h1 className="text-4xl font-outfit font-bold">Weather Forecast</h1>

        <p className="text-sm mt-2">Search and Select a City</p>

        <div className="flex mt-10 md:mt-4">
          <input
            type="text"
            value={''}
            className="px-2 py-1 rounded-l-md border-2 border-rose-50"
          />
          <button className="rounded-r-md border-2 border-zinc-100 hover:border-zinc-500 hover:text-zinc-500  text-zinc-100 px-2 py-1 cursor-pointer">
            Search
          </button>
        </div>
      </section>
    </main>
  )
}

export default App
