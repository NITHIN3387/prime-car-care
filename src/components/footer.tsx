import FacebookIcon from "@/assets/icons/facebook"
import InstagramIcon from "@/assets/icons/instagram"
import YoutubeIcon from "@/assets/icons/youtube"

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-[#232225] grid lg:grid-cols-2 lg:gap-0 gap-8 lg:p-16 p-4">
      <section className="space-y-4">
        <h1 className="lg:text-3xl text-2xl font-semibold">PRIME CAR CARE</h1>
        <div className="font-sans">
          <p>NH-66, Ankadakatte</p>
          <p>Opp to Surgeion&apos;s Hospital</p>
          <p>Koteshwara, Kundapura - 576201</p>
        </div>
        <div className="flex gap-2">
          <a href="tel:+919731710389">+91 9731710389 ,</a>
          <a href="tel:+918749020285">+91 8749020285</a>
        </div>
      </section>
      <section className="space-y-4">
        <h1 className="lg:text-3xl text-2xl font-semibold">GET IN TOUCH</h1>
        <div className="grid gap-2">
          <a className="flex gap-2 items-center" href="/">
            <span><InstagramIcon /></span>
            <span>Instagram</span>
          </a>
          <a className="flex gap-2 items-center" href="/">
            <span><FacebookIcon /></span>
            <span>Facebook</span>
          </a>
          <a className="flex gap-2 items-center" href="/">
            <span><YoutubeIcon /></span>
            <span>YouTube</span>
          </a>
        </div>
      </section>
    </footer>
  )
}