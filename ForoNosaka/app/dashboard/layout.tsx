import Logo from "@/components/nav/menu-user/logo";
import { NavigationMenuDemo } from "@/components/nav/navbar/navbar";

export default function NavBar({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col h-screen">
            <div className="flex justify-center">
                <div className="w-full max-w-7xl">
                    <div className="flex justify-between items-center py-2 px-4">
                        <Logo />
                        <div className="hidden md:block">
                            <NavigationMenuDemo />
                        </div>
                    </div>
                    <main className="flex-1 p-4">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
}

