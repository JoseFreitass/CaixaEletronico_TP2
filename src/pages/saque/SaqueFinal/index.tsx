import styles from  './SaqueFinal.module.css'


const SaqueFinal = () => {
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
                    <div className={styles.btnestilizatt}>Saldo disponível:</div>
                </div>

                <div className={styles.container11}>
                    <button className={styles.btnestiliza1}></button>
                    <div className={styles.btnestilizatt}>Valor do Saque:</div>
                </div>

                <div className={styles.container11}>
                    <button className={styles.btnestiliza1}></button>
                    <div className={styles.btnestilizatt}>Saldo Final:</div>
                </div>

                <div className={styles.container11}>
                    <button className={styles.btnestiliza1}></button>
                    <button className={styles.btnestiliza}>Voltar</button>
                    
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
                <div className={styles.btnestilizatt}>R$ <span>1900,00 </span></div>
                    <button className={styles.btnestiliza1}></button>  
                </div>
                <div className={styles.container11}>
                    <div className={styles.btnestilizatt}>R$ <span>200,00 </span></div>
                    <button className={styles.btnestiliza1}></button>  
                </div>
                <div className={styles.container11}>
                    <div className={styles.btnestilizatt}>R$ <span>1700,00 </span></div>
                    <button className={styles.btnestiliza1}></button>  
                </div>
                <div className={styles.container11}>
                    <button className={styles.btnestiliza}>Sacar</button>
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

export default SaqueFinal