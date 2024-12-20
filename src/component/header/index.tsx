import { Button } from "@/components/ui/button";
import { route } from "@/config/route";
import Link from "next/link";

export default function Header() {
    return (
        <div className="container py-3">
            <div className=" flex items-center justify-between bg-[#1C4DB7] px-5 py-3 rounded-xl text-background">
                <Link href={route.home} className="text-lg font-semibold">Медицинская клиника</Link>
                <Button variant={"ghost"}><Link href="/person_office">Личный кабинет</Link></Button>
                <p className="underline">+7 (920) 047-89-26</p>
            </div>
        </div>
    );
}