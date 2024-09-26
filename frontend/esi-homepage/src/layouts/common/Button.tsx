import { MouseEventHandler } from "react";

export const Button: React.FC<{ title: string | undefined, onCallback: MouseEventHandler<HTMLButtonElement> }> = (props) => {

    return (
        <button onClick={props.onCallback}>
            <div className="grow justify-center active:bg-blue-700 p-2 rounded-xl bg-blue-800 shadow-lg hover:bg-blue-700 text-xl max-sm:text-sm max-md:text-base">
                {props.title}
            </div>
        </button>
    );
}