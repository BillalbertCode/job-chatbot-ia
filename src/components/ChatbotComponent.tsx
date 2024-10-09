"use client"
// Component form IA QUestions
import React, { useState, useEffect } from "react"
import { useChat } from "ai/react"
import { ChatRequestOptions } from "ai"
// Icons
import { FaPaperPlane, FaRobot, FaUser } from "react-icons/fa"
// styles
import animation from "@/styles/animation.module.css"

const ChatbotComponent = () => {

    const [error, setError] = useState("")

    // ref of containter cat for overflow
    const chatContainerRef: React.RefObject<HTMLDivElement> = React.createRef()

    // Hook SDK
    const { messages, input, handleInputChange, handleSubmit } = useChat({
        keepLastMessageOnError: true,
        onError(error) {
            setError(error.message)
        }
    })

    // scroll down when sending a message
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
        }
    }, [messages]);

    // Elimination of error message when a key is pressed
    useEffect(() => {
        if (error) {
            setError("");
        }
    }, [input]);

    const handleSumission = (event?: React.FormEvent<HTMLFormElement>, options?: ChatRequestOptions) => {


        if (input.length > 500) {
            setError("Tu pregunta no puede ser mayor a 500 caracteres")
            event?.preventDefault()
            return;
        } else if (input.trim() === "") {
            setError("Tu pregunta no puede estar vacia")
            event?.preventDefault()
            return;
        }

        handleSubmit(event, {
            ...options,
            allowEmptySubmit: true,
        })
    }

    return (
        <div className="max-w-md mx-auto bg-transparent shadow-lg rounded-lg overflow-hidden">
            <div className="bg-transparent text-blue-500 p-4 flex items-center">
                <FaRobot className="text-2x1 mr-2" />
                <h2 className="text-xl font-semibold">Chatbot</h2>
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
                                ? "bg-transparent text-grey-700"
                                : "bg-transparent shadow-md shadow-blue-500 text-grey"
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
                    <div className={`text-red-600 text-center text-wrap ${error && animation.errorMessageVibration}`} >
                        {error}
                    </div>
                )}
            </div>
            <form onSubmit={handleSumission} className="p-4 border-t border-gray-200">
                <div className="flex space-x-2">
                    <input
                        type="text"
                        value={input}
                        name="prompt"
                        onChange={handleInputChange}
                        className="flex-grow px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Escribe tu pregunta..."
                        aria-label="Escribe tu pregunta..."
                    />
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 active:animate-ping rounded-full hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 transition-colors duration-300"
                        aria-label="Send message"
                    >
                        <FaPaperPlane className="" />
                    </button>
                </div>
            </form>

        </div>
    )
}

export default ChatbotComponent