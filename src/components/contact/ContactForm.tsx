"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "lucide-react";

export function ContactForm() {
  const { translate } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

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
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-center text-2xl">
          {translate("contact.title")}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">{translate("contact.name")}</Label>
              <Input
                id="name"
                name="name"
                required
                placeholder={translate("contact.namePlaceholder")}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">{translate("contact.email")}</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder={translate("contact.emailPlaceholder")}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">{translate("contact.phone")}</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder={translate("contact.phonePlaceholder")}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">{translate("contact.address")}</Label>
              <Input
                id="address"
                name="address"
                required
                placeholder={translate("contact.addressPlaceholder")}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="serviceType">
              {translate("contact.serviceType")}
            </Label>
            <select
              id="serviceType"
              name="serviceType"
              className="w-full rounded-md border border-input bg-background px-3 py-2"
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
            <Label htmlFor="preferredDate">
              {translate("contact.preferredDate")}
            </Label>
            <div className="relative">
              <Input
                id="preferredDate"
                name="preferredDate"
                type="date"
                required
                className="w-full"
              />
              <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">{translate("contact.message")}</Label>
            <Textarea
              id="message"
              name="message"
              placeholder={translate("contact.messagePlaceholder")}
              className="min-h-[100px]"
            />
          </div>

          {submitStatus === "success" && (
            <div className="p-3 rounded bg-green-50 text-green-600">
              {translate("contact.successMessage")}
            </div>
          )}

          {submitStatus === "error" && (
            <div className="p-3 rounded bg-red-50 text-red-600">
              {translate("contact.errorMessage")}
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? translate("contact.sending")
              : translate("contact.send")}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
