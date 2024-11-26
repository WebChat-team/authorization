// imports ================================================== //
import type { FC, ReactNode } from "react";

// main ==================================================== //
type Props = {
    children: ReactNode | ReactNode[]
}
type ContainerApp = FC<Readonly<Props>>

// exports ================================================= //
export type { ContainerApp }