interface NgxResponseHeaders {
    /**
     * Returns a string containing the values of all headers
     * with the specified name separated by a comma and a space.
     * @param name A name of the header.
     */
    get(name:NjsStringLike): NjsByteString;
    /**
     * Returns an array containing the values of all headers
     * with the specified name.
     * @param name A name of the header.
     */
    getAll(name:NjsStringLike): NjsByteString;
    /**
     * Returns a boolean value indicating whether a header with
     * the specified name exists.
     * @param name A name of the header.
     */
    has(name:NjsStringLike): NjsByteString;
}

interface NgxResponse {
    /**
     * Takes a Response stream and reads it to completion.
     * Returns a Promise that resolves with an ArrayBuffer.
     */
    arrayBuffer(): Promise<ArrayBuffer>;
    /**
     * A boolean value, true if the body has been used.
     */
    readonly bodyUsed: boolean;
    /**
     * Takes a Response stream and reads it to completion.
     * Returns a Promise that resolves with the result of
     * parsing the body text as JSON.
     */
    json(): Promise<Object>;
    /**
     * The NgxResponseHeaders object associated with the response.
     */
    headers: NgxResponseHeaders;
    /**
     * A boolean value, true if the response was successful
     * (status in the range 200-299).
     */
    readonly ok: boolean;
    /**
     * A boolean value, true if the response is the result
     * of a redirect.
     */
    readonly redirected: boolean;
    /**
     * The status code of the response.
     */
    readonly status: number;
    /**
     * The status message corresponding to the status code.
     */
    readonly statusText: NjsByteString;
    /**
     * Takes a Response stream and reads it to completion.
     * Returns a Promise that resolves with a string.
     */
    text(): Promise<NjsByteString>;
    /**
     * The type of the response.
     */
    readonly type: NjsByteString;
    /**
     * Response url.
     */
    readonly url: NjsByteString;
}

interface NgxFetchOptions {
    /**
     * Request body, by default is empty.
     */
    body?: NjsStringLike,
    /**
     * The buffer size for reading the response, by default is 4096.
     * Nginx specific.
     */
    buffer_size?: Number,
    /**
     * Request headers object.
     */
    headers?: Object,
    /**
     * The maximum size of the response body in bytes, by default is 32768.
     * Nginx specific.
     */
    max_response_body_size?: Number,
    /**
     * Request method, by default the GET method is used.
     */
    method?: NjsStringLike;
}

interface NgxObject {
    readonly INFO: number;
    readonly WARN: number;
    readonly ERR: number;
    /**
     * Writes a string to the error log with the specified level
     * of logging.
     * @param level Log level (ngx.INFO, ngx.WARN, ngx.ERR).
     * @param message Message to log.
     */
    log(level: number, message: NjsStringOrBuffer): void;
    /**
     * Makes a request to fetch an URL.
     * Returns a Promise that resolves with the NgxResponse object.
     * Only the http:// scheme is supported, redirects are not handled.
     * @param url URL of a resource to fetch.
     * @param options An object containing additional settings.
     * @since 0.5.1
     */
    fetch(url: NjsStringOrBuffer, options?: NgxFetchOptions): Promise<NgxResponse>;
}

declare const ngx: NgxObject;
