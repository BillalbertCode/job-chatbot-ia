export async function POST(request: Request) {
    const req = await request.json()

    const { name, age } = req

    if (!name || !age) {
        return new Response("Error Bad Request", {
            status: 400
        })
    }

    const res: string = `Hola ${name} wao si has cambiao, ahora eres ${age >= 18 ? "mayor de edad" : "menor de edad"}`
    return Response.json(res)
}   