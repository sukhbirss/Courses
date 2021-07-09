import Collapsible from 'react-collapsible';
import styles from "./style.module.css";
export default function Sections({title}){

  return (
    <div className={styles.data}>
           <Collapsible trigger={title}>
                      <p>
                        content of this course's section goes here
                      </p>
                      <p>
                        some more details goes here
                      </p>
          </Collapsible>

    </div>
  )
}