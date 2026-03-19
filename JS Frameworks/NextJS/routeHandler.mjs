//Route Handlers are the App Router’s equivalent of API Routes in the Pages Router. They allow you to create server-side code that handles incoming HTTP requests (GET, POST, PUT, DELETE, etc.) and sends back responses, typically in JSON format.
//File Name: Must be route.ts (or route.js)
//simple API endpoint at /api/greet  src/app/api/greet/route.ts.
//OBS You can define handlers for other HTTP methods in the same route.ts file.
import { NextResponse } from 'next/server'; //extension of the standard Response Web API

export async function GET(request: Request) { //The request parameter (of type Request from the web API) provides information about the incom
  const greeting = `Hallo fra API-ruten!`;
  return NextResponse.json({ message: greeting });
}

//NOW YOU CAN SEND REQUESTS  to http://localhost:3000/api/greet

{
  "message": "Hallo fra API-ruten!"
}

//POST in same file
export async function POST(request: Request) {
  try {
    const body = await request.json(); // Parse the JSON body from the request
    const name = body.name;

    const greeting = `Takk for din POST-forespørsel, ${name}! Hilsen API.`;
    return NextResponse.json({ message: greeting }, { status: 201 }); // 201 Created for successful POST
  } catch (error) {
    return NextResponse.json({ error: 'Ugyldig JSON-format' }, { status: 400 });
  }
}

// /api/games/[id] in folder src/app/api/games/[id]/route.ts
import { NextResponse } from 'next/server';

interface Game {
  /* ... same Game interface as before ... */
}
interface ApiSingleResponse {
  data: Game;
}

// Context parameter provides access to route params
// For a route /api/games/1, context.params would be { id: '1' }
export async function GET(
  request: Request,
  context: { params: { id: string } },
) {
  const gameId = context.params.id;

  try {
    // Fetch the game data from the external Noroff API
    const apiResponse = await fetch(
      `https://v2.api.noroff.dev/old-games/${gameId}`,
    );

    if (!apiResponse.ok) {
      if (apiResponse.status === 404) {
        return NextResponse.json(
          { error: `Spill med ID ${gameId} ikke funnet` },
          { status: 404 },
        );
      }
      // For other errors from the external API
      return NextResponse.json(
        { error: 'Kunne ikke hente spilldata fra ekstern API' },
        { status: apiResponse.status },
      );
    }
    const gameData: ApiSingleResponse = await apiResponse.json();

    // You might want to transform or select specific fields before responding
    return NextResponse.json(gameData);
  } catch (error) {
    return NextResponse.json(
      { error: 'Intern serverfeil ved henting av spill' },
      { status: 500 },
    );
  }
}