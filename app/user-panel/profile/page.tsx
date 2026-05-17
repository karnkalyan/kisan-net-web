"use client"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Phone, Save } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"

export default function UserProfilePage() {
  const { user } = useAuth()

  // Mock user profile data
  const userProfile = {
    name: user?.name || "Ram Sharma",
    email: user?.email || "ram.sharma@example.com",
    avatar: user?.avatar || "/placeholder.svg?height=100&width=100",
    phone: "+977 9812345678",
    address: "Jhapa, Nepal",
    joinDate: "January 15, 2023",
    bio: "I'm a farmer from Jhapa district, growing rice and vegetables. I use internet for weather updates and market prices.",
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Profile</h1>
          <p className="text-gray-500">Manage your personal information and preferences</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Profile Picture</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <Avatar className="h-32 w-32">
              <AvatarImage src={userProfile.avatar} alt={userProfile.name} />
              <AvatarFallback className="text-4xl">{userProfile.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="mt-4 text-center">
              <h3 className="font-medium text-lg">{userProfile.name}</h3>
              <p className="text-sm text-gray-500">{userProfile.email}</p>
              <Badge className="mt-2 bg-green-500">Active Customer</Badge>
            </div>
            <div className="w-full mt-6 space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Phone className="h-4 w-4" />
                <span>{userProfile.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <MapPin className="h-4 w-4" />
                <span>{userProfile.address}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Calendar className="h-4 w-4" />
                <span>Joined {userProfile.joinDate}</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              Upload New Picture
            </Button>
          </CardFooter>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>Update your personal details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">First Name</Label>
                <Input id="first-name" defaultValue={userProfile.name.split(" ")[0]} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last Name</Label>
                <Input id="last-name" defaultValue={userProfile.name.split(" ")[1]} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" defaultValue={userProfile.email} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" defaultValue={userProfile.phone} />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input id="address" defaultValue={userProfile.address} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea id="bio" rows={4} defaultValue={userProfile.bio} />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="ml-auto">
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </Button>
          </CardFooter>
        </Card>

        <Card className="md:col-span-3">
          <CardHeader>
            <CardTitle>Account Settings</CardTitle>
            <CardDescription>Manage your account preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Change Password</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input id="current-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input id="confirm-password" type="password" />
                </div>
              </div>
              <Button className="mt-4">Update Password</Button>
            </div>

            <Separator />

            <div className="space-y-2">
              <h3 className="text-lg font-medium">Communication Preferences</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="email-updates" className="rounded border-gray-300" defaultChecked />
                  <Label htmlFor="email-updates">Receive email updates about your service</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="sms-updates" className="rounded border-gray-300" defaultChecked />
                  <Label htmlFor="sms-updates">Receive SMS notifications for important alerts</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="marketing-emails" className="rounded border-gray-300" />
                  <Label htmlFor="marketing-emails">Receive marketing emails about new services</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="newsletter" className="rounded border-gray-300" defaultChecked />
                  <Label htmlFor="newsletter">Subscribe to our monthly newsletter</Label>
                </div>
              </div>
              <Button className="mt-4">Update Preferences</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
