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
import { BookingConfirmed } from './bookingConfirmed';
import { CfarDenyPurchase } from './cfarDenyPurchase';
import { CfarEventWithContract } from './cfarEventWithContract';
import { CfarExerciseCallbackLaunched } from './cfarExerciseCallbackLaunched';
import { CfarExerciseCustomerDataComplete } from './cfarExerciseCustomerDataComplete';
import { CfarExercisePortalComplete } from './cfarExercisePortalComplete';
import { CfarExercisePortalDisplay } from './cfarExercisePortalDisplay';
import { CfarExerciseVerificationComplete } from './cfarExerciseVerificationComplete';
import { CfarExerciseVerificationSent } from './cfarExerciseVerificationSent';
import { CfarForcedChoiceWarning } from './cfarForcedChoiceWarning';
import { CfarOffersBannerDisplay } from './cfarOffersBannerDisplay';
import { CfarOffersTakeoverDisplay } from './cfarOffersTakeoverDisplay';
import { CfarViewInfo } from './cfarViewInfo';
import { OffersDisplayed } from './offersDisplayed';

export type CfarEvent = BookingConfirmed | CfarDenyPurchase | CfarEventWithContract | CfarExerciseCallbackLaunched | CfarExerciseCustomerDataComplete | CfarExercisePortalComplete | CfarExercisePortalDisplay | CfarExerciseVerificationComplete | CfarExerciseVerificationSent | CfarForcedChoiceWarning | CfarOffersBannerDisplay | CfarOffersTakeoverDisplay | CfarViewInfo | OffersDisplayed;