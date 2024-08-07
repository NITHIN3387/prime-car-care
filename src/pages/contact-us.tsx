import Image from "next/image";
import Bg from "@/assets/images/contact-us.jpg";

export default function ContactUs(): JSX.Element {
  return (
    <div
      className="lg:h-screen overflow-hidden grid lg:grid-cols-2 lg:grid-rows-none grid-rows-2 justify-center items-center"
      id="contact"
    >
      <section className="relative w-full lg:h-screen h-2/3">
        <Image
          src={Bg}
          alt="bg"
          className="absolute"
          objectFit="cover"
          layout="fill"
        />
      </section>
      <section className="lg:pr-40 px-4 lg:space-y-8 space-y-4 mb-8">
        <p>CONTACT US</p>
        <h1 className="lg:text-[3em] text-[2em] font-bold">
          HAVE QUESTIONS?
          <br />
          GET IN <span className="text-aqua">TOUCH!</span>
        </h1>
        <form className="space-y-6">
          <div>
            <input className="w-full py-4 bg-transparent border-b border-slate-700 focus:outline-none focus:border-white font-sans" placeholder="Name" type="text" />
          </div>
          <div className="flex gap-6">
            <input className="w-full py-4 bg-transparent border-b border-slate-700 focus:outline-none focus:border-white font-sans" placeholder="Email" type="text" />
            <input className="w-full py-4 bg-transparent border-b border-slate-700 focus:outline-none focus:border-white font-sans" placeholder="Contact Number" type="tel" />
          </div>
          <div className="mb-28">
            <input className="w-full py-4 bg-transparent border-b border-slate-700 focus:outline-none focus:border-white font-sans" placeholder="Message" type="text" />
          </div>
          <button className="bg-aqua text-black py-3 px-6 rounded-sm font-sans font-semibold">GET IN TOUCH</button>
        </form>
      </section>
    </div>
  );
}
