import React from 'react'
import styles from  '../styles/Home.module.css'





const Home = () => {
  return (
      <main>
        

        <div className={styles.cover}>

          <div className={styles.container}>



            <div className={styles.subcontainer1}>

            
              <div className={styles.container11}>
                <div className={styles.btnestiliza1}></div>
                <div className={styles.titulo}>CAIXA ELETRÔNICO</div>
              </div>

              <div className={styles.container11}>
                <button className={styles.btnestiliza1}></button>
                <button className={styles.btnestiliza}>Saque</button>
              </div>

              <div className={styles.container11}>
                <button className={styles.btnestiliza1}></button>
                <button className={styles.btnestiliza}>Consultar Saldo</button>
              </div>

              <div className={styles.container11}>
                <button className={styles.btnestiliza1}></button>
                <button className={styles.btnestiliza}>Extrato Financeiro</button>
              </div>

              <div className={styles.container11}>
                <button className={styles.btnestiliza1}></button>
                <button className={styles.btnestiliza}>Transferência</button>
              </div>

              <div className={styles.container11}>
                <div className={styles.btnestiliza1}></div> 
                <div className={styles.subtitulo}>Central de Ajuda</div>
              </div>

            </div>




            <div className={styles.subcontainer2}>

            
            <div className={styles.container11}>
                <div className={styles.btnestiliza1}></div>
                <div className={styles.btnestiliza1}></div>  
            </div>
            <div className={styles.container11}>
                <button className={styles.btnestiliza}>Contratar Planos</button>
                <button className={styles.btnestiliza1}></button>  
            </div>
            <div className={styles.container11}>
                <button className={styles.btnestiliza}>Cheque Especial</button>
                <button className={styles.btnestiliza1}></button>  
            </div>
            <div className={styles.container11}>
                <button className={styles.btnestiliza}>Cancelamento de Cartão</button>
                <button className={styles.btnestiliza1}></button>  
            </div>
            <div className={styles.container11}>
                <button className={styles.btnestiliza}>Dúvidas</button>
                <button className={styles.btnestiliza1}></button>  
            </div>
            <div className={styles.container11}>
                <div className={styles.subtitulo}>tel: 0800 - 9999999</div>
                <div className={styles.btnestiliza1}></div>   
            </div>

              
              
            </div>





          </div>

        </div>



      </main>
  )
}

export default Home
