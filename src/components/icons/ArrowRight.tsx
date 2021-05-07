import * as React from "react";

function ArrowRight(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width={props.width}
            height={props.height}
            viewBox="0 0 47 47"
            fill="none"
            {...props}
        >
            <path
                d="M9.792 23.5h27.416M23.5 9.792L37.208 23.5 23.5 37.208"
                stroke="#fff"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

const MemoArrowRight = React.memo(ArrowRight);
export default MemoArrowRight;
