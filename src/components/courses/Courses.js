import styles from "./courses.module.css";
import Card from '../card/Card'
import { useParams } from 'react-router-dom'
import {DATA} from "../../data/data"

export default function Home() {
	const {id} = useParams();

  return (
    <div className={styles.wrapper}>
    	<h1>lets find a course for you</h1>

    	<div className={styles.container}>
    	{
    		DATA[id].map((el)=>{
    			return (
    				<Card image={el.image} id={el.id} title={el.title} author={el.author} rating={el.rating} price={el.price}/>
    				)
    		})
    	}
    	</div>
    </div>
  );
}
