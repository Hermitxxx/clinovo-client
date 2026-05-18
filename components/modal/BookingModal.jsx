

import { Button, Card, FieldError, Form, Input, Label, Modal, TextField } from "@heroui/react";
import logo from '@/public/assets/logo.svg'
import Image from "next/image";

export function BookingModal() {
    return (
        <Modal>
            <Button className={`w-full font-bold`}>Book Appointment</Button>
            <Modal.Backdrop className={`z-2000`}>
                <Modal.Container className="p-5 w-11/12">
                    <Modal.Dialog>
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-default text-foreground">
                                <Image src={logo} width={22} height={22} alt="Clinovo"></Image>
                            </Modal.Icon>
                            <Modal.Heading>Book An Appointment</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body>
                            <Form className="flex w-96 flex-col gap-4 p-5">
                                <div>
                                    <TextField
                                        isRequired
                                        name="email"
                                        type="email"
                                    >
                                        <Label>Email</Label>
                                        <Input placeholder="john@example.com" />
                                        <FieldError />
                                    </TextField>
                                </div>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className="w-full" slot="close">
                                Continue
                            </Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}