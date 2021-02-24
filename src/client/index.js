import { merge, forEach } from "lodash";
import { createHttpActionsFor } from "./client";

const API_RESOURCES = [{
    name: "profile",
}, ];

/* http actions exposed by this client */
export const httpActions = {};

export * from "./client";

forEach(API_RESOURCES, (resource) => {
    const resourceHttpActions = createHttpActionsFor(resource);
    merge(httpActions, resourceHttpActions);
});