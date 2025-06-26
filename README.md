# Vibe Typing Game

A modern typing application built with Next.js 15 and React 19, designed for **vibe coding** practice and development learning. This project focuses on creating a smooth, engaging coding experience rather than traditional gaming mechanics.

## 🎯 Project Focus

This project is primarily designed for **vibe coding** - a development approach that emphasizes:
- **Flow State**: Creating an immersive coding environment
- **Skill Practice**: Improving typing speed and accuracy for programming
- **Modern Tech Stack**: Learning and practicing with cutting-edge technologies
- **User Experience**: Building smooth, responsive interfaces
- **Code Quality**: Demonstrating clean, maintainable React/TypeScript patterns

## 🎮 Features

- **Time Challenge**: 60-second countdown timer for focused practice sessions
- **Real-time Feedback**: Character-level input validation with green for correct and red for incorrect
- **Score System**: Track the number of correctly typed words
- **High Score Record**: Save high scores using localStorage
- **Programming Theme**: Includes words related to TypeScript, JavaScript, React, and more
- **Responsive Design**: Beautiful interface built with Tailwind CSS

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.0 (App Router)
- **Frontend**: React 19.0.0
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Development Tools**: ESLint, Turbopack
- **Font**: Geist (Vercel font)

## 📦 Installation

Make sure you have Node.js installed (recommended version 18 or higher)

```bash
# Clone the project
git clone <repository-url>
cd vibe-coding-app1

# Install dependencies
npm install
```

## 🚀 Running

### Development Mode

```bash
npm run dev
```

Uses Turbopack for fast development. Open [http://localhost:3000](http://localhost:3000) to see the result.

### Build for Production

```bash
npm run build
npm start
```

### Code Linting

```bash
npm run lint
```

## 🎯 How to Use

1. Click "Start Game" to begin a practice session
2. Type the displayed programming-related words as quickly and accurately as possible within 60 seconds
3. After typing correctly, the next word will automatically appear
4. When the session ends, your score and high score will be displayed
5. Click "Play Again" to start another practice session

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Application layout
│   ├── page.tsx        # Main page (core logic)
│   └── globals.css     # Global styles
└── components/
    ├── Timer.tsx       # Countdown timer component
    ├── WordDisplay.tsx # Word display component
    ├── GameOver.tsx    # Session end component
    └── StartGame.tsx   # Start session component
```

## 🎨 Main Features

- **Timer Component**: Displays remaining time for focused practice
- **WordDisplay Component**: Shows target word with real-time input feedback
- **StartGame Component**: Session start interface
- **GameOver Component**: Session end interface showing scores and restart option

## 🔧 Customization

### Adding Words

Modify the `words` array in `src/app/page.tsx`:

```typescript
const words = ['your', 'custom', 'words', 'here'];
```

### Modifying Session Time

Change the value in `setTimeLeft(60)` in the `startGame` function.

## 📝 Development Notes

- Uses React 19 new features for modern development practices
- Adopts Next.js App Router architecture for optimal performance
- Uses Tailwind CSS 4 for efficient styling
- Implements localStorage for data persistence
- Uses TypeScript for type safety and better development experience
- Designed with vibe coding principles in mind

## 🚀 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 📄 License

none
