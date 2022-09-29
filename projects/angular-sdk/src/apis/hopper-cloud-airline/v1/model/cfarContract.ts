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
import { CfarOffer } from './cfarOffer';
import { CfarStatus } from './cfarStatus';
import { MapString } from './mapString';

/**
 * A CFAR contract
 */
export interface CfarContract { 
    /**
     * Unique identifier for a contract
     */
    id: string;
    /**
     * An offer associated with this contract
     */
    offers: Array<CfarOffer>;
    itinerary: CfarItinerary;
    /**
     * Total amount to be refunded to user upon CFAR exercise
     */
    coverage: string;
    premium: string;
    /**
     * Currency of offer
     */
    currency: string;
    /**
     * A UTC [RFC3339](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14) datetime; the date and time at which the contract was created
     */
    createdDateTime: Date;
    expiryDateTime: Date;
    status: CfarStatus;
    confirmedDateTime?: Date;
    canceledDateTime?: Date;
    pnrReference?: string;
    extAttributes: MapString;
}