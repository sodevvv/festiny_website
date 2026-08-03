"use client";
import { useRef } from "react";
import styles from "./page.module.css";

const sections = [
  {
    id: "principes",
    title: "Principes Fondamentaux",
    content: (
      <>
        <p>
          Festiny RP est un serveur Roleplay sérieux. Chaque joueur doit
          incarner un personnage crédible et contribuer à un environnement
          réaliste et immersif.
        </p>
        <div className={`${styles.ruleBlock} ${styles.ruleBlockBlue}`}>
          <h3>OBLIGATIONS</h3>
          <ul>
            <li>Respect envers tous les joueurs et membres du staff</li>
            <li>Comportement mature et responsable</li>
            <li>Recherche constante de cohérence et de qualité RP</li>
            <li>
              Un micro fonctionnel et une communication vocale claire sont
              obligatoires
            </li>
          </ul>
        </div>
        <div className={`${styles.ruleBlock} ${styles.ruleBlockRed}`}>
          <h3>INTERDICTIONS STRICTES</h3>
          <ul>
            <li>Insultes, provocations excessives ou harcèlement</li>
            <li>
              Racisme, sexisme, homophobie ou toute forme de discrimination
            </li>
            <li>Menaces ou références à la vie réelle (IRL)</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: "lexique",
    title: "Lexique Roleplay",
    content: (
      <>
        <p>
          Afin de garantir une bonne compréhension entre tous les joueurs,
          voici les termes essentiels utilisés sur le serveur.
        </p>
        <div className={`${styles.ruleBlock} ${styles.ruleBlockBlue}`}>
          <h3>TERMES COURANTS</h3>
          <ul>
            <li>
              <strong>RP (Roleplay)</strong> — Interpréter un personnage dans un univers fictif
            </li>
            <li>
              <strong>HRP (Hors RP)</strong> — Hors Roleplay (éléments liés au joueur ou à la vie réelle)
            </li>
            <li>
              <strong>IC (In Character)</strong> — In Character (en personnage)
            </li>
            <li>
              <strong>OOC (Out Of Character)</strong> — Out Of Character (hors personnage)
            </li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: "sanctions",
    title: "Sanctions",
    content: (
      <>
        <p>
          Le non-respect des règles entraîne des sanctions proportionnelles à
          la faute commise.
        </p>

        <div className={`${styles.ruleBlock} ${styles.ruleBlockBlue}`}>
          <h3>ÉCHELLE DES SANCTIONS</h3>
          <ul>
            <li>Avertissement verbal (warn)</li>
            <li>Kick du serveur</li>
            <li>Ban temporaire (24h à 7 jours)</li>
            <li>Ban permanent</li>
          </ul>
        </div>

        <div className={`${styles.ruleBlock} ${styles.ruleBlockRed}`}>
          <h3>BAN PERMANENT IMMÉDIAT</h3>
          <ul>
            <li>Utilisation de cheats / hacks</li>
            <li>Discrimination, propos haineux graves</li>
            <li>Menaces réelles envers un joueur ou membre du staff</li>
          </ul>
        </div>

        <div className={`${styles.ruleBlock} ${styles.ruleBlockRed}`}>
          <h3>SANCTIONS PAR INFRACTION RP</h3>
          <ul>
            <li>FailRP — Warn → Kick en cas de récidive</li>
            <li>Powergaming (PG) — Warn → Ban 24h si abus répété</li>
            <li>Force RP — Warn → Ban 24h à 48h</li>
            <li>Metagaming (MG) — Ban 24h → 3 jours selon gravité</li>
            <li>No Fear — Warn → Kick → Ban 24h si répété</li>
            <li>No Value Life (NVL) — Ban 24h → 3 jours</li>
            <li>Combat Logging — Ban 24h → 7 jours si répété</li>
            <li>RDM — Ban 24h → 7 jours selon contexte</li>
            <li>VDM — Ban 24h → 7 jours selon intention</li>
          </ul>
        </div>
      </>
    ),
  },

  {
    id: "dead",
    title: "NEW LIFE RULE (NLR)",
    content: (
      <>
        <p>
          Les joueurs doivent être présents pendant la mort RP. Ils doivent être conscients de la mort et de la fin de l'histoire.
        </p>

        <div className={`${styles.ruleBlock} ${styles.ruleBlockBlue}`}>
          <h3>Après une mort RP :</h3>
          <ul>
            <li>Votre personnage oublie les événements liés à sa mort</li>
            <li>Il est interdit de retourner sur la zone pendant 30 minutes ou tant que la scène n'est pas terminée</li>
          </ul>
        </div>
      </>
    ),
  },

  {
    id: "general",
    title: "Règles Générales",
    content: (
      <>
        <div className={`${styles.ruleBlock} ${styles.ruleBlockBlue}`}>
          <h3>RÈGLES GENERALES</h3>
          <ul>
            <li>Rester en permanence dans son rôle</li>
            <li>L'utilisation du langage HRP ou du langage SMS en scène RP est interdite</li>
            <li>Le troll ou le RP absurde est interdit</li>
            <li>Ne pas perturber une scène sans y être impliqué</li>
            <li>L'utilisation de glitchs ou exploits est interdite</li>
            <li>L'utilisation de cheats ou logiciels externes entraîne un bannissement définitif</li>
          </ul>
        </div>
      </>
    ),
  },

  {
    id: "name",
    title: "Nom du personnage",
    content: (
      <>
        <p>
          Les noms irréalistes, trolls ou faisant référence à des célébrités ou personnages fictifs sont interdits
        </p>
      </>
    ),
  },

  {
    id: "compte",
    title: "Compte",
    content: (
      <>
        <div className={`${styles.ruleBlock} ${styles.ruleBlockBlue}`}>
          <ul>
            <li>Le double compte est interdit sans autorisation du staff</li>
            <li>Il est interdit de posséder des personnages dans des factions ou organisations opposées</li>
          </ul>
        </div>
      </>
    ),
  },

  {
    id: "stream",
    title: "Streaming",
    content: (
      <>
        <div className={`${styles.ruleBlock} ${styles.ruleBlockBlue}`}>
          <ul>
            <li>Le streaming est autorisé</li>
            <li>L'utilisation d'informations issues d'un stream est considérée comme du metagaming</li>
          </ul>
        </div>
      </>
    ),
  },

  {
    id: "activity_illegal",
    title: "Activités illégales",
    content: (
      <>
        <p>
          Les activités illégales sont autorisées dans un cadre RP cohérent et
          encadré. Toute activité criminelle doit rester scénarisée.
        </p>

        <div className={`${styles.ruleBlock} ${styles.ruleBlockBlue}`}>
          <h3>AUTORISÉ AVEC CONDITIONS</h3>
          <ul>
            <li>Braquages de commerces avec scénario RP construit</li>
            <li>Trafics encadrés par un syndicat criminel validé</li>
            <li>Prises d'otage avec un ratio otage/policier respecté</li>
            <li>Braquages (max 4 participants, min 2 policiers en service)</li>
            <li>Kidnapping / prise d'otage avec interaction RP préalable</li>
            <li>Fusillades avec motif RP clair et cohérent</li>
            <li>Vol de véhicule uniquement avec interaction RP</li>
          </ul>
        </div>

        <div className={`${styles.ruleBlock} ${styles.ruleBlockRed}`}>
          <h3>SAFE ZONES</h3>

          <p>Toute action violente ou criminelle est interdite dans les zones suivantes :</p>
          <ul>
            <li>Hôpital</li>
            <li>Spawn</li>
            <li>Mairie</li>
            <li>Zones administratives</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: "services_publics",
    title: "Services Publics",
    content: (
      <>
        <p>
          Les services publics doivent respecter un cadre RP strict et professionnel.
          Tout abus peut entraîner une suspension ou un retrait du poste.
        </p>

        <div className={`${styles.ruleBlock} ${styles.ruleBlockBlue}`}>
          <h3>POLICE / GOUVERNEMENT</h3>
          <ul>
            <li>Comportement professionnel obligatoire</li>
            <li>Abus de pouvoir interdit</li>
            <li>Toute corruption doit être validée par le staff</li>
            <li>Les véhicules de service ne peuvent pas être utilisés à des fins personnelles</li>
          </ul>
        </div>

        <div className={`${styles.ruleBlock} ${styles.ruleBlockBlue}`}>
          <h3>EMS</h3>
          <ul>
            <li>Neutralité obligatoire</li>
            <li>Refus de soins interdit sans justification RP</li>
          </ul>
        </div>

        <div className={`${styles.ruleBlock} ${styles.ruleBlockBlue}`}>
          <h3>JUSTICE</h3>
          <ul>
            <li>Respect des procédures</li>
            <li>Corruption RP uniquement avec accord du staff</li>
          </ul>
        </div>
      </>
    ),
  },

  {
    id: "administration",
    title: "Administration",
    content: (
      <>
        <div className={`${styles.ruleBlock} ${styles.ruleBlockBlue}`}>
          <h3>RÈGLES ADMINISTRATIVES</h3>
          <ul>
            <li>Les décisions du staff doivent être respectées</li>
            <li>Toute contestation doit être effectuée via ticket Discord</li>
            <li>Aucune contestation en jeu ou pendant une scène RP</li>
            <li>Le staff se réserve le droit d'intervenir à tout moment pour maintenir la qualité du RP</li>
            <li>L'administration peut adapter les sanctions selon la gravité et les antécédents</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: "sanctions_categories",
    title: "Sanctions par Catégories",
    content: (
      <>
        <p>
          Les sanctions sont appliquées selon la gravité de l'infraction et la
          récidive éventuelle. Certaines fautes entraînent un bannissement
          immédiat.
        </p>

        <div className={`${styles.ruleBlock} ${styles.ruleBlockRed}`}>
          <h3>CATÉGORIE 1 – TOLÉRANCE ZÉRO</h3>
          <ul>
            <li>Cheat / logiciel interdit</li>
            <li>Exploit majeur</li>
            <li>Menaces IRL</li>
            <li>Propos discriminatoires graves</li>
          </ul>
          <p><strong>Sanction :</strong> Bannissement définitif</p>
        </div>

        <div className={`${styles.ruleBlock} ${styles.ruleBlockOrange}`}>
          <h3>CATÉGORIE 2 – INFRACTIONS GRAVES</h3>
          <ul>
            <li>Abus de bug ou glitch</li>
            <li>Harcèlement ou insultes graves</li>
            <li>RDM ou comportement toxique répété</li>
          </ul>
          <p><strong>1ère fois :</strong> 3 à 7 jours</p>
          <p><strong>2ème fois :</strong> 14 jours</p>
          <p><strong>3ème fois :</strong> Bannissement définitif</p>
        </div>

        <div className={`${styles.ruleBlock} ${styles.ruleBlockBlue}`}>
          <h3>CATÉGORIE 3 – INFRACTIONS RP MAJEURES</h3>
          <ul>
            <li>Combat Logging</li>
            <li>Metagaming</li>
            <li>Powergaming / Force RP</li>
            <li>No Fear / NVL</li>
            <li>Fusillade sans motif</li>
            <li>Non-respect des Safe Zones</li>
          </ul>
          <p><strong>1ère fois :</strong> Avertissement</p>
          <p><strong>2ème fois :</strong> 24 à 72 heures</p>
          <p><strong>3ème fois :</strong> 7 jours</p>
        </div>

        <div className={`${styles.ruleBlock} ${styles.ruleBlockGreen}`}>
          <h3>CATÉGORIE 4 – INFRACTIONS MINEURES</h3>
          <ul>
            <li>HRP abusif</li>
            <li>RP légèrement incohérent</li>
            <li>Troll léger</li>
            <li>Absence de micro fonctionnel</li>
          </ul>
          <p><strong>1ère fois :</strong> Avertissement</p>
          <p><strong>2ème fois :</strong> Kick ou Mute</p>
          <p><strong>3ème fois :</strong> 24 heures</p>
        </div>
      </>
    ),
  },

  {
    id: "ped_fun",
    title: "PED Fun",
    content: (
      <>
        <p>
          Les PED fun sont uniquement destinés au divertissement et à l'ambiance. Ils ne doivent en aucun cas perturber ou impacter le roleplay des autres joueurs.
        </p>

        <div className={`${styles.ruleBlock} ${styles.ruleBlockRed}`}>
          <h3>IL EST STRICTEMENT INTERDIT DE :</h3>
          <ul>
            <li>Faire de grosses scènes avec un PED fun (braquage, prise d'otage, kidnapping, attaque organisée, etc.)</li>
            <li>Créer des scènes pouvant impacter le roleplay des autres joueurs</li>
            <li>Perturber une scène RP en cours</li>
            <li>Interférer avec les forces de l'ordre ou les services d'urgence</li>
            <li>Créer des situations sérieuses ou à enjeux</li>
          </ul>
        </div>

        <div className={`${styles.ruleBlock} ${styles.ruleBlockGreen}`}>
          <h3>AUTORISÉ</h3>
          <p>Utiliser les PED fun uniquement pour :</p>
          <ul>
            <li>Des scènes légères et humoristiques</li>
            <li>De l'ambiance</li>
            <li>Du roleplay secondaire sans conséquence sur les autres joueurs</li>
          </ul>
        </div>
      </>
    ),
  },

  {
    id: "dispositions",
    title: "Dispositions Finales",
    content: (
      <>
        <p>
          Ces règles sont susceptibles d'évoluer. Chaque joueur est responsable de se tenir informé des mises à jour.
        </p>

        <div className={`${styles.ruleBlock} ${styles.ruleBlockBlue}`}>
          <h3>ENGAGEMENT DU JOUEUR</h3>
          <ul>
            <li>
              Chaque joueur est responsable de ses actions, même en groupe
            </li>
            <li>
              Le règlement peut être modifié à tout moment
            </li>
            <li>Les mises à jour seront communiquées sur le Discord officiel</li>
          </ul>
        </div>
      </>
    ),
  },
];

function rules() {
  const sectionRefs = useRef({});
  const contentRef = useRef(null);
  return <div className={`${styles.rulesLayout} rulesLayout`}>
      <aside className={styles.rulesSidebar}>
        <p className={styles.sidebarTitle}>Réglements Festiny Roleplay</p>
        <div className={styles.sidebarNav}>
          {sections.map((s) => (
            <button key={s.id} className={styles.sidebarLink} onClick={() => sectionRefs.current[s.id].scrollIntoView({ behavior: "smooth", block: "start", }) }>
              {s.title}
            </button>
          ))}
        </div>
      </aside>

      <main className={styles.rulesContent} ref={contentRef}>
        {sections.map((s) => (
          <section key={s.id} id={s.id} ref={(el) => (sectionRefs.current[s.id] = el)} className={styles.rulesSection}>
            <h2 className={styles.sectionTitle}>{s.title}</h2>
            <div className={styles.sectionBody}>{s.content}</div>
          </section>
        ))}
      </main>
    </div>
}

export default rules;