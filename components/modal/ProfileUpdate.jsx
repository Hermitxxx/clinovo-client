"use client";

import { authClient } from "@/app/lib/auth-client";
import { Envelope } from "@gravity-ui/icons";
import { Button, FieldError, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import toast from "react-hot-toast";

export function UpdateProfile() {

    async function onSubmit(e) {
        e.preventDefault()
        const formData = new FormData(e.target)
        const updatedData = Object.fromEntries(formData.entries())
        const { name, image, email } = updatedData
        // console.log(name, image, email);

        await authClient.updateUser({
            name,
            image,
        })

        toast.success('Profile updated!', {
            position: 'top-left',
            duration: 3000
        });

    }

    return (
        <Modal>
            <Button className={`w-full`}>Edit</Button>
            <Modal.Backdrop style={{ zIndex: 2000 }}>
                <Modal.Container placement="auto" style={{ zIndex: 2000 }}>
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <Envelope className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Update Profile</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className="p-6" style={{ zIndex: 2000 }}>
                            <Surface variant="default">
                                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                                    <TextField className="w-full" name="name" type="text" variant="secondary">
                                        <Label>Name</Label>
                                        <Input placeholder="Enter your name" />
                                    </TextField>
                                    <TextField
                                        isRequired
                                        name="image"
                                        type="url"
                                    >
                                        <Label>Image Url</Label>
                                        <Input placeholder="https://exampleurl.com" />
                                        <FieldError />
                                    </TextField>
                                    <Modal.Footer>
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>
                                        <Button type="submit" slot="close">Update</Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}