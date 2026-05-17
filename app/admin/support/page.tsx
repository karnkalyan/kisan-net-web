"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Search, Filter, CheckCircle, Clock, HelpCircle, RefreshCw } from "lucide-react"

export default function AdminSupportPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  // Mock ticket data
  const tickets = [
    {
      id: "TKT-1001",
      subject: "Internet Connection Issue",
      description: "Customer is experiencing frequent disconnections in the evening.",
      status: "open",
      priority: "high",
      category: "technical",
      createdAt: "2023-05-15T10:30:00",
      updatedAt: "2023-05-15T14:45:00",
      customer: {
        name: "Ram Sharma",
        email: "ram.sharma@example.com",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      assignedTo: {
        name: "Anil Thapa",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      messages: 4,
    },
    {
      id: "TKT-1002",
      subject: "Billing Inquiry",
      description: "Customer has questions about their recent invoice.",
      status: "pending",
      priority: "medium",
      category: "billing",
      createdAt: "2023-05-14T09:15:00",
      updatedAt: "2023-05-15T11:20:00",
      customer: {
        name: "Sita Tamang",
        email: "sita.tamang@example.com",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      assignedTo: {
        name: "Binod Karki",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      messages: 3,
    },
    {
      id: "TKT-1003",
      subject: "Package Upgrade Request",
      description: "Customer wants to upgrade from Standard to Premium package.",
      status: "resolved",
      priority: "low",
      category: "sales",
      createdAt: "2023-05-13T14:20:00",
      updatedAt: "2023-05-14T10:30:00",
      customer: {
        name: "Hari Thapa",
        email: "hari.thapa@example.com",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      assignedTo: {
        name: "Sarita Rai",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      messages: 5,
    },
    {
      id: "TKT-1004",
      subject: "Router Configuration Help",
      description: "Customer needs assistance setting up their new router.",
      status: "open",
      priority: "medium",
      category: "technical",
      createdAt: "2023-05-15T08:45:00",
      updatedAt: "2023-05-15T13:10:00",
      customer: {
        name: "Anita Gurung",
        email: "anita.gurung@example.com",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      assignedTo: {
        name: "Anil Thapa",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      messages: 2,
    },
    {
      id: "TKT-1005",
      subject: "Service Outage Report",
      description: "Customer reporting complete service outage in Jhapa area.",
      status: "pending",
      priority: "high",
      category: "technical",
      createdAt: "2023-05-15T07:30:00",
      updatedAt: "2023-05-15T09:15:00",
      customer: {
        name: "Bijay Rai",
        email: "bijay.rai@example.com",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      assignedTo: {
        name: "Sarita Rai",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      messages: 6,
    },
  ]

  // Filter tickets based on active tab and search query
  const filteredTickets = tickets.filter((ticket) => {
    const matchesTab =
      activeTab === "all" ||
      (activeTab === "open" && ticket.status === "open") ||
      (activeTab === "pending" && ticket.status === "pending") ||
      (activeTab === "resolved" && ticket.status === "resolved")

    const matchesSearch =
      searchQuery === "" ||
      ticket.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.customer.name.toLowerCase().includes(searchQuery.toLowerCase())

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
          <h1 className="text-3xl font-bold tracking-tight">Support Tickets</h1>
          <p className="text-gray-500">Manage and respond to customer support requests.</p>
        </div>
        <Button>Create New Ticket</Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-2/3">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <CardTitle>Tickets</CardTitle>
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
              <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
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
                          <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center gap-2">
                              <Avatar className="h-6 w-6">
                                <AvatarImage src={ticket.customer.avatar} alt={ticket.customer.name} />
                                <AvatarFallback>{ticket.customer.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <span className="text-sm">{ticket.customer.name}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-gray-500">Assigned to:</span>
                              <Avatar className="h-6 w-6">
                                <AvatarImage src={ticket.assignedTo.avatar} alt={ticket.assignedTo.name} />
                                <AvatarFallback>{ticket.assignedTo.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <span className="text-sm">{ticket.assignedTo.name}</span>
                            </div>
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
                      </div>
                    )}
                  </div>
                </TabsContent>

                <TabsContent value="open" className="m-0">
                  {/* Same structure as "all" tab but filtered for open tickets */}
                  <div className="divide-y">
                    {filteredTickets.length > 0 ? (
                      filteredTickets.map((ticket) => (
                        <div key={ticket.id} className="p-4 hover:bg-gray-50 transition-colors">
                          {/* Same ticket display structure as above */}
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
                          <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center gap-2">
                              <Avatar className="h-6 w-6">
                                <AvatarImage src={ticket.customer.avatar} alt={ticket.customer.name} />
                                <AvatarFallback>{ticket.customer.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <span className="text-sm">{ticket.customer.name}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-gray-500">Assigned to:</span>
                              <Avatar className="h-6 w-6">
                                <AvatarImage src={ticket.assignedTo.avatar} alt={ticket.assignedTo.name} />
                                <AvatarFallback>{ticket.assignedTo.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <span className="text-sm">{ticket.assignedTo.name}</span>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="p-8 text-center">
                        <CheckCircle className="mx-auto h-12 w-12 text-gray-300" />
                        <h3 className="mt-2 text-lg font-medium">No open tickets</h3>
                        <p className="mt-1 text-gray-500">
                          There are currently no open tickets that match your criteria.
                        </p>
                      </div>
                    )}
                  </div>
                </TabsContent>

                <TabsContent value="pending" className="m-0">
                  {/* Same structure for pending tickets */}
                  <div className="divide-y">
                    {filteredTickets.length > 0 ? (
                      filteredTickets.map((ticket) => (
                        <div key={ticket.id} className="p-4 hover:bg-gray-50 transition-colors">
                          {/* Same ticket display structure */}
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
                          <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center gap-2">
                              <Avatar className="h-6 w-6">
                                <AvatarImage src={ticket.customer.avatar} alt={ticket.customer.name} />
                                <AvatarFallback>{ticket.customer.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <span className="text-sm">{ticket.customer.name}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-gray-500">Assigned to:</span>
                              <Avatar className="h-6 w-6">
                                <AvatarImage src={ticket.assignedTo.avatar} alt={ticket.assignedTo.name} />
                                <AvatarFallback>{ticket.assignedTo.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <span className="text-sm">{ticket.assignedTo.name}</span>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="p-8 text-center">
                        <Clock className="mx-auto h-12 w-12 text-gray-300" />
                        <h3 className="mt-2 text-lg font-medium">No pending tickets</h3>
                        <p className="mt-1 text-gray-500">
                          There are currently no pending tickets that match your criteria.
                        </p>
                      </div>
                    )}
                  </div>
                </TabsContent>

                <TabsContent value="resolved" className="m-0">
                  {/* Same structure for resolved tickets */}
                  <div className="divide-y">
                    {filteredTickets.length > 0 ? (
                      filteredTickets.map((ticket) => (
                        <div key={ticket.id} className="p-4 hover:bg-gray-50 transition-colors">
                          {/* Same ticket display structure */}
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
                          <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center gap-2">
                              <Avatar className="h-6 w-6">
                                <AvatarImage src={ticket.customer.avatar} alt={ticket.customer.name} />
                                <AvatarFallback>{ticket.customer.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <span className="text-sm">{ticket.customer.name}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-gray-500">Assigned to:</span>
                              <Avatar className="h-6 w-6">
                                <AvatarImage src={ticket.assignedTo.avatar} alt={ticket.assignedTo.name} />
                                <AvatarFallback>{ticket.assignedTo.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <span className="text-sm">{ticket.assignedTo.name}</span>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="p-8 text-center">
                        <CheckCircle className="mx-auto h-12 w-12 text-gray-300" />
                        <h3 className="mt-2 text-lg font-medium">No resolved tickets</h3>
                        <p className="mt-1 text-gray-500">
                          There are currently no resolved tickets that match your criteria.
                        </p>
                      </div>
                    )}
                  </div>
                </TabsContent>
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
        </div>

        <div className="w-full md:w-1/3">
          <Card>
            <CardHeader>
              <CardTitle>Support Statistics</CardTitle>
              <CardDescription>Overview of ticket status and response times</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-blue-600 text-sm font-medium">Open Tickets</div>
                    <div className="text-2xl font-bold mt-1">{tickets.filter((t) => t.status === "open").length}</div>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <div className="text-yellow-600 text-sm font-medium">Pending</div>
                    <div className="text-2xl font-bold mt-1">
                      {tickets.filter((t) => t.status === "pending").length}
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="text-green-600 text-sm font-medium">Resolved</div>
                    <div className="text-2xl font-bold mt-1">
                      {tickets.filter((t) => t.status === "resolved").length}
                    </div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="text-purple-600 text-sm font-medium">Total</div>
                    <div className="text-2xl font-bold mt-1">{tickets.length}</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <h3 className="text-sm font-medium mb-3">Response Time</h3>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-sm">
                        <span>Average First Response</span>
                        <span className="font-medium">1h 23m</span>
                      </div>
                      <div className="mt-1 h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm">
                        <span>Average Resolution Time</span>
                        <span className="font-medium">8h 15m</span>
                      </div>
                      <div className="mt-1 h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{ width: "65%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <h3 className="text-sm font-medium mb-3">Categories</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Technical</span>
                      <span className="font-medium">{tickets.filter((t) => t.category === "technical").length}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Billing</span>
                      <span className="font-medium">{tickets.filter((t) => t.category === "billing").length}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Sales</span>
                      <span className="font-medium">{tickets.filter((t) => t.category === "sales").length}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View Detailed Reports
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
