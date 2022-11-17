import { ConnectButton } from '@rainbow-me/rainbowkit';
import styles from '../styles/ConnectBttn.module.css';

const ConnectBttn = () => {
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        Connect a wallet
      </div>
      <ConnectButton />
    </div>
  );
};

export default ConnectBttn;
