"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Search, Filter, HelpCircle, RefreshCw, PlusCircle } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"

export default function UserSupportPage() {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState("tickets")
  const [searchQuery, setSearchQuery] = useState("")

  // Mock ticket data
  const tickets = [
    {
      id: "TKT-1001",
      subject: "Internet Connection Issue",
      description: "I'm experiencing frequent disconnections in the evening.",
      status: "open",
      priority: "high",
      category: "technical",
      createdAt: "2023-05-15T10:30:00",
      updatedAt: "2023-05-15T14:45:00",
      messages: 4,
    },
    {
      id: "TKT-1002",
      subject: "Billing Inquiry",
      description: "I have questions about my recent invoice.",
      status: "pending",
      priority: "medium",
      category: "billing",
      createdAt: "2023-05-14T09:15:00",
      updatedAt: "2023-05-15T11:20:00",
      messages: 3,
    },
    {
      id: "TKT-1003",
      subject: "Package Upgrade Request",
      description: "I want to upgrade from Standard to Premium package.",
      status: "resolved",
      priority: "low",
      category: "sales",
      createdAt: "2023-05-13T14:20:00",
      updatedAt: "2023-05-14T10:30:00",
      messages: 5,
    },
  ]

  // Filter tickets based on active tab and search query
  const filteredTickets = tickets.filter((ticket) => {
    const matchesTab =
      activeTab === "tickets" ||
      (activeTab === "open" && ticket.status === "open") ||
      (activeTab === "pending" && ticket.status === "pending") ||
      (activeTab === "resolved" && ticket.status === "resolved")

    const matchesSearch =
      searchQuery === "" ||
      ticket.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.description.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesTab && matchesSearch
  })

  // Get status badge color
  const getStatusBadge = (status) => {
    switch (status) {
      case "open":
        return (
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
            Open
          </Badge>
        )
      case "pending":
        return (
          <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
            Pending
          </Badge>
        )
      case "resolved":
        return (
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            Resolved
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  // Get priority badge
  const getPriorityBadge = (priority) => {
    switch (priority) {
      case "high":
        return <Badge className="bg-red-500">High</Badge>
      case "medium":
        return <Badge className="bg-yellow-500">Medium</Badge>
      case "low":
        return <Badge className="bg-green-500">Low</Badge>
      default:
        return <Badge>{priority}</Badge>
    }
  }

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Support</h1>
          <p className="text-gray-500">Get help with your internet service</p>
        </div>
        <Button onClick={() => setActiveTab("new-ticket")}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Create New Ticket
        </Button>
      </div>

      <Tabs defaultValue="tickets" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="tickets">My Tickets</TabsTrigger>
          <TabsTrigger value="new-ticket">New Ticket</TabsTrigger>
          <TabsTrigger value="faq">FAQ</TabsTrigger>
        </TabsList>

        <TabsContent value="tickets" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <CardTitle>Support Tickets</CardTitle>
                <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                    <Input
                      type="search"
                      placeholder="Search tickets..."
                      className="pl-8 w-full"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <RefreshCw className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <Tabs defaultValue="all" className="w-full">
                <div className="px-6 pt-2">
                  <TabsList className="grid grid-cols-4 w-full">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="open">Open</TabsTrigger>
                    <TabsTrigger value="pending">Pending</TabsTrigger>
                    <TabsTrigger value="resolved">Resolved</TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="all" className="m-0">
                  <div className="divide-y">
                    {filteredTickets.length > 0 ? (
                      filteredTickets.map((ticket) => (
                        <div key={ticket.id} className="p-4 hover:bg-gray-50 transition-colors">
                          <div className="flex flex-col md:flex-row justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <h3 className="font-medium">{ticket.subject}</h3>
                                {getPriorityBadge(ticket.priority)}
                              </div>
                              <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                                <span>{ticket.id}</span>
                                <span>•</span>
                                <span>{ticket.category}</span>
                                <span>•</span>
                                <span>Updated {formatDate(ticket.updatedAt)}</span>
                              </div>
                              <p className="text-sm text-gray-600 mt-2">{ticket.description}</p>
                            </div>
                            <div className="flex flex-row md:flex-col items-center md:items-end gap-4 md:gap-2">
                              {getStatusBadge(ticket.status)}
                              <div className="flex items-center gap-1 text-sm text-gray-500">
                                <MessageSquare className="h-4 w-4" />
                                <span>{ticket.messages}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-end mt-4">
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="p-8 text-center">
                        <HelpCircle className="mx-auto h-12 w-12 text-gray-300" />
                        <h3 className="mt-2 text-lg font-medium">No tickets found</h3>
                        <p className="mt-1 text-gray-500">
                          Try adjusting your search or filter to find what you're looking for.
                        </p>
                        <Button className="mt-4" onClick={() => setActiveTab("new-ticket")}>
                          Create New Ticket
                        </Button>
                      </div>
                    )}
                  </div>
                </TabsContent>

                {/* Other tab contents would be similar */}
              </Tabs>
            </CardContent>
            <CardFooter className="flex items-center justify-between py-4">
              <div className="text-sm text-gray-500">
                Showing {filteredTickets.length} of {tickets.length} tickets
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="new-ticket" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Create New Support Ticket</CardTitle>
              <CardDescription>Submit a new support request</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="ticket-subject">Subject</Label>
                <Input id="ticket-subject" placeholder="Brief description of your issue" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="ticket-category">Category</Label>
                <Select>
                  <SelectTrigger id="ticket-category">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="technical">Technical Support</SelectItem>
                    <SelectItem value="billing">Billing & Payments</SelectItem>
                    <SelectItem value="sales">Sales & Upgrades</SelectItem>
                    <SelectItem value="general">General Inquiry</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="ticket-priority">Priority</Label>
                <Select defaultValue="medium">
                  <SelectTrigger id="ticket-priority">
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="ticket-description">Description</Label>
                <Textarea id="ticket-description" placeholder="Please provide details about your issue" rows={5} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="ticket-attachment">Attachments (Optional)</Label>
                <Input id="ticket-attachment" type="file" />
                <p className="text-xs text-gray-500">
                  You can upload screenshots or other files to help us understand your issue better. Maximum file size:
                  5MB.
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => setActiveTab("tickets")}>
                Cancel
              </Button>
              <Button>Submit Ticket</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="faq" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>Find answers to common questions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium text-lg">Internet Connection Issues</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-medium">Why is my internet connection slow?</h4>
                      <p className="text-sm text-gray-600 mt-2">
                        Slow internet can be caused by several factors including: distance from the router, interference
                        from other devices, too many devices connected simultaneously, or network congestion during peak
                        hours. Try restarting your router, connecting via ethernet cable, or reducing the number of
                        connected devices.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-medium">What should I do if my internet keeps disconnecting?</h4>
                      <p className="text-sm text-gray-600 mt-2">
                        First, try restarting your router. If the issue persists, check if your router firmware is up to
                        date. Make sure your router is placed in an optimal location away from interference. If problems
                        continue, please create a support ticket so our technicians can assist you.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium text-lg">Billing & Payments</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-medium">When is my payment due?</h4>
                      <p className="text-sm text-gray-600 mt-2">
                        Payments are due on the 15th of each month. You can find your exact payment due date on your
                        invoice or in the billing section of your user dashboard.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-medium">What payment methods do you accept?</h4>
                      <p className="text-sm text-gray-600 mt-2">
                        We accept payments through eSewa, Khalti, FonePay, ConnectIPS, and bank transfers. You can set
                        up your preferred payment method in the billing section of your dashboard.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium text-lg">Service & Plans</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-medium">How do I upgrade my plan?</h4>
                      <p className="text-sm text-gray-600 mt-2">
                        You can upgrade your plan through the subscription section of your user dashboard. Select the
                        plan you want to upgrade to and follow the instructions. The changes will be reflected in your
                        next billing cycle.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-medium">What is the ownership model?</h4>
                      <p className="text-sm text-gray-600 mt-2">
                        Our unique ownership model transforms subscribers into shareholders over time. A portion of your
                        monthly subscription fee is converted into company shares. After 5 years, you'll have
                        accumulated shares worth NPR 10,000, plus an additional NPR 10,000 bonus from the organization.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-gray-500">
                Can't find what you're looking for?{" "}
                <Button variant="link" className="p-0 h-auto" onClick={() => setActiveTab("new-ticket")}>
                  Create a support ticket
                </Button>
              </p>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
