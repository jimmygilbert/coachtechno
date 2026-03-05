# Journal - CoachTechno

> **Projet :** CoachTechno — Site vitrine (Astro v5 + Vue 3 + Tailwind v4)  
> **Étudiant(e) :** Jimmy Gilbert  
> **Période :** 2026-03-04

---

## Consignes
Pour **chaque séance**, écrire **8 à 10 lignes** (minimum) qui incluent :
- ce que j'ai fait (concret, vérifiable)
- les difficultés / erreurs rencontrées
- comment j'ai résolu (ou tenté de résoudre)

> **IMPORTANT** : écrire en fin de séance pendant que c'est frais.

---

## Séance 1 — 2026-03-04 (Durée : ~6h)
**Objectif de la séance :**  
Mettre en place la configuration Cursor, initialiser le dépôt Git, construire la totalité du site Astro (structure, pages, composants, blog) et corriger les erreurs de configuration TypeScript et Tailwind CSS v4.

**Travail réalisé (8–10 lignes min)**  
- Exploré la structure du projet pour identifier le stack : Astro v5, Vue 3, Tailwind CSS v4, TypeScript strict. Constaté que le profil Cursor et la rule existante (`bootstrap-ui.mdc`) provenaient d'un autre projet et ne correspondaient pas.
- Créé 4 rules Cursor ciblées : `project-context.mdc` (alwaysApply), `astro-patterns.mdc`, `vue-patterns.mdc`, `tailwind-v4.mdc`. Mis à jour `default.json` (modèle `auto`, systemPrompt réécrit pour CoachTechno).
- Créé les commandes IA `/new-page`, `/new-blog-post`, `/new-vue-component`, `/seo-audit`, `/geo-audit`, `/a11y-audit` et `/security-audit`.
- Créé le dépôt GitHub `coachtechno`, effectué le premier commit (`README.md`, commit `4d47fb5`), puis initialisé la structure complète Astro v5 + Vue 3 + Tailwind v4 (commit `abbb61d`).
- Créé tous les fichiers de configuration manuellement (`package.json`, `astro.config.mjs`, `tsconfig.json`) car `npm create astro` refusait de s'exécuter dans un dossier non vide.
- Créé le design system Tailwind : palette `brand`/`accent`, typographie Lexend + Inter, classes utilitaires `.btn-primary`, `.btn-secondary`, `.card`, `.container-site`, `.section-pad`.
- Créé `MainLayout.astro` (SEO complet : canonical, OpenGraph, Twitter Card), `BlogPostLayout.astro`, `Header.astro` (navigation sticky, menu mobile) et `Footer.astro`.
- Implémenté les 7 pages du site : `index.astro` (6 sections de conversion), `services.astro`, `coaching-technologique.astro`, `a-propos.astro`, `contact.astro`, `blog/index.astro`, `blog/[...slug].astro`.
- Configuré la Content Collection `blog` (schéma Zod dans `config.ts`) et rédigé 3 articles SEO de démarrage.
- Créé 3 composants Vue 3 interactifs (`script setup lang="ts"`) : `ContactForm.vue`, `ServiceFAQ.vue`, `CtaBanner.vue`.
- Migré de `@astrojs/tailwind` vers `@tailwindcss/vite` et déplacé toute la configuration Tailwind dans `global.css` via `@theme`.
- Corrigé l'erreur TypeScript `File 'astro/tsconfigs/strict' not found` et l'erreur CSS `Cannot apply unknown utility class font-heading`. Lancé `astro build` avec succès : 9 pages générées sans erreur.
- Mis à jour `.gitignore`, réécrit `README.md` (7 sections) et ajouté `.cursorignore`.
- Rédigé le backlog complet : 19 récits utilisateurs (RU1–RU19) et 37 tâches réparties en 9 sections, basé sur les documents `recits_utilisateurs.md`, `architecture.md` et `plan_developpement.md`.
- Consolidé le journal de bord (4 séances fusionnées en une seule séance cohérente).
- Refactorisé les 3 composants Vue 3 pour respecter la rule `vue-patterns.mdc` : ordre `<script>` → `<template>` → `<style scoped>`, interfaces TypeScript nommées (`FormData`, `FormErrors`, `FaqItem`, `Props`), pattern try/catch/finally pour les appels async dans `ContactForm.vue`.
- Migré le site vers un thème sombre permanent : redéfini la palette `brand` (bleu → or/ambre #eab308), `accent` (orange → cyan #22d3ee), créé l'échelle `surface` (950–500) pour les fonds charcoal.
- Ajouté `color-scheme: dark` sur `html`, changé le body de `bg-white text-gray-800` à `bg-surface-800 text-gray-100`, mis à jour toutes les classes utilitaires (`.btn-primary`, `.btn-secondary`, `.card`, `.section-title`).
- Migré les 13 fichiers du site vers le dark theme : `Header.astro`, `Footer.astro`, 6 pages, `BlogPostLayout.astro`, et les 3 composants Vue (`ServiceFAQ.vue`, `CtaBanner.vue`, `ContactForm.vue`).
- Réalisé un audit SEO complet sur les 7 pages du site. Identifié 6 problèmes critiques (absence totale de données structurées JSON-LD) et 8 problèmes mineurs (H1 trop génériques, meta descriptions courtes, liens internes insuffisants).
- Ajouté le support JSON-LD dans `MainLayout.astro` via une prop `schema` optionnelle qui injecte un `<script type="application/ld+json">` dans le `<head>`.
- Ajouté les données structurées sur chaque page : `ProfessionalService` (accueil), `ItemList` de 3 `Service` (services), `Service` (coaching), `Person` (à propos), `LocalBusiness` (contact), `Article` dynamique (articles de blog).
- Amélioré les H1 pour inclure les mots-clés SEO : « Services IA et automatisation », « Jimmy Gilbert, consultant IA », « Contactez-moi pour une consultation IA gratuite », « Blog — IA et automatisation pour PME ».
- Allongé les meta descriptions de `services`, `a-propos` et `contact` pour atteindre la cible de 150-160 caractères.
- Ajouté des liens internes croisés dans les sections CTA de `services`, `coaching-technologique`, `a-propos` et `contact` pour améliorer le maillage interne.
- Uniformisé les couleurs des hyperliens et éléments typographiques à l'échelle du site : liens jaune `#FACC15` par défaut → bleu `#22D3EE` au hover, gras et emphase en bleu `#22D3EE`, définis via `@layer base` dans `global.css`.
- Ajouté la variable `--color-jaune: #facc15` dans `@theme` pour conserver le jaune d'origine sans conflits avec la couleur native `yellow` de Tailwind v4.
- Mis à jour `.btn-secondary` : bordure et texte jaune par défaut, bleu au hover (`hover:border-accent-400 hover:text-accent-400`).
- Ajouté `border-b border-white/50` sur le `<header>` pour séparer visuellement l'en-tête du contenu.
- Retiré les classes de couleur explicites (`text-brand-400 hover:text-brand-300`) sur les liens inline des pages `a-propos`, `contact`, `services` et `coaching-technologique` pour qu'ils héritent du style global.

**Difficultés / bugs**  
- `node_modules` inclus dans le premier commit par erreur ; confusion entre le dépôt racine (branche `2025-12-15-z8ih-2a12a`) et le sous-dépôt `project/` (branche `main`).
- `npm create astro` refusait de s'initialiser dans un dossier non vide, affichant une invite interactive impossible à automatiser.
- Erreur au démarrage Astro : `@astrojs/tailwind` incompatible avec Tailwind v4.
- Erreur CSS `Cannot apply unknown utility class font-heading` due à la nouvelle convention de nommage des variables Tailwind v4.
- Erreur TypeScript `File 'astro/tsconfigs/strict' not found` car le serveur de langage ne résolvait pas `node_modules/astro` à l'indexation.

**Solutions / pistes testées**  
- Suppression de `node_modules` du suivi Git via un commit dédié ; confirmation que le bon dépôt est `project/` sur `main`.
- Création manuelle de tous les fichiers de configuration, contournant le wizard interactif d'Astro.
- Remplacement de `@astrojs/tailwind` par `@tailwindcss/vite` et migration de la config dans `global.css`.
- Correction `--font-family-heading` → `--font-heading` pour respecter la convention Tailwind v4.
- Ajout de `"types": ["astro/client"]` et `"include"` explicite dans `tsconfig.json`.
- Inventaire exhaustif de toutes les classes de couleur Tailwind dans chaque fichier avant de commencer la migration dark theme.

---

## Séance 2 — _AAAA-MM-JJ_ (Durée : _XhYm_)
**Objectif de la séance :**  
…

**Travail réalisé (8–10 lignes min)**  
- …
- …
- …
- …
- …
- …
- …
- …
- …

**Difficultés / bugs**  
- …

**Solutions / pistes testées**  
- …


---

## Résumé global (à compléter avant remise)
- **Ce dont je suis le plus fier/fière :** …
- **Ce que j'améliorerais avec plus de temps :** …
- **3 apprentissages techniques :**  
  1) …  
  2) …  
  3) …

---
