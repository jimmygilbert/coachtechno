# Audit SEO d'une page

Utilisation : indique la page à auditer, ex.  
`/seo-audit src/pages/services.astro`

## Ton rôle (IA)

1) **Lire la page** et le layout utilisé (`MainLayout` ou `BlogPostLayout`)

2) **Vérifier les éléments SEO** :

   | Élément | Cible |
   |---|---|
   | `<title>` | 50-60 caractères, mot-clé principal inclus |
   | `<meta description>` | 150-160 caractères, incitatif |
   | `<h1>` | Un seul par page, contient le mot-clé principal |
   | Structure Hn | H2 > H3, logique et hierarchique |
   | Images | `alt` descriptif sur chaque image |
   | Liens internes | Au moins 2-3 liens vers d'autres pages du site |
   | URL | Lisible, en français, sans paramètres |

3) **Vérifier les données structurées** (si pertinent) :
   - Pages de service → `Service` schema
   - Articles de blog → `Article` schema
   - Page contact → `LocalBusiness` schema

4) **Produire un rapport** :
   - Liste des problèmes trouvés (critique / mineur)
   - Corrections suggérées avec le code Astro à modifier

5) **Appliquer les corrections** après confirmation
