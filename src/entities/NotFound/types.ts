// imports ================================================== //
import type { FC } from "react";

// main ==================================================== //
type Props = {
    statusCode: number,
    title: string,
    description: string,
}
type SiteError = FC<Readonly<Props>>

// exports ================================================= //
export type { SiteError }