import type { NextPage } from 'next'
import React from 'react'
import styles from  '../styles/Home.module.css'


const Home: NextPage = () => {
  return (
      <main>
        

        <div className={styles.cover}>

          <div className={styles.container}>



            <div className={styles.subcontainer1}>

            
              <div className={styles.container1}>
                <button>1</button>
              </div>

              <div className={styles.container1}>
                <button>2</button>
              </div>

              <div className={styles.container1}>
                <button>3</button>
              </div>

              <div className={styles.container1}>
                <button>4</button>
              </div>

            </div>




            <div className={styles.subcontainer2}>

            
              <div className={styles.subcontainer2}>
                <button>1</button>
              </div>

              <div className={styles.subcontainer2}>
                <button>2</button>
              </div>

              <div className={styles.subcontainer2}>
                <button>3</button>
              </div>

              <div className={styles.container1}>
                <button>4</button>
              </div>
              
            </div>





          </div>

        </div>



      </main>
  )
}

export default Home
