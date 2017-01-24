define(['require'], function(require) {

    /**
     * Models generated from "Model and Storage" and models extracted from services.
     * To generate entity use syntax:
     * Apperyio.EntityAPI("<model_name>[.<model_field>]");
     */

    var models = {
        "String": {
            "type": "string"
        },
        "ActiveScreen": {
            "type": "object",
            "properties": {
                "name": {
                    "type": "string"
                }
            }
        },
        "Number": {
            "type": "number"
        },
        "Boolean": {
            "type": "boolean"
        }
    };
    return models;

});