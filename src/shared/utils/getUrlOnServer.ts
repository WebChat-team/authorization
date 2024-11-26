// imports ================================================== //
import { headers } from "next/headers";

// types ==================================================== //
type getUrlOnServerType = () => URL | undefined

// main ===================================================== //
const getUrlOnServer: getUrlOnServerType = () => {

    const headerList = headers();
    const referer = headerList.get("referer");

    return (
        referer ? 
            new URL(referer) :
            undefined
    );

}

// exports ================================================== //
export default getUrlOnServer;