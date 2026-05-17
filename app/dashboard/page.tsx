"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Download, FileText, HelpCircle, Settings, Wifi, WifiOff } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function DashboardPage() {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  // Mock user data
  const userData = {
    name: "Ram Sharma",
    email: "ram.sharma@example.com",
    plan: "Standard",
    nextBillingDate: "2023-06-15",
    accountBalance: 0,
    dataUsage: {
      used: 125,
      total: "Unlimited",
      percentage: 45,
    },
    shareProgress: {
      current: 7000,
      target: 20000,
      percentage: 35,
    },
    connectionStatus: "Active",
    lastPayment: {
      amount: 1500,
      date: "2023-05-15",
      method: "eSewa",
    },
    invoices: [
      { id: "INV-001", date: "2023-05-15", amount: 1500, status: "Paid" },
      { id: "INV-002", date: "2023-04-15", amount: 1500, status: "Paid" },
      { id: "INV-003", date: "2023-03-15", amount: 1500, status: "Paid" },
    ],
    tickets: [
      { id: "TKT-001", date: "2023-04-10", subject: "Connection Issue", status: "Resolved" },
      { id: "TKT-002", date: "2023-02-22", subject: "Billing Question", status: "Resolved" },
    ],
  }

  const handlePayNow = () => {
    setIsLoading(true)

    // Simulate payment processing
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Payment Successful",
        description: "Your payment has been processed successfully.",
      })
    }, 2000)
  }

  const handleDownloadInvoice = (invoiceId) => {
    toast({
      title: "Invoice Downloaded",
      description: `Invoice ${invoiceId} has been downloaded.`,
    })
  }

  const handleReportIssue = () => {
    toast({
      title: "Support Ticket Created",
      description: "Our team will get back to you shortly.",
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <Navbar />

      <div className="container px-4 py-8 mx-auto mt-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-green-500">
              My Dashboard
            </h1>
            <p className="text-gray-600">Welcome back, {userData.name}</p>
          </div>

          <div className="flex items-center gap-2">
            <div
              className={`px-3 py-1 text-sm font-medium rounded-full ${
                userData.connectionStatus === "Active"
                  ? "bg-gradient-to-r from-green-100 to-green-50 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {userData.connectionStatus === "Active" ? (
                <span className="flex items-center">
                  <Wifi className="w-4 h-4 mr-1" />
                  Active
                </span>
              ) : (
                <span className="flex items-center">
                  <WifiOff className="w-4 h-4 mr-1" />
                  Inactive
                </span>
              )}
            </div>

            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-green-200 hover:border-green-300 hover:bg-green-50"
            >
              <Link href="/dashboard/settings">
                <Settings className="w-4 h-4 mr-1" />
                Settings
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-6 mb-8 md:grid-cols-3">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-1 bg-gradient-to-r from-green-600 to-green-500"></div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Current Plan</CardTitle>
                <CardDescription>Your subscription details</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500">
                  {userData.plan}
                </div>
                <div className="mt-2 text-sm text-gray-500">
                  Next billing: {new Date(userData.nextBillingDate).toLocaleDateString()}
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-green-200 hover:border-green-300 hover:bg-green-50 group"
                >
                  <Link href="/pricing">
                    Upgrade Plan
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-1 bg-gradient-to-r from-blue-600 to-blue-500"></div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Data Usage</CardTitle>
                <CardDescription>Current billing cycle</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-2">
                  <Progress
                    value={userData.dataUsage.percentage}
                    className="h-2 bg-blue-100"
                    indicatorClassName="bg-gradient-to-r from-blue-600 to-blue-400"
                  />
                </div>
                <div className="flex justify-between text-sm">
                  <span>{userData.dataUsage.used} GB used</span>
                  <span>{userData.dataUsage.total}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full border-blue-200 hover:border-blue-300 hover:bg-blue-50"
                  onClick={handleReportIssue}
                >
                  <HelpCircle className="w-4 h-4 mr-2" />
                  Report Issue
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-1 bg-gradient-to-r from-purple-600 to-purple-500"></div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Ownership Progress</CardTitle>
                <CardDescription>Your share accumulation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-2">
                  <Progress
                    value={userData.shareProgress.percentage}
                    className="h-2 bg-purple-100"
                    indicatorClassName="bg-gradient-to-r from-purple-600 to-purple-400"
                  />
                </div>
                <div className="flex justify-between text-sm">
                  <span>NPR {userData.shareProgress.current.toLocaleString()}</span>
                  <span>NPR {userData.shareProgress.target.toLocaleString()}</span>
                </div>
                <div className="mt-2 text-xs text-gray-500">
                  {userData.shareProgress.percentage}% of your ownership target
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-purple-200 hover:border-purple-300 hover:bg-purple-50 group"
                >
                  <Link href="/about">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </div>

        <Tabs defaultValue="billing" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 p-1 bg-gradient-to-r from-green-100 to-green-50 rounded-lg">
            <TabsTrigger
              value="billing"
              className="rounded-md data-[state=active]:bg-white data-[state=active]:text-green-700 data-[state=active]:shadow-sm transition-all"
            >
              Billing & Payments
            </TabsTrigger>
            <TabsTrigger
              value="invoices"
              className="rounded-md data-[state=active]:bg-white data-[state=active]:text-green-700 data-[state=active]:shadow-sm transition-all"
            >
              Invoices
            </TabsTrigger>
            <TabsTrigger
              value="support"
              className="rounded-md data-[state=active]:bg-white data-[state=active]:text-green-700 data-[state=active]:shadow-sm transition-all"
            >
              Support
            </TabsTrigger>
          </TabsList>

          <TabsContent value="billing">
            <Card className="overflow-hidden border-none shadow-lg">
              <div className="h-1 bg-gradient-to-r from-green-600 to-green-500"></div>
              <CardHeader>
                <CardTitle>Billing Information</CardTitle>
                <CardDescription>Manage your payments and billing details</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="mb-4 text-lg font-medium">Payment Details</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Current Plan:</span>
                        <span className="font-medium">{userData.plan}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Monthly Fee:</span>
                        <span className="font-medium">NPR 1,500</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Next Billing Date:</span>
                        <span className="font-medium">{new Date(userData.nextBillingDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Payment Method:</span>
                        <span className="font-medium">eSewa</span>
                      </div>
                    </div>

                    <div className="mt-6">
                      <Button
                        onClick={handlePayNow}
                        disabled={isLoading}
                        className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white hover:from-green-700 hover:to-green-600 transition-colors"
                      >
                        {isLoading ? (
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-2 animate-spin" viewBox="0 0 24 24">
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                                fill="none"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              />
                            </svg>
                            Processing...
                          </span>
                        ) : (
                          "Pay Now"
                        )}
                      </Button>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-4 text-lg font-medium">Last Payment</h3>
                    <div className="p-4 bg-gradient-to-br from-green-50 to-green-100/50 rounded-lg">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-500">Amount:</span>
                          <span className="font-medium">NPR {userData.lastPayment.amount}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Date:</span>
                          <span className="font-medium">
                            {new Date(userData.lastPayment.date).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Method:</span>
                          <span className="font-medium">{userData.lastPayment.method}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Status:</span>
                          <span className="font-medium text-green-600">Successful</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <Button
                        asChild
                        variant="outline"
                        className="w-full border-green-200 hover:border-green-300 hover:bg-green-50"
                      >
                        <Link href="/dashboard/payment-methods">Manage Payment Methods</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="invoices">
            <Card className="overflow-hidden border-none shadow-lg">
              <div className="h-1 bg-gradient-to-r from-green-600 to-green-500"></div>
              <CardHeader>
                <CardTitle>Invoices</CardTitle>
                <CardDescription>View and download your past invoices</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-green-100">
                        <th className="py-3 text-left">Invoice ID</th>
                        <th className="py-3 text-left">Date</th>
                        <th className="py-3 text-left">Amount</th>
                        <th className="py-3 text-left">Status</th>
                        <th className="py-3 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {userData.invoices.map((invoice) => (
                        <tr
                          key={invoice.id}
                          className="border-b border-green-100 hover:bg-green-50/50 transition-colors"
                        >
                          <td className="py-3">{invoice.id}</td>
                          <td className="py-3">{new Date(invoice.date).toLocaleDateString()}</td>
                          <td className="py-3">NPR {invoice.amount}</td>
                          <td className="py-3">
                            <span
                              className={`px-2 py-1 text-xs font-medium rounded-full ${
                                invoice.status === "Paid"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-yellow-100 text-yellow-800"
                              }`}
                            >
                              {invoice.status}
                            </span>
                          </td>
                          <td className="py-3 text-right">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleDownloadInvoice(invoice.id)}
                              className="hover:bg-green-100 hover:text-green-700"
                            >
                              <Download className="w-4 h-4 mr-1" />
                              Download
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="support">
            <Card className="overflow-hidden border-none shadow-lg">
              <div className="h-1 bg-gradient-to-r from-green-600 to-green-500"></div>
              <CardHeader>
                <CardTitle>Support Tickets</CardTitle>
                <CardDescription>View your support history and create new tickets</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <Button
                    className="bg-gradient-to-r from-green-600 to-green-500 text-white hover:from-green-700 hover:to-green-600 transition-colors"
                    onClick={handleReportIssue}
                  >
                    Create New Support Ticket
                  </Button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-green-100">
                        <th className="py-3 text-left">Ticket ID</th>
                        <th className="py-3 text-left">Date</th>
                        <th className="py-3 text-left">Subject</th>
                        <th className="py-3 text-left">Status</th>
                        <th className="py-3 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {userData.tickets.map((ticket) => (
                        <tr
                          key={ticket.id}
                          className="border-b border-green-100 hover:bg-green-50/50 transition-colors"
                        >
                          <td className="py-3">{ticket.id}</td>
                          <td className="py-3">{new Date(ticket.date).toLocaleDateString()}</td>
                          <td className="py-3">{ticket.subject}</td>
                          <td className="py-3">
                            <span
                              className={`px-2 py-1 text-xs font-medium rounded-full ${
                                ticket.status === "Resolved"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-blue-100 text-blue-800"
                              }`}
                            >
                              {ticket.status}
                            </span>
                          </td>
                          <td className="py-3 text-right">
                            <Button
                              asChild
                              variant="ghost"
                              size="sm"
                              className="hover:bg-green-100 hover:text-green-700"
                            >
                              <Link href={`/dashboard/tickets/${ticket.id}`}>
                                <FileText className="w-4 h-4 mr-1" />
                                View
                              </Link>
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {userData.tickets.length === 0 && (
                  <div className="p-8 text-center">
                    <p className="text-gray-500">You don't have any support tickets yet.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  )
}
