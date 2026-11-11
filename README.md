# 🎵 SpotifYnov – Plateforme de Streaming Musical (NoSQL)

## 📌 Présentation du Projet
**SpotifYnov** est une plateforme de streaming musical fictive conçue pour démontrer
la puissance d’une architecture **Polyglot Persistence**.
Chaque base de données NoSQL est utilisée selon ses forces afin de garantir
performance, scalabilité et réactivité.

Projet réalisé par **Khadija Ibisk** dans le cadre de l’examen final
de **Bases de Données NoSQL** (Année 2025–2026).

---

## 🏗️ Architecture & Technologies

| Technologie | Rôle | Modèle de données |
|-----------|-----|------------------|
| **MongoDB** | Catalogue musical | Document (JSON/BSON) |
| **Cassandra** | Analytics & historique | Colonnes larges |
| **Neo4j** | Réseau social & recommandations | Graphe |
| **Redis** | Cache, sessions & temps réel | Clé–Valeur |

---

## 🟢 1. MongoDB – Catalogue Musical
Gestion des données structurelles du catalogue musical.

- **Contenu :**
  - Artistes
  - Albums
  - Playlists
- **Fonctionnalités :**
  - Données imbriquées
  - Indexation
  - Agrégations
- **Validation :**
  - Données visibles via MongoDB Compass
  - Requêtes exécutées via `mongosh`

---

## 🟣 2. Cassandra – Analytics & Statistiques
Stockage des événements d’écoute optimisé pour de fortes écritures.

- **Modélisation :**
  - Tables orientées requêtes
  - Clés composites
  - Compteurs (`COUNTER`)
- **Cas d’usage :**
  - Historique d’écoute par utilisateur et par jour
  - Classement des titres les plus écoutés
  - Statistiques par pays

---

## 🔵 3. Neo4j – Graphe Social & Recommandations
Analyse des relations complexes entre utilisateurs et musique.

- **Nœuds :** `User`, `Track`, `Genre`
- **Relations :**
  - `FOLLOWS`
  - `LISTENED_TO`
  - `LIKES`
  - `IN_GENRE`
- **Analyses réalisées :**
  - Recommandations musicales
  - Goûts communs entre utilisateurs
  - Découverte de genres

---

## 🔴 4. Redis – Performance & Temps Réel
Couche temps réel pour améliorer l’expérience utilisateur.

- **Fonctionnalités :**
  - Cache catalogue (Cache-Aside, TTL)
  - Sessions utilisateurs avec expiration
  - Compteurs temps réel
  - Classement des titres (`ZSET`)
- **Implémentation :**
  - Scripts Python
  - Vérification via `redis-cli`

---

## 🚀 Déploiement & Exécution

### Prérequis
- Docker Desktop
- Python 3.x

### Services
Les bases NoSQL sont exécutées via **Docker Desktop**.
Les vérifications sont réalisées à l’aide de :
- `mongosh` / MongoDB Compass
- `cqlsh` (Cassandra)
- Neo4j Browser
- `redis-cli`

---

## ✅ Structure du projet

```
spotifynov-nosql/
├── mongodb/      # schéma, insertions, index, requêtes et agrégations (mongosh)
├── cassandra/    # schéma CQL orienté requêtes, insertions, compteurs, requêtes
├── neo4j/        # schéma, insertions, requêtes Cypher et algorithmes de recommandation
├── redis/        # cache, sessions, compteurs temps réel (Python)
├── screenshots/  # captures d'exécution de chaque base
└── docs/         # rapport de projet et arborescence
```

---

## 👩‍💻 Auteur
Khadija Ibisk
Projet NoSQL – SpotifYnov
Année universitaire 2025–2026
