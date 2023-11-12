/**
 * Navigation
 *
 * @package components
 */
import { NavigationLink } from '@/components/atoms/NavagationLink'
import { NAVIGATION_LIST } from '@/constants/navigations'
import styles from './styles.module.css'

/**
 * Navigation
 * @returns {JSX.Element}
 * @constructor
 */
export const Navigation = () => {
  return (
    <ul className={styles.list}>
      <NavigationLink label={'Top'} linkPath={NAVIGATION_LIST.TOP} />
      <NavigationLink label={'Create'} linkPath={NAVIGATION_LIST.CREATE} />
    </ul>
  )
}
