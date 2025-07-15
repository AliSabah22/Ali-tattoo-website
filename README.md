# Ali Tattoo - Custom Cursor Portfolio

A high-end tattoo artist portfolio website featuring a fully animated custom cursor experience built with Next.js, TailwindCSS, and Framer Motion.

## ✨ Features

### Custom Cursor Experience
- **Smooth Spring Physics**: Cursor follows mouse with natural spring animation
- **Magnetic Hover Effects**: Interactive elements attract the cursor
- **State Changes**: Cursor morphs based on interaction context
  - Links: Small dot indicator
  - Buttons: Ring indicator
  - Images: "VIEW" text overlay
  - Text: Subtle highlighting
- **Click Ripple Animation**: Expanding ripple effect on clicks
- **Trail Effect**: Small dots follow the cursor for afterimage effect
- **Adaptive Colors**: Automatically adjusts to light/dark backgrounds
- **Mobile Fallback**: Disables on mobile devices for better UX

### Visual Polish
- **Blend Modes**: Uses mix-blend-difference for edgy visual fusion
- **Backdrop Blur**: Glass-like translucent effect
- **Smooth Transitions**: All state changes are animated
- **Luxury Aesthetic**: Premium design matching tattoo artist brand

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ali-tattoo
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Technology Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety and better development experience
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for smooth cursor physics
- **GSAP** - Advanced animations for magnetic effects
- **React Hooks** - State management and effects

## 🎨 Customization

### Cursor States
The cursor automatically detects different element types:
- `a` tags → Link state
- `button` tags → Button state  
- `img` tags → Image state
- Text elements → Text state

### Magnetic Elements
Add `data-cursor-magnetic` attribute to any element for magnetic attraction:
```jsx
<button data-cursor-magnetic>
  Magnetic Button
</button>
```

### Custom Classes
The cursor responds to these CSS classes:
- `.nav-link` - Navigation links
- `.gallery-item` - Gallery items
- `.link` - Generic links
- `.btn` - Generic buttons
- `.image` - Generic images

## 📱 Mobile Support

The custom cursor automatically disables on mobile devices (≤768px) and falls back to the default cursor for better touch interaction.

## 🎯 Performance

- **Optimized Animations**: Uses Framer Motion's optimized spring physics
- **Efficient Event Handling**: Debounced mouse events and optimized selectors
- **Memory Management**: Proper cleanup of event listeners and observers
- **Smooth 60fps**: Hardware-accelerated animations

## 🔧 Development

### Project Structure
```
ali-tattoo/
├── app/
│   ├── globals.css          # Global styles and cursor utilities
│   ├── layout.tsx           # Root layout with cursor component
│   └── page.tsx             # Main portfolio page
├── components/
│   └── CustomCursor.tsx     # Main cursor component
├── package.json
├── tailwind.config.js       # Tailwind configuration
└── README.md
```

### Key Components

#### CustomCursor.tsx
- Handles all cursor logic and state management
- Implements magnetic effects with GSAP
- Manages trail effect and ripple animations
- Responsive design with mobile detection

#### globals.css
- Hides default cursor globally
- Defines cursor utility classes
- Mobile fallback styles

## 🎨 Design System

### Colors
- **Primary**: Red gradient (`primary-500` to `primary-900`)
- **Dark**: Dark gray scale (`dark-50` to `dark-900`)
- **Accent**: White with transparency for glass effects

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: Regular, Medium, Semibold, Bold
- **Sizes**: Responsive scale from 1rem to 8rem

### Animations
- **Spring Physics**: Damping 25, Stiffness 700
- **Duration**: 200ms-800ms depending on interaction
- **Easing**: Power2.out for magnetic effects

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or support, please open an issue on GitHub. 