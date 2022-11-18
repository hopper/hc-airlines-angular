/**
 * Airline API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { CfarItinerary } from './cfarItinerary';
import { MapListString } from './mapListString';
import { RequestType } from './requestType';

/**
 * A successful CFAR offer customer response
 */
export interface CfarOfferCustomer { 
    /**
     * Unique identifier for an offer
     */
    id: string;
    /**
     * Amount per passenger to be paid by user for CFAR
     */
    premium: string;
    /**
     * Amount per passenger to be refunded to user upon CFAR exercise
     */
    coverage: string;
    /**
     * Percentage of the amount to be refunded to customer compared to flight tickets price
     */
    coveragePercentage: string;
    /**
     * Currency of offer
     */
    currency: string;
    requestType: RequestType;
    /**
     * USD Exchange rate for currency; amount * toUsdExchangeRate == USD
     */
    toUsdExchangeRate: string;
    /**
     * A UTC [RFC3339](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14) datetime; the date and time at which the CFAR contract will expire once purchased
     */
    contractExpiryDateTime: Date;
    /**
     * A UTC [RFC3339](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14) datetime; the date and time at which a CFAR offer was created
     */
    createdDateTime: Date;
    itinerary: CfarItinerary;
    termsConditionsUrl?: string;
    offerDescription: MapListString;
}