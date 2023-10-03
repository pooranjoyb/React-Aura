import { useEffect, useRef } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";

export function Dialog({ children }) {
    return <>{children}</>;
}

export function DialogTrigger({ children, type }) {
    const { pathname } = useLocation();
    return (
        <Link to={`${pathname}?open-dialog=true&dialog-type=${type}`}>
            {children}
        </Link>
    );
}

export function DialogTitle({ children }) {
    return (
        <h2 className="flex items-center justify-between text-2xl font-medium">
            <span>{children}</span>
            <DialogClose>X</DialogClose>
        </h2>
    );
}

export function DialogDescription({ children }) {
    return <div>{children}</div>;
}

export function DialogContent({ children, type }) {
    const [search] = useSearchParams();
    const openDialog = search.get("open-dialog");
    const dialogType = search.get("dialog-type");
    const dialogRef = useRef();

    useEffect(() => {
        if (openDialog === "true" && dialogType === type) {
            dialogRef.current.showModal();
        } else {
            dialogRef.current.close();
        }
    }, [openDialog]);

    return (
        <dialog
            ref={dialogRef}
            className="border-none outline-0 p-5 rounded-lg w-full max-w-3xl h-full max-h-48 relative"
        >
            {children}
        </dialog>
    );
}

export function DialogClose({ children }) {
    const { pathname } = useLocation();

    return (
        <Link
            to={pathname}
            className="p-2 text-base bg-slate-100 w-10 h-10 rounded-md flex items-center justify-center"
        >
            {children}
        </Link>
    );
}
