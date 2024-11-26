// imports ================================================== //
import transferCookieToClient from "@/shared/utils/transferCookieToClient";
import { cookies, headers } from "next/headers";
import { notFound } from "next/navigation";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// constants ================================================ //
const allowedRoutes = ["/login", "/register"];

// helpers ================================================== //
function removeTokensInCookies(response: NextResponse) {
    response.cookies.delete("access_token");
    response.cookies.delete("refresh_token");
}

// main ===================================================== //
export default async function middleware(request: NextRequest) {

    const { pathname } = new URL(request.url);

    if (pathname.endsWith("/api")) return NextResponse.next();

    const cookiesList = cookies();

    // 1. проверка наличия и подлинности access токена
    const accessToken = cookiesList.get("access_token");
    if (accessToken) {

        const responseAuthServer = await fetch(
            process.env.BACKEND_URL + "/is_valid_access_token.php",
            {
                method: "GET",
                headers: {
                    "Origin": "http://id.webchat.com",
                    "Authorization": `Bearer ${accessToken.value}`
                }
            }
        );

        if (responseAuthServer.ok) {
            return NextResponse.redirect(process.env.ACCOUNT_URL);
        }

    }

    // 2. проверка наличия и подлинности refresh токена. обновление токенов
    const refreshToken = cookiesList.get("refresh_token");
    if (refreshToken) {

        const responseAuthServer = await fetch(
            process.env.BACKEND_URL + "/update_tokens.php",
            {
                method: "POST",
                headers: {
                    "Origin": "http://id.webchat.com",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    refresh_token: refreshToken.value
                })
            }
        );

        if (responseAuthServer.ok) {
            const responseNext = NextResponse.redirect(process.env.ACCOUNT_URL);
            transferCookieToClient(responseNext.cookies, responseAuthServer.headers.getSetCookie());
            return responseNext;
        }

    }

    // 3. проверка пути
    if (allowedRoutes.includes(pathname)) {
        const responseNext = NextResponse.next();
        removeTokensInCookies(responseNext);
        return responseNext;
    } else {
        const responseNext = NextResponse.next();
        removeTokensInCookies(responseNext);
        return responseNext;
    }

}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}