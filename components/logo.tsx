import Image from "next/image";
import Link from "next/link";
import styles from './styles.module.css'


type Props = {
    width?: number,
    height?: number,
    onClick?: (event: React.MouseEvent) => void;
}

export default function Logo({ width = 109, height = 40, onClick }: Props) {
    return (
        <Link href="/" onClick={onClick} className={styles.logo}>
                <Image 
                    src="/kmn-logo.svg"
                    alt="logo"
                    width={width}
                    height={height}
                    style={{paddingTop: 10}}
                    priority
                />
        </Link>
    )
}