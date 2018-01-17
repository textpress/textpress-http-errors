"use strict";

import { HTTPError } from "./http";

export class NotFoundError extends HTTPError {
    constructor( message, extra ) {
        super( 404, message || "Not Found", extra );
    }
}
