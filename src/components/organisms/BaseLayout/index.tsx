/**
 * BaseLayout
 *
 * @package components
 */
import { ReactNode } from 'react'
import { Navigation } from '@/components/molcules/Navigation'
import styles from './styles.module.css'

type Props = {
  children: ReactNode
  title: string
}

export const BaseLayout = ({ children, title }: Props) => {
  /**
   * BaseLayout
   * @returns {JSX.Element}
   * @constructor
   */
  return (
    <div className={styles.container}>
      <section>
        <Navigation />
      </section>
      {children}
      <div className={styles.titleBox}>
        <h1>{title}</h1>
      </div>
    </div>
  )
}
