"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Dot, ChevronsDown, Users, Mic, Sparkles, Globe } from "lucide-react"
import { useScrollReveal } from "@/components/useScrollReveal";
import scrollTo from "@/components/scrollTo"
const stats = [
  { value: "20+", label: "JOUEURS ACTIFS" },
  { value: "30+", label: "MÉTIERS" },
  { value: "24/7", label: "SERVEUR" },
  { value: "99%", label: "UPTIME" },
];

const features = [
  { icon: Users, title: "Communauté Active", desc: "Rejoignez des milliers de joueurs passionnés par le roleplay." },
  { icon: Mic, title: "Staff Présent", desc: "Une équipe de modération active 24/7 pour une expérience optimale." },
  { icon: Sparkles, title: "Contenu Exclusif", desc: "Des scripts uniques et des fonctionnalités développées sur mesure." },
  { icon: Globe, title: "Immersion Totale", desc: "Un univers riche avec de nombreuses factions et métiers." },
];

function Home() {
    const [statsRef, statsVisible] = useScrollReveal(0.2);
    const [featuresRef, featuresVisible] = useScrollReveal(0.3);
    return <div className={styles.app}>
            <main>
                <section className={styles.hero}>
                <span className={`${styles.hero__badge} hero-tag`}>
                    <Dot size={25} className={styles.hero__badgeIcon} />
                    Serveur RP • Immersion totale • Staff réactif • Économie réaliste
                </span>

                <h1 className={`${styles.hero__title} hero-title`}>
                    Rejoignez l'aventure
                    <span>Festiny Roleplay</span>
                </h1>
                <p className={`${styles.hero__description} hero-subtitle`}>
                    Plongez dans un univers immersif où chaque décision compte. 
                    Rejoignez notre communauté passionnée et vivez une expérience de jeu unique.
                </p>

                <div className={`${styles.headerButtons} headerButtons`}>
                    <a href="https://discord.gg/XhcPUmR92v" className={`${styles.btnPrimary} btnPrimary`}>
                        Rejoindre le Discord
                    </a>
                    <a href="/reglements" className={`${styles.btnSecondary} btnSecondary`}>
                        Lire le réglements
                    </a>
                </div>

                <button className={`${styles.scroll} scroll`} aria-label="Défiler vers le bas" onClick={() => scrollTo("stats")}>
                    <ChevronsDown />
                </button>


                <section className={styles.statsSection} id="stats">
                        <div className={`${styles.statsGrid} reveal ${statsVisible ? "visible" : ""}`} ref={statsRef}>
                            {stats.map((s, i) => (
                                <div className={styles.statItem} key={i}>
                                    <span className={styles.statValue}>{s.value}</span>
                                    <span className={styles.statLabel}>{s.label}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className={styles.featuresSection}>
                        <div className={`${styles.featuresGrid} reveal ${featuresVisible ? "visible" : ""}`} ref={featuresRef}>
                            {features.map((f, i) => {
                                const Icon = f.icon;
                                return (
                                    <div className={styles.featureItem} key={i}>
                                        <div className={styles.featureIcon}>
                                            <Icon size={22} strokeWidth={1.8} />
                                        </div>
                                        <h3 className={styles.featureTitle}>{f.title}</h3>
                                        <p className={styles.featureDesc}>{f.desc}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </section>

                    <section>
                        
                    </section>
                </section>
            </main>
        </div>
}


export default Home;