import styles from "./sidebar.module.css";
import { useState } from "react";

const css = { textDecorationLine: "line-through", textDecorationColor: "red" };

export default function Sidebar() {
  const [state, setState] = useState("About");

  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.sidebar} >
        <h1>Lorem Ipsum</h1>
        <p
          onClick={() => setState("About")}
          style={state === "About" ? css : null}
        >
          React
        </p>
        <p
          onClick={() => setState("Service")}
          style={state === "Service" ? css : null}
        >
          Nodejs
        </p>
        <p
          onClick={() => setState("Cuisine")}
          style={state === "Cuisine" ? css : null}
        >
          Python
        </p>
        <p
          onClick={() => setState("Gallary")}
          style={state === "Gallary" ? css : null}
        >
          Setting
        </p>
        <p
          onClick={() => setState("Contact")}
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
