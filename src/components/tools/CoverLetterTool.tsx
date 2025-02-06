"use client"
// component for design of tool coverLetter
import CopyText from "../utils/CopyText";
import LayoutTool from "./LayoutTool";

type CoverLetterToolProps = {
    subject: string;
    content: string;
}


const CoverLetterTool = ({ subject, content }: CoverLetterToolProps) => {
    return (
        <LayoutTool toolName="Cover Letter">
            <div className="text-base font-bold">
                <CopyText text={subject} />
            </div>
            <div className="text-sm">
                <CopyText text={content} />
            </div>
        </LayoutTool>
    )
}

export default CoverLetterTool
