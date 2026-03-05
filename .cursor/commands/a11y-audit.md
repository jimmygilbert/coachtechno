# Audit d'accessibilité web (a11y)

Utilisation : indique la page à auditer, ex.  
`/a11y-audit src/pages/services.astro`

## Ton rôle (IA)

1) **Lire la page** et le layout utilisé, puis analyser la conformité WCAG 2.1 niveau AA

2) **Vérifier la structure sémantique** :

   | Élément | Cible |
   |---|---|
   | Landmarks | `<header>`, `<nav>`, `<main>`, `<footer>`, `<aside>` présents et uniques si nécessaire |
   | Hiérarchie Hn | Un seul `<h1>`, niveaux séquentiels (pas de saut H1 → H3) |
   | Listes | Éléments de navigation et énumérations dans `<ul>` / `<ol>`, pas de listes simulées avec CSS |
   | `lang` | `<html lang="fr-CA">` présent |

3) **Vérifier les images et médias** :

   | Élément | Cible |
   |---|---|
   | `alt` sur `<img>` | Descriptif si informatif, `alt=""` si décoratif |
   | SVG | `role="img"` + `aria-label` ou `<title>` à l'intérieur |
   | Vidéo / audio | Sous-titres ou transcription disponibles |

4) **Vérifier les interactions et formulaires** :

   | Élément | Cible |
   |---|---|
   | `<label>` | Chaque `<input>` a un `<label for="">` explicite ou `aria-label` |
   | Messages d'erreur | Liés au champ via `aria-describedby`, rôle `alert` ou `aria-live` |
   | Focus visible | Outline visible sur tous les éléments interactifs (pas de `outline: none` sans remplacement) |
   | Ordre du focus | Logique et séquentiel (pas de `tabindex` positif) |
   | Boutons | `<button>` utilisé (pas `<div onClick>`), texte ou `aria-label` explicite |

5) **Vérifier le contraste et la lisibilité** :

   | Élément | Cible |
   |---|---|
   | Texte normal | Ratio de contraste ≥ 4.5:1 (WCAG AA) |
   | Grand texte (≥ 18px bold / 24px) | Ratio ≥ 3:1 |
   | Éléments interactifs | Bordures/icônes avec ratio ≥ 3:1 contre l'arrière-plan |
   | Taille de police | Minimum `1rem` (16px) pour le corps de texte |

6) **Vérifier la navigation au clavier** :

   | Élément | Cible |
   |---|---|
   | Skip link | Lien « Aller au contenu principal » en premier élément focusable |
   | Menu mobile | Ouverture/fermeture au clavier, focus piégé dans le menu ouvert |
   | Accordéons / FAQ | `<button>` pour déclencher, `aria-expanded`, contenu lié via `aria-controls` |
   | Modale | Focus piégé, fermeture avec Escape, retour du focus à l'élément déclencheur |

7) **Vérifier les attributs ARIA** :

   | Élément | Cible |
   |---|---|
   | `aria-current="page"` | Sur le lien de navigation actif |
   | `aria-label` sur `<nav>` | Si plusieurs `<nav>` existent (ex. nav principale vs nav footer) |
   | `role` | Pas de rôles redondants (`role="banner"` sur `<header>` est inutile) |

8) **Produire un rapport** :
   - Problèmes classés par impact : critique / majeur / mineur
   - Référence au critère WCAG concerné (ex. 1.1.1, 2.4.1, 4.1.2)
   - Corrections suggérées avec le code Astro ou Vue à modifier

9) **Appliquer les corrections** après confirmation
