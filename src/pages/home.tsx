export default function Home(): JSX.Element {
  return(
    <div className="lg:h-screen h-2/3 overflow-hidden relative flex flex-col justify-end bg-gradient-to-t from-black" id="home">
        <div className="absolute w-full h-full video -z-10" />

        <section className="text-white space-y-2 lg:p-16 p-4 ">
          <p className="lg:text-3xl text-xl lg:ml-4 text-start">THE ULTIMATE CAR CARE EXPERIENCE</p>
          <h1 className="lg:text-[15em] text-[5em] font-extrabold leading-none tracking-wide">CAR DETAILING</h1>
        </section>
    </div>
  )
}