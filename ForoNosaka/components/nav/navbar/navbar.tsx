"use client"

import * as React from "react"
import Link from "next/link"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { useLogout } from "@/modules/auth/hooks/use-logout"
import { Button } from "@/components/ui/button"
import { useWhoamiStore } from "@/stores/use-whoami"
import { AvatarUser } from "@/components/avatar/avatar"

export function NavigationMenuDemo() {
    const { mutate: logout, isPending } = useLogout();
    const { user } = useWhoamiStore();
    return (
        <NavigationMenu viewport={false}>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Mi Aprendizaje</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[200px] gap-4">
                            <li>
                                <NavigationMenuLink asChild>
                                    <Link href="/dashboard">
                                        <div className="font-medium">Dashboard</div>
                                        <div className="text-muted-foreground">
                                            View your learning progress and statistics.
                                        </div>
                                    </Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <Link href="#">
                                        <div className="font-medium">Documentation</div>
                                        <div className="text-muted-foreground">
                                            Learn how to use the library.
                                        </div>
                                    </Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <Link href="#">
                                        <div className="font-medium">Blog</div>
                                        <div className="text-muted-foreground">
                                            Read our latest blog posts.
                                        </div>
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Contenidos</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[200px] gap-4">
                            <li>
                                <NavigationMenuLink asChild>
                                    <Link href="#">
                                        <div className="font-medium">Perfil</div>
                                        <div className="text-muted-foreground">
                                            Browse all components in the library.
                                        </div>
                                    </Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <Link href="#">
                                        <div className="font-medium">Documentation</div>
                                        <div className="text-muted-foreground">
                                            Learn how to use the library.
                                        </div>
                                    </Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <Link href="#">
                                        <div className="font-medium">Blog</div>
                                        <div className="text-muted-foreground">
                                            Read our latest blog posts.
                                        </div>
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Comunidad</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[200px] gap-4">
                            <li>
                                <NavigationMenuLink asChild>
                                    <Link href="#">
                                        <div className="font-medium">Discord NosakaKing</div>
                                        <div className="text-muted-foreground">
                                            Join our Discord community.
                                        </div>
                                    </Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <Link href="/dashboard/foro">
                                        <div className="font-medium">Foro</div>
                                        <div className="text-muted-foreground">
                                            Participate in discussions on our forum.
                                        </div>
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger>
                        <div className="flex items-center">
                            <AvatarUser name={user?.apellido + " " + user?.nombre} />
                            <span className="ml-2">{user?.nombre}</span>
                        </div>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[120px] gap-4">
                            <li>
                                <NavigationMenuLink asChild>
                                    <Link href="#">
                                        <div className="font-medium">Perfil</div>
                                    </Link>
                                </NavigationMenuLink>
                                <NavigationMenuItem asChild className="mt-2">
                                    <Button variant="outline" className="w-full" onClick={() => logout()} loading={isPending}>
                                        Cerrar sesión
                                    </Button>
                                </NavigationMenuItem>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

            </NavigationMenuList>
        </NavigationMenu>
    )
}
