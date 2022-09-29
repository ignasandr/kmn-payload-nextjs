import { useState } from "react";
import Logo from "../logo";

export default function Navigation() {
    const [openBurger, setOpenBurger] = useState(false);

    return (
        <>
            <Logo />
        </>
    )
}