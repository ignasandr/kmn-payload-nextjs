import MenuItem from "./menuItemOLD";
import { useRouter } from "next/router";
import styles from './styles.module.css'

type Props = {
    submenuItems: {
        label: string,
        slug: string,
        submenu: boolean,
        submenuItems: any[],
        id: string
    }[],
    isVisible: boolean
}

export default function Dropdown({ submenuItems, isVisible }: Props) {
  const router = useRouter();
  const path = router.pathname.replaceAll("/", "");

  return (
    <ul className={isVisible ? [styles.submenu, styles.visible].join(' ') : styles.submenu }>
        { submenuItems.map((item, index) => {
            return <MenuItem
                key={index}
                {...item}
                isSelected={path === item.slug ? true : false }
                dropdownVisible={false}
                onClick={ () => console.log('clicked') }
              /> })
        }
    </ul>
  )
}