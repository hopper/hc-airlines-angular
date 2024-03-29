/**
 * Airline API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

/**
 * A create Refund Recipient request
 */
export interface CreateRefundRecipientRequest { 
    firstName: string;
    lastName: string;
    /**
     * The refund recipient's date of birth in ISO Local Date format
     */
    dateOfBirth: string;
    addressFirstLine: string;
    addressSecondLine?: string;
    city: string;
    stateProvince: string;
    country: string;
    postalCode: string;
}