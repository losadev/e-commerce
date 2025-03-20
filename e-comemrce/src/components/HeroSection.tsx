

const HeroSection = () => {
  return (
    <div id="home" className="min-w-full px-8 py-12 bg-gray-200 xl:py-64 bg-[url('../../public/home-img.jpg')] bg-no-repeat bg-cover">
    <section className="text-center py-10 flex flex-col gap-3">
      <h1 className="text-2xl font-extrabold xl:text-5xl text-white drop-shadow-[2px_2px_2px_black]">Spring collection 2025</h1>
      <p className="font-medium text-lg text-gray-300 drop-shadow-[2px_2px_2px_black]">Discover our latest arrivals and refresh your style with our new spring collection.</p>
      <button className="bg-white/20 inline-flex text-white text-center w-fit mt-4 m-auto py-1.5 px-8 border-2 border-gray-200 font-bold text-[.9rem] drop-shadow-[2px_2px_2px_black] hover:bg-white/40"><a href="#products">Shop now</a></button>
    </section>
    </div>
  )
}

export default HeroSection