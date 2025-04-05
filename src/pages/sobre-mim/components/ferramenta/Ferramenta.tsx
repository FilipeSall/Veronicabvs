import { FerramentaInterface } from '../../../../interfaces/components';
import styles from './ferramenta.module.scss';

function Ferramenta({ icon, alt }: FerramentaInterface) {
  return (
    <img 
      src={icon}
      alt={alt}
      className={`${styles.ferramenta}`}
    />
  )
}

export default Ferramenta;