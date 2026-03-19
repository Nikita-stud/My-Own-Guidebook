//Navigation in next is either <Link> or  useRouter hook for events

//<Link> does not reload the page but adds PREFETCHED data, plus makes link be a real a in HTML for SEO
import Link from 'next/link'; // Import the Link component
<Link href="/" style={{ marginRight: '10px' }}></Link>;

//useRouter = changes route 
import { useRouter } from 'next/navigation'; // Import from next/navigation for App Router
const router = useRouter(); //have to declare in the function you are in

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // After successful submission, navigate to the thank you page
    router.push('/takk');
  };

//router.replace('/path') replaces current instead of push
//router.back()
//router.forward()
//router.refresh()
<button onClick={() => router.back()}>
  Tilbake
</button>

//ACTIVE LINKS = display link we are on by usePathname
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import usePathname

const navLinks = [
  { href: '/', label: 'Hjem' },
  { href: '/om-oss', label: 'Om Oss' },
  { href: '/tjenester', label: 'Tjenester' },
  { href: '/kontakt', label: 'Kontakt Oss' },
  { href: '/blog/min-forste-artikkel', label: 'Blogg Eksempel' },
];

export default function NavigationMenu() {
  const pathname = usePathname(); // Get the current path

  return (
    <nav>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            style={{
              marginRight: '10px',
              fontWeight: isActive ? 'bold' : 'normal', // Bold if active
              textDecoration: isActive ? 'underline' : 'none', // Underline if active
            }}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}