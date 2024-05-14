import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const status = searchParams.get('status');
  
  try {
    if (!id || !status) throw new Error('id and status required');
    const something = await sql`UPDATE users SET status=${status} WHERE id=${id};`;
    return NextResponse.json({ "status" : status }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
 
  return NextResponse.json({ "status" : status }, { status: 200 });
}