"use client"
import type React from "react"
import { Phone, Mail, Clock, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { contactInfo } from "@/lib/data" // Import contactInfo

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

type FormStatus = {
  type: "idle" | "loading" | "success" | "error"
  message: string
}

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus({ type: "error", message: "Please fill in all fields" })
      return
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setStatus({ type: "error", message: "Please enter a valid email address" })
      return
    }
    setStatus({ type: "loading", message: "Sending your message..." })
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // In a real application, you would send formData to your backend here
      // const response = await fetch("/api/contact", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(formData),
      // })
      // if (response.ok) {
      setStatus({
        type: "success",
        message: "Message sent successfully!",
      })
      setFormData({ name: "", email: "", subject: "", message: "" })
      // } else {
      //   throw new Error("Server error")
      // }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      })
    }
  }

  return (
    <section className="py-12 relative overflow-hidden bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold text-foreground mb-2">ያግኙን</h2>
          <p className="text-lg text-muted-foreground">
            የሰንበት ትምህርትቤቶች አንድነትን ለማግኘት ከፈለጉ ከታች ያሉትን አድራሻዎች በመጠቀም ማግኘት ይችላሉ
          </p>
        </motion.div>
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/80 text-primary-foreground rounded-lg">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">ስልክ</h4>
                  <p className="text-muted-foreground text-sm">{contactInfo.phone}</p> {/* Using imported data */}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/80 text-primary-foreground rounded-lg">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">ኢሜል</h4>
                  <p className="text-muted-foreground text-sm">{contactInfo.email}</p> {/* Using imported data */}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/80 text-primary-foreground rounded-lg">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">የስራ ሰአት</h4>
                  <p className="text-muted-foreground text-sm">{contactInfo.serviceHours}</p>{" "}
                  {/* Using imported data */}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/80 text-primary-foreground rounded-lg">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">አድራሻ</h4>
                  <p className="text-muted-foreground text-sm">{contactInfo.address}</p> {/* Using imported data */}
                </div>
              </div>
            </div>
          </motion.div>
          {/* Right Column - Compact Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-card p-6 rounded-xl border border-border shadow-xs"
          >
            <h3 className="text-xl font-semibold text-foreground mb-4">ለማንኛውም አይነት ጥያቄ እና አስተያየት ከታች ያለውን ፎርም ይጠቀሙ</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4">
                <div>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="ሙሉ ስም "
                    className="text-sm h-10"
                    required
                  />
                </div>
                <div>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="ኢሜይል አድራሻ"
                    className="text-sm h-10"
                    required
                  />
                </div>
              </div>
              <div>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="ጥያቄ ወይም አስተያየት"
                  className="text-sm h-10"
                  required
                />
              </div>
              <div>
                <Textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="የሚፈልጉትን መረጃ ያስገቡ"
                  className="text-sm"
                  required
                />
              </div>
              {status.type !== "idle" && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-3 rounded-lg text-sm flex items-center gap-2 ${
                    status.type === "success"
                      ? "bg-green-100 text-green-700"
                      : status.type === "error"
                        ? "bg-red-100 text-red-700"
                        : "bg-muted text-muted-foreground"
                  }`}
                >
                  {status.type === "loading" && <Loader2 className="animate-spin w-4 h-4" />}
                  {status.type === "success" && <CheckCircle className="w-4 h-4" />}
                  {status.type === "error" && <AlertCircle className="w-4 h-4" />}
                  <span>{status.message}</span>
                </motion.div>
              )}
              <Button
                type="submit"
                size="sm"
                disabled={status.type === "loading"}
                className="w-full mt-2 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                {status.type === "loading" ? (
                  <>
                    <Loader2 className="mr-2 animate-spin w-4 h-4" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 w-4 h-4" />
                    ይላኩ
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
