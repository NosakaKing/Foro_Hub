"use client";
import { Card, CardContent } from "@/components/ui/card";
import { loginSchema } from "@/modules/auth/models/form.model";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { Form } from "../ui/form";
import Image from "next/image";
import { Button } from "../ui/button";
import InputField from "../forms/input";
import { useLogin } from "@/modules/auth/hooks/use-auth";

export default function Login() {
    const { mutate: login, isPending } = useLogin();

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof loginSchema>) => {
        login(values)
        form.reset();
    };

    return (
        <Form {...form}>
            <div className="flex justify-center items-center h-screen">
                <Card className="overflow-hidden md:min-w-3xl">
                    <CardContent className="grid p-0 md:grid-cols-2">
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-10 md:p-8">
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-col items-center text-center">
                                    <h1 className="text-2xl font-bold">Bienvenido de Nuevo</h1>
                                    <p className="text-balance text-muted-foreground">
                                        Inicia sesión para continuar
                                    </p>
                                </div>
                                <InputField control={form.control} type="text" name="username" label="Correo Electrónico / Usuario" placeholder="Correo" />
                                <InputField control={form.control} type="password" name="password" label="Contraseña" placeholder="Contraseña" />
                                <div className="w-full">
                                    <Button className="w-full" loading={isPending} type="submit">Iniciar Sesión</Button>
                                </div>
                            </div>
                        </form>
                        <div className="relative hidden md:block">
                            <Image
                                width={800}
                                height={800}
                                src="/auth/hero.svg"
                                alt="Image"
                                className="absolute inset-0 h-full w-full"
                            />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </Form >
    )
}