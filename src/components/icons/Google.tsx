import * as React from "react";

function Google(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width={props.width}
            height={props.height}
            viewBox="0 0 34 34"
            fill="none"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M33.32 17.386c0-1.205-.108-2.364-.31-3.477H17v6.576h9.15c-.395 2.125-1.593 3.925-3.393 5.13v4.266h5.494c3.214-2.96 5.069-7.317 5.069-12.495z"
                fill="#4285F4"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17 34c4.59 0 8.438-1.522 11.25-4.119l-5.493-4.265c-1.523 1.02-3.47 1.623-5.757 1.623-4.428 0-8.175-2.99-9.512-7.009h-5.68v4.405C4.605 30.19 10.354 34 17 34z"
                fill="#34A853"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.488 20.23c-.34-1.02-.533-2.11-.533-3.23s.193-2.21.533-3.23V9.365h-5.68A16.993 16.993 0 000 17c0 2.743.657 5.34 1.808 7.635l5.68-4.405z"
                fill="#FBBC05"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17 6.761c2.496 0 4.737.858 6.499 2.543l4.876-4.876C25.43 1.685 21.582 0 17 0 10.354 0 4.605 3.81 1.808 9.365l5.68 4.405C8.825 9.752 12.572 6.761 17 6.761z"
                fill="#EA4335"
            />
        </svg>
    );
}

const MemoGoogle = React.memo(Google);
export default MemoGoogle;
