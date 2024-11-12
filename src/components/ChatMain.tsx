"use client";

import { useChat } from "ai/react";


import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Icon from "./ui/Icon";

import { useRef } from "react";

export default function ChatMain() {
    const { messages, input, handleInputChange, handleSubmit } = useChat({
        initialInput: "",
        keepLastMessageOnError: true,
        onFinish: async (message, options) => {
            console.log("Finished", message, options);
            if (inputRef.current) {
                inputRef.current.focus();
            }
        }
    });

    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <>
        <div className="h-full max-h-full overflow-y-auto">
            {messages.map(message => (
                <div key={message.id}>
                {message.role === 'user' ? 'User: ' : 'AI: '}
                {message.content}
                </div>
            ))}
        </div>
 

        <div className="absolute bottom-0 left-0 pb-12 px-8 w-full flex items-center justify-center">
            <form className="w-full" onSubmit={handleSubmit}>
                <Input 
                    placeholder="Send a message" 
                    value={input}
                    ref={inputRef}
                    name="prompt"
                    onChange={handleInputChange}
                />
            </form>
        </div>
        </>
    )
}