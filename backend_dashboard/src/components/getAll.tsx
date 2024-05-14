import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import GetData from "./fetchdata"
export default async function GetAll(){
    const issues = await queryDatabase();
    //console.log(issues)
    const rows = issues.rows;
    console.log(rows)
    const listIssues = rows.map((item) => (

        <GetData ID={item.id} Name={item.name} Email={item.email} Description={item.description} Status={item.status} />

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
