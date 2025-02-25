import Image from "next/image";
import Link from "next/link";
import {auth, signIn, signOut} from "@/auth";
import {redirect} from "next/navigation";
import {options} from "preact";

export default async function Navbar() {
    const session = await auth()
    return (
        <header className={"px-10 py-3 shadow-sm font-work-sans bg-white"}>
            <nav className={"flex justify-between items-center"}>
                <Link href="/">
                    <Image src={"/logo.png"} alt={"logo"} width={144} height={50} />
                </Link>

                <div className={"flex items-center gap-5 text-black"}>
                    {session && session?.user ? (
                        <div className={"flex items-center gap-5"}>
                            <Link href="/startup/create">
                                <span className={"font-semibold"}>Create</span>
                            </Link>

                            <form action={async () => {
                                "use server"

                                await signOut({ redirectTo: "/" })
                            }}>
                                <button type="submit">
                                    <span className={"text-[#EF4444] font-semibold"}>Signout</span>
                                </button>
                            </form>

                            <Link href={`/user/${session?.id}`}>
                                <span>{session?.user?.name}</span>
                            </Link>
                        </div>
                    ) : (
                        <form action={async () => {
                            "use server"

                            await signIn("github")
                        }}>
                            <button type={"submit"}>
                                <span className={"font-semibold"}>Login</span>
                            </button>
                        </form>
                    )}
                </div>
            </nav>
        </header>
    )
}