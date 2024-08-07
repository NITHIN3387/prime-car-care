import BG1 from "@/assets/images/about-bg-1.jpg";
import BG2 from "@/assets/images/about-bg-2.jpg";
import CallIcon from "@/assets/icons/call";
import Image from "next/image";

export default function About(): JSX.Element {
  return (
    <div
      className="lg:h-screen overflow-hidden grid lg:grid-cols-2 justify-center items-center lg:3.gap-24 relative"
      id="about"
    >
      <section className="flex flex-col lg:gap-8 gap-4 lg:pl-96 p-4">
        <p>WHAT WE DO</p>
        <header className="lg:grid flex items-center lg:gap-0 gap-2">
          <h1 className="lg:text-[3em] text-[2em] font-bold">ALL</h1>
          <h2 className="lg:text-[3em] text-[2em] font-bold text-aqua leading-none">
            DETAILING FOR CARS
          </h2>
        </header>
        <h4 className="lg:text-2xl text-lg font-sans">
          Welcome to{" "}
          <span className="underline underline-offset-8">PRIME CAR WASH!</span>
        </h4>
        <p className="font-sans text-white/80">
          Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco.Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco.
        </p>
        <div className="flex gap-4 items-center">
          <span className="bg-[#232225] p-4 rounded-md">
            <CallIcon />
          </span>
          <a className="font-semibold" href="tel:+919731710389">
            +91 9731710389 
          </a>
          <a className="font-semibold" href="tel:+918749020285">
            +91 8749020285
          </a>
        </div>
      </section>
      <section className="lg:h-fit h-72 lg:static relative">
        <Image
          src={BG2}
          alt="bg1"
          className="absolute lg:top-28 top-4 lg:right-60 right-4 lg:w-[500px] w-52"
        />
        <Image src={BG1} alt="bg1" className="absolute lg:bottom-28 bottom-0 translate-x-4 lg:w-[500px] w-52" />
      </section>
    </div>
  );
}
