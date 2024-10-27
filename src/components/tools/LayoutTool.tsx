// Layout for tools
import { HTMLAttributes, ReactNode } from "react"
import { FaTools } from "react-icons/fa";

interface LayoutToolProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    toolName: string;
}

const LayoutTool: React.FC<LayoutToolProps> = ({ toolName, children, ...props }) => {
    return (
        <div className="p-4">
            <div className="flex gap-2 text-sm text-sky-600 items-center">
                <h5>{toolName} Tool</h5>
                <FaTools />
            </div>
            {children}
        </div>
    )
}

export default LayoutTool