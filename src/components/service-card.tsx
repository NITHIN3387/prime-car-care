import Image from "next/image"
import { type StaticImport } from "next/dist/shared/lib/get-img-props"

interface ServiceCardProps {
  image: string | StaticImport;
  heading: string;
  details: string;
}

export default function ServiceCard(props: ServiceCardProps): JSX.Element {
  const { image, heading, details } = props;

  return(
    <article className="relative p-4 flex flex-col justify-end space-y-2 hover:bg-gradient-to-t from-black group overflow-hidden min-h-72">
      <Image src={image} alt="protection-film" className="absolute -z-10 brightness-90 group-hover:brightness-75 group-hover:scale-110 transition-all ease-out" objectFit="cover" layout="fill"/>
      <h3 className="text-3xl group-hover:text-aqua">{heading}</h3>
      <p className="h-0 overflow-hidden group-hover:h-fit font-sans font-semibold">{details}</p>
    </article>
  )
}