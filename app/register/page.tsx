"use client"

import type React from "react"
import { Toaster, toast } from "react-hot-toast"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, Lock, Mail, User, Phone, AlertCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import GradientBackground from "@/components/gradient-background"

export default function RegisterPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    gender: "male",
    address: "",
    district: "",
    ward: "",
    tole: "",
    houseNumber: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
    language: "nepali",
  })
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    // Frontend validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      setIsLoading(false)
      return
    }

    if (!formData.agreeTerms) {
      setError("You must agree to the terms and conditions")
      setIsLoading(false)
      return
    }

    try {
      // Prepare payload for backend (only send relevant fields)
      const payload = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
        gender: formData.gender,
        address: formData.address,
        district: formData.district,
        ward: formData.ward,
        tole: formData.tole,
        houseNumber: formData.houseNumber,
        language: formData.language,
      }

      const res = await fetch("/api/registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      const data = await res.json()

      if (!res.ok) {
        toast.error(data.message || "Something went wrong")
        setIsLoading(false)
        return
      }

      toast.success(data.message || "User registered successfully")

      // Redirect after a short delay
      setTimeout(() => {
        router.push("/login")
      }, 1500)
    } catch (err) {
      console.error(err)
      toast.error("Failed to register. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      {/* Toaster */}
      <Toaster position="top-right" />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <GradientBackground />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 via-green-700/70 to-green-600/70 z-10" />

        <div className="container relative z-20 px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <Card className="border-none shadow-xl">
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl font-bold text-center">
                    {formData.language === "nepali" ? "सदस्यता दर्ता फारम" : "Register Member"}
                  </CardTitle>
                  <CardDescription className="text-center">
                    {formData.language === "nepali"
                      ? "कृपया तलको फारम भर्नुहोस्"
                      : "Please fill out the form below to create your account"}
                  </CardDescription>
                  <div className="flex justify-center space-x-4 pt-2">
                    <Button
                      variant={formData.language === "nepali" ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleSelectChange("language", "nepali")}
                    >
                      नेपाली
                    </Button>
                    <Button
                      variant={formData.language === "english" ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleSelectChange("language", "english")}
                    >
                      English
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  {error && (
                    <Alert variant="destructive" className="mb-4">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}

                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      {/* Personal Information */}
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium">
                          {formData.language === "nepali" ? "व्यक्तिगत विवरण" : "Personal Information"}
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="fullName">{formData.language === "nepali" ? "नाम" : "Full Name"}</Label>
                            <div className="relative">
                              <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                              <Input
                                id="fullName"
                                name="fullName"
                                placeholder={formData.language === "nepali" ? "पूरा नाम" : "Full Name"}
                                className="pl-10"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="gender">{formData.language === "nepali" ? "लिङ्ग" : "Gender"}</Label>
                            <RadioGroup
                              defaultValue="male"
                              className="flex space-x-4"
                              value={formData.gender}
                              onValueChange={(value) => handleSelectChange("gender", value)}
                            >
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="male" id="male" />
                                <Label htmlFor="male">{formData.language === "nepali" ? "पुरुष" : "Male"}</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="female" id="female" />
                                <Label htmlFor="female">{formData.language === "nepali" ? "महिला" : "Female"}</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="other" id="other" />
                                <Label htmlFor="other">{formData.language === "nepali" ? "अन्य" : "Other"}</Label>
                              </div>
                            </RadioGroup>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="email">{formData.language === "nepali" ? "इमेल" : "Email"}</Label>
                            <div className="relative">
                              <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                              <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder={formData.language === "nepali" ? "इमेल ठेगाना" : "Email Address"}
                                className="pl-10"
                                value={formData.email}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="phone">{formData.language === "nepali" ? "फोन नं." : "Phone Number"}</Label>
                            <div className="relative">
                              <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                              <Input
                                id="phone"
                                name="phone"
                                placeholder={formData.language === "nepali" ? "फोन नम्बर" : "Phone Number"}
                                className="pl-10"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Address Information */}
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium">
                          {formData.language === "nepali" ? "ठेगाना विवरण" : "Address Information"}
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="district">{formData.language === "nepali" ? "जिल्ला" : "District"}</Label>
                            <Select
                              value={formData.district}
                              onValueChange={(value) => handleSelectChange("district", value)}
                            >
                              <SelectTrigger>
                                <SelectValue
                                  placeholder={formData.language === "nepali" ? "जिल्ला छान्नुहोस्" : "Select District"}
                                />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="kathmandu">
                                  {formData.language === "nepali" ? "काठमाडौं" : "Kathmandu"}
                                </SelectItem>
                                <SelectItem value="lalitpur">
                                  {formData.language === "nepali" ? "ललितपुर" : "Lalitpur"}
                                </SelectItem>
                                <SelectItem value="bhaktapur">
                                  {formData.language === "nepali" ? "भक्तपुर" : "Bhaktapur"}
                                </SelectItem>
                                <SelectItem value="kavre">
                                  {formData.language === "nepali" ? "काभ्रे" : "Kavre"}
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="address">
                              {formData.language === "nepali" ? "स्थानीय तह (पालिका)" : "Municipality"}
                            </Label>
                            <Input
                              id="address"
                              name="address"
                              placeholder={formData.language === "nepali" ? "स्थानीय तह (पालिका)" : "Municipality"}
                              value={formData.address}
                              onChange={handleChange}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="ward">{formData.language === "nepali" ? "वडा नं." : "Ward No."}</Label>
                            <Input
                              id="ward"
                              name="ward"
                              placeholder={formData.language === "nepali" ? "वडा नं." : "Ward No."}
                              value={formData.ward}
                              onChange={handleChange}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="tole">{formData.language === "nepali" ? "टोल" : "Tole/Street"}</Label>
                            <Input
                              id="tole"
                              name="tole"
                              placeholder={formData.language === "nepali" ? "टोल" : "Tole/Street"}
                              value={formData.tole}
                              onChange={handleChange}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="houseNumber">
                              {formData.language === "nepali" ? "घर नं." : "House No."}
                            </Label>
                            <Input
                              id="houseNumber"
                              name="houseNumber"
                              placeholder={formData.language === "nepali" ? "घर नं." : "House No."}
                              value={formData.houseNumber}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Account Information */}
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium">
                          {formData.language === "nepali" ? "खाता विवरण" : "Account Information"}
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="password">{formData.language === "nepali" ? "पासवर्ड" : "Password"}</Label>
                            <div className="relative">
                              <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                              <Input
                                id="password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                placeholder={formData.language === "nepali" ? "पासवर्ड" : "Password"}
                                className="pl-10"
                                value={formData.password}
                                onChange={handleChange}
                                required
                              />
                              <button
                                type="button"
                                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                                onClick={() => setShowPassword(!showPassword)}
                              >
                                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                              </button>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="confirmPassword">
                              {formData.language === "nepali" ? "पासवर्ड पुष्टि गर्नुहोस्" : "Confirm Password"}
                            </Label>
                            <div className="relative">
                              <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                              <Input
                                id="confirmPassword"
                                name="confirmPassword"
                                type={showPassword ? "text" : "password"}
                                placeholder={formData.language === "nepali" ? "पासवर्ड पुष्टि गर्नुहोस्" : "Confirm Password"}
                                className="pl-10"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="agreeTerms"
                          name="agreeTerms"
                          checked={formData.agreeTerms}
                          onCheckedChange={(checked) =>
                            setFormData((prev) => ({ ...prev, agreeTerms: checked === true }))
                          }
                        />
                        <Label htmlFor="agreeTerms" className="text-sm">
                          {formData.language === "nepali"
                            ? "म नियम र सर्तहरू स्वीकार गर्दछु"
                            : "I agree to the terms and conditions"}
                        </Label>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white hover:from-green-700 hover:to-green-600"
                        disabled={isLoading}
                      >
                        {isLoading
                          ? formData.language === "nepali"
                            ? "दर्ता गर्दै..."
                            : "Registering..."
                          : formData.language === "nepali"
                            ? "दर्ता गर्नुहोस्"
                            : "Register"}
                      </Button>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                  <div className="text-center text-sm">
                    {formData.language === "nepali" ? "पहिले नै खाता छ?" : "Already have an account?"}{" "}
                    <Link href="/login" className="text-green-600 hover:text-green-700 font-medium">
                      {formData.language === "nepali" ? "लगइन गर्नुहोस्" : "Login"}
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
