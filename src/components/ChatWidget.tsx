"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, X } from "lucide-react";

const CHATBOT_URL = "https://elevenlabs.io/app/talk-to?agent_id=agent_3301k64th5emfbat79emms5pa4v0";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="icon"
          className="rounded-full w-16 h-16 bg-primary hover:bg-primary/90 shadow-lg"
          onClick={toggleChat}
          aria-label="Toggle chat widget"
        >
          {isOpen ? <X className="h-8 w-8 text-primary-foreground" /> : <MessageSquare className="h-8 w-8 text-primary-foreground" />}
        </Button>
      </div>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[90vw] max-w-md h-[70vh] max-h-[600px] bg-card rounded-lg shadow-2xl border overflow-hidden flex flex-col animate-in slide-in-from-bottom-5 fade-in-50">
          <div className="p-3 bg-muted/50 border-b flex justify-between items-center">
            <h3 className="font-semibold text-foreground">AI Assistant</h3>
            <Button variant="ghost" size="icon" onClick={toggleChat} className="h-8 w-8">
              <X className="h-5 w-5" />
              <span className="sr-only">Close chat</span>
            </Button>
          </div>
          <iframe
            src={CHATBOT_URL}
            className="w-full h-full border-0"
            title="AI Chatbot"
            allow="microphone"
          />
        </div>
      )}
    </>
  );
};

export default ChatWidget;