import { ContactForm } from "@/components/contact/ContactForm";

export const metadata = {
  title: "HyggeClean - Contact",
  description: "Contact us for professional cleaning services in Copenhagen",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <ContactForm />
      </div>
    </div>
  );
}
