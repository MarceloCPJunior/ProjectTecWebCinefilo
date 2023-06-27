import { useRouter } from "next/router"
import sorov from "../../baza/sorov"
import styles from "./filter.module.css"

export default function Filter() {
  const router = useRouter()

  return (
    <div className={styles.filter}>
      {Object.entries(sorov).map(([key, { title }]) => (
        <div key={key} className={styles.box} onClick={() => router.push(`/?genre=${key}`)}>
            {title}
        </div>
      ))}
    </div>
  )
}
