import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
} from "./Dialog";

export default function DialogShowcase() {
    return (
        <>
            <div className="bg-slate-100 text-center">
                <Dialog>
                    <DialogTrigger
                        className="mx-auto bg-violet-400 text-black py-2 px-4 rounded-md inline-block"
                        type={"profile"}
                    >
                        Show dialog
                    </DialogTrigger>
                    <DialogContent type={"profile"}>
                        <DialogTitle>This is a dialog</DialogTitle>
                        <DialogDescription>
                            This is description
                        </DialogDescription>
                    </DialogContent>
                </Dialog>
            </div>
        </>
    );
}
