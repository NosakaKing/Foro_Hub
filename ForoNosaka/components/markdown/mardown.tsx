import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/stackoverflow-dark.css";
interface Props {
    content: string;
}

const MarkdownRenderer: React.FC<Props> = ({ content }) => {
    return (
        <div className="prose max-w-none whitespace-pre-wrap">
            <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
                {content}
            </ReactMarkdown>
        </div>
    );
};

export default MarkdownRenderer;
