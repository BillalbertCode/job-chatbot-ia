// Using for generation CV with user info
import React, { useState } from "react"
// Components
import LayoutTool from "../LayoutTool"
// Helpers
import HarvardTemplatePDF from "./templates/HarvardTemplatePDF";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import {UserData } from "./CV.model";

const GenerateCVTool = (userData: UserData) => {
    //  Templates options
    // add here templates
    const templates: { [key: string]: JSX.Element } = {
        HarvardPDF: <HarvardTemplatePDF userData={userData} />
    }

    // PDF VIEWER
    const [pdfViewer, setPDFViewer] = useState(false)

    // capture select template
    const [selectTemplate, setSelectTemplate] = useState<string>(Object.keys(templates)[0])

    const handleSelectTemplate = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectTemplate(event.target.value);
    };
    if (!userData) {
        console.log(userData)
        return (
            <p>loading</p>
        )
    }

    return (
        <LayoutTool toolName="Generate CV">

            {/* UI select template */}
            <div className="flex flex-wrap rounded-lg text-sm text-white bg-blue-500 p-1 mb-2">
                {Object.keys(templates).map((template, index) => (
                    <label className="flex-auto text-center" key={index} >
                        <input
                            type="radio"
                            name="template"
                            className="hidden peer"
                            value={template}
                            checked={selectTemplate === template}
                            onChange={handleSelectTemplate}
                        />
                        <span className="flex justify-center hover:bg-blue-400 cursor-pointer rounded-lg p-0.5 peer-checked:bg-white peer-checked:font-semibold peer-checked:text-blue-950 transition duration-150 ease-in-out">
                            {template}
                        </span>
                    </label>
                )
                )}
            </div>
            <div className="flex justify-between gap-1">
                {/* Button of download obviosly */}
                <PDFDownloadLink
                    document={templates[selectTemplate]}
                    fileName={selectTemplate}
                    className="btn bg-red-300 hover:bg-red-400"
                >
                    Descargar en PDF
                </PDFDownloadLink>
                {/* button hidden pdf */}
                <button onClick={() => setPDFViewer(!pdfViewer)} className="btn bg-blue-300 hover:bg-blue-400">
                    {pdfViewer ? "Ocultar PDF" : "Mostrar PDF"}
                </button>
            </div>
            {/* pdf viewer */}
            <div className="relative flex justify-center mt-4">
                {pdfViewer && (
                    <PDFViewer className="absolute" style={{ minHeight: "400px", minWidth: "600px" }} >
                        {templates[selectTemplate]}
                    </PDFViewer>
                )}
            </div>

        </LayoutTool>
    )
}

export default GenerateCVTool