import * as React from "react";

function Check(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width={props.width}
            height={props.height}
            viewBox="0 0 107 107"
            fill="none"
            {...props}
        >
            <circle cx={53.5} cy={53.5} r={53} stroke="#fff" />
            <path
                d="M73 38L45.5 65.5 33 53"
                stroke="#fff"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

const MemoCheck = React.memo(Check);
export default MemoCheck;
