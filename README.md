# Leadflow Website - Traditional Create React App

Een moderne, professionele website voor Leadflow gebouwd met **traditionele Create React App (Webpack)** en Bootstrap framework.

## 🚀 Project Overzicht

Dit project is een volledig responsieve website voor Leadflow, een bedrijf gespecialiseerd in lead generatie en digitale marketing. De website is gebouwd met:

- **React 19.1.1** - Moderne JavaScript library
- **Traditional Create React App** - Met Webpack bundler (geen Vite)
- **Bootstrap 5.3.7** - Voor responsive design en styling
- **Bootstrap Icons** - Voor professionele iconografie
- **Nederlandse content** - Volledig in het Nederlands

## 📁 Project Structuur

```
leadflow-webpack/
├── public/
│   ├── index.html          # Hoofd HTML bestand
│   ├── favicon.ico         # Website favicon
│   └── manifest.json       # Web app manifest
├── src/
│   ├── components/         # React componenten
│   │   ├── Header.js       # Navigatie header
│   │   ├── Hero.js         # Hero sectie
│   │   ├── Services.js     # Diensten sectie
│   │   ├── About.js        # Over ons sectie
│   │   ├── Contact.js      # Contact sectie
│   │   ├── FAQ.js          # Veelgestelde vragen
│   │   └── Footer.js       # Website footer
│   ├── App.js              # Hoofd App component
│   ├── App.css             # Custom styling
│   ├── index.js            # Entry point
│   └── index.css           # Globale styling
├── privacy-policy.md       # Privacy beleid (GDPR compliant)
├── cookie-policy.md        # Cookie beleid (GDPR compliant)
├── package.json            # Project dependencies
└── README.md               # Deze documentatie
```

## 🛠️ Installatie & Setup

### Vereisten
- Node.js (versie 14 of hoger)
- npm of yarn package manager

### Stappen

1. **Clone of download het project**
   ```bash
   # Als je het project hebt gedownload, pak het uit
   cd leadflow-webpack
   ```

2. **Installeer dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```
   
   De website opent automatisch in je browser op `http://localhost:3000`

4. **Build voor productie**
   ```bash
   npm run build
   ```
   
   Dit creëert een `build/` folder met geoptimaliseerde bestanden voor deployment.

## 🎨 Features & Functionaliteiten

### Core Pages
- ✅ **Homepage** - Hero sectie met duidelijke value proposition
- ✅ **Services** - Uitgebreide diensten pagina's
- ✅ **About Us** - Bedrijfsinformatie en team
- ✅ **Contact** - Contact formulier en informatie
- ✅ **FAQ** - Veelgestelde vragen met accordion

### Technische Features
- ✅ **Fully Responsive** - Werkt perfect op desktop, tablet en mobile
- ✅ **Bootstrap Integration** - Moderne styling en componenten
- ✅ **Smooth Scrolling** - Vloeiende navigatie tussen secties
- ✅ **Interactive Forms** - Werkende contact formulieren
- ✅ **SEO Optimized** - Meta tags en structured content
- ✅ **Performance Optimized** - Fast loading times

### Design Elements
- ✅ **Modern Gradient Design** - Professionele kleurenschema
- ✅ **Bootstrap Icons** - Consistente iconografie
- ✅ **Hover Effects** - Interactieve elementen
- ✅ **Professional Typography** - Leesbare en moderne fonts
- ✅ **Card-based Layout** - Moderne service cards

## 🎯 Deployment Opties

### 1. Netlify (Aanbevolen)
```bash
npm run build
# Upload de build/ folder naar Netlify
```

### 2. Vercel
```bash
npm run build
# Deploy via Vercel CLI of GitHub integration
```

### 3. Traditional Hosting
```bash
npm run build
# Upload de inhoud van build/ folder naar je webserver
```

### 4. GitHub Pages
```bash
npm install --save-dev gh-pages
# Voeg toe aan package.json scripts:
# "deploy": "gh-pages -d build"
npm run build
npm run deploy
```

## 🔧 Customization

### Kleuren Aanpassen
Bewerk de CSS variabelen in `src/App.css`:

```css
:root {
  --leadflow-primary: #2563eb;
  --leadflow-secondary: #1e40af;
  --leadflow-accent: #3b82f6;
  /* Pas aan naar jouw brand kleuren */
}
```

### Content Wijzigen
- **Header navigatie**: `src/components/Header.js`
- **Hero tekst**: `src/components/Hero.js`
- **Services**: `src/components/Services.js`
- **Contact info**: `src/components/Contact.js`
- **FAQ items**: `src/components/FAQ.js`

### Nieuwe Componenten Toevoegen
1. Maak een nieuw bestand in `src/components/`
2. Import het component in `src/App.js`
3. Voeg het toe aan de JSX return

## 📱 Browser Ondersteuning

- ✅ Chrome (laatste 2 versies)
- ✅ Firefox (laatste 2 versies)
- ✅ Safari (laatste 2 versies)
- ✅ Edge (laatste 2 versies)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔒 Privacy & GDPR

Het project bevat GDPR-compliant documenten:

- **privacy-policy.md** - Uitgebreid privacy beleid
- **cookie-policy.md** - Cookie beleid en consent

Deze documenten zijn specifiek geschreven voor Nederlandse wetgeving en GDPR compliance.

## 📊 Performance

De website is geoptimaliseerd voor:
- **Fast Loading** - Geoptimaliseerde assets en code splitting
- **SEO** - Proper meta tags en semantic HTML
- **Accessibility** - WCAG 2.1 compliant
- **Mobile Performance** - Responsive images en touch-friendly

## 🛠️ Development Scripts

```bash
# Start development server
npm start

# Build voor productie
npm run build

# Run tests
npm test

# Eject (niet aanbevolen)
npm run eject
```

## 🐛 Troubleshooting

### Port 3000 al in gebruik
```bash
# Start op een andere port
PORT=3001 npm start
```

### Build errors
```bash
# Clear cache en reinstall
rm -rf node_modules package-lock.json
npm install
```

### Styling issues
- Controleer of Bootstrap correct is geïmporteerd in `src/index.js`
- Verificeer dat custom CSS na Bootstrap wordt geladen

## 📞 Support

Voor vragen over dit project:
- **Email**: info@leadflow.nl
- **Telefoon**: +31 20 123 4567

## 📄 Licentie

Dit project is eigendom van Leadflow. Alle rechten voorbehouden.

---

**Gebouwd met ❤️ voor Leadflow**

*Laatste update: Augustus 2025*
