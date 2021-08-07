
import { Layouts } from "@config/Layouts";

export function isAuthNeeded(layout) {
    if ([ Layouts.Main.name ].includes(layout)) {
        return true;
    }    

    return false;
}