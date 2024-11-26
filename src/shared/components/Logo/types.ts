// imports ================================================== //
import { PropsAnchor } from "@webchat_com/webchat_ui";
import type { FC } from "react";

// main ===================================================== //
interface Props {
    hasName: boolean
}
type Logo = FC<Readonly<PropsAnchor & Props>>

// exports ================================================== //
export type { Logo };