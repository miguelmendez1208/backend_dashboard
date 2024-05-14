"use client"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react";


export default function GetData({ ID = "b14e4f71-73d9-40ea-8e5c-c3b7917054ed", Name = "Miguel", Email = "migmendez@dallasisd.org", Description = "Broken Button", Status = "New" }) {
    const [newStatus, setNewStatus] = useState(Status);
    const [status, setStatus] = useState(Status);

    const handleUpdateStatus = async () => {
        try {
            const apiUrl = `http://localhost:3000/api/updateStatus?id=${ID}&status=${newStatus}`;
            const response = await fetch(apiUrl)

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Update successful:', data);
            setStatus(data.status);
        } catch (error) {
            console.error('Failed to update:', error);
        }
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>{ID}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="text-gray-500">Name</p>
                        <p className="font-medium">{Name}</p>
                    </div>
                    <div>
                        <p className="text-gray-500">Email</p>
                        <p className="font-medium">{Email}</p>
                    </div>
                    <div>
                        <p className="text-gray-500">Description</p>
                        <p className="font-medium">{Description}</p>
                    </div>
                    <div>
                        <p className="text-gray-500">Status</p>
                        <p className="font-medium text-green-600">{status}</p>
                    </div>

                    <div>
                        <p className="text-gray-500">Change Status</p>
                        <div className="flex items-center gap-2">
                            <Button
                                className={`bg-green-600 text-white ${newStatus === "New" ? "hover:bg-green-800" : "hover:bg-green-700"}`}
                                size="sm"
                                variant="outline"
                                onClick={() => setNewStatus("New")}
                            >
                                New
                            </Button>
                            <Button
                                className={`bg-yellow-600 text-white ${newStatus === "In Progress" ? "hover:bg-yellow-800" : "hover:bg-yellow-700"}`}
                                size="sm"
                                variant="outline"
                                onClick={() => setNewStatus("In Progress")}
                            >
                                In Progress
                            </Button>
                            <Button
                                className={`bg-blue-600 text-white ${newStatus === "Completed" ? "hover:bg-blue-800" : "hover:bg-blue-700"}`}
                                size="sm"
                                variant="outline"
                                onClick={() => setNewStatus("Completed")}
                            >
                                Completed
                            </Button>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <Button size="sm" onClick={handleUpdateStatus}>Update Status</Button>
                    </div>
                </div>
            </CardContent>
        </Card>);
}