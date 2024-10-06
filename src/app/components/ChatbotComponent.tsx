"use client"
// Component form IA QUestions
import React, { useState, useEffect } from "react"
import { useChat } from "ai/react"
import { FaPaperPlane, FaRobot, FaUser } from "react-icons/fa"

const ChatbotComponent = () => {

    const [error, setError] = useState("")

    // ref of containter cat for overflow
    const chatContainerRef: React.RefObject<HTMLDivElement> = React.createRef()

    const { messages, input, handleInputChange, handleSubmit } = useChat({
        keepLastMessageOnError: true,
    })

    // scroll down when sending a message
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
        }
    }, [messages]);

    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-cyan-600 text-white p-4 flex items-center">
                <FaRobot className="text-2x1 mr-2" />
                <h2 className="text-xl font-semibold">Job Chatbot</h2>
            </div>
            <div
                ref={chatContainerRef}
                className="h-96 overflow-y-auto p-4 space-y-4"
            >
                {messages.map(message => (
                    <div
                        key={message.id}
                        className={`flex 
                            ${message.role === "user"
                                ? "justify-end"
                                : "justify-start"}`}
                    >
                        <div
                            className={`max-w-xs p-3 rounded-lg ${message.role === "user"
                                ? "bg-cyan-500 text-white"
                                : "bg-gray-200 text-gray-800"
                                }`}
                        >
                            <div className="flex items-center mb-1">
                                {message.role === "user" ? (
                                    <FaUser className="mr-2" />
                                ) : (
                                    <FaRobot className="mr-2" />
                                )}
                                <span className="font-semibold">
                                    {message.role === "user" ? "Tú" : "Job Chatbot"}
                                </span>
                            </div>
                            <p>{message.content}</p>
                        </div>
                    </div>
                ))}
                {error && (
                    <div className="text-red-500 text-center animate-bounce">
                        {error}
                    </div>
                )}
            </div>
            <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200">
                <div className="flex space-x-2">
                    <input
                        type="text"
                        value={input}
                        name="prompt"
                        onChange={handleInputChange}
                        className="flex-grow px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Escribe tu pregunta..."
                        aria-label="Escribe tu pregunta..."
                    />
                    <button
                        type="submit"
                        className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 transition-colors duration-300"
                        aria-label="Send message"
                    >
                        <FaPaperPlane />
                    </button>
                </div>
            </form>
            
        </div>
    )
}

export default ChatbotComponent