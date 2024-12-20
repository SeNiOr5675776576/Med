import { CalendarTimeForm } from "@/component/calendar";
import CardShedules from "@/component/card_shedules";
import MedCard from "@/component/med_card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

export default function PersonOffice() {
    return (
        <div className="container flex">
            <div className="w-[50%]">
                <div>
                    <Image className="rounded-tr-[100px] rounded-bl-[100px] mt-20 ml-12" src={"/person1.jpg"} alt="person1" width={450} height={300}/>
                </div>
                <div className="bg-[#1C4DB7] w-[34vw] h-[42vh] mt-12 py-6 px-5 rounded-xl">
                    <CalendarTimeForm/>
                    <div className="w-[31vw] h-[25vh] text-background mt-4 flex flex-col overflow-y-scroll gap-4">
                        <CardShedules/>
                        <CardShedules/>
                        <CardShedules/>
                        <CardShedules/>
                    </div>
                </div>
            </div>
            <div className="w-[50%]">
                <div className="bg-[#1C4DB7] text-background w-[34vw] h-[42vh] mt-4 rounded-xl flex flex-col items-center justify-center">
                    <h2 className="text-2xl font-semibold">Ваши данные</h2>
                    <div>
                        <div className="flex gap-20 mt-4">
                            <div>
                                <Label>Имя</Label>
                                <Input className="bg-background text-foreground w-[13vw]" defaultValue={"Иван"} placeholder="Имя"/>
                            </div>
                            <div>
                                <Label>Фамилия</Label>
                                <Input className="bg-background text-foreground w-[13vw]" defaultValue={"Иван"} placeholder="Фамилия"/>
                            </div>
                        </div>
                        <div className="flex gap-20 mt-4">
                            <div>
                                <Label>Отчество</Label>
                                <Input className="bg-background text-foreground w-[13vw]" defaultValue={"Иванович"} placeholder="Отчество"/>
                            </div>
                            <div >
                                <Label>Номер телефона</Label>
                                <Input className="bg-background text-foreground w-[13vw]" defaultValue={"+7 (920) 047-89-26"} placeholder="Телефон"/>
                            </div>
                        </div>
                        <div className="w-full mt-10">
                            <MedCard/>
                        </div>
                    </div>
                </div>
                <div><Image className="mt-12 rounded-tr-[100px] rounded-bl-[100px]" src={"/person2.jpg"} alt="person2" width={500} height={333}/></div>
            </div>
        </div>
    );
}