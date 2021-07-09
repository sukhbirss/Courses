import styles from "./card.module.css";
export default function Card({image,title,author,rating,price}){
  return (
    <div className={styles.card}>
      <img src={image} />
      <p>{title}</p>
      <p>{author}</p>
      <p>{rating}</p>
      <p>{price}</p>
      <p>Bestseller</p>

    </div>
  )
}