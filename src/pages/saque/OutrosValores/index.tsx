import styles from  './OutrosValores.module.css'


const OutrosValores = () => {
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
                    <div className={styles.btnestilizat}> Selecione o valor que deseja sacar:  </div>
                </div>

                <div className={styles.container11}>
                    <button className={styles.btnestiliza1}></button>
                    <div className={styles.btnestilizaS}></div>
                </div>

                <div className={styles.container11}>
                    <button className={styles.btnestiliza1}></button>
                    <div className={styles.btnestilizaS}></div>
                </div>

                <div className={styles.container11}>
                    <button className={styles.btnestiliza1}></button>
                    <div className={styles.btnestilizatt}>Saldo disponível: <br></br>R$ <span>1900,00 </span></div>
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
                    <input type="text" className={styles.btnestiliza}placeholder="Digite aqui:"></input>
                    <button className={styles.btnestiliza1}></button>  
                </div>
                <div className={styles.container11}>
                    <div className={styles.btnestilizatt}>Deseja seguir com o saque?<br></br></div>
                    <button className={styles.btnestiliza1}></button>  
                </div>
                <div className={styles.container11}>
                <span className={styles.subtitulo1}>Sim:</span><input type='radio'   name="OPCAO"className={styles.btnestiliza1}></input><span className={styles.subtitulo1}>Não:</span><input type='radio'  name="OPCAO" className={styles.btnestiliza1}></input>
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

export default OutrosValores