'use server';

import { request } from '@/config/request';

interface IReg {
    username: string,
    password: string,
    confirmPassword: string,
    name: string,
    secondName: string,
    thirdName: string
}
interface IAuth {
    username: string,
    password: string
}
interface IShedules {
    date: Date | undefined,
    doctorId: string,
    time: string,
}

export async function postReg(data: IReg) {
    const res = await fetch(request.postReg, {
        method: 'POST',
        body: JSON.stringify(data)
    })
    return res.json();
}

export async function postAuth(data: IAuth) {
    const res = await fetch(request.postAuth, {
        method: 'POST',
        body: JSON.stringify(data)
    })
    return res.json();
}

export async function postShedules(data: IShedules) {
    const res = await fetch(request.postShedules, {
        method: 'POST',
        body: JSON.stringify(data)
    })
    return res.json();
}