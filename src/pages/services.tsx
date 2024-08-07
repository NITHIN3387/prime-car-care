import { type StaticImport } from "next/dist/shared/lib/get-img-props"
import { Fragment } from "react"
import ServiceCard from "@/components/service-card"
import ProtectionFilm from '@/assets/images/protection-film.png'
import UnderbodyCoating from '@/assets/images/underbody-coating.jpeg'
import HeadlightRestoration from '@/assets/images/headlight-restoration.jpeg'
import AlloyCleaning from '@/assets/images/alloy-cleaning.jpeg'
import ExteriorDetailing from '@/assets/images/exterior-detailing.jpeg'
import FoamWash from '@/assets/images/foam-wash.jpeg'
import InteriorDetailing from '@/assets/images/interior-detailing.jpeg'
import SilencerCoating from '@/assets/images/silencer-coating.jpeg'
import CeramicCoating from '@/assets/images/ceramic-coating.jpeg'

interface Services {
  image: string | StaticImport;
  heading: string;
  details: string;
}

const services: Services[] = [
  {
    image: ProtectionFilm,
    heading: "PPF - PAINT PROTECTION FILM",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
  },
  {
    image: InteriorDetailing,
    heading: "INTERIOR DETAILING",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
  },
  {
    image: ExteriorDetailing,
    heading: "EXTERIOR DETAILING",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
  },
  {
    image: CeramicCoating,
    heading: "CERAMIC COATING",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
  },
  {
    image: FoamWash,
    heading: "CAR & BIKE FOAM WASH",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
  },
  {
    image: SilencerCoating,
    heading: "SILENCER COATING",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
  },
  {
    image: UnderbodyCoating,
    heading: "UNDER BODY COATING",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
  },
  {
    image: AlloyCleaning,
    heading: "ALLOY WHEEL CLEANING",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
  },
  {
    image: HeadlightRestoration,
    heading: "HEADLIGHT RESTORATION",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
  },
]

export default function Services(): JSX.Element {
  return(
    <div className="lg:h-screen overflow-hidden flex flex-col justify-center lg:p-16 p-4 lg:space-y-16 space-y-8" id="services">
      <h1 className="lg:text-[4em] text-[3em] font-semibold">OUR <span className="text-aqua">SERVICES</span></h1>
      <section className="grid lg:grid-cols-5 lg:grid-rows-2 grid-rows-9 h-3/4 gap-4">
        {services.map((item) => (
          <Fragment key={item.heading}>
            <ServiceCard image={item.image} heading={item.heading} details={item.details}/>
          </Fragment>
        ))}
      </section>
    </div>
  )
}