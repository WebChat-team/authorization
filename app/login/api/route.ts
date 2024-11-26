// imports ================================================== //
import { NextResponse } from "next/server";
import transferCookieToClient from "@/shared/utils/transferCookieToClient";

// main ===================================================== //
export async function POST(req: Request) {

    const { email, password } = await req.json();

    const response = await fetch(
        process.env.BACKEND_URL + "/login.php",
        {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "Application/json",
                "Origin": "http://id.webchat.com"
            },
            body: JSON.stringify({ email, password })
        }
    );

    if (response.ok) {
        const responseRedirect = NextResponse.redirect(process.env.ACCOUNT_URL, { status: 302 });
        transferCookieToClient(responseRedirect.cookies, response.headers.getSetCookie());
        return responseRedirect;
    } else {
        return response;
    }

}