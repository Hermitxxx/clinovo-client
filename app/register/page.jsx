'use client'
import React from 'react';
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { authClient } from '../lib/auth-client';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';

export default function Register() {
    const router = useRouter()
    async function onSubmit(e) {
        e.preventDefault()
        const formData = new FormData(e.target)
        const userData = Object.fromEntries(formData.entries())

        const { name, image, email, password } = userData

        const { data, error } = await authClient.signUp.email({
            name: name, // required
            image: image,
            email: email, // required
            password: password, // required
            callbackURL: "/",
        });

        if (data) {
            await authClient.signOut({
                fetchOptions: {
                    onSuccess: () => {
                        router.push("/login"); // redirect to login page
                    },
                },
            });

            toast.success('Successfully registered!', {
                position: 'top-right'
            });

            return
        }

        if (error) {
            toast.error(`${error.message}`, {
                position: 'top-right'
            });
        }

    }

    const signIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
        toast.success('Successfully registered!', {
            position: 'top-right'
        });
    };

    return (
        <>
            <div className='w-11/12 mx-auto my-16 min-h-[calc(100vh-20rem)] flex flex-col items-center justify-center'>
                <div className="section-heading">
                    <h2>
                        Register into <span className='text-primary'>Clin</span><span>ovo</span>
                    </h2>
                </div>
                <Form onSubmit={onSubmit} className="flex w-full sm:w-96 flex-col gap-5 p-5 rounded-lg shadow-primary/30 shadow-sm border">
                    <TextField
                        isRequired
                        name="name"
                        type="text"
                    >
                        <Label>Name</Label>
                        <Input placeholder="Jonh Doe" />
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

                    <div className='space-y-1'>
                        <Button onClick={signIn} className="w-full" variant="tertiary">
                            <Icon icon="devicon:google" />
                            Sign in with Google
                        </Button>
                        <p className='text-sm text-center'>
                            Already have an account ? <Link href={`/login`} className='text-primary'>Log in</Link>
                        </p>
                    </div>
                </Form>
            </div>
        </>
    );
}