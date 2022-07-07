import React from "react";
import styles from "../styles/components/Elefante.module.scss"
 const Elefante = () => {
    return (
        <>
          <div className={styles.cuadro}>
                <div className={styles.imagen} style={{backgroundImage:'url(cerdo.jpeg)'}}></div>
                <div className={styles.titulo}>
                    
                    Cerdo

                    <div className={styles.parrafo}>
                        El oso grizzly u oso gris (Ursus arctos horribilis) es una de las subespecies del oso pardo (Ursus arctos) más grandes del planeta, que suele vivir en las tierras altas del territorio norteamericano. Es un animal solitario, excepto durante la temporada del desove del salmón, cuando se junta un enorme número de osos en arroyos y zonas costeras para alimentarse.
                    </div>
                    
                </div>
                <div className={styles.datos}>
                    <div className={styles.nombre}>Nombre: Oso </div>
                    <div className={styles.genero}> Genero: Ursus  </div>
                    <div className={styles.tribu}> tribu: --- </div>
                    <div className={styles.especie}> Especie: U. Arcto </div>
                    <div className={styles.familia}> Familia: Ursidae </div>
                    <div className={styles.orden}> Orden: Carnivora </div>
                    <div className={styles.clase}> Clase: Mammalia </div>
                    <div className={styles.filo}> Filo: Chordata </div>
                    <div className={styles.reino}> Reino: Animalia </div>
                </div>
                </div>
        </>
    )
 }

 export default Elefante