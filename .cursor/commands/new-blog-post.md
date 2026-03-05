# Créer un article de blogue

Utilisation : décris le sujet après la commande, ex.  
`/new-blog-post Article sur les erreurs courantes en gestion de projet tech`

## Ton rôle (IA)

1) **Clarifier** (si manquant) :
   - Sujet précis et audience cible
   - Longueur approximative (court ~500 mots / moyen ~1000 / long ~2000)
   - Mots-clés SEO visés

2) **Créer le fichier** dans `src/content/blog/` :
   - Nom de fichier : `kebab-case-du-titre.md`
   - Respecter le schema défini dans `src/content/config.ts`

   ```markdown
   ---
   title: "Titre de l'article"
   description: "Description SEO (150-160 caractères)"
   pubDate: 2026-MM-DD
   author: "Jimmy Gilbert"
   tags: ["coaching", "technologie"]
   ---
   
   Contenu de l'article...
   ```

3) **Rédiger** :
   - Ton professionnel mais accessible, en français québécois
   - Structure claire : intro → développement (H2/H3) → conclusion + CTA
   - CTA final vers une page de service ou la page contact

4) **Vérifier** :
   - [ ] Frontmatter complet et valide selon le schema
   - [ ] `description` entre 150-160 caractères
   - [ ] Article visible sur `/blog`
