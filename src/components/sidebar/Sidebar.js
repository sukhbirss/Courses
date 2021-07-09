import styles from "./sidebar.module.css";
import { useState } from "react";
import { useHistory } from 'react-router-dom';
const css = { textDecorationLine: "line-through", textDecorationColor: "red" };

export default function Sidebar() {
  const [state, setState] = useState("About");
  const history = useHistory();

  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.sidebar} >
        <h1>Lorem Ipsum</h1>
        <p
          onClick={() => setState("About")}
          onClick={() => history.push('/0')}

          style={state === "About" ? css : null}
        >
          React
        </p>
        <p
          onClick={() => setState("Service")}
          onClick={() => history.push('/1')}

          style={state === "Service" ? css : null}
        >
          Nodejs
        </p>
        <p
          onClick={() => setState("Cuisine")}
          onClick={() => history.push('/2')}

          style={state === "Cuisine" ? css : null}
        >
          Python
        </p>
        <p
          onClick={() => setState("Gallary")}
          onClick={() => history.push('/3')}

          style={state === "Gallary" ? css : null}
        >
          Setting
        </p>
        <p
          onClick={() => setState("Contact")}
          onClick={() => history.push('/4')}

          style={state === "Contact" ? css : null}
        >
          Night Mode
        </p>
        <p onClick={() => setState("Book")} style={state === "Book" ? css : null}>
          Book
        </p>
        <button>cart</button>
      </div>
    </div>
  );
}
