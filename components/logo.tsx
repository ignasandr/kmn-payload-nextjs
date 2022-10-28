import Image from "next/image";
import Link from "next/link";

type Props = {
    width?: number,
    height?: number
}

export default function Logo({ width = 109, height = 40 }: Props) {
    return (
        <Link href="/">
                <Image 
                    src="/KMNlogo.svg"
                    alt="logo"
                    width={width}
                    height={height}
                    style={{paddingTop: 10}}
                />
        </Link>
    )
}