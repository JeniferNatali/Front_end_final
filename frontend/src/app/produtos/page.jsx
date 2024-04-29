import Link from 'next/link';
import styles from './page.module.css';
export default function Login () {
    return (
        <div className={styles.container}>
            <h1>Lista de produtos</h1>
            <div>
                Produto: processador I5
                Modelo: 15001
                Marca: Intel
                Preço: 3.000,00
            </div>
            <div>
                Produto: processador I3
                Modelo: 14001
                Marca: Intel
                Preço: 2.500,00
            </div>
            <br />
            <p><Link href={'/'}>Voltar</Link></p>
        </div>
    )
}