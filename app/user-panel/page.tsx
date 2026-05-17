"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Wifi, TrendingUp, CreditCard, FileText, ArrowUpRight } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"

export default function UserDashboardPage() {
  const { user } = useAuth()

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Welcome, {user?.name}</h1>
          <p className="text-gray-500">Manage your internet subscription and account details.</p>
        </div>
        <Button asChild>
          <Link href="/user-panel/support">Contact Support</Link>
        </Button>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="usage">Usage</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Current Plan</CardTitle>
                <Wifi className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Premium 100 Mbps</div>
                <p className="text-xs text-gray-500">
                  <span className="text-green-500">Active</span> - Renews on 15 May, 2023
                </p>
                <div className="mt-4">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/user-panel/package">Manage Plan</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Data Usage</CardTitle>
                <TrendingUp className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">245 GB / Unlimited</div>
                <p className="text-xs text-gray-500">
                  <span className="text-green-500 inline-flex items-center">
                    <ArrowUpRight className="mr-1 h-3 w-3" />
                    12.5%
                  </span>{" "}
                  from last month
                </p>
                <div className="mt-4 h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: "45%" }}></div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Billing Status</CardTitle>
                <CreditCard className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">NPR 1,500</div>
                <p className="text-xs text-gray-500">Next payment due on 15 May, 2023</p>
                <div className="mt-4">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/user-panel/billing">Pay Now</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Recent Invoices</CardTitle>
                <CardDescription>Your recent billing history</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                          <FileText className="h-5 w-5 text-gray-500" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Invoice #{2023050 + i}</p>
                          <p className="text-xs text-gray-500">April {i * 5}, 2023</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">NPR 1,500</p>
                        <p className="text-xs text-green-500">Paid</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <Button variant="link" size="sm" asChild>
                    <Link href="/user-panel/invoices">View All Invoices</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Connection Status</CardTitle>
                <CardDescription>Current status of your internet connection</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Status</p>
                    <p className="text-sm text-green-500 font-medium">Online</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Download Speed</p>
                    <p className="text-sm font-medium">98.5 Mbps</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Upload Speed</p>
                    <p className="text-sm font-medium">45.2 Mbps</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Ping</p>
                    <p className="text-sm font-medium">12 ms</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Uptime</p>
                    <p className="text-sm font-medium">99.8%</p>
                  </div>
                </div>
                <div className="mt-4">
                  <Button variant="outline" size="sm" className="w-full">
                    Run Speed Test
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Usage Tab */}
        <TabsContent value="usage" className="h-[400px] flex items-center justify-center bg-gray-100 rounded-md">
          <p className="text-gray-500">Usage statistics coming soon</p>
        </TabsContent>

        {/* Billing Tab */}
        <TabsContent value="billing" className="h-[400px] flex items-center justify-center bg-gray-100 rounded-md">
          <p className="text-gray-500">Billing details coming soon</p>
        </TabsContent>
      </Tabs>
    </div>
  )
}
