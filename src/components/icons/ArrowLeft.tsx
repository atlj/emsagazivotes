import * as React from "react";

function ArrowLeft(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width={props.width}
            height={props.height}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={0.75}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="prefix__feather prefix__feather-arrow-left"
            {...props}
        >
            <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
    );
}

const MemoArrowLeft = React.memo(ArrowLeft);
export default MemoArrowLeft;
