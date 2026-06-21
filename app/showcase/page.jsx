"use client";

import { useState } from "react";
import {
  Button,
  Input,
  Modal,
  Loader,
  Toast,
} from "@/components/ui";

export default function ShowcasePage() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);

    if (!value) {
      setEmailError("Email is required.");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  const handleShowToast = (type) => {
    const messages = {
      default: "Welcome to the Roots & Trails UI showcase.",
      success: "Homestay booking saved successfully!",
      error: "Something went wrong. Please try again.",
      loading: "Fetching trail details...",
    };

    Toast({ message: messages[type], type });
  };

  const handleLoaderDemo = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <main className="pb-20 bg-background">
      <section className="border-b border-primary/5 bg-white/40 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/15 rounded-full mb-4">
            Week 3 SIP
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold font-serif text-foreground">
            UI Component Showcase
          </h1>
          <p className="mt-3 text-foreground/75 max-w-2xl mx-auto">
            Reusable Roots & Trails components built with React and Tailwind CSS.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-12">
        {/* Buttons */}
        <section className="bg-white border border-primary/10 rounded-2xl p-6 sm:p-8 shadow-sm">
          <h2 className="text-xl font-bold font-serif text-foreground mb-6">Buttons</h2>

          <div className="space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-foreground/60 mb-3">
                Variants
              </p>
              <div className="flex flex-wrap gap-3">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="primary" disabled>
                  Disabled
                </Button>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-foreground/60 mb-3">
                Sizes
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Input */}
        <section className="bg-white border border-primary/10 rounded-2xl p-6 sm:p-8 shadow-sm">
          <h2 className="text-xl font-bold font-serif text-foreground mb-6">Input</h2>
          <div className="max-w-md space-y-4">
            <Input
              label="Email Address"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={handleEmailChange}
              error={emailError}
            />
            <Input
              label="Trail Notes"
              type="text"
              placeholder="Optional notes about your trek..."
            />
          </div>
        </section>

        {/* Loader */}
        <section className="bg-white border border-primary/10 rounded-2xl p-6 sm:p-8 shadow-sm">
          <h2 className="text-xl font-bold font-serif text-foreground mb-6">Loader</h2>
          <div className="flex flex-wrap items-center gap-8">
            <Loader size="sm" label="Loading small" />
            <Loader size="md" label="Loading medium" />
            <Loader size="lg" label="Loading large" />
          </div>
          <div className="mt-6 flex items-center gap-4">
            <Button variant="outline" onClick={handleLoaderDemo} disabled={isLoading}>
              Simulate Loading
            </Button>
            {isLoading && <Loader size="md" label="Simulating request" />}
          </div>
        </section>

        {/* Toast */}
        <section className="bg-white border border-primary/10 rounded-2xl p-6 sm:p-8 shadow-sm">
          <h2 className="text-xl font-bold font-serif text-foreground mb-6">Toast</h2>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary" onClick={() => handleShowToast("default")}>
              Default Toast
            </Button>
            <Button variant="secondary" onClick={() => handleShowToast("success")}>
              Success Toast
            </Button>
            <Button variant="outline" onClick={() => handleShowToast("error")}>
              Error Toast
            </Button>
            <Button variant="outline" onClick={() => handleShowToast("loading")}>
              Loading Toast
            </Button>
          </div>
        </section>

        {/* Modal */}
        <section className="bg-white border border-primary/10 rounded-2xl p-6 sm:p-8 shadow-sm">
          <h2 className="text-xl font-bold font-serif text-foreground mb-6">Modal</h2>
          <Button variant="primary" onClick={() => setIsModalOpen(true)}>
            Open Modal
          </Button>

          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title="Book a Homestay"
          >
            <p className="text-sm leading-relaxed mb-6">
              Reserve your stay in an authentic Uttarakhand homestay. Press Escape or click
              outside to close this dialog.
            </p>
            <div className="flex justify-end gap-3">
              <Button variant="outline" onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  setIsModalOpen(false);
                  Toast({ message: "Booking request sent!", type: "success" });
                }}
              >
                Confirm
              </Button>
            </div>
          </Modal>
        </section>
      </div>
    </main>
  );
}
