import styles from "./card.module.css";
export default function Card({image,title}){
  return (
    <div className={styles.card}>
      <img src={image} />
      <p>{title}</p>
    </div>
  )
}