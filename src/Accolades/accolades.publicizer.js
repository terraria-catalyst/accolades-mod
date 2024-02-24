import {createPublicizer} from "publicizer";

export const publicizer = createPublicizer("Accolades");

publicizer.createAssembly("tModLoader").publicizeAll();