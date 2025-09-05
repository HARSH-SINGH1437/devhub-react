"use client"

import * as React from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"

interface LegalDialogProps {
  type: "terms" | "privacy"
  children: React.ReactNode
}

export function LegalDialog({ type, children }: LegalDialogProps) {
  const content =
    type === "terms" ? (
      <>
        <DialogTitle>Terms of Service</DialogTitle>
        <DialogDescription>Please read our terms carefully.</DialogDescription>
        <ScrollArea className="max-h-[60vh] pr-4 mt-2 space-y-3 text-sm leading-relaxed">
          <p>
            By signing in with GitHub, you agree that DevHub may fetch your
            public GitHub profile information including your username, avatar,
            and repositories.
          </p>
          <p>
            Your GitHub data may be displayed publicly within DevHub so that
            other users can search for you and connect with you.
          </p>
          <p>
            Authentication is handled securely via GitHub OAuth; DevHub never
            stores your password.
          </p>
          <p>
            If you do not agree, please do not continue using the application.
          </p>
        </ScrollArea>
      </>
    ) : (
      <>
        <DialogTitle>Privacy Policy</DialogTitle>
        <DialogDescription>
          Learn how we handle your information.
        </DialogDescription>
        <ScrollArea className="max-h-[60vh] pr-4 mt-2 space-y-3 text-sm leading-relaxed">
          <p>
            DevHub collects only the data provided by GitHub during OAuth
            authentication (username, email if public, avatar, and repositories).
          </p>
          <p>
            This data is used solely for enabling discovery and collaboration
            between users within the platform.
          </p>
          <p>
            We do not sell or share your data with third parties.
          </p>
          <p>
            You may revoke DevHub’s access at any time from your GitHub account
            settings.
          </p>
        </ScrollArea>
      </>
    )

  return (
    <Dialog>
      <DialogTrigger asChild>
        <span className="cursor-pointer text-blue-600 hover:underline">
          {children}
        </span>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">{content}</DialogContent>
    </Dialog>
  )
}
