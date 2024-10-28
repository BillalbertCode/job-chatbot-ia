// Using for generation CV with user info
"use client"
import LayoutTool from "../LayoutTool"
import React from "react"
import downloadPDF from "./helper/downloadPDF"

const GenerateCVTool = (user: Object) => {

    const templateCVRef: React.RefObject<HTMLDivElement> = React.createRef()



    return (
        <LayoutTool toolName="Generate CV">
            <div ref={templateCVRef} >
                <h1>Hola como estas?</h1>
            </div>
            <button
                className="hover:bg-red-600"
                onClick={() => downloadPDF(templateCVRef)}
            >
                Download PDF
            </button>
        </LayoutTool>
    )
}

export default GenerateCVTool