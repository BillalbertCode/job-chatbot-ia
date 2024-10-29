// Using for generation CV with user info
"use client"
import React, { useState } from "react"
// Components
import LayoutTool from "../LayoutTool"
// Helpers
import downloadPDF from "./helper/downloadPDF"

const GenerateCVTool = (user: Object) => {

    //  Templates options
    const templates = [
        "Harvard",
        "Example"
    ]

    // capture select template
    const [selectTemplate, setSelectTemplate] = useState<string>(templates[0])

    const handleSelectTemplate = (event : React.ChangeEvent<HTMLInputElement>) => {
        setSelectTemplate(event.target.value);
    };

    //  Template container ref
    const templateCVRef: React.RefObject<HTMLDivElement> = React.createRef()

    return (
        <LayoutTool toolName="Generate CV">
            <div>
                <input type="radio" name="template" value={templates[0]} checked={selectTemplate === templates[0]} onChange={handleSelectTemplate} />

                <input type="radio" name="template" value={templates[1]} checked={selectTemplate === templates[1]} onChange={handleSelectTemplate} />

                <label htmlFor=""></label>
                <label htmlFor=""></label>
            </div>
            <div ref={templateCVRef} >
                <h2>{selectTemplate}</h2>

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