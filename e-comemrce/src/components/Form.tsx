const Form = () => {
  return (
    <section className="py-30 text-center flex flex-col items-center">
      <h1 className="text-5xl font-extrabold text-center">Join Our Newsletter</h1>
      <p className="text-center mt-2 text-xl text-gray-500 font-medium">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
      <form className=" flex m-auto text-center mt-8" action="#" method="post">
        <input className="border-gray-300 rounded-md border-1 px-2 py-1 placeholder:font-medium" type="text" placeholder="Enter your email"/>
        <button className="bg-black text-white font-bold px-4 py-2 rounded-lg ml-2" type="submit">Subscribe</button>
      </form>
    </section>
  )
}

export default Form