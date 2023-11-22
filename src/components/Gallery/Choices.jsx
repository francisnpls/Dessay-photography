import React from 'react'
import styles from '../../styles'
import { Link } from 'react-router-dom'

const Choices = () => {
  return (
    <section className="w-full pt-[90px]">
      <ul className={`${styles.flexCenter} list-none`}>
        <li>
          <Link> Nature </Link>
        </li>
      </ul>
    </section>
  )
}

export default Choices