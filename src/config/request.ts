const baseUrl = "http://26.66.203.133:8080";

export const request = {
    baseUrl,
    getShedules: baseUrl + "/api/shedules",
    getMedicalRecord: baseUrl + "/api/medicalRecord",
    postReg: baseUrl + "/api/reg",
    postAuth: baseUrl + "/api/auth",
    postShedules: baseUrl + "/api/shedules",
};