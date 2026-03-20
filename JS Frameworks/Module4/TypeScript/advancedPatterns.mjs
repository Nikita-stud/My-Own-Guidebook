//1. Generics = a placeholder for a type, decided when you use it not when you write it.

// 'T' is a type parameter. It represents the type of items in the list.
interface GenericListProps<T> {
  items: T[];                              // array of whatever T is
  renderItem: (item: T) => React.ReactNode; // function that receives a T
  keyExtractor: (item: T) => string | number;
}

//T extends {} just means "T must be an object" — stops you passing primitives like number directly.
function GenericList<T extends {}>({ items, renderItem, keyExtractor }: GenericListProps<T>) {
  return (
    <ul>
      {items.map((item) => (
        <li key={keyExtractor(item)}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}
//2. Discriminated unions = different props based on a type value:
//type: 'image' means — this property can only ever be the string 'image'. Not any string, specifically 'image'.
interface ImageProps {
  type: 'image'; // ← discriminator
  src: string;
  alt: string;   // required for images
}

interface VideoProps {
  type: 'video'; // ← discriminator
  src: string;
  controls?: boolean; // only exists on video
}

type MediaProps = ImageProps | VideoProps; // union of both

<Media type="image" src="photo.jpg" alt="A photo" />         // ✓
<Media type="video" src="video.mp4" controls={true} />       // ✓
<Media type="image" src="photo.jpg" controls={true} />       // ✗ error: controls doesn't exist on image
<Media type="video" src="video.mp4" alt="wrong" />           // ✗ error: alt doesn't exist on video


//3. Typing API responses = define the shape before you fetch:
interface Game {
  id: number;
  name: string;
  released: string;
  genre: string[];
  image: { url: string; alt: string };
}

interface ApiResponse {
  data: Game[];
}

const result: ApiResponse = await response.json();