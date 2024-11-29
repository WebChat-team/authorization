// imports ================================================== //
import { NextResponse } from "next/server";
import transferCookieToClient from "@/shared/utils/transferCookieToClient";

// main ===================================================== //
export async function POST(req: Request) {

    const { email, password } = await req.json();

    const response = await fetch(
        "http://api.webchat.com:3000/user/register",
        {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                "Origin": "http://id.webchat.com"
            },
            body: JSON.stringify({ email, password })
        }
    );

    if (response.ok) {
        const responseRedirect = NextResponse.redirect("http://webchat.com:3000/");
        transferCookieToClient(responseRedirect.cookies, response.headers.getSetCookie());
        return responseRedirect;
    } else {
        return response;
    }

}