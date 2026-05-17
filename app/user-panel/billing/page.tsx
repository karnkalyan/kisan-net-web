"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download, Calendar } from "lucide-react"
import Link from "next/link"

export default function UserBillingPage() {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock billing data
  const billingData = {
    plan: "Standard",
    monthlyFee: 1500,
    nextBillingDate: "June 15, 2023",
    paymentMethod: "eSewa",
    accountBalance: 0,
    lastPayment: {
      amount: 1500,
      date: "May 15, 2023",
      method: "eSewa",
      status: "Successful",
    },
    upcomingPayment: {
      amount: 1500,
      date: "June 15, 2023",
    },
  }

  // Mock payment methods
  const paymentMethods = [
    {
      id: "esewa",
      name: "eSewa",
      icon: "💳",
      isDefault: true,
    },
    {
      id: "khalti",
      name: "Khalti",
      icon: "💳",
      isDefault: false,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Billing & Payments</h1>
          <p className="text-gray-500">Manage your payment methods and billing history</p>
        </div>
        <Button className="bg-green-600 hover:bg-green-700">Make a Payment</Button>
      </div>

      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="payment-methods">Payment Methods</TabsTrigger>
          <TabsTrigger value="payment-history">Payment History</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Payment Details</CardTitle>
                <CardDescription>Information about your current plan and payments</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Current Plan:</span>
                    <span className="font-medium">{billingData.plan}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Monthly Fee:</span>
                    <span className="font-medium">NPR {billingData.monthlyFee}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Next Billing Date:</span>
                    <span className="font-medium">{billingData.nextBillingDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Payment Method:</span>
                    <span className="font-medium">{billingData.paymentMethod}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Account Balance:</span>
                    <span className="font-medium">NPR {billingData.accountBalance}</span>
                  </div>
                </div>

                <div className="mt-6">
                  <Button className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white hover:from-green-700 hover:to-green-600 transition-colors">
                    Pay Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Last Payment</CardTitle>
                <CardDescription>Details of your most recent payment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="p-4 bg-gradient-to-br from-green-50 to-green-100/50 rounded-lg">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Amount:</span>
                      <span className="font-medium">NPR {billingData.lastPayment.amount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Date:</span>
                      <span className="font-medium">{billingData.lastPayment.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Method:</span>
                      <span className="font-medium">{billingData.lastPayment.method}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Status:</span>
                      <span className="font-medium text-green-600">{billingData.lastPayment.status}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="p-4 border border-yellow-200 bg-yellow-50 rounded-lg">
                    <div className="flex items-start">
                      <Calendar className="h-5 w-5 text-yellow-500 mr-2 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-yellow-700">Upcoming Payment</h4>
                        <p className="text-sm text-yellow-600">
                          Your next payment of NPR {billingData.upcomingPayment.amount} is due on{" "}
                          {billingData.upcomingPayment.date}.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-green-200 hover:border-green-300 hover:bg-green-50"
                >
                  <Link href="#" onClick={() => setActiveTab("payment-methods")}>
                    Manage Payment Methods
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Recent Invoices</CardTitle>
              <CardDescription>Your recent billing history</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Invoice ID</th>
                      <th className="text-left py-3 px-4">Date</th>
                      <th className="text-left py-3 px-4">Amount</th>
                      <th className="text-left py-3 px-4">Status</th>
                      <th className="text-right py-3 px-4">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { id: "INV-001", date: "May 15, 2023", amount: 1500, status: "Paid" },
                      { id: "INV-002", date: "April 15, 2023", amount: 1500, status: "Paid" },
                      { id: "INV-003", date: "March 15, 2023", amount: 1500, status: "Paid" },
                      { id: "INV-004", date: "February 15, 2023", amount: 1500, status: "Paid" },
                      { id: "INV-005", date: "January 15, 2023", amount: 1500, status: "Paid" },
                    ].map((invoice) => (
                      <tr key={invoice.id} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4">{invoice.id}</td>
                        <td className="py-3 px-4">{invoice.date}</td>
                        <td className="py-3 px-4">NPR {invoice.amount}</td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                            {invoice.status}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right">
                          <Button variant="ghost" size="sm" className="hover:bg-green-100 hover:text-green-700">
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
            <CardFooter>
              <Button asChild variant="outline" className="w-full" onClick={() => setActiveTab("payment-history")}>
                <Link href="#" onClick={() => setActiveTab("payment-history")}>
                  View All Invoices
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="payment-methods" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Your Payment Methods</CardTitle>
              <CardDescription>Manage your saved payment methods</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {paymentMethods.map((method) => (
                <div key={method.id} className="p-4 border rounded-lg flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="text-2xl mr-3">{method.icon}</div>
                    <div>
                      <div className="font-medium">{method.name}</div>
                      <div className="text-sm text-gray-500">{method.isDefault && "Default payment method"}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {method.isDefault && (
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        Default
                      </Badge>
                    )}
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                    {!method.isDefault && (
                      <Button variant="outline" size="sm">
                        Set as Default
                      </Button>
                    )}
                    {!method.isDefault && (
                      <Button variant="outline" size="sm" className="text-red-500 hover:text-red-600">
                        Remove
                      </Button>
                    )}
                  </div>
                </div>
              ))}

              <div className="mt-4">
                <Button className="w-full">Add Payment Method</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Add New Payment Method</CardTitle>
              <CardDescription>Add a new payment method to your account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="payment-type">Payment Type</Label>
                <Select defaultValue="esewa">
                  <SelectTrigger id="payment-type">
                    <SelectValue placeholder="Select payment type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="esewa">eSewa</SelectItem>
                    <SelectItem value="khalti">Khalti</SelectItem>
                    <SelectItem value="fonepay">FonePay</SelectItem>
                    <SelectItem value="connectips">ConnectIPS</SelectItem>
                    <SelectItem value="bank">Bank Transfer</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="account-number">Account Number / Mobile</Label>
                <Input id="account-number" placeholder="Enter your account number or mobile" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="account-name">Account Name</Label>
                <Input id="account-name" placeholder="Enter account holder name" />
              </div>

              <div className="flex items-center space-x-2 mt-4">
                <input type="checkbox" id="default-payment" className="rounded border-gray-300" />
                <Label htmlFor="default-payment">Set as default payment method</Label>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="mr-2">
                Cancel
              </Button>
              <Button>Save Payment Method</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="payment-history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Payment History</CardTitle>
              <CardDescription>View all your past payments and invoices</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Label htmlFor="filter-year" className="whitespace-nowrap">
                    Filter by:
                  </Label>
                  <Select defaultValue="all">
                    <SelectTrigger id="filter-year" className="w-32">
                      <SelectValue placeholder="All Time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Time</SelectItem>
                      <SelectItem value="2023">2023</SelectItem>
                      <SelectItem value="2022">2022</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="relative w-full md:w-auto">
                  <Input placeholder="Search invoices..." className="w-full md:w-64" />
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Invoice ID</th>
                      <th className="text-left py-3 px-4">Date</th>
                      <th className="text-left py-3 px-4">Amount</th>
                      <th className="text-left py-3 px-4">Payment Method</th>
                      <th className="text-left py-3 px-4">Status</th>
                      <th className="text-right py-3 px-4">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { id: "INV-001", date: "May 15, 2023", amount: 1500, method: "eSewa", status: "Paid" },
                      { id: "INV-002", date: "April 15, 2023", amount: 1500, method: "eSewa", status: "Paid" },
                      { id: "INV-003", date: "March 15, 2023", amount: 1500, method: "eSewa", status: "Paid" },
                      { id: "INV-004", date: "February 15, 2023", amount: 1500, method: "eSewa", status: "Paid" },
                      { id: "INV-005", date: "January 15, 2023", amount: 1500, method: "eSewa", status: "Paid" },
                      { id: "INV-006", date: "December 15, 2022", amount: 1500, method: "eSewa", status: "Paid" },
                      { id: "INV-007", date: "November 15, 2022", amount: 1500, method: "eSewa", status: "Paid" },
                      { id: "INV-008", date: "October 15, 2022", amount: 1500, method: "eSewa", status: "Paid" },
                      { id: "INV-009", date: "September 15, 2022", amount: 1500, method: "eSewa", status: "Paid" },
                      { id: "INV-010", date: "August 15, 2022", amount: 1500, method: "eSewa", status: "Paid" },
                    ].map((invoice) => (
                      <tr key={invoice.id} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4">{invoice.id}</td>
                        <td className="py-3 px-4">{invoice.date}</td>
                        <td className="py-3 px-4">NPR {invoice.amount}</td>
                        <td className="py-3 px-4">{invoice.method}</td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                            {invoice.status}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right">
                          <Button variant="ghost" size="sm" className="hover:bg-green-100 hover:text-green-700">
                            <Download className="w-4 h-4 mr-1" />
                            Download
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex items-center justify-between mt-6">
                <div className="text-sm text-gray-500">Showing 10 of 24 invoices</div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
