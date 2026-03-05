# Créer un composant Vue interactif

Utilisation : décris le composant après la commande, ex.  
`/new-vue-component Accordéon pour afficher les questions fréquentes d'un service`

## Ton rôle (IA)

1) **Clarifier** (si manquant) :
   - Props attendues (données venant du parent `.astro`)
   - Événements émis vers le parent ?
   - Nécessite-t-il un état local (ref/reactive) ?

2) **Créer le fichier** dans `src/components/vue/` :
   - `<script setup lang="ts">` obligatoire
   - Props typées avec interface TypeScript
   - Classes Tailwind v4 pour le style

   ```vue
   <script setup lang="ts">
   interface Props {
     // typer les props
   }
   const props = defineProps<Props>();
   </script>
   
   <template>
     <!-- contenu -->
   </template>
   ```

3) **Intégrer dans la page `.astro`** :
   - Import et utilisation avec `client:visible` (ou `client:load` si above the fold)

4) **Vérifier** :
   - [ ] Pas de `any` dans le TypeScript
   - [ ] États de chargement/erreur gérés si appels async
   - [ ] Accessible (aria, focus, keyboard navigation si interactif)
   - [ ] Responsive mobile
