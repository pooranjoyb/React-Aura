import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
} from "./Dialog";

export default function DialogShowcase() {
    return (
        <div>
            <Dialog>
                <DialogTrigger type={"profile"}>Show dialog</DialogTrigger>
                <DialogContent type={"profile"}>
                    <DialogTitle>This is a dialog</DialogTitle>
                    <DialogDescription>This is description</DialogDescription>
                </DialogContent>
            </Dialog>
        </div>
    );
}
