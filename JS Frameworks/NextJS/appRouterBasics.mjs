//Each nested folder can have its own page.tsx and an optional layout.tsx.
src/
└── app/
    └── om-oss/
        ├── page.tsx           // UI for /om-oss
        ├── layout.tsx         // Optional: Layout for /om-oss and its children
        └── team/              // Represents the /om-oss/team segment
            └── page.tsx       // UI for /om-oss/team

//src/app directory maps URL segments
//Every route segment you want publicly accessible must have a page.tsx file
//src/app/om-oss/page.tsx

//layout.tsx defines shared UI
//layout.tsx file in a folder applies to all route segments within that folder
//src/app/layout.tsx is mandatory and must define the <html> and <body> tags
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <a href="/">Hjem</a> | <a href="/om-oss">Om Oss</a>
          </nav>
        </header>
        <main>{children}</main> {/* The content of page.tsx will go here */}
        <footer>
          <p>&copy; {new Date().getFullYear()} Mitt Firma AS</p>
        </footer>
      </body>
    </html>
  );

  //For unique Url paths [folderName] the folder needs to be written like this like 
  // src/app/blog/[slug]/page.tsx 
  // url can be now http://localhost:3000/blog/velkommen-til-bloggen http://localhost:3000/blog/oppskrift-paa-vafler

  //params is next js auto passed in
  //{ slug: string } is just TypeScript saying "slug will always be a string"
  //slug is URL friendly version of a title
  export default function BlogPostPage({ params }: { params: { slug: string } }) {

  }


//If multiple segments [...folderName] .... app/shop/[...categories]/page.tsx
//If optional segment [[...folderName]]

//If I want to organize code with no path change use ()  (/marketing)
src/
└── app/
    ├── (marketing)/        //This group does not affect the URL path
    │   ├── about/
    │   │   └── page.tsx    //Route: /about
    │   ├── contact/
    │   │   └── page.tsx    //Route: /contact
    │   └── layout.tsx      //Layout for all marketing pages
    │
    ├── (dashboard)/        //This group also does not affect the URL
    │   ├── settings/
    │   │   └── page.tsx    //Route: /settings (assuming root in this group)
    │   ├── profile/
    │   │   └── page.tsx    //Route: /profile
    │   └── layout.tsx      //Layout for all dashboard pages
