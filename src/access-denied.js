"use strict";

import { HTTPError } from "./http";

export class AccessDeniedError extends HTTPError {
    constructor( message, extra ) {
        super( 403, message || "Forbidden", extra );
    }
}
