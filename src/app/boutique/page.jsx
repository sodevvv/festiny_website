"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

const boutique = [
  { title: "500 coins",  subtitle: "10$", image: "/coin.png" , link: "https://google.com" },
  { title: "1000 coins", subtitle: "20$", image: "/coin.png" , link: "https://google.com" },
  { title: "1500 coins", subtitle: "30$", image: "/coin.png" , link: "https://google.com" },
  { title: "2000 coins", subtitle: "40$", image: "/coin.png" , link: "https://google.com" },
  { title: "2500 coins", subtitle: "50$", image: "/coin.png" , link: "https://google.com" },
  { title: "3000 coins", subtitle: "60$", image: "/coin.png" , link: "https://google.com" },
  { title: "3500 coins", subtitle: "70$", image: "/coin.png" , link: "https://google.com" },
  { title: "4000 coins", subtitle: "80$", image: "/coin.png" , link: "https://google.com" },
  { title: "4500 coins", subtitle: "90$", image: "/coin.png" , link: "https://google.com" },
  { title: "5000 coins", subtitle: "100$", image: "/coin.png" , link: "https://google.com" },
  { title: "5500 coins", subtitle: "110$", image: "/coin.png", link: "https://google.com" },
  { title: "6000 coins", subtitle: "120$", image: "/coin.png", link: "https://google.com" },
];

function Boutique() {
  const [search, setSearch] = useState("");

  const filteredItems = boutique.filter((item) => {
    return item.title.toLowerCase().includes(search.toLowerCase());
  });
  return <div className={styles.boutiqueContainer}>
      <div className={styles.boutique}>
        <h1 className={styles.title}>
          FESTINY <span className={styles.highlight}>BOUTIQUE</span>
        </h1>

        <div className={styles.searchBar}>
            <input type="text" placeholder="Rechercher..." value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>

        <div className={styles.boutiqueContent}>
          {filteredItems.map((item, i) => (
          <div className={`${styles.boutiqueItem} spawnCard`}  key={i} style={{ animationDelay: `${i * 0.19}s` }}>
              <div className={styles.boutiqueImage}>
                <Image src={item.image} alt="boutique-item" width={140} height={140} className={styles.image} loading="lazy" />
              </div>

              <div className={styles.boutiqueInfo}>
                <h2 className={styles.boutiqueItemTitle}>{item.title}</h2>
                <p className={styles.boutiqueItemSubtitle}>{item.subtitle}</p>
              </div>

                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <button className={styles.boutiqueBtn}>Acheter</button>
                </a>
              </div>
          ))}
        </div>
      </div>
    </div>
}

export default Boutique;