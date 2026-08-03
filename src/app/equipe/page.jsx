"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

const staffMembers = [
  {
    name: "So",
    image: "/staff/so.png",
    rank: "Owner & Developer",
  },
  {
    name: "Tyx",
    image: "/staff/tyx.png",
    rank: "Owner & Developer",
  },
  {
    name: "SzX",
    image: "/staff/default.png",
    rank: "Owner",
  },

  {
    name: "jifuuu",
    image: "/staff/default.png",
    rank: "Owner",
  },

  {
    name: "Stricker",
    image: "/staff/default.png",
    rank: "Co-Owner",
  },

  {
    name: "ℜσb͢єяτ",
    image: "/staff/default.png",
    rank: "Superviseur",
  },

  {
    name: "arthosure",
    image: "/staff/default.png",
    rank: "Staff Festiny",
  }

];

function Staff() {
  const [search, setSearch] = useState("");
  const filteredStaff = staffMembers.filter((member) =>
    member.name.toLowerCase().includes(search.toLowerCase())  
  );
  return <div className={styles.staffContainer}>
          <div className={styles.staff}>
            <h1 className={styles.title}>
              FESTINY <span className={styles.highlight}>STAFF</span>
            </h1>

            <div className={styles.searchBar}>
                <input type="text" placeholder="Rechercher..." value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>

            <div className={styles.staffContent}>
              {filteredStaff.map((member, i) => (
              <div className={`${styles.staffItem} spawnCard`}  key={i} style={{ animationDelay: `${i * 0.19}s` }}>
                  <div className={styles.staffImage}>
                    <Image src={member.image} alt="staff-item" width={140} height={140} className={styles.image} loading="lazy" />
                  </div>

                  <div className={styles.staffInfo}>
                    <h2 className={styles.staffItemTitle}>{member.name}</h2>
                    <p className={styles.staffItemSubtitle}>{member.rank}</p>
                  </div>
              </div>
              ))} 
            </div>
          </div>
    </div>
}

export default Staff;