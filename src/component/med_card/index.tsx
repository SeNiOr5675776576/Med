import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Bandage, CalendarIcon, ClipboardCheck, ClipboardList, Frown } from "lucide-react";

export default function MedCard() {
    return (
        <Dialog>
            <DialogTrigger asChild><Button className="w-full">Медкарта</Button></DialogTrigger>
            <DialogContent className="bg-[#1C4DB7] text-background flex flex-col gap-5">
                    <div className="flex items-center gap-1"><CalendarIcon/><h3>Создана - 1 декабря, 2023</h3></div>
                    <div className="flex items-center gap-1"><Frown/><p>Жалобы - Боль в горле</p></div>
                    <div className="flex items-center gap-1"><ClipboardList/><p>Диагноз - Ларингит</p></div>
                    <div className="flex items-center gap-1"><ClipboardCheck/><p>Результат обследования - У пациента красное горло</p></div>
                    <div className="flex items-center gap-1"><Bandage/><p>Лечение - Лекарственные препараты</p></div>
            </DialogContent>
        </Dialog>
    );
}