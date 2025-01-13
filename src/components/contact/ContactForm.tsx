"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Send, Loader2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function ContactForm() {
  const { translate } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const formRef = useScrollAnimation<HTMLDivElement>({
    threshold: 0.2,
    animation: "animate-fade-in-up",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      address: formData.get("address"),
      serviceType: formData.get("serviceType"),
      preferredDate: formData.get("preferredDate"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setSubmitStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error("Failed to send message:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto" ref={formRef}>
      <CardHeader className="text-center space-y-2">
        <CardTitle className="font-serif text-2xl text-hygge-900">
          {translate("contact.title")}
        </CardTitle>
        <p className="text-hygge-600">{translate("contact.description")}</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="font-medium text-hygge-700">
                {translate("contact.name")}
              </Label>
              <Input
                id="name"
                name="name"
                required
                placeholder={translate("contact.namePlaceholder")}
                className="transition-all duration-200 hover:border-primary-300 focus:border-primary-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="font-medium text-hygge-700">
                {translate("contact.email")}
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder={translate("contact.emailPlaceholder")}
                className="transition-all duration-200 hover:border-primary-300 focus:border-primary-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="font-medium text-hygge-700">
                {translate("contact.phone")}
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder={translate("contact.phonePlaceholder")}
                className="transition-all duration-200 hover:border-primary-300 focus:border-primary-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address" className="font-medium text-hygge-700">
                {translate("contact.address")}
              </Label>
              <Input
                id="address"
                name="address"
                required
                placeholder={translate("contact.addressPlaceholder")}
                className="transition-all duration-200 hover:border-primary-300 focus:border-primary-500"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="serviceType" className="font-medium text-hygge-700">
              {translate("contact.serviceType")}
            </Label>
            <select
              id="serviceType"
              name="serviceType"
              className="w-full rounded-md border border-input bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
              required
            >
              <option value="standard">{translate("Standard Cleaning")}</option>
              <option value="deep">{translate("Deep Cleaning")}</option>
              <option value="small">{translate("Small Home Package")}</option>
              <option value="medium">{translate("Medium Home Package")}</option>
              <option value="deep-package">
                {translate("Deep Clean Package")}
              </option>
            </select>
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="preferredDate"
              className="font-medium text-hygge-700"
            >
              {translate("contact.preferredDate")}
            </Label>
            <div className="relative">
              <Input
                id="preferredDate"
                name="preferredDate"
                type="date"
                required
                className="w-full transition-all duration-200 hover:border-primary-300 focus:border-primary-500"
              />
              <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="font-medium text-hygge-700">
              {translate("contact.message")}
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder={translate("contact.messagePlaceholder")}
              className="min-h-[100px] transition-all duration-200 hover:border-primary-300 focus:border-primary-500"
            />
          </div>

          {submitStatus === "success" && (
            <div className="p-4 rounded-lg bg-green-50 text-green-700 border border-green-200 flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <p>{translate("contact.successMessage")}</p>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="p-4 rounded-lg bg-red-50 text-red-700 border border-red-200 flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
              <p>{translate("contact.errorMessage")}</p>
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-primary-600 hover:bg-primary-700 font-medium p-6 h-auto transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="flex items-center space-x-2">
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>{translate("contact.sending")}</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Send className="h-5 w-5" />
                <span>{translate("contact.send")}</span>
              </div>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
