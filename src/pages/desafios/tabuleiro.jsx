import Casas from "../../../components/Casas.jsx";
import styles from "./tabuleiro.module.css"; // Importar o CSS Module

export default function tabuleiro() {
  const renderCasas = () => {
    const casas = [];
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        const isBlack = (i + j) % 2 === 1;
        casas.push(
          <Casas key={`${i}-${j}`} isBlack={isBlack} prefix={styles} />
        );
      }
    }
    return casas;
  };

  return (
    <div className={styles.container}>
      <div className={styles.tabuleiro}>{renderCasas()}</div>
    </div>
  );
}
