import styles from  './deposito.module.css'
import Router from 'next/router'

const deposito = () => {
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
                    <div className={styles.btnestilizat}> Insira o Valor do Deposito:  </div>
                </div>

                <div className={styles.container11}>
                    <button className={styles.btnestiliza1}></button>
                    <div className={styles.btnestilizatt}>Saldo Atual: <br></br>R$ <span>1900,00 </span></div>
                </div>


                <div className={styles.container11}>
                    <button className={styles.btnestiliza1}></button>
                    <div className={styles.btnestilizatt}>Saldo pós Deposito: <br></br>R$ <span>2200,00 </span></div>
                </div>

                <div className={styles.container11}>
                    <button className={styles.btnestiliza1}></button>
                    <button className={styles.btnestiliza} onClick={()=>Router.push('/')}>Voltar</button>
                </div>

                <div className={styles.container11}>
                    <div className={styles.btnestiliza1}></div> 
                    <div className={styles.btnestilizatt}>Central de Ajuda</div>
                </div>

                </div>




                <div className={styles.subcontainer2}>

                
                <div className={styles.container11}>
                    <div className={styles.btnestiliza1}></div>
                    <div className={styles.btnestiliza1}></div>  
                </div>


                <div className={styles.container11}>
                    <input type="text" className={styles.btnestiliza}placeholder="Digite aqui:"></input>
                    <button className={styles.btnestiliza1}></button>  
                </div>


                <div className={styles.container11}>
                    <div className={styles.btnestilizatt}><br></br></div>
                    <button className={styles.btnestiliza1}></button>  
                </div>

                
                <div className={styles.container11}>
                <div className={styles.btnestilizatt}><br></br></   div>
                    <button className={styles.btnestiliza1}></button>
                </div>

                <div className={styles.container11}>
                    <button className={styles.btnestiliza}>Depositar</button>
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

export default deposito