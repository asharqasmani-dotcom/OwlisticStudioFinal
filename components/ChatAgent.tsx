"use client";

import Link from "next/link";
import { KeyboardEvent, useCallback, useEffect, useMemo, useRef, useState } from "react";

type ChatMessage = {
  id: string;
  role: "agent" | "user";
  text: string;
};

function buildAgentReply(input: string, history: ChatMessage[]) {
  const text = input.toLowerCase();
  const hasAskedTimeline = history.some((item) =>
    item.role === "agent" && item.text.toLowerCase().includes("timeline"),
  );
  const hasAskedBudget = history.some((item) =>
    item.role === "agent" && item.text.toLowerCase().includes("budget"),
  );
  const hasAskedName = history.some((item) =>
    item.role === "agent" && item.text.toLowerCase().includes("your name"),
  );

  if (text.includes("hello@owalisticsol.com") || text.includes("email")) {
    return "You can reach the team at Hello@owalisticsol.com. If you want, you can also share a few details here first and I can point you to the best next step.";
  }

  if (text.includes("address") || text.includes("office") || text.includes("studio") || text.includes("location")) {
    return "Our studio is at Pearl Heights Office No-2, BE, ISB, PAK. If you are reaching out about a project, email and WhatsApp are usually the fastest next step.";
  }

  if (text.includes("logo") || text.includes("brand") || text.includes("identity")) {
    return "Yes, that fits our Brand & Identity Design work. We can help with logo direction, visual identity, brand systems, and launch-ready creative assets. If you want, send your brand name, what stage you are at, and the kind of look you want to create.";
  }

  if (text.includes("price") || text.includes("cost") || text.includes("budget") || text.includes("quote")) {
    return "We can definitely guide you on pricing, but final scope depends on the project. Usually the best next step is to share what you need, your timeline, and a rough budget range so the team can point you in the right direction. If you want a faster reply from a representative, WhatsApp is a good option too.";
  }

  if (text.includes("website") || text.includes("web") || text.includes("landing page")) {
    return "Yes, we handle custom web development for brands that need a more tailored site experience. That usually includes strategy, design direction, development, responsive setup, and launch support. What kind of website are you planning, and is there a timeline you are working toward?";
  }

  if (text.includes("shopify") || text.includes("ecommerce") || text.includes("store") || text.includes("cms")) {
    return "That is within our eCommerce & CMS work. We build and refine Shopify, Wix, Squarespace, and other content-managed experiences with a focus on conversion, clarity, and easier updates for your team. Which platform are you on now, or are you choosing one from scratch?";
  }

  if (text.includes("seo") || text.includes("google") || text.includes("ranking") || text.includes("marketing")) {
    return "We can support that from the branding and website side by improving structure, messaging, content hierarchy, and the overall user journey. If you already have a site, feel free to share what is not working well right now.";
  }

  if (text.includes("time") || text.includes("timeline") || text.includes("how long")) {
    return "Timeline depends on scope, complexity, and how ready the content and direction are. Once we understand the project properly, the team can give you a more realistic estimate. What are you planning to launch, and when would you ideally like it live?";
  }

  if (
    text.includes("book") ||
    text.includes("call") ||
    text.includes("start") ||
    text.includes("move forward") ||
    text.includes("let's do this") ||
    text.includes("lets do this")
  ) {
    return "Great. The best next step is to send your project details through WhatsApp, Hello@owalisticsol.com, or the project form so the team can review scope properly. If you want, you can also share your name, business name, project type, timeline, and preferred contact method here first.";
  }

  if (
    text.includes("agency") ||
    text.includes("startup") ||
    text.includes("saas") ||
    text.includes("d2c") ||
    text.includes("retail") ||
    text.includes("studio")
  ) {
    return "That sounds aligned with the kind of clients we usually support. Owalistic Sol works across agencies, startups, D2C brands, SaaS teams, studios, retail, and commerce businesses. What are you looking for right now: branding, a custom website, or an eCommerce/CMS build?";
  }

  if (
    text.includes("app") ||
    text.includes("mobile app") ||
    text.includes("ads management") ||
    text.includes("meta ads") ||
    text.includes("google ads")
  ) {
    return "Owalistic Sol mainly focuses on branding, custom web development, and eCommerce/CMS website solutions. If your need is close to that, I can still help you figure out the most relevant next step.";
  }

  if (!hasAskedName) {
    return "Happy to help. Could you share your name, brand or business name, and what kind of project you are looking to build?";
  }

  if (!hasAskedTimeline) {
    return "Thanks, that helps. What timeline are you working with, and is this a fresh build, a redesign, or an upgrade to something existing?";
  }

  if (!hasAskedBudget) {
    return "Understood. If you are comfortable sharing, what budget range are you considering? That helps the team recommend the right scope without overcomplicating things.";
  }

  if (text.includes("hello") || text.includes("hi") || text.includes("hey")) {
    return "Hi, thanks for reaching out. We help with branding, custom websites, and eCommerce/CMS builds. What are you working on right now?";
  }

  return "Thanks for sharing that. It sounds like something the team can help you think through. If you send your project type, timeline, and preferred contact method, I can point you to the best next step. And if you want a quicker reply from a representative, WhatsApp is the fastest route.";
}

export default function ChatAgent() {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [liveChatEnabled, setLiveChatEnabled] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "agent",
      text: "Hi, thanks for reaching out to Owalistic Sol. What are you looking to build: branding, a custom website, or an eCommerce/CMS site?",
    },
  ]);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const threadRef = useRef<HTMLDivElement | null>(null);

  const openChat = useCallback(() => {
    setIsOpen(true);
  }, []);

  useEffect(() => {
    if (!threadRef.current) return;
    threadRef.current.scrollTop = threadRef.current.scrollHeight;
  }, [messages, isTyping]);

  const quickActions = useMemo(
    () => [
      {
        href: "https://wa.me/923333323248",
        label: "Reach out to us on WhatsApp",
        className: "ow-agent-action ow-agent-action-primary",
      },
      {
        href: "/contact",
        label: "Fill form",
        className: "ow-agent-action ow-agent-action-teal",
      },
    ],
    [],
  );

  const agentAvatar = "/assets/owalistic_agent_icon.svg";

  const sendMessage = () => {
    const value = question.trim();

    if (!value) return;

    if (!liveChatEnabled) {
      setLiveChatEnabled(true);
    }

    setMessages((current) => [
      ...current,
      {
        id: `user-${Date.now()}`,
        role: "user",
        text: value,
      },
    ]);
    setQuestion("");

    const nextHistory = [
      ...messages,
      {
        id: `user-preview-${Date.now()}`,
        role: "user" as const,
        text: value,
      },
    ];
    const reply = buildAgentReply(value, nextHistory);
    setIsTyping(true);

    window.setTimeout(() => {
      setIsTyping(false);
      setMessages((current) => [
        ...current,
        {
          id: `agent-${Date.now()}`,
          role: "agent",
          text: reply,
        },
      ]);
    }, 520);
  };

  const startLiveChat = () => {
    setIsOpen(true);
    setLiveChatEnabled(true);
    window.setTimeout(() => {
      inputRef.current?.focus();
    }, 120);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className={`ow-agent ${isOpen ? "is-open" : ""}`} data-ow-agent aria-live="polite">
      <div className="ow-agent-card" role="status">
        <div className="ow-agent-head">
          <div className="ow-agent-people" aria-hidden="true">
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=96&q=80" alt="" />
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=96&q=80" alt="" />
            <img src="/assets/owalistic_agent_icon.svg" alt="" />
          </div>
          <div>
            <p className="ow-agent-name">Hello<span>👋</span></p>
            <p className="ow-agent-status">We are here to help.</p>
          </div>
        </div>
        <div className="ow-agent-wait">Average wait time <strong>2 minutes</strong></div>
        <div className="ow-agent-body">
          <div className="ow-agent-actions">
            <a
              href={quickActions[0].href}
              target="_blank"
              rel="noopener noreferrer"
              className={quickActions[0].className}
            >
              {quickActions[0].label}
            </a>
            <Link href={quickActions[1].href} className={quickActions[1].className} onClick={() => setIsOpen(false)}>
              {quickActions[1].label}
            </Link>
            <button type="button" className="ow-agent-action ow-agent-action-blue" onClick={startLiveChat}>
              Live chat
            </button>
          </div>
          {liveChatEnabled ? (
            <div className="ow-agent-thread" aria-live="polite" ref={threadRef}>
              {messages.map((item) => (
                <div key={item.id} className={`ow-agent-message ${item.role === "user" ? "is-user" : "is-agent"}`}>
                  {item.role === "agent" ? (
                    <div className="ow-agent-avatar" aria-hidden="true">
                      <img src={agentAvatar} alt="" />
                    </div>
                  ) : null}
                  <div className="ow-agent-message-stack">
                    <div className="ow-agent-message-meta">
                      {item.role === "user" ? "You" : "Owalistic Agent"}
                    </div>
                    <div className={`ow-agent-bubble ${item.role === "user" ? "is-user" : "is-agent"}`}>
                      {item.text}
                    </div>
                  </div>
                </div>
              ))}
              {isTyping ? (
                <div className="ow-agent-message is-agent">
                  <div className="ow-agent-avatar" aria-hidden="true">
                    <img src={agentAvatar} alt="" />
                  </div>
                  <div className="ow-agent-message-stack">
                    <div className="ow-agent-message-meta">Owalistic Agent</div>
                    <div className="ow-agent-bubble is-agent is-typing" aria-label="Owalistic is typing">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          ) : null}
          <div className="ow-agent-input">
            <span>Ask a question</span>
            <input
              ref={inputRef}
              type="text"
              placeholder="Ask a question"
              aria-label="Ask a question"
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button className="ow-agent-send" type="button" aria-label="Send message" onClick={sendMessage}>
              Send
            </button>
          </div>
        </div>
      </div>
      <button className="ow-agent-close" type="button" aria-label="Close chat" onClick={() => setIsOpen(false)}>×</button>
      <button className="ow-agent-launcher" type="button" aria-label="Open Owalistic Agent" aria-expanded={isOpen} onClick={openChat}>
        <span className="ow-launcher-mark"><img src="/assets/owalistic_agent_icon.svg" alt="" /></span>
      </button>
    </div>
  );
}
