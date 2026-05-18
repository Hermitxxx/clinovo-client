'use client'
import React from 'react';
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { Icon } from '@iconify/react';
import { authClient } from '@/lib/auth-client';

export default function Register() {
    async function onSubmit(e) {
        e.preventDefault()
        const formData = new FormData(e.target)
        const userData = Object.fromEntries(formData.entries())

        const { name, email, password } = userData

        const { data, error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            callbackURL: "/",
        });

        console.log(data);
        console.log(error);
    }

    return (
        <>
            <div className='w-10/12 mx-auto my-16 min-h-[calc(100vh-20rem)] flex flex-col items-center justify-center'>
                <div className="section-heading">
                    <h2>
                        Register into <span className='text-primary'>Clin</span><span>ovo</span>
                    </h2>
                </div>
                <Form onSubmit={onSubmit} className="flex w-96 flex-col gap-5 p-5 rounded-lg shadow-primary/30 shadow-sm border">
                    <TextField
                        isRequired
                        name="name"
                        type="name"
                    >
                        <Label>Name</Label>
                        <Input placeholder="Jonh Doe" />
                    </TextField>

                    <TextField
                        isRequired
                        name="email"
                        type="email"
                    >
                        <Label>Email</Label>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                        <FieldError />
                    </TextField>

                    <div className="flex gap-2">
                        <Button type="submit">
                            <Check />
                            Submit
                        </Button>
                        <Button type="reset" variant="secondary">
                            Reset
                        </Button>
                    </div>

                    <div className="divider flex items-center w-full gap-3">
                        <span className='w-full border-t border-gray-200'></span>
                        <span className='text-gray-500'>or</span>
                        <span className='w-full border-t border-gray-200'></span>
                    </div>

                    <Button className="w-full" variant="tertiary">
                        <Icon icon="devicon:google" />
                        Sign up with Google
                    </Button>
                </Form>
            </div>
        </>
    );
}