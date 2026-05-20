
import { updateUserApt } from "@/app/lib/actions";
import { Envelope, Rocket } from "@gravity-ui/icons";
import { Button, FieldError, Input, Label, Modal, TextArea, TextField } from "@heroui/react";
import { Edit, Form, Pencil } from "lucide-react";
import { redirect, useRouter } from "next/navigation";
import { MdUpdate } from "react-icons/md";

export function EditModal({ booking }) {

    const {
        _id,
        bookingId,
        aptId,
        docName,
        speciality,
        aptTime,
        patientName,
        aptDate,
        patientPhone,
        reason,
        patientEmail,
        bookingFee,
    } = booking;

    console.log(_id);

    const router = useRouter()

    async function onSubmit(formData) {
        const updatedData = Object.fromEntries(formData.entries())
        console.log(updatedData);
        await updateUserApt(_id, updatedData)
        router.refresh()
    }

    return (
        <div style={{ zIndex: 2000 }} className="flex flex-wrap gap-4">
            <Modal>
                <Button variant="outline">
                    <Pencil size={16} />
                    Edit
                </Button>
                <Modal.Backdrop variant="blur" style={{ zIndex: 2000 }}>
                    <Modal.Container size={`lg`} style={{ zIndex: 2000 }}>
                        <Modal.Dialog>
                            <Modal.CloseTrigger />
                            <Modal.Header>
                                <Modal.Icon className="bg-default text-foreground">
                                    <Edit className="size-5" />
                                </Modal.Icon>
                                <Modal.Heading>
                                </Modal.Heading>
                            </Modal.Header>
                            <Modal.Body style={{ zIndex: 2000 }}>
                                <form action={onSubmit} className='w-full mx-auto border p-2 sm:p-6 rounded-lg h-full'>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <TextField
                                            name={'docName'}
                                            type="text"
                                            defaultValue={docName}
                                            isReadOnly
                                        >
                                            <Label className='text-black!'>Doctor Name</Label>
                                            <Input className="border border-gray-300/50 bg-blue-200/60 text-black!" />
                                        </TextField>

                                        <TextField
                                            name={'speciality'}
                                            type="text"
                                            defaultValue={speciality}
                                            isReadOnly
                                        >
                                            <Label className='text-black!'>Speciality</Label>
                                            <Input className="border border-gray-300/50 bg-blue-200/60 text-black!" />
                                        </TextField>

                                        <TextField
                                            defaultValue={patientEmail}
                                            isRequired
                                            name={'patientEmail'}
                                            type="email"
                                        >
                                            <Label>User Email</Label>
                                            <Input className="border border-gray-300/50" placeholder="john@example.com" />
                                            <FieldError />
                                        </TextField>

                                        <TextField
                                            defaultValue={patientName}
                                            isRequired
                                            name={'patientName'}
                                            type="text"
                                        >
                                            <Label>Patient Name</Label>
                                            <Input className="border border-gray-300/50" placeholder="John Doe" />
                                        </TextField>

                                        <TextField name={'patientPhone'}
                                            defaultValue={patientPhone}
                                            isRequired type="tel">
                                            <Label>Phone</Label>
                                            <Input className="border border-gray-300/50" placeholder="+1 (555) 000-0000" />
                                        </TextField>

                                        <TextField isRequired
                                            defaultValue={aptTime}
                                            name={'aptTime'}
                                            type="time">
                                            <Label>Appointment Time</Label>
                                            <Input className="border border-gray-300/50 w-full" placeholder='Ex : 9:00 PM - 10 PM' />
                                        </TextField>

                                        <TextField isRequired
                                            defaultValue={aptDate}
                                            name={'aptDate'}
                                            type="date">
                                            <Label>Date</Label>
                                            <Input className="border border-gray-300/50" />
                                        </TextField>
                                    </div>
                                    <div className='w-full mt-8 space-y-3'>
                                        <Label>Reason (Optional)</Label>
                                        <TextArea
                                            defaultValue={reason}
                                            aria-label="Quick project update"
                                            className="h-24 sm:h-32 w-full border border-gray-300/50"
                                            placeholder="Tell us about your present condition..."
                                            name={'reason'}
                                        />
                                        <Button type='submit' slot="close" className={`w-full`}>
                                            <Pencil size={16} />
                                            Update
                                        </Button>
                                    </div>
                                </form>
                            </Modal.Body>
                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </div>
    );
}