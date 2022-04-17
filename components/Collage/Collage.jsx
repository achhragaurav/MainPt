import React from 'react';
import styles from "../../styles/Collage/Collage.module.css"
const Collage = () => {
  return (
    <section className={styles["collage"]}>
      <div className={styles["collage-container"]}>
          <ul>
              <li>
                  <div className={styles["itemContainer"]}>
                  <img src="https://dennissnellenberg.com/assets/img/home-item-3.jpg" alt="" />
                  </div>
                </li>
              <li> <div className={styles["itemContainer"]}>
                  <img src="https://dennissnellenberg.com/assets/img/home-item-3.jpg" alt="" />
                  </div></li>
              <li> <div className={styles["itemContainer"]}>
                  <img src="https://dennissnellenberg.com/assets/img/home-item-3.jpg" alt="" />
                  </div></li>
                  <li> <div className={styles["itemContainer"]}>
                  <img src="https://dennissnellenberg.com/assets/img/home-item-3.jpg" alt="" />
                  </div></li>
          </ul>
          <ul>
              <li> <div className={styles["itemContainer"]}>
                  <img src="https://dennissnellenberg.com/assets/img/home-item-3.jpg" alt="" />
                  </div></li>
              <li> <div className={styles["itemContainer"]}>
                  <img src="https://dennissnellenberg.com/assets/img/home-item-3.jpg" alt="" />
                  </div></li>
              <li> <div className={styles["itemContainer"]}>
                  <img src="https://dennissnellenberg.com/assets/img/home-item-3.jpg" alt="" />
                  </div></li>
                  <li> <div className={styles["itemContainer"]}>
                  <img src="https://dennissnellenberg.com/assets/img/home-item-3.jpg" alt="" />
                  </div></li>
          </ul>
      </div>
    </section>
  );
}

export default Collage;
