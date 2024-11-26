// imports ================================================== //
import type { FC, ReactNode } from "react";

// main ==================================================== //
type Props = {
    children: ReactNode | ReactNode[]
}
type Main = FC<Readonly<Props>>

// exports ================================================= //
export type { Main }