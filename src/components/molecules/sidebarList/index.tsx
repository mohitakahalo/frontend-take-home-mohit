import SidebarItem from '@/components/atoms/sidebarItem'
import ButtonWithIcon from '../buttonWithIcon'
import styles from './sidebarList.module.scss'

type SidebarItemType = {
  leftIcon: string,
  title: string,
  rightIcon: string
} 

type SidebarListProps = {
  sidebarItems: {
    title: string,
    icon: string,
    items: Array<SidebarItemType>
  }
}

const SidebarList = ({sidebarItems}: SidebarListProps) => {
  
  return (
    <div className={styles.listTitleWrap}>
      <ButtonWithIcon wrapperClass={styles.listTitle} btnClasses={styles.listTitleContent} btnContent={sidebarItems.title} leftIconSize={16} leftIcon={`/images/${sidebarItems.icon}.svg`} />
      <div className={styles.listItemsWrap}>
        {
          sidebarItems.items.map((item: SidebarItemType, idx) => {
            return (
              <div key={idx}>
                <SidebarItem {...item}></SidebarItem>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default SidebarList