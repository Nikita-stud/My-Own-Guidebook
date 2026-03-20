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