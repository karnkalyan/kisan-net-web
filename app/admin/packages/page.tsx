"use client"

import { Plus, Edit, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Sample packages data
const packagesData = [
  {
    id: "1",
    name: "Basic",
    price: "NPR 1,000/month",
    speed: "10 Mbps",
    users: 245,
    color: "#3B82F6", // blue-500
  },
  {
    id: "2",
    name: "Standard",
    price: "NPR 1,500/month",
    speed: "25 Mbps",
    users: 512,
    color: "#10B981", // green-500
  },
  {
    id: "3",
    name: "Premium",
    price: "NPR 2,000/month",
    speed: "50 Mbps",
    users: 267,
    color: "#8B5CF6", // purple-500
  },
  {
    id: "4",
    name: "Business",
    price: "NPR 5,000/month",
    speed: "100 Mbps",
    users: 124,
    color: "#F97316", // orange-500
  },
  {
    id: "5",
    name: "Enterprise",
    price: "NPR 10,000/month",
    speed: "250 Mbps",
    users: 76,
    color: "#EF4444", // red-500
  },
  {
    id: "6",
    name: "Custom",
    price: "Variable",
    speed: "Custom",
    users: 24,
    color: "#6B7280", // gray-500
  },
]

export default function PackagesPage() {
  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Package Management</h1>
          <p className="text-gray-500">Manage internet packages and pricing</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="mr-2 h-4 w-4" />
            Create Package
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packagesData.map((pkg) => (
          <Card key={pkg.id} className="border-t-4" style={{ borderTopColor: pkg.color }}>
            <CardHeader className="pb-2">
              <CardTitle>{pkg.name}</CardTitle>
              <CardDescription>{pkg.price}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Speed:</span>
                  <span className="text-sm font-medium">{pkg.speed}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Active Users:</span>
                  <span className="text-sm font-medium">{pkg.users}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Features:</span>
                  <span className="text-sm font-medium">View Details</span>
                </div>
                <div className="flex justify-end gap-2 mt-4">
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm" className="text-red-500 hover:text-red-600">
                    <Trash2 className="h-4 w-4 mr-1" />
                    Delete
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
