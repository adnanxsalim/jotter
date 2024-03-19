"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormSchema } from '@/lib/types';
import { Form, FormControl, FormDescription, FormField, FormItem } from '@/components/ui/form';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../../public/logo.svg'
import { Input } from '@/components/ui/input';

const LoginPage = () => {
    const router = useRouter();
    const [submitError,setSubmitError] = useState('');

    const form = useForm<z.infer<typeof FormSchema>>({
        mode: 'onChange',
        resolver: zodResolver(FormSchema),
        defaultValues: { email: '', password: '' },
    });

    const isLoading = form.formState.isSubmitting;

    const onSubmit: SubmitHandler<z.infer<typeof FormSchema>> = async (formData) => {

    };

    return (
        <Form {...form}>
            <form
                onChange={() => {
                    if(submitError) setSubmitError('');
                }}
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full sm:justify-center sm:w-[400px] space-y-6 flex flex-col"
            >
                <Link href="/" className="w-full flex justify-left items-center">
                    <Image src={Logo} alt="jotter logo" width={50} height={50} />
                    <span className="font-black tracking-tight dark:text-white text-3xl first-letter:ml-2">jotter.</span>
                </Link>
                <FormDescription className="text-foreground/60">
                All-In-One Collaboration and Productivity Platform
                </FormDescription>
                <FormField
                    disabled={isLoading}
                    control={form.control}
                    name="email"
                    render={(field) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    type="email"
                                    placeholder="Email"
                                    {...field}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                >
                    
                </FormField>
            </form>
        </Form>
    );
};

export default LoginPage;