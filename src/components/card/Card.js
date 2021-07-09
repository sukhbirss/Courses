import styles from "./card.module.css";
import { useHistory } from 'react-router-dom';

export default function Card({id,image,title,author,rating,price}){
    const history = useHistory();

  return (
    <div className={styles.card} onClick={() => history.push(`detail/${id}`)}>
      <img src={image} />
      <p>{title}</p>
      <p>Author: {author}</p>
      <p>Rating: {rating}</p>
      <p>{price}</p>
      <button className={styles.btn2}>View Course</button>
    </div>
  )
}