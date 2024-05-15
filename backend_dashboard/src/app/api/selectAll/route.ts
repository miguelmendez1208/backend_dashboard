import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {

  
  try {
    const something = await sql`select * from users`;
    return NextResponse.json(something, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

}

export async function POST(request: Request) {
    try {
        const something = await sql`select * from users`;
        return NextResponse.json(something, { status: 200 });
    
      } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
      }
}