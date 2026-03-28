//Type-based — groups by what the file is:
src/
├── components/    // all components together
├── hooks/         // all hooks together
├── pages/         // all pages together

//Feature-based — groups by what the file does:
src/
├── features/
│   ├── auth/
│   │   ├── components/LoginForm.tsx
│   │   ├── hooks/useAuth.ts
│   │   └── services/authAPI.ts
│   ├── products/
│   │   ├── components/ProductCard.tsx
│   │   └── services/productsAPI.ts
├── components/    // shared components only
└── hooks/         // shared hooks only

//Dumb Components = Receive data via props and render UI. They are often reusable
function UserAvatar({ imageUrl, altText }: Props) {
  return <img src={imageUrl} alt={altText} />;
}
//Smart Components: Handle logic, state management, and data fetching.
function UserProfile({ userId }: { userId: string }) {
  const { user, loading, error } = useUserProfile(userId); // logic in custom hook

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return <UserAvatar imageUrl={user.avatarUrl} altText={user.name} />;
}

//Naming Conventions
Components: PascalCase (e.g., UserProfileCard.tsx).
Hooks: camelCase, prefixed with use (e.g., useAuth.ts).
Variables & Functions: camelCase (e.g., userName, fetchData).
Constants: SCREAMING_SNAKE_CASE (e.g., API_BASE_URL).
CSS (if not using Tailwind/utility classes): Kebab-case (e.g., profile-card.css) or BEM.


//Error Boundary — a safety net around parts of your UI. When a component inside it crashes, the boundary catches the crash and shows a fallback instead of breaking the whole page.
//1.
interface Props {
  children: ReactNode       // what you wrap inside it
  fallbackUI?: ReactNode    // optional — your custom error message
}

interface State {
  hasError: boolean         // did something crash?
  error?: Error             // the actual error, if any
}
//2.
public state: State = {
  hasError: false
}

//3.
static getDerivedStateFromError(error: Error) {
  // called when a child crashes — updates state to trigger re-render
  return { hasError: true, error }
}

componentDidCatch(error: Error, info: ErrorInfo) {
  // called after the re-render — good place to log the error
  console.error('Caught:', error, info)
}

//4.
render() {
  if (this.state.hasError) {
    if (this.props.fallbackUI) return this.props.fallbackUI  // show your custom UI
    return <div>Something went wrong.</div>                  // show default UI
  }
  return this.props.children  // no crash — render normally
}

//5.
import React, { Component, ErrorInfo, ReactNode } from 'react';

<ErrorBoundary fallbackUI={<p>Something broke</p>}>
  <YourComponent />
</ErrorBoundary>


//or 
vitest — runs your tests. Works with Vite out of the box, same config, same TypeScript setup.
@testing-library/react — helps you test components the way a user uses them. Find a button by its text, click it, check what changed. Not by poking at internal state.

//1.
npm install -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom


//2,vite.config.ts
test: {
  globals: true,
  environment: 'jsdom',
  setupFiles: './src/test/setup.ts',
}

//3.src/test/setup.ts — one line:
import '@testing-library/jest-dom';

//4. package.json
"test": "vitest"

//Writing a test — the pattern is always: Arrange, Act, Assert
it('shows the product title', () => {
  render(<ProductCard title="Headphones" />)   // Arrange

  const heading = screen.getByRole('heading')  // Act (find it)

  expect(heading).toHaveTextContent('Headphones')  // Assert
})