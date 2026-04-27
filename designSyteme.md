# Design System - La Table d'Or

## Vue d'ensemble
Design system élégant pour un restaurant gastronomique français avec une palette dorée sophistiquée.

## Couleurs

### Palette Principale - Or
- `--color-gold-50`: #fffbeb - Fond très clair
- `--color-gold-100`: #fef3c7 - Fond clair
- `--color-gold-200`: #fde68a - Accent léger
- `--color-gold-300`: #fcd34d
- `--color-gold-400`: #fbbf24
- `--color-gold-500`: #f59e0b - Accent principal
- `--color-gold-600`: #d97706
- `--color-gold-700`: #b45309
- `--color-gold-800`: #92400e - Primaire (boutons, navigation)
- `--color-gold-900`: #78350f - Texte sombre

### Palette Neutre
- `--color-neutral-50` à `--color-neutral-900` - Échelle de gris chauds

### Couleurs Sémantiques
- **Primary**: `--color-gold-800` (#92400e) - Boutons principaux, liens importants
- **Secondary**: `--color-gold-50` - Arrière-plans de section
- **Accent**: `--color-gold-100` - Highlights et zones d'accent
- **Border**: `--color-neutral-200` - Bordures subtiles
- **Muted**: `--color-neutral-100` - Arrière-plans secondaires

## Typographie

### Polices
- **Serif** (Titres): `Playfair Display` - Élégante et classique
- **Sans-serif** (Corps): `Inter` - Moderne et lisible

### Poids de police
- Light: 300
- Normal: 400
- Medium: 500
- Semibold: 600
- Bold: 700

### Hiérarchie
- **H1**: Bold, line-height 1.2, letter-spacing -0.02em
- **H2**: Semibold, line-height 1.3, letter-spacing -0.01em
- **H3**: Semibold, line-height 1.4
- **H4**: Medium, line-height 1.5
- **Paragraphe**: line-height 1.7 pour une meilleure lisibilité

## Espacements

Échelle harmonieuse basée sur `rem`:
- **xs**: 0.25rem (4px)
- **sm**: 0.5rem (8px)
- **md**: 1rem (16px)
- **lg**: 1.5rem (24px)
- **xl**: 2rem (32px)
- **2xl**: 3rem (48px)
- **3xl**: 4rem (64px)

## Bordures

### Radius
- **sm**: 0.25rem - Petits éléments
- **md**: 0.5rem - Cartes, inputs
- **lg**: 0.75rem - Images
- **xl**: 1rem - Sections importantes
- **2xl**: 1.5rem
- **full**: 9999px - Boutons arrondis, badges

## Ombres

- **sm**: Ombres légères pour les éléments surélevés
- **md**: Cartes standards
- **lg**: Modales, popovers
- **xl**: Éléments très élevés

## Usage

### Boutons
```css
/* Primaire */
bg-amber-800 text-white hover:bg-amber-900

/* Secondaire */
bg-amber-100 text-amber-900 hover:bg-amber-200

/* Outline */
border-2 border-amber-800 text-amber-800 hover:bg-amber-50
```

### Cartes
```css
bg-white rounded-lg shadow-md p-6
```

### Sections
```css
/* Alternance pour le rythme visuel */
bg-white / bg-amber-50
```

### Inputs
```css
border border-gray-300 rounded-lg px-4 py-2
focus:ring-2 focus:ring-amber-800 focus:border-transparent
```

## Mode Sombre

Le design system supporte un mode sombre avec:
- Fond: `--color-neutral-900`
- Texte: `--color-neutral-50`
- Primary: `--color-gold-500` (plus clair en mode sombre)
- Cartes: `--color-neutral-800`

## Principes de Design

1. **Élégance**: Utiliser Playfair Display pour les titres importants
2. **Hiérarchie claire**: Tailles et poids de police bien définis
3. **Espacement généreux**: Pour un look haut de gamme
4. **Cohérence**: Utiliser les tokens définis plutôt que des valeurs arbitraires
5. **Accessibilité**: Contrastes de couleurs conformes WCAG AA minimum