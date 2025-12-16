"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, User, Phone, Briefcase, MessageSquare } from "lucide-react";
import { useQuoteModal } from "@/components/providers/quote-modal-provider";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const services = [
  { value: "signage", label: "Signage" },
  { value: "branding", label: "Branding" },
  { value: "furniture", label: "Furniture & Interior" },
  { value: "decor", label: "Home Décor & Artworks" },
  { value: "gifts", label: "Personalized Gifts" },
  { value: "print", label: "Print & Promotional" },
  { value: "other", label: "Other" },
];

const WHATSAPP_NUMBER = "250784226895";

export function QuoteModal() {
  const { isOpen, closeModal } = useQuoteModal();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.service) newErrors.service = "Please select a service";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const selectedService = services.find(s => s.value === formData.service)?.label || formData.service;

    const message = `🔶 *New Quote Request*

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Service:* ${selectedService}
*Message:* ${formData.message || "No additional details"}`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    // Reset form and close modal
    setFormData({ name: "", phone: "", service: "", message: "" });
    setErrors({});
    closeModal();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
    if (errors.service) {
      setErrors((prev) => ({ ...prev, service: "" }));
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-50 p-4"
          >
            <div className="bg-white dark:bg-neutral-900 border border-black/10 dark:border-white/10 rounded-2xl overflow-hidden shadow-2xl">
              {/* Header */}
              <div className="relative p-6 pb-4 border-b border-black/5 dark:border-white/5">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5 text-neutral-500 dark:text-neutral-400" />
                </button>
                <h2 className="text-2xl font-bold font-heading text-black dark:text-white">
                  Request a Quote
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-1">
                  Get a custom quote for your fabrication project.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={`w-full pl-11 pr-4 py-3 bg-neutral-100 dark:bg-black/50 border ${
                        errors.name ? "border-red-500" : "border-black/10 dark:border-white/10"
                      } rounded-xl text-black dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:outline-none focus:border-primary/50 transition-colors`}
                    />
                  </div>
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+250 7XX XXX XXX"
                      className={`w-full pl-11 pr-4 py-3 bg-neutral-100 dark:bg-black/50 border ${
                        errors.phone ? "border-red-500" : "border-black/10 dark:border-white/10"
                      } rounded-xl text-black dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:outline-none focus:border-primary/50 transition-colors`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Service - Using shadcn Select */}
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Service *
                  </label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500 z-10 pointer-events-none" />
                    <Select value={formData.service} onValueChange={handleServiceChange}>
                      <SelectTrigger 
                        className={`w-full h-12 pl-11 pr-4 bg-neutral-100 dark:bg-black/50 border ${
                          errors.service ? "border-red-500" : "border-black/10 dark:border-white/10"
                        } rounded-xl text-black dark:text-white focus:border-primary/50 focus:ring-0 focus:ring-offset-0 [&>span]:text-left`}
                      >
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent 
                        className="bg-white dark:bg-neutral-900 border border-black/10 dark:border-white/10 rounded-xl shadow-2xl"
                        position="popper"
                        sideOffset={4}
                      >
                        {services.map((service) => (
                          <SelectItem
                            key={service.value}
                            value={service.value}
                            className="text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10 focus:bg-black/10 dark:focus:bg-white/10 focus:text-black dark:focus:text-white rounded-lg cursor-pointer py-3 px-3"
                          >
                            {service.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  {errors.service && (
                    <p className="text-red-500 text-xs mt-1">{errors.service}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Message{" "}
                    <span className="text-neutral-500 font-normal">(optional)</span>
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-neutral-500" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      rows={3}
                      className="w-full pl-11 pr-4 py-3 bg-neutral-100 dark:bg-black/50 border border-black/10 dark:border-white/10 rounded-xl text-black dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                    />
                  </div>
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] transition-all group"
                >
                  Send
                  <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
