// components/BookingCard.jsx

import { Button } from "@heroui/react";
import { Pencil, Trash2 } from "lucide-react";
import { EditModal } from "../modal/EditModal";

export default function BookingCard({ booking }) {
    console.log(booking._id);
    return (
        <div className="w-full rounded-2xl border border-black/5 bg-white p-5 shadow-sm transition hover:shadow-md">
            {/* Top */}
            <div className="flex items-start justify-between gap-4">
                <div>
                    <h2 className="text-xl font-semibold text-accent">
                        {booking.docName}
                    </h2>

                    <p className="mt-1 text-sm text-primary">
                        {booking.speciality}
                    </p>
                </div>

                <span className="rounded-full bg-primatext-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    #{booking.bookingId.slice(0, 8)}
                </span>
            </div>

            {/* Info */}
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <Info label="Patient" value={booking.patientName} />
                <Info label="Date" value={booking.aptDate} />
                <Info label="Time" value={booking.aptTime} />
                <Info label="Phone" value={booking.patientPhone} />
                <Info label="Email" value={booking.patientEmail} />
                <Info label="Reason" value={booking.reason} />
            </div>

            {/* Buttons */}
            <div className="mt-6 flex-between">
                <p className="text-lg text-primary font-bold">$ {booking.bookingFee}</p>
                <div className="flex items-center gap-2">
                    <EditModal booking={booking}></EditModal>

                    <Button variant='danger'>
                        <Trash2 size={16} />
                        Delete
                    </Button>
                </div>
            </div>
        </div>
    );
}

function Info({ label, value }) {
    return (
        <div className="rounded-xl bg-bg-primary p-3">
            <p className="text-xs font-medium uppercase tracking-wide teaccentF]/70">
                {label}
            </p>

            <p className="mt-1 wrap-break-word text-sm font-medium text-accent">
                {value}
            </p>
        </div>
    );
}