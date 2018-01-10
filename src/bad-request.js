"use strict";

import { HTTPError } from "./http";

export class BadRequestError extends HTTPError {
    constructor( message, extra ) {
        super( 400, message || "Bad Request", extra );
    }
}
