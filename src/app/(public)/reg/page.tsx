import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { route } from "@/config/route";
import { postReg } from "@/feature/post";
import Image from "next/image";
import Link from "next/link";

export default async function Reg() {
  async function onSubmit(formData: FormData) {
    'use server'
    const username = String(formData.get("username"));
    const password = String(formData.get("password"));
    const confirmPassword = String(formData.get("confirm-password"));
    const name = String(formData.get("name"));
    const secondName = String(formData.get("secondName"));
    const thirdName = String(formData.get("thirdName"));
    if (password !== confirmPassword) {
      throw new Error("Пароли не совпадают");
    }
    return await postReg({username, password, confirmPassword, name, secondName, thirdName});
  }

  return (
    <main className="container text-background flex">
      <div className="w-[50%]">
        <div className="bg-[#1C4DB7] w-[28vw] h-fit my-[120px] mx-auto py-4 rounded-xl flex flex-col items-center justify-center">
          <h2 className="text-2xl">Регистрация</h2>

          <form action={onSubmit} className="flex flex-col items-center justify-center mt-2 gap-2">
            <div>
              <Label>Имя пользователя</Label>
              <Input name="username" className="bg-background text-foreground" placeholder="Имя пользователя"/>
            </div>
            <div>
              <Label>Пароль</Label>
              <Input name="password" className="bg-background text-foreground" placeholder="Пароль"/>
            </div>
            <div>
              <Label>Повторите пароль</Label>
              <Input name="confirm-password" className="bg-background text-foreground" placeholder="Повторите пароль"/>
            </div>
            <div>
              <Label>Ваше имя</Label>
              <Input name="name" className="bg-background text-foreground" placeholder="Имя"/>
            </div>
            <div>
              <Label>Фамилия</Label>
              <Input name="secondName" className="bg-background text-foreground" placeholder="Фамилия"/>
            </div>
            <div>
              <Label>Отчество</Label>
              <Input name="thirdName" className="bg-background text-foreground" placeholder="Отчество"/>
            </div>
            <Button type="submit" className="mt-6">Зарегистрироваться</Button>
          </form>
          <Link className="mt-2 font-semibold text-xs" href={route.home}>У вас есть аккаут? <span className="underline"> Войти</span></Link>
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
