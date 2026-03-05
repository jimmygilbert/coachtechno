# Créer une nouvelle page Astro

Utilisation : décris la page après la commande, ex.  
`/new-page Page "Formations" présentant 3 types de formations avec un CTA`

## Ton rôle (IA)

1) **Clarifier** (si manquant) :
   - Nom de la route (`/formations`, `/services/...`)
   - Sections à inclure (hero, liste, CTA, FAQ, etc.)
   - Composants Vue interactifs nécessaires ?

2) **Créer le fichier** dans `src/pages/` :
   - Utiliser `MainLayout` avec `title` et `description` pour le SEO
   - Imports via alias `@/`
   - Contenu en français québécois
   - Sections stylisées avec Tailwind v4

3) **Si composant Vue nécessaire** :
   - Créer dans `src/components/vue/`
   - Ajouter avec directive `client:visible` (ou `client:load` si above the fold)

4) **Vérifier** :
   - [ ] Route accessible (`/nom-page`)
   - [ ] `<title>` et `<meta description>` renseignés
   - [ ] Responsive mobile (breakpoints Tailwind `sm:`, `md:`, `lg:`)
   - [ ] Lien ajouté dans le Header si pertinent
