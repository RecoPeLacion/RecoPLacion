import Image from 'next/image'
import styles from './page.module.css'
import Me from 'public/me.jpg'

export default function Home() {
  return (
    <div className="rbr_main_wrapper">
      <section className={styles.rbr_hero_section}>
        <div className="rbr_container">
          <Image src={Me} width={120} height={120} />
        </div>
      </section>
    </div>
  )
}
