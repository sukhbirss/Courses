import styles from "./courses.module.css";
import Card from '../card/Card'

const DATA = [	
				{image:"https://img-c.udemycdn.com/course/240x135/1362070_b9a1_2.jpg",title:"React - The Complete Guide (incl Hooks, React Router, Redux)",author:"sukhbir",rating:"",price:""},
				{image:"https://img-c.udemycdn.com/course/240x135/2121018_9de5_5.jpg",title:"Redux",author:"",rating:"",price:""},
				{image:"https://img-c.udemycdn.com/course/240x135/2121018_9de5_5.jpg",title:"React - The Complete Guide (incl Hooks, React Router, Redux",author:"sukhbir",rating:"",price:""},
				{image:"https://img-c.udemycdn.com/course/240x135/705264_caa9_11.jpg",title:"Redux",author:"sukhbir",rating:"",price:""},
				{image:"https://img-c.udemycdn.com/course/240x135/959700_8bd2_11.jpg",title:"Redux",author:"sukhbir",rating:"",price:""},
				{image:"https://img-c.udemycdn.com/course/240x135/1362070_b9a1_2.jpg",title:"React - The Complete Guide (incl Hooks, React Router, Redux",author:"sukhbir",rating:"",price:""},
				{image:"https://img-c.udemycdn.com/course/240x135/1362070_b9a1_2.jpg",title:"Redux",author:"sukhbir",rating:"",price:""},
				{image:"https://img-c.udemycdn.com/course/240x135/1362070_b9a1_2.jpg",title:"React - The Complete Guide (incl Hooks, React Router, Redux",author:"sukhbir",rating:"",price:""}
			]
export default function Home() {
  return (
    <div className={styles.wrapper}>
    	<div className={styles.container}>
    	{
    		DATA.map((el)=>{
    			return (
    				<Card image={el.image} title={el.title}/>
    				)
    		})
    	}
    	</div>
    </div>
  );
}
