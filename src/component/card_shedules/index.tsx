import MedCard from "../med_card";

export default function CardShedules() {
    return (
        <div className="bg-[#2461e5] text-background flex justify-between px-10 py-3 gap-5 rounded-xl">
            <div className="flex flex-col gap-2">
                <h3>Иван Иванов Иванович</h3>
                <p>Приём - 14 января, 13:00</p>
            </div>
            <div className="flex items-center"><MedCard /></div>
        </div>
    )
}
