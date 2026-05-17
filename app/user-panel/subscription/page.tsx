"use client"

import { Separator } from "@/components/ui/separator"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, CheckCircle, Download, Wifi } from "lucide-react"
import Link from "next/link"

export default function UserSubscriptionPage() {
  const [activeTab, setActiveTab] = useState("current")

  // Mock subscription data
  const subscription = {
    plan: "Standard",
    status: "active",
    startDate: "January 15, 2023",
    nextBillingDate: "June 15, 2023",
    monthlyFee: 1500,
    speed: "25 Mbps",
    dataLimit: "Unlimited",
    features: [
      "25 Mbps download speed",
      "10 Mbps upload speed",
      "Unlimited data",
      "Priority technical support",
      "Multiple device connection",
      "NPR 9,000 in shares (first year)",
    ],
    shareProgress: {
      current: 7000,
      target: 20000,
      percentage: 35,
    },
    usage: {
      current: 125,
      limit: "Unlimited",
      percentage: 45,
    },
  }

  // Available plans for upgrade
  const availablePlans = [
    {
      name: "Basic",
      price: 1000,
      speed: "10 Mbps",
      dataLimit: "Unlimited",
      features: [
        "10 Mbps download speed",
        "5 Mbps upload speed",
        "Unlimited data",
        "Standard support",
        "Multiple device connection",
        "NPR 6,000 in shares (first year)",
      ],
      recommended: false,
    },
    {
      name: "Standard",
      price: 1500,
      speed: "25 Mbps",
      dataLimit: "Unlimited",
      features: [
        "25 Mbps download speed",
        "10 Mbps upload speed",
        "Unlimited data",
        "Priority technical support",
        "Multiple device connection",
        "NPR 9,000 in shares (first year)",
      ],
      recommended: false,
      current: true,
    },
    {
      name: "Premium",
      price: 2500,
      speed: "50 Mbps",
      dataLimit: "Unlimited",
      features: [
        "50 Mbps download speed",
        "20 Mbps upload speed",
        "Unlimited data",
        "Priority technical support",
        "Multiple device connection",
        "Free router",
        "NPR 15,000 in shares (first year)",
      ],
      recommended: true,
    },
    {
      name: "Ultra",
      price: 4000,
      speed: "100 Mbps",
      dataLimit: "Unlimited",
      features: [
        "100 Mbps download speed",
        "40 Mbps upload speed",
        "Unlimited data",
        "24/7 premium support",
        "Multiple device connection",
        "Free premium router",
        "Free installation",
        "NPR 24,000 in shares (first year)",
      ],
      recommended: false,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Subscription</h1>
          <p className="text-gray-500">Manage your internet subscription and plan details</p>
        </div>
      </div>

      <Tabs defaultValue="current" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="current">Current Plan</TabsTrigger>
          <TabsTrigger value="upgrade">Upgrade Options</TabsTrigger>
          <TabsTrigger value="history">Subscription History</TabsTrigger>
        </TabsList>

        <TabsContent value="current" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <CardTitle>Current Subscription</CardTitle>
                  <CardDescription>Details of your active internet plan</CardDescription>
                </div>
                <Badge className="bg-green-500 mt-2 md:mt-0">{subscription.status}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-green-700">{subscription.plan} Plan</h3>
                    <p className="text-green-600">Active since {subscription.startDate}</p>
                  </div>
                  <div className="px-4 py-2 bg-white rounded-lg border border-green-200 text-center">
                    <div className="text-sm text-gray-500">Monthly Fee</div>
                    <div className="text-xl font-bold text-green-700">NPR {subscription.monthlyFee}</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Plan Features</h3>
                  <ul className="space-y-3">
                    {subscription.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="p-0.5 rounded-full bg-gradient-to-br from-green-400 to-green-500 text-white mt-0.5 shrink-0">
                          <Check className="w-4 h-4" />
                        </div>
                        <span className="ml-2">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Subscription Details</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500">Connection Status</div>
                      <div className="font-medium flex items-center mt-1">
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                        Active
                      </div>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500">Speed</div>
                      <div className="font-medium mt-1">{subscription.speed}</div>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500">Data Limit</div>
                      <div className="font-medium mt-1">{subscription.dataLimit}</div>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500">Next Billing Date</div>
                      <div className="font-medium mt-1">{subscription.nextBillingDate}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Data Usage</h3>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="mb-2">
                      <Progress value={subscription.usage.percentage} className="h-2 bg-blue-100" />
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>{subscription.usage.current} GB used</span>
                      <span>{subscription.usage.limit}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Ownership Progress</h3>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="mb-2">
                      <Progress value={subscription.shareProgress.percentage} className="h-2 bg-purple-100" />
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>NPR {subscription.shareProgress.current.toLocaleString()}</span>
                      <span>NPR {subscription.shareProgress.target.toLocaleString()}</span>
                    </div>
                    <div className="mt-2 text-xs text-gray-500">
                      {subscription.shareProgress.percentage}% of your ownership target
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex gap-3">
              <Button asChild variant="outline" className="flex-1">
                <Link href="/user-panel/usage">View Usage Details</Link>
              </Button>
              <Button className="flex-1 bg-green-600 hover:bg-green-700" onClick={() => setActiveTab("upgrade")}>
                Upgrade Package
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="upgrade" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Available Plans</CardTitle>
              <CardDescription>Choose a plan that suits your needs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {availablePlans.map((plan, index) => (
                  <div
                    key={index}
                    className={`border rounded-lg overflow-hidden ${
                      plan.current
                        ? "border-blue-200 bg-blue-50"
                        : plan.recommended
                          ? "border-green-200"
                          : "border-gray-200"
                    }`}
                  >
                    {plan.recommended && (
                      <div className="bg-green-500 text-white text-center py-1 text-xs font-medium">RECOMMENDED</div>
                    )}
                    {plan.current && (
                      <div className="bg-blue-500 text-white text-center py-1 text-xs font-medium">CURRENT PLAN</div>
                    )}
                    <div className="p-4">
                      <h3 className="text-lg font-bold">{plan.name}</h3>
                      <div className="mt-2 text-2xl font-bold">NPR {plan.price}</div>
                      <p className="text-sm text-gray-500">per month</p>

                      <div className="mt-4 space-y-2">
                        <div className="flex items-center">
                          <Wifi className="h-4 w-4 text-gray-500 mr-2" />
                          <span>{plan.speed}</span>
                        </div>
                        <div className="flex items-center">
                          <Download className="h-4 w-4 text-gray-500 mr-2" />
                          <span>{plan.dataLimit}</span>
                        </div>
                      </div>

                      <Separator className="my-4" />

                      <ul className="space-y-2">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Button
                        className={`w-full mt-4 ${
                          plan.current
                            ? "bg-gray-300 hover:bg-gray-300 cursor-not-allowed"
                            : plan.recommended
                              ? "bg-green-600 hover:bg-green-700"
                              : ""
                        }`}
                        disabled={plan.current}
                      >
                        {plan.current ? "Current Plan" : "Select Plan"}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Subscription History</CardTitle>
              <CardDescription>Your subscription changes and renewals</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    date: "January 15, 2023",
                    action: "Subscription Started",
                    plan: "Standard",
                    amount: 1500,
                    status: "Completed",
                  },
                  {
                    date: "February 15, 2023",
                    action: "Monthly Renewal",
                    plan: "Standard",
                    amount: 1500,
                    status: "Completed",
                  },
                  {
                    date: "March 15, 2023",
                    action: "Monthly Renewal",
                    plan: "Standard",
                    amount: 1500,
                    status: "Completed",
                  },
                  {
                    date: "April 15, 2023",
                    action: "Monthly Renewal",
                    plan: "Standard",
                    amount: 1500,
                    status: "Completed",
                  },
                  {
                    date: "May 15, 2023",
                    action: "Monthly Renewal",
                    plan: "Standard",
                    amount: 1500,
                    status: "Completed",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-medium">{item.action}</div>
                      <div className="text-sm text-gray-500">{item.date}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{item.plan} Plan</div>
                      <div className="text-sm text-gray-500">NPR {item.amount}</div>
                    </div>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      {item.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
