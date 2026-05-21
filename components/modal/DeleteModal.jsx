'use client'
import { deleteAppointment } from "@/app/lib/actions";
import { authClient } from "@/app/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

export function DeleteModal({ booking }) {
    const { _id, docName } = booking
    const router = useRouter()

    async function handleDelete() {
        const { data, error } = await authClient.token()
        const token = data?.token
        await deleteAppointment(_id, token)
        router.refresh()
    }
    return (
        <AlertDialog style={{ zIndex: 2000 }}>
            <Button variant='danger'>
                <Trash2 size={16} />
                Delete
            </Button>
            <AlertDialog.Backdrop style={{ zIndex: 2000 }}>
                <AlertDialog.Container style={{ zIndex: 2000 }}>
                    <AlertDialog.Dialog style={{ zIndex: 2000 }} className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Delete appointment permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body style={{ zIndex: 2000 }}>
                            <p>
                                This will permanently delete your appointment with <span className="font-bold">{docName}</span> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={handleDelete} slot="close" variant="danger">
                                Delete
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}