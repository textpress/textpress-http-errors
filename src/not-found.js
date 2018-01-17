"use strict";

import { HTTPError } from "./http";

export class NotFound extends HTTPError {
    constructor( message, extra ) {
        super( 404, message || "Not Found", extra );
    }
}
