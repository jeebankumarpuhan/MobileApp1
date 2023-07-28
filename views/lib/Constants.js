import { Dimensions } from "react-native";

// export const common_color = '#009933';
export const common_color = '#32356a';
export const HEIGHT = Dimensions.get('window').height;
export const WIDTH = Dimensions.get('window').width;


// export const BASE_URL = 'https://shemaerp.epsumlabs.com/pos_api/';
// export const BASE_IMAGE_URL = 'https://shemaerp.epsumlabs.com/pos/Menu/';

// export const BASE_URL = 'http://shailjaorganics.com/api/';
// export const BASE_IMAGE_URL = 'http://shailjaorganics.com/FoodApp/Menu/';



export const MID = 'NlejMF36079615240199';
export const API_URL = "";
export const CALLBACK_URL = "https://securegw-stage.paytm.in/theia/paytmCallback?ORDER_ID=";
export const URL_SCHEME = "paytmMID";


export const REQUEST_METHOD = {
    GET: "GET",
    PUT: "PUT",
    POST: "POST",
    PATCH: "PATCH",
    DELETE: "DELETE"
}

export const RESPONSE_TYPE = {
    JSON: 'json',
    NULL: null,
    BLOB: 'blob'
}

export const RESPONSE_CODE = {
    SUCCESS: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    UNAUTHORIZED: 401,
    INTERNAL_SERVER_ERROR: 500
}

export const DEFAULT_DATA = {
    count: 0,
    next: null,
    previous: null,
    results: []
}

export const LAYOUT_TYPE = {
    NULL: null,
    BASELAYOUT: `BASELAYOUT`
}
