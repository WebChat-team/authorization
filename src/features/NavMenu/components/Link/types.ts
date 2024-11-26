// imports ================================================== //
import type { FC } from "react";
import type { LinkProps } from "next/link";
import type { PropsAnchor } from "@webchat_com/webchat_ui";

// main ===================================================== //
type NavLink = FC<Readonly<LinkProps & PropsAnchor>>

// exports ================================================== //
export type { NavLink };