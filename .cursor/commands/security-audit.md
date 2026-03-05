# Audit de sécurité web

Utilisation : indique la page ou le composant à auditer, ex.  
`/security-audit src/pages/contact.astro`  
`/security-audit src/components/vue/ContactForm.vue`

## Ton rôle (IA)

1) **Lire la page ou le composant** et identifier les surfaces d'attaque potentielles

2) **Vérifier les en-têtes de sécurité HTTP** (dans le layout ou la config de déploiement) :

   | En-tête | Cible |
   |---|---|
   | `Content-Security-Policy` | Restreindre les sources de scripts, styles, images, fonts |
   | `X-Content-Type-Options` | `nosniff` pour empêcher le MIME sniffing |
   | `X-Frame-Options` | `DENY` ou `SAMEORIGIN` pour bloquer le clickjacking |
   | `Referrer-Policy` | `strict-origin-when-cross-origin` ou plus restrictif |
   | `Permissions-Policy` | Désactiver caméra, micro, géolocalisation si non utilisés |
   | `Strict-Transport-Security` | `max-age=31536000; includeSubDomains` (HTTPS forcé) |

3) **Vérifier les formulaires et entrées utilisateur** :

   | Élément | Cible |
   |---|---|
   | Injection XSS | Pas de `v-html` avec données utilisateur, pas de `set:html` non échappé |
   | Validation côté client | Validation des champs (courriel, longueur, format) avant envoi |
   | Validation côté serveur | Ne jamais faire confiance au front-end seul (endpoint API doit revalider) |
   | CSRF | Token CSRF si le formulaire envoie à un backend propre |
   | `autocomplete` | `autocomplete="off"` sur les champs sensibles si pertinent |
   | Rate limiting | Protection contre le spam de soumissions (honeypot, délai, captcha) |

4) **Vérifier les dépendances et la configuration** :

   | Élément | Cible |
   |---|---|
   | `npm audit` | Aucune vulnérabilité critique ou haute dans les dépendances |
   | `.env` et secrets | Pas de clés API, tokens ou mots de passe dans le code source |
   | `.gitignore` | `.env`, `.env.*`, `dist/`, `.astro/` exclus du dépôt |
   | Dépendances tierces | Scripts externes chargés avec `integrity` (SRI) et `crossorigin` |

5) **Vérifier les liens et ressources externes** :

   | Élément | Cible |
   |---|---|
   | `target="_blank"` | Toujours accompagné de `rel="noopener noreferrer"` |
   | URLs en dur | Pas de HTTP, toujours HTTPS |
   | Iframes | Attribut `sandbox` présent si iframe externe |
   | Google Fonts / CDN | Chargés via HTTPS, idéalement avec SRI |

6) **Vérifier la protection des données** :

   | Élément | Cible |
   |---|---|
   | Données personnelles | Le formulaire ne stocke rien côté client (localStorage, cookies) sans consentement |
   | Politique de confidentialité | Lien visible vers la politique de confidentialité si collecte de données |
   | Cookies | Bannière de consentement si cookies non essentiels utilisés |

7) **Produire un rapport** :
   - Problèmes classés par sévérité : critique / élevée / moyenne / faible
   - Référence au type de vulnérabilité (XSS, CSRF, injection, exposition de données)
   - Corrections suggérées avec le code ou la configuration à modifier

8) **Appliquer les corrections** après confirmation
