"use client"

import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {Popover,PopoverContent,PopoverTrigger,} from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { postShedules } from "@/feature/post"

export function CalendarTimeForm() {
    const [date, setDate] = React.useState<Date>()

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const time = String(formData.get("time"))
        const doctorId = String(formData.get("doctorId"))
        return postShedules({date, doctorId, time})
    }
    return (
        <form onSubmit={onSubmit} className="px-2">
            <div className="flex justify-center gap-4">
            <Select name="doctorId">
                    <SelectTrigger className="w-full bg-background text-foreground">
                        <SelectValue placeholder="Выберите врача" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="1">Пётр Иванович Смородин</SelectItem>
                        <SelectItem value="2">Анастасия Максимовна Доброва</SelectItem>
                        <SelectItem value="3">Сергей Станисловович Каштанов</SelectItem>
                    </SelectContent>
                </Select>

                <Popover>
                    <PopoverTrigger asChild>
                        <Button name="date" type="button" variant={"outline"} className={cn("w-full justify-start text-left font-normal",!date && "text-muted-foreground")}>
                            <CalendarIcon />
                            {date ? format(date, "PPP") : <span>Выберите дату</span>}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={date} onSelect={setDate} initialFocus/>
                    </PopoverContent>
                </Popover>
            </div>
            <div className="flex justify-between mt-4 gap-4">
                <Select name="time">
                    <SelectTrigger className="w-full bg-background text-foreground">
                        <SelectValue placeholder="Выберите время" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="11:00">11:00</SelectItem>
                        <SelectItem value="11:30">11:30</SelectItem>
                        <SelectItem value="12:00">12:00</SelectItem>
                        <SelectItem value="12:30">12:30</SelectItem>
                        <SelectItem value="13:00">13:00</SelectItem>
                        <SelectItem value="13:30">13:30</SelectItem>
                        <SelectItem value="14:00">14:00</SelectItem>
                        <SelectItem value="14:30">14:30</SelectItem>
                        <SelectItem value="15:00">15:00</SelectItem>
                        <SelectItem value="15:30">15:30</SelectItem>
                        <SelectItem value="16:00">16:00</SelectItem>
                        <SelectItem value="16:30">16:30</SelectItem>
                    </SelectContent>
                </Select>

                <Button className="w-full" type="submit">Записаться</Button>
            </div>
        </form>
    )
}