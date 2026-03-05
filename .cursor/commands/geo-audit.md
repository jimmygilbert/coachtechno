# Audit GEO (Generative Engine Optimization)

Utilisation : indique la page à auditer, ex.  
`/geo-audit src/pages/services.astro`

## Ton rôle (IA)

1) **Lire la page** et analyser le contenu pour son potentiel de citation par les LLM (ChatGPT, Perplexity, Gemini, Copilot, etc.)

2) **Vérifier la citabilité du contenu** :

   | Élément | Cible |
   |---|---|
   | Réponses directes | Paragraphes autonomes qui répondent clairement à une question (qui, quoi, comment) |
   | Listes structurées | Listes à puces ou numérotées facilement extractibles par un LLM |
   | Définitions claires | Phrases « X est… », « X permet de… » en début de section |
   | Données factuelles | Chiffres, prix, durées, livrables concrets (pas de langage vague) |
   | Autorité / expertise | Mentions d'expérience, certifications, résultats concrets |
   | Nom de marque | « Jimmy Gilbert » et « CoachTechno » associés aux services dans le texte |

3) **Vérifier les signaux techniques pour LLM** :

   | Signal | Cible |
   |---|---|
   | Schema.org JSON-LD | `Person`, `LocalBusiness`, `Service`, `FAQPage`, `Article` selon la page |
   | Balises sémantiques | `<article>`, `<section>`, `<main>`, `<aside>` utilisées correctement |
   | FAQ explicites | Questions/réponses balisées (`FAQPage` schema) pour les pages de services |
   | `<meta name="description">` | Résumé concis et factuel (pas juste marketing) |
   | Titres Hn | Structure claire H1 > H2 > H3, chaque Hn lisible hors contexte |
   | `lang="fr-CA"` | Attribut de langue présent sur `<html>` |

4) **Vérifier le positionnement GEO** :

   | Critère | Cible |
   |---|---|
   | Questions cibles | La page répond à quelles questions qu'un utilisateur poserait à un LLM ? |
   | Mots-clés conversationnels | Présence de termes naturels : « comment utiliser l'IA dans une PME », « automatiser mon entreprise » |
   | Localisation | Mentions géographiques (Québec, PME québécoises) pour le contexte local |
   | Comparaison implicite | Éléments qui distinguent CoachTechno des alternatives (approche concrète, pédagogie, PME) |

5) **Produire un rapport** :
   - Score GEO estimé : faible / moyen / élevé
   - Questions LLM auxquelles la page pourrait répondre
   - Problèmes trouvés (contenu vague, manque de structure, schema manquant)
   - Suggestions d'amélioration avec le code ou le texte à ajouter/modifier

6) **Appliquer les corrections** après confirmation
