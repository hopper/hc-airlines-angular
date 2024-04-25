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
import { CfarItinerarySliceSegment } from './cfarItinerarySliceSegment';
import { Fare } from './fare';
import { FareRule } from './fareRule';
import { PassengerPricing } from './passengerPricing';

/**
 * An object containing the list of flight segments for a fare slice
 */
export interface CfarItinerarySlice { 
    /**
     * A list of segments which make up the slice
     */
    segments: Array<CfarItinerarySliceSegment>;
    /**
     * List of passengers type, count and pricing for the slice
     */
    passengerPricing?: Array<PassengerPricing>;
    /**
     * The price of the slice for all the passengers
     */
    totalPrice?: string;
    /**
     * Name of the fare brand applied to the slice
     */
    fareBrand?: string;
    /**
     * Code of the fare basis applied to the slice
     */
    fareBasis?: string;
    /**
     * The fare rules associated to the slice
     */
    fareRules?: Array<FareRule>;
    /**
     * Other available fares in the same cabin
     */
    otherFares?: Array<Fare>;
}