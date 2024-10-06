"use client"
import { useChat } from "ai/react";

export default function Home() {

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    keepLastMessageOnError: true,
  })

  return (
    <main className="flex h-screen min-h-screen flex-col items-center justify-between p-24">
      <div className="border-2 rounded-tl-lg border-slate-400 border-rounded size-10/12">

        {messages.map(message => (
          <div key={message.id}>
            {message.role === "user" ? "User" : "IA"}
            {message.content}
          </div>
        ))
        }


        <form onSubmit={handleSubmit}>
          <input name="prompt" value={input} onChange={handleInputChange} type="text" placeholder="messages" />
          <button type="submit">Send</button>
        </form>
      </div>
    </main>
  );
}
