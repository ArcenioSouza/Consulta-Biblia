import axios from "axios"

export const api = axios.create({
   baseURL: "https://www.abibliadigital.com.br/api/",
   headers: {
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkZyaSBKYW4gMTQgMjAyMiAxMzo1NTozOCBHTVQrMDAwMC5hcmNlbmlvX25ldG9AaWNsb3VkLmNvbSIsImlhdCI6MTY0MjE2ODUzOH0.OMAUEP0R4ALRXIY_P5AGS2JOKiwZCne6brz6yC26tHo"
    },
})