import React, { useContext, useEffect } from 'react'
import styles from  '../styles/Home.module.css'
import Router from 'next/router'
import Context from '../components/UserContext/index'

const Home = () => {
  const [user, setUser] = useContext<any>(Context)

  useEffect(() =>{
    getUser()
  }, [])

  const getUser = async () =>{
    let headers = new Headers()

    headers.append('Accept', 'application/json')
    headers.append('Origin','http://localhost:3000')
    headers.append('Access-Control-Allow-Origin', '*')

    let response = await fetch('http://localhost:8080/client/1', {
      method: 'GET',
      headers: headers
    })
    .catch(err => console.log(err))

    if (response?.status === 200) {
      let data = await response.text()
      setUser(data)
    }else{
      return null
    }
  }

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
                <button className={styles.btnestiliza1} onClick={()=>Router.push('saque')}></button>
                <button className={styles.btnestiliza} onClick={()=>Router.push('saque')}>Saque</button>
              </div>

              <div className={styles.container11}>
                <button className={styles.btnestiliza1} onClick={()=>Router.push('deposito')}></button>
                <button className={styles.btnestiliza} onClick={()=>Router.push('deposito')}>Deposito</button>
              </div>

              <div className={styles.container11}>
                <button className={styles.btnestiliza1} onClick={()=>Router.push('extrato')}></button>
                <button className={styles.btnestiliza} onClick={()=>Router.push('extrato')}>Extrato Financeiro</button>
              </div>

              <div className={styles["container11"] +' '+ styles["containerteste"]}>
                <button className={styles.btnestiliza1}></button>
                <button className={styles.btnestilizacinza}>Transferência</button>
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
                  <button className={styles.btnestilizacinza}>Contratar Planos</button>
                  <button className={styles.btnestiliza1}></button>  
              </div>
              <div className={styles.container11}>
                  <button className={styles.btnestilizacinza}>Cheque Especial</button>
                  <button className={styles.btnestiliza1}></button>  
              </div>
              <div className={styles.container11}>
                  <button className={styles.btnestilizacinza}>Cancelamento de Cartão</button>
                  <button className={styles.btnestiliza1}></button>  
              </div>
              <div className={styles.container11}>
                  <button className={styles.btnestilizacinza}>Dúvidas</button>
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
