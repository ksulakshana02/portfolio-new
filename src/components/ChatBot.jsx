import React, {useState, useRef, useEffect} from "react";
import {MessageCircle, X, Send, Loader2, Sparkles} from "lucide-react";


const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        if (isOpen && messages.length === 0) {
            setMessages([
                {
                    role: "assistant",
                    content: "Hello! I'm Kaveesha's AI Assistant. You can ask me in English, Sinhala, or Tamil!"
                }
            ]);
        }
    }, [isOpen]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({behavior: "smooth"});
    }, [messages, isLoading, messagesEndRef]);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMsg = input;
        setInput("");
        setMessages((prev) => [...prev, {role: "user", content: userMsg}]);
        setIsLoading(true);

        try {
            const res = await fetch("https://portfolio-chatbot-lilac.vercel.app/api/chat", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({message: userMsg}),
            });

            const data = await res.json();

            if (res.ok) {
                setMessages((prev) => [...prev, {role: "assistant", content: data.response}]);
            } else {
                throw new Error(data.error);
            }
        } catch (error) {
            setMessages((prev) => [
                ...prev,
                {role: "assistant", content: "Sorry, I encountered an error connecting to the server."}
            ]);
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="chat-widget">
            {!isOpen && (
                <button
                    className="chat-launcher"
                    onClick={() => setIsOpen(true)}
                    aria-label="Open Chat"
                >
                    <div className="icon-wrapper">
                        <MessageCircle size={28}/>
                        <span className="status-badge"></span>
                    </div>
                </button>
            )}

            {isOpen && (
                <div className="chat-window">
                    <div className="chat-header">
                        <div className="header-info">
                            <div className="avatar-container">
                                <img src="/assets/agent.png" alt="Agent" className="chat-avatar"/>
                                <span className="online-indicator"></span>
                            </div>
                            <div className="header-text">
                                <h3>Kaveesha&apos;s Assistant</h3>
                                <div className="ai-badge">
                                    <Sparkles size={10}/>
                                    <span>AI Agent Active</span>
                                </div>
                            </div>
                        </div>
                        <button className="close-btn" onClick={() => setIsOpen(false)}>
                            <X size={20}/>
                        </button>
                    </div>

                    <div className="chat-body">
                        {messages.map((msg, index) => (
                            <div key={index} className={`message-row ${msg.role === "user" ? "user-row" : "bot-row"}`}>
                                {msg.role === "assistant" && (
                                    <img src="/assets/agent.png" alt="Bot" className="msg-avatar"/>
                                )}
                                <div className={`message-bubble ${msg.role === "user" ? "user-bubble" : "bot-bubble"}`}>
                                    {msg.content}
                                </div>
                            </div>
                        ))}

                        {isLoading && (
                            <div className="message-row bot-row">
                                <img src="/assets/agent.png" alt="Bot" className="msg-avatar"/>
                                <div className="message-bubble bot-bubble typing-indicator">
                                    <Loader2 className="animate-spin" size={16}/>
                                    <span>Thinking...</span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef}/>
                    </div>

                    <form onSubmit={handleSend} className="chat-footer">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type in Sinhala, Tamil, or English..."
                            autoFocus
                        />
                        <button type="submit" disabled={isLoading || !input.trim()}>
                            <Send size={18}/>
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default ChatBot;