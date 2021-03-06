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
import { AirlineRefundMethod } from './airlineRefundMethod';
import { MapString } from './mapString';

/**
 * An object containing exercise information for a contract
 */
export interface CfarContractExercise { 
    /**
     * Unique identifier for a CFAR exercise
     */
    id: string;
    /**
     * Unique identifier for a contract
     */
    contractId: string;
    /**
     * A UTC [RFC3339](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14) datetime; the date and time at which a contract exercise was initiated
     */
    exerciseInitiatedDateTime: Date;
    /**
     * A UTC [RFC3339](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14) datetime; the date and time at which a contract exercise was completed
     */
    exerciseCompletedDateTime?: Date;
    /**
     * USD Exchange rate for currency where 1 of <currency> == X USD; e.g. 1CAD == 0.79USD at the date time CFAR exercise was completed
     */
    exchangeRate?: string;
    /**
     * The partner's share of the amount refunded to the customer to complete the CFAR contract exercise
     */
    hopperRefund: string;
    hopperRefundMethod: AirlineRefundMethod;
    extAttributes: MapString;
    airlineRefundAllowance?: string;
    airlineRefundMethod?: AirlineRefundMethod;
    currency?: string;
}