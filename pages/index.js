import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/Nav'
import Cerdo from '../components/Cerdo'
import Elefante from '../components/Elefante'
import Gato from '../components/Gato'
import Leon from '../components/Leon'
import Lobo from '../components/Lobo'
import Oso from '../components/Oso'
import Perro from '../components/Perro'
import Vaca from '../components/Vaca'


export default function Home() {
  return (
  
      <Layout>
      <Cerdo/>
      <Elefante/>
      <Gato />
      <Leon />
      <Lobo />
      <Oso />
      <Perro />
      <Vaca />

     
      </Layout>  
 
    )
}
