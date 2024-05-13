import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"


export default async function GetData() {
    const resJson = {"name":"adam","email":"adamemail@gmail.com","description":"bad foot"}

    //const res = await fetch('http://localhost:3010');
    //const resJson = await res.json();
    
    console.log(resJson);
    return (
        <>
            <CardHeader>
                <CardTitle>{resJson.name}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-4xl font-bold text-green-600">{resJson.email}</p>
                <p className="mt-2 text-gray-500">{resJson.description}</p>
            </CardContent>
        </>);

}