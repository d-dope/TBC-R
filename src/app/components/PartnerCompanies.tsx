import Image from "next/image";
import svg1 from "../../../public/assets/45.svg";
import svg2 from "../../../public/assets/caps.svg";
import svg3 from "../../../public/assets/alpha.svg";
import svg4 from "../../../public/assets/biosynt.svg";
import svg5 from "../../../public/assets/bb.svg";

export default function PartnerCompanies() {
  return (
    <div className="bg-white py-24 sm:py-32 container mx-auto px-4  sm:px-6 lg:px-8">
      <div className="  ">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <h2 className="text-lg font-semibold leading-8 text-gray-900">
            Trusted by the world’s most innovative teams
          </h2>
          <div className="mx-auto mt-10 grid grid-cols-4 items-start gap-x-8 gap-y-10 sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:grid-cols-5">
            <Image
              className="col-span-2 fill-primaryColor max-h-12 w-full object-contain object-left lg:col-span-1"
              src={svg2}
              alt="Transistor"
              width={158}
              height={48}
            />
            <Image
              className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
              src={svg1}
              alt="Reform"
              width={158}
              height={48}
            />
            <Image
              className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
              src={svg3}
              alt="Tuple"
              width={158}
              height={48}
            />
            <Image
              className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
              src={svg4}
              alt="SavvyCal"
              width={158}
              height={48}
            />
            <Image
              className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
              src={svg5}
              alt="Statamic"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
