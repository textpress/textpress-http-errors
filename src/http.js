"use strict";

import ExtendableError from "@textpress/extendable-error";

export class HTTPError extends ExtendableError {
    constructor( statusCode, message, extra ) {
        super( message, extra );
        this.statusCode = statusCode;
    }

}
