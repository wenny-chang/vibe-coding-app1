# Vibe Typing Game

A modern typing game application built with Next.js 15 and React 19. Players need to correctly type programming-related words as fast as possible within 60 seconds.

## 🎮 Game Features

- **Time Challenge**: 60-second countdown timer
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

## 🎯 How to Play

1. Click "Start Game" to begin
2. Type the displayed words as quickly and accurately as possible within 60 seconds
3. After typing correctly, the next word will automatically appear
4. When the game ends, your score and high score will be displayed
5. Click "Play Again" to restart

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Application layout
│   ├── page.tsx        # Main page (game logic)
│   └── globals.css     # Global styles
└── components/
    ├── Timer.tsx       # Countdown timer component
    ├── WordDisplay.tsx # Word display component
    ├── GameOver.tsx    # Game over component
    └── StartGame.tsx   # Start game component
```

## 🎨 Main Features

- **Timer Component**: Displays remaining time
- **WordDisplay Component**: Shows target word with real-time input feedback
- **StartGame Component**: Game start interface
- **GameOver Component**: Game over interface showing scores and restart option

## 🔧 Customization

### Adding Words

Modify the `words` array in `src/app/page.tsx`:

```typescript
const words = ['your', 'custom', 'words', 'here'];
```

### Modifying Game Time

Change the value in `setTimeLeft(60)` in the `startGame` function.

## 📝 Development Notes

- Uses React 19 new features
- Adopts Next.js App Router architecture
- Uses Tailwind CSS 4 for styling
- Implements localStorage for data persistence
- Uses TypeScript for type safety

## 🚀 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 📄 License

none
