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
            <div className="p-4 relative">
                <button className="focus:text-sky-600 p-1 rounded absolute right-0 top-0 text-sm" onClick={handleCopy}>
                    {copied
                        ? <LuCopyCheck title="Copiado" />
                        : <LuCopy title="Copiar" />
                    }
                </button>
                <p>{text}</p>
            </div>


        </>
    )
}

export default CopyText

