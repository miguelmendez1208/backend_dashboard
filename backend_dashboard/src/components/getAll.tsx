import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import GetData from "./fetchdata"

export default async function GetAll(){
    const issues = await queryDatabase();
    //console.log(issues)

    // Check if the response is an instance of NextResponse
    if (issues instanceof NextResponse) {
        // Handle the error or return some appropriate JSX
        console.error('Failed to fetch data:', issues.json());
        return <p>Error fetching data.</p>;
    }

    const rows = issues.rows;
    console.log(rows)
    const listIssues = rows.map((item) => (
        <GetData key={item.id} ID={item.id} Name={item.name} Email={item.email} Description={item.description} Status={item.status} />
    ));

    return (
        <>{listIssues}</>
    );
}
async function queryDatabase(){
    try {
        const results = await sql`SELECT * FROM users;`;
        return results;
      } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
      } 
}
