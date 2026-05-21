'use client'
import React from 'react';
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { authClient } from '../lib/auth-client';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function Login() {
    const router = useRouter()
    async function onSubmit(e) {
        e.preventDefault()
        const formData = new FormData(e.target)
        const userData = Object.fromEntries(formData.entries())

        const { name, email, password } = userData

        const { data, error } = await authClient.signIn.email({
            name: name, // required
            email: email, // required
            password: password, // required
        });

        if (data) {
            router.push('/')
            toast.success('Login successful!', {
                position: 'top-left',
                duration: 3000
            });

            return
        }

        if (error) {
            toast.error(`${error.message}`, {
                position: 'top-left',
                duration: 2000
            });
        }

        console.log(data);
        console.log(error);
    }

    const signIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });

        toast.success('Login successful!', {
            position: 'top-left',
            duration: 2000
        });
    };

    return (
        <>
            <div className='w-11/12 mx-auto my-16 min-h-[calc(100vh-20rem)] flex flex-col items-center justify-center'>
                <div className="section-heading">
                    <h2>
                        Login into <span className='text-primary'>Clin</span><span>ovo</span>
                    </h2>
                </div>
                <Form onSubmit={onSubmit} className="flex w-full sm:w-96 flex-col gap-5 p-5 rounded-lg shadow-sm shadow-primary/30 border">
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
                            Don&apos;t have an account ? <Link href={`/register`} className='text-primary'>Register</Link>
                        </p>
                    </div>
                </Form>
            </div>
        </>
    );
}