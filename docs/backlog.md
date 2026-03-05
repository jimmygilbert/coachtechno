# Backlog - CoachTechno

> **Cours :** 420-W40-SF - Développement d'applications Web (Cégep de Sainte-Foy)  
> **Travail :** CoachTechno — Site vitrine  
> **Étudiant(e) :** Jimmy Gilbert  
> **Dernière mise à jour :** 2026-03-04


---

## Récits utilisateurs (référence)

| RU# | Catégorie | Titre | Résumé |
| --: | --------- | ----- | ------ |
|   1 | Découverte | Découverte du service | Comprendre ce que l'IA peut apporter à mon entreprise |
|   2 | Découverte | Comprendre les services | Voir clairement les services offerts |
|   3 | Découverte | Comprendre la valeur | Voir des exemples concrets d'utilisation de l'IA |
|   4 | Découverte | Vérifier la crédibilité | Connaître l'expérience de Jimmy Gilbert |
|   5 | Découverte | Comprendre les offres | Voir forfaits, coûts et livrables |
|   6 | Conversion | Demander un service | Contacter Jimmy facilement |
|   7 | Conversion | Réserver un appel | Réserver un appel rapidement |
|   8 | Conversion | Comprendre les résultats | Voir études de cas ou exemples |
|   9 | Contenu | Consommer du contenu | Lire des articles sur l'IA et la productivité |
|  10 | Marketing | Apprendre gratuitement | Recevoir des conseils technologiques |
|  11 | Marketing | Recevoir une infolettre | S'inscrire à une infolettre IA |
|  12 | Marketing | Découvrir une formation | Voir les formations offertes |
|  13 | Conversion | Audit IA | Demander un audit IA pour identifier les automatisations |
|  14 | Conversion | Coaching | Recevoir du coaching technologique |
|  15 | Technique | Navigation | Naviguer facilement sur le site |
|  16 | Technique | Version mobile | Site lisible sur téléphone |
|  17 | Avancé | Formation entreprise | Organiser une formation IA pour son équipe |
|  18 | Avancé | Automatisation | Automatiser certaines tâches |
|  19 | SEO | Recherche Google | Trouver le site via une recherche IA PME |

---

## 1) Règles de backlog (à respecter)

- **Tâches petites** : idéalement 25 à 50 minutes.
- **Titres explicites** : "UI liste produits (tableau)" au lieu de "liste".
- **Critères d'acceptation** : 1 à 3 points simples pour savoir si c'est "done".
- **Ordre logique** : setup → affichage → interactions → validations → export → déploiement → finitions.
- **Suivi** : on bouge les statuts au fur et à mesure (visible).
- **Légende statut :** ⬜ À faire | 🟦 En cours | ✅ Fait | 🟥 Bloqué
- Priorités
	- **MUST** : requis (récits principaux + méthodologie)
	- **SHOULD** : qualité/robustesse (cas limites, petits refactors)
	- **COULD** : bonus / nice-to-have (si tout le reste est stable)

---

## 2) Tableau du backlog

### A — Setup & configuration

|  ID | Priorité | Statut | Titre (tâche) | Relié à (RU#) | Critères d'acceptation (définition de done) | Notes / obstacles |
| --: | :------: | :----: | ------------- | :-----------: | ------------------------------------------- | ----------------- |
|  A1 |   MUST   |   ✅   | Initialiser le projet Astro v5 avec Vue 3 et Tailwind v4 | — | `package.json` valide, `npm install` sans erreur, `astro build` réussit | Créé manuellement car `npm create astro` refusait un dossier non vide |
|  A2 |   MUST   |   ✅   | Configurer TypeScript en mode strict avec l'alias `@/*` | — | `tsconfig.json` avec strict, types `astro/client`, alias fonctionnel | Corrigé erreur `astro/tsconfigs/strict not found` |
|  A3 |   MUST   |   ✅   | Migrer Tailwind vers la v4 avec `@tailwindcss/vite` et `@theme` | — | Plus de `tailwind.config.mjs`, config dans `global.css`, utilitaires fonctionnels | Remplacé `@astrojs/tailwind` incompatible v4 |
|  A4 |   MUST   |   ✅   | Créer le dépôt Git et pousser sur GitHub | — | Remote `origin/main` configuré, `.gitignore` correct | `node_modules` retiré du suivi après premier commit |
|  A5 |  SHOULD  |   ✅   | Configurer Cursor (rules, profil, commandes IA) | — | 4 rules, 4 commandes, profil `default.json` adapté au projet | — |

### B — Layouts & composants structurels

|  ID | Priorité | Statut | Titre (tâche) | Relié à (RU#) | Critères d'acceptation (définition de done) | Notes / obstacles |
| --: | :------: | :----: | ------------- | :-----------: | ------------------------------------------- | ----------------- |
|  B1 |   MUST   |   ✅   | Créer le layout principal avec balises SEO complètes (OG, Twitter) | RU15, RU19 | Props `title`, `description`, `canonical` ; balises OG + Twitter Card | — |
|  B2 |   MUST   |   ✅   | Créer le layout blog pour le rendu des articles Markdown | RU9 | Affiche titre, date, auteur, contenu Markdown | — |
|  B3 |   MUST   |   ✅   | Implémenter le header sticky avec menu mobile hamburger | RU15, RU16 | Navigation responsive, menu hamburger fonctionnel, liens vers toutes les pages | — |
|  B4 |   MUST   |   ✅   | Implémenter le footer avec liens et copyright | RU15 | Liens utiles, copyright, cohérent avec la charte | — |
|  B5 |   MUST   |   ✅   | Définir le design system Tailwind (palette, typo, utilitaires) | RU15, RU16 | Palette `brand`/`accent`, polices Lexend + Inter, classes `.btn-primary`, `.card`, etc. | — |

### C — Pages principales

|  ID | Priorité | Statut | Titre (tâche) | Relié à (RU#) | Critères d'acceptation (définition de done) | Notes / obstacles |
| --: | :------: | :----: | ------------- | :-----------: | ------------------------------------------- | ----------------- |
|  C1 |   MUST   |   ✅   | Construire la page d'accueil avec 6 sections de conversion | RU1, RU3, RU8 | Proposition de valeur, problèmes, services, cas concrets, crédibilité, CTA | — |
|  C2 |   MUST   |   ✅   | Construire la page services avec les 3 offres principales | RU2, RU5 | Audit IA, Formation IA, Implantation IA avec descriptions et prix | — |
|  C3 |   MUST   |   ✅   | Construire la page coaching technologique (forfaits heures) | RU14 | Cible (autonomes, consultants), services, modèle banque d'heures (5h/10h/20h) | — |
|  C4 |   MUST   |   ✅   | Construire la page à propos (parcours et crédibilité) | RU4 | Parcours, expertise, vision, photo/crédibilité | — |
|  C5 |   MUST   |   ✅   | Construire la page contact avec formulaire de demande | RU6 | Formulaire fonctionnel, validation front-end, options de contact | — |
|  C6 |   MUST   |   ✅   | Construire la page blog avec liste des articles | RU9, RU19 | Liste des articles avec titre, date, extrait, lien | — |
|  C7 |   MUST   |   ✅   | Implémenter le routage dynamique des articles (`[...slug]`) | RU9 | Rendu Markdown, SEO par article, navigation retour | — |
|  C8 |   MUST   |   ⬜   | Créer la page dédiée audit IA (livrables, prix, CTA) | RU13 | Description complète, livrables (rapport + plan action), durée (2 sem.), prix, CTA | Mentionnée dans l'architecture mais pas encore créée |
|  C9 |  SHOULD  |   ⬜   | Créer la page dédiée formation IA entreprise (programme, prix) | RU12, RU17 | Contenu (ChatGPT, automatisation, cas concrets), durée (3h/1 jour), prix, CTA | — |
| C10 |  SHOULD  |   ⬜   | Créer la page réserver un appel avec widget de réservation | RU7 | Intégration Calendly ou formulaire de réservation, confirmation visuelle | — |

### D — Composants Vue 3 interactifs

|  ID | Priorité | Statut | Titre (tâche) | Relié à (RU#) | Critères d'acceptation (définition de done) | Notes / obstacles |
| --: | :------: | :----: | ------------- | :-----------: | ------------------------------------------- | ----------------- |
|  D1 |   MUST   |   ✅   | Développer le formulaire de contact Vue avec validation front-end | RU6 | Champs nom, courriel, message ; validation ; feedback utilisateur | — |
|  D2 |   MUST   |   ✅   | Développer l'accordéon FAQ animé pour les services | RU2, RU5 | Questions/réponses en accordéon, animation ouverture/fermeture | — |
|  D3 |   MUST   |   ✅   | Développer le composant CTA réutilisable avec props | RU1, RU7 | Titre, texte, bouton configurable via props | — |
|  D4 |  SHOULD  |   ⬜   | Développer le formulaire d'inscription à l'infolettre | RU11 | Champ courriel, validation, message de confirmation | — |
|  D5 |  COULD   |   ⬜   | Intégrer le widget Calendly pour la réservation d'appels | RU7 | Embed Calendly fonctionnel, responsive | Nécessite un compte Calendly |

### E — Contenu blog (Content Collections)

|  ID | Priorité | Statut | Titre (tâche) | Relié à (RU#) | Critères d'acceptation (définition de done) | Notes / obstacles |
| --: | :------: | :----: | ------------- | :-----------: | ------------------------------------------- | ----------------- |
|  E1 |   MUST   |   ✅   | Configurer la Content Collection blog avec schéma Zod | RU9 | `config.ts` valide, frontmatter typé (titre, date, description, auteur) | — |
|  E2 |   MUST   |   ✅   | Rédiger l'article « Comment utiliser ChatGPT dans une PME » | RU9, RU19 | Contenu SEO, frontmatter valide, rendu correct | — |
|  E3 |   MUST   |   ✅   | Rédiger l'article « 10 automatisations IA pour entrepreneurs » | RU9, RU19 | Contenu SEO, frontmatter valide, rendu correct | — |
|  E4 |   MUST   |   ✅   | Rédiger l'article « Gagner 10 heures par semaine avec l'IA » | RU9, RU19 | Contenu SEO, frontmatter valide, rendu correct | — |
|  E5 |  SHOULD  |   ⬜   | Rédiger l'article « Automatiser son entreprise sans programmer » | RU9, RU18, RU19 | Contenu SEO, mots-clés ciblés, ~800 mots | Recommandé dans l'architecture |
|  E6 |  SHOULD  |   ⬜   | Rédiger l'article « Outils IA indispensables pour PME » | RU9, RU10, RU19 | Contenu SEO, mots-clés ciblés, ~800 mots | Recommandé dans l'architecture |

### F — SEO & performance

|  ID | Priorité | Statut | Titre (tâche) | Relié à (RU#) | Critères d'acceptation (définition de done) | Notes / obstacles |
| --: | :------: | :----: | ------------- | :-----------: | ------------------------------------------- | ----------------- |
|  F1 |   MUST   |   ✅   | Ajouter les balises meta SEO (OG, Twitter Card) au layout | RU19 | Chaque page a title, description, og:image, twitter:card | — |
|  F2 |   MUST   |   ⬜   | Installer et configurer `@astrojs/sitemap` pour le sitemap XML | RU19 | Sitemap généré au build, toutes les pages listées | — |
|  F3 |  SHOULD  |   ⬜   | Ajouter un fichier `robots.txt` avec lien vers le sitemap | RU19 | Fichier `public/robots.txt` avec référence au sitemap | — |
|  F4 |  SHOULD  |   ⬜   | Ajouter les données structurées Schema.org (LocalBusiness) | RU19 | JSON-LD dans le `<head>`, validé avec Google Rich Results Test | — |
|  F5 |  SHOULD  |   ⬜   | Optimiser les images (convertir en WebP, activer lazy loading) | RU16 | Images optimisées, `loading="lazy"`, formats modernes | — |

### G — Responsive & accessibilité

|  ID | Priorité | Statut | Titre (tâche) | Relié à (RU#) | Critères d'acceptation (définition de done) | Notes / obstacles |
| --: | :------: | :----: | ------------- | :-----------: | ------------------------------------------- | ----------------- |
|  G1 |   MUST   |   ⬜   | Tester le responsive sur mobile, tablette et desktop | RU16 | Toutes les pages lisibles sur 375px, 768px, 1024px | — |
|  G2 |  SHOULD  |   ⬜   | Valider l'accessibilité (contraste, attributs alt, aria) | RU15, RU16 | Score Lighthouse accessibilité ≥ 90, images avec `alt` | — |

### H — Déploiement

|  ID | Priorité | Statut | Titre (tâche) | Relié à (RU#) | Critères d'acceptation (définition de done) | Notes / obstacles |
| --: | :------: | :----: | ------------- | :-----------: | ------------------------------------------- | ----------------- |
|  H1 |   MUST   |   ⬜   | Déployer le site en production sur Netlify ou Vercel | — | `astro build` sans erreur, site accessible en ligne, HTTPS | — |
|  H2 |  SHOULD  |   ⬜   | Configurer le domaine personnalisé coachtechno.com | — | DNS configuré, certificat SSL actif | — |

### I — Finitions & documentation

|  ID | Priorité | Statut | Titre (tâche) | Relié à (RU#) | Critères d'acceptation (définition de done) | Notes / obstacles |
| --: | :------: | :----: | ------------- | :-----------: | ------------------------------------------- | ----------------- |
|  I1 |   MUST   |   ✅   | Rédiger le README.md complet (7 sections) | — | Description, fonctionnalités, technologies, installation, déploiement, architecture, IA | — |
|  I2 |   MUST   |   ⬜   | Compléter le journal de bord pour toutes les séances | — | 8–10 lignes par séance, difficultés et solutions documentées | — |
|  I3 |  SHOULD  |   ⬜   | Effectuer un commit final propre et ajouter un tag v1.0.0 | — | Historique Git lisible, tag `v1.0.0` | — |
