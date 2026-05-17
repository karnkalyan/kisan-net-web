"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download, FileText, Printer, Search } from "lucide-react"

export default function UserInvoicesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [yearFilter, setYearFilter] = useState("all")

  // Mock invoices data
  const invoices = [
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
    { id: "INV-011", date: "July 15, 2022", amount: 1500, method: "eSewa", status: "Paid" },
    { id: "INV-012", date: "June 15, 2022", amount: 1500, method: "eSewa", status: "Paid" },
  ]

  // Filter invoices based on search query and year filter
  const filteredInvoices = invoices.filter((invoice) => {
    const matchesSearch =
      searchQuery === "" ||
      invoice.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      invoice.date.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesYear =
      yearFilter === "all" ||
      (yearFilter === "2023" && invoice.date.includes("2023")) ||
      (yearFilter === "2022" && invoice.date.includes("2022"))

    return matchesSearch && matchesYear
  })

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Invoices</h1>
          <p className="text-gray-500">View and download your invoices</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <CardTitle>All Invoices</CardTitle>
              <CardDescription>Your complete billing history</CardDescription>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="flex items-center gap-2">
                <Label htmlFor="year-filter" className="whitespace-nowrap">
                  Year:
                </Label>
                <Select defaultValue="all" onValueChange={setYearFilter}>
                  <SelectTrigger id="year-filter" className="w-32">
                    <SelectValue placeholder="All Years" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Years</SelectItem>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2022">2022</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  type="search"
                  placeholder="Search invoices..."
                  className="pl-8 w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Invoice ID</th>
                  <th className="text-left py-3 px-4">Date</th>
                  <th className="text-left py-3 px-4">Amount</th>
                  <th className="text-left py-3 px-4">Payment Method</th>
                  <th className="text-left py-3 px-4">Status</th>
                  <th className="text-right py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredInvoices.length > 0 ? (
                  filteredInvoices.map((invoice) => (
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
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="sm" className="hover:bg-green-100 hover:text-green-700">
                            <FileText className="w-4 h-4" />
                            <span className="sr-only">View</span>
                          </Button>
                          <Button variant="ghost" size="sm" className="hover:bg-green-100 hover:text-green-700">
                            <Download className="w-4 h-4" />
                            <span className="sr-only">Download</span>
                          </Button>
                          <Button variant="ghost" size="sm" className="hover:bg-green-100 hover:text-green-700">
                            <Printer className="w-4 h-4" />
                            <span className="sr-only">Print</span>
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="py-8 text-center text-gray-500">
                      No invoices found matching your search criteria.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between mt-6">
            <div className="text-sm text-gray-500">
              Showing {filteredInvoices.length} of {invoices.length} invoices
            </div>
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

      <Card>
        <CardHeader>
          <CardTitle>Invoice Information</CardTitle>
          <CardDescription>Understanding your invoice details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h3 className="font-medium">Invoice Components</h3>
            <p className="text-sm text-gray-600">Your monthly invoice includes the following components:</p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              <li>Monthly subscription fee for your selected plan</li>
              <li>Any additional services or add-ons</li>
              <li>Applicable taxes and service charges</li>
              <li>Any credits or adjustments to your account</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-medium">Payment Terms</h3>
            <p className="text-sm text-gray-600">
              Payment is due on the 15th of each month. Late payments may result in service interruption. If you have
              any questions about your invoice, please contact our billing department.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-medium">Need Help?</h3>
            <p className="text-sm text-gray-600">
              If you have any questions about your invoices or billing, please contact our support team at
              billing@kisannet.com or call us at +977 1234567890.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
