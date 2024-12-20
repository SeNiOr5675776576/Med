'use server'

import { request } from "@/config/request"


export async function getShedules() {
    const res = await fetch(request.getShedules, {
        method: 'GET'
    })
    return res.json();
}

export async function getMedicalRecord() {
    const res = await fetch(request.getMedicalRecord, {
        method: 'GET'
    })
    return res.json();
}