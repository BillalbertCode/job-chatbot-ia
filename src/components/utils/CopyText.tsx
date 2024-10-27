// This is a component for copy text generate
"use client"
import React, { HTMLAttributes, useState } from "react";
import { LuCopy, LuCopyCheck } from "react-icons/lu";

interface CopyTextProps extends HTMLAttributes<HTMLDivElement> {
    text: string; // Text of copy
    className?: string
}

const CopyText: React.FC<CopyTextProps> = ({ text, className, ...props }) => {

    const [copied, setCopied] = useState(false)

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(text)
            setCopied(true)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <div className="flex justify-end bg-transparent">
                <button className="border focus:border-sky-600 rounded p-2" onClick={handleCopy}>
                    {copied
                        ? <LuCopyCheck title="Copiado" />
                        : <LuCopy title="Copiar" />
                    }
                </button>
            </div>
            <div className="p-4">
                <p className="text-sm">{text}</p>
            </div>
        </>
    )
}

export default CopyText

