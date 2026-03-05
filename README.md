# README — CoachTechno

> **Projet :** Site vitrine et blog — CoachTechno  
> **Auteur :** Jimmy Gilbert  
> **Repo GitHub :** https://github.com/jimmygilbert/coachtechno  
> **Site :** https://coachtechno.com

---

## 1) Description du projet

- **Contexte :** Site professionnel pour CoachTechno, un service de consultation en intelligence artificielle pour les PME et professionnels du Québec.
- **Objectif principal :** Présenter les services offerts (audit IA, formation, implantation), publier des articles de blog, et permettre aux visiteurs de prendre contact.
- **Public cible :** Entrepreneurs, gestionnaires de PME et professionnels qui souhaitent intégrer l'IA dans leur travail quotidien.

---

## 2) Fonctionnalités

- [x] Page d'accueil avec proposition de valeur, services et appel à l'action
- [x] Page Services avec détail des offres (audit, formation, implantation)
- [x] Page Coaching technologique
- [x] Page À propos
- [x] Page Contact avec formulaire interactif (Vue 3)
- [x] Blog avec liste d'articles et pages dynamiques (Markdown/MDX)
- [x] Bannière CTA interactive (Vue 3)
- [x] FAQ accordéon sur la page services (Vue 3)
- [x] SEO : balises meta, Open Graph, Twitter Card, URL canonique

---

## 3) Technologies utilisées

- [Astro](https://astro.build/) v5 — framework web statique
- [Tailwind CSS](https://tailwindcss.com/) v4 — styles utilitaires (via `@tailwindcss/vite`)
- [Vue 3](https://vuejs.org/) — composants interactifs (formulaire, FAQ, CTA)
- TypeScript — typage statique
- `@tailwindcss/typography` — styles pour le contenu Markdown

---

## 4) Installation et démarrage

### Prérequis

- Node.js LTS

### Installation

```bash
npm install
```

### Démarrage en dev

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Prévisualisation du build

```bash
npm run preview
```

---

## 5) Déploiement

- **Site :** [https://coachtechno.com](https://coachtechno.com)

### Notes de configuration

- `site` configuré dans `astro.config.mjs` pour la génération des URLs canoniques et Open Graph
- Build statique généré dans `dist/`

---

## 6) Architecture et organisation du code

### Structure des dossiers

- `src/components/` : composants UI réutilisables (Header, Footer)
- `src/components/vue/` : composants Vue 3 interactifs (ContactForm, CtaBanner, ServiceFAQ)
- `src/content/blog/` : articles de blog en Markdown
- `src/layouts/` : layouts Astro (MainLayout, BlogPostLayout)
- `src/pages/` : pages du site (routage basé sur les fichiers)
- `src/styles/` : styles globaux et thème Tailwind v4

### Composants clés

- `MainLayout.astro` : layout principal avec Head (SEO, OG), Header et Footer
- `BlogPostLayout.astro` : layout pour les articles de blog
- `Header.astro` : navigation principale du site
- `Footer.astro` : pied de page
- `ContactForm.vue` : formulaire de contact interactif avec validation
- `CtaBanner.vue` : bannière d'appel à l'action réutilisable
- `ServiceFAQ.vue` : FAQ en accordéon pour la page services

---

## 7) Utilisation de l'IA

### Outil(s) utilisé(s)

- Cursor (Claude) — assistant IA intégré à l'éditeur

### Comment l'IA a été utilisée

- Génération initiale des pages Astro et composants Vue
- Résolution d'erreurs de configuration (migration Tailwind v3 → v4)
- Suggestions de structure de composants et de layout
- Rédaction et adaptation du contenu des pages

### À quel endroit

#### astro.config.mjs
- Migration de `@astrojs/tailwind` vers `@tailwindcss/vite` pour la compatibilité Tailwind v4

#### src/styles/global.css
- Migration de la syntaxe Tailwind v3 (`@tailwind base/components/utilities`) vers v4 (`@import "tailwindcss"`, `@theme`)

#### src/components/vue/
- Génération des composants Vue 3 interactifs (ContactForm, CtaBanner, ServiceFAQ)

### Exemples de prompts

1. "Migre ce projet de @astrojs/tailwind vers @tailwindcss/vite pour Tailwind v4"
2. "Crée un composant Vue 3 pour un formulaire de contact avec validation"
3. "Génère une page d'accueil Astro pour un consultant IA au Québec avec Tailwind"
