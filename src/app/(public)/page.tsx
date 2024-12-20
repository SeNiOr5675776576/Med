import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { route } from "@/config/route";
import { postAuth } from "@/feature/post";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  async function onSubmit(formData: FormData) {
    'use server'
    const username = String(formData.get("username"));
    const password = String(formData.get("password"));
    return await postAuth({username, password});
  }

  return (
    <main className="container text-background flex">
      <div className="w-[50%]">
        <div className="bg-[#1C4DB7] w-[28vw] h-[40vh] my-[200px] mx-auto pt-1 rounded-xl flex flex-col items-center justify-center">
          <h2 className="text-2xl">Вход</h2>
          <p>в личный кабинет</p>
          <form action={onSubmit} className="flex flex-col items-center justify-center mt-2 gap-2">
            <div>
              <Label>Имя пользователя</Label>
              <Input type="username" className="bg-background text-foreground" placeholder="Имя пользователя"/>
            </div>
            <div>
              <Label>Пароль</Label>
              <Input type="password" className="bg-background text-foreground" placeholder="Пароль"/>
            </div>
            <Button type="submit" className="mt-6">Войти</Button>
          </form>
          <Link className="mt-1 font-semibold text-xs" href={route.reg}>Ещё не <span className="underline">зарегистрированы</span>?</Link>
        </div>
      </div>
      <div className="w-[50%] flex justify-center">
        <div>
          <Image className="absolute rounded-xl top-[180px] right-[300px]" src={"/main1.jpg"} alt="main1" width={300} height={300}/>
          <Image className="absolute rounded-xl top-[500px] right-[520px]" src={"/main2.jpg"} alt="main2" width={300} height={300}/>
          <Image className="absolute rounded-xl top-[400px] right-[150px]" src={"/main3.jpg"} alt="main3" width={300} height={300}/>
        </div>
      </div>
    </main>
  );
}
