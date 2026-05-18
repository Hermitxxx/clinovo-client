import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DoctorCard({ doc }) {

    return (
        <div
            className="group rounded-xl overflow-hidden border border-gray-200 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/60 hover:border-primary/40 bg-surface"
        >
            <div className="relative w-full h-56 overflow-hidden">
                <Image
                    src={doc.image}
                    alt={doc.name}
                    width={800}
                    height={800}
                    className="object-cover w-full transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-linear-to-t from-base-300/90 via-base-300/20 to-transparent" />

                <span className="absolute top-3 left-3 text-[10px] font-medium tracking-wide px-2.5 py-1 rounded-md bg-base-200/80 border border-primary/80 text-white bg-primary/50 backdrop-blur-lg">
                    {doc.specialty}
                </span>
            </div>

            {/* body here*/}
            <div className="p-4 flex flex-col gap-3">

                <h3 className="text-[15px] font-bold leading-snug tracking-tight line-clamp-2 text-accent group-hover:text-primary transition-colors duration-300">
                    {doc.name}
                </h3>

                <div className="flex flex-col gap-3">
                    <div className="flex-between">
                        <p className="text-[11.5px] text-primary font-bold">
                            {doc.hospital}
                        </p>
                        <div className="flex items-center gap-1.5">
                            <div className="flex items-center gap-0.5">
                                <span className="text-primary text-xs">★</span>
                            </div>
                            <span className="text-[11px] font-semibold text-primary">
                                {doc.rating}
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col items-start gap-1">
                        <span className="items-center gap-1 inline-flex text-[11px] text-black font-vold">
                            <MapPin size={12}></MapPin>
                            {doc.location}
                        </span>
                        <span className="text-[11px] text-black font-vold inline-flex">
                            Experience : {doc.experience}
                        </span>
                    </div>
                </div>

                <p className="text-[12px] leading-relaxed line-clamp-2 text-accent font-bold">
                    {doc.description}
                </p>

                <Link href={`/all-appointments/${doc._id}`}>
                    <button className="w-full cursor-pointer mt-1 py-2 text-[12px] font-semibold tracking-wide rounded-full border border-primary/30 text-primary bg-primary/5 hover:bg-primary/20 hover:border-primary/50 transition-all duration-300">
                        See Details
                    </button>
                </Link>
            </div>
        </div>
    );
}