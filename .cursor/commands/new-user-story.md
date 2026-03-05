# Implémenter un récit utilisateur

Utilisation : écris le récit après la commande, ex.  
`/new-user-story En tant que Testeur QA, je peux créer un bogue avec capture d’écran`

## Ton rôle (IA)

1) **Clarifier** (sans blabla) :
   - rôle concerné : lead / tester
   - Option choisie : Option 1 ou Option 2 (si pertinent)
   - champs/données : titre, description, étapes, plateforme, priorité, etc.
2) **Lister les impacts** :
   - routes (dans `src/router/routes.ts`)
   - view(s) (dans `src/views/`)
   - composant(s) (dans `src/components/`)
   - store(s) Pinia (dans `src/stores/`)
   - service(s) API (dans `src/services/`)
   - validations (Vee-Validate)
3) **Implémenter** en respectant les règles `.cursor/rules/` :
   - erreurs via `parseAxiosError`
   - appels protégés via `axiosAuth`
   - auth/redirect via les guards existants (`src/router/index.ts`)
4) **Tests** :
   - ajouter/mettre à jour un test Cypress dans `cypress/e2e/userStories.cy.ts`
   - (si logique) ajouter un test Vitest
5) **Finir par** :
   - checklist “OK” (routes, UI, erreurs, tests)
   - commandes à exécuter (`/check-all`, `/cypress-up`)

