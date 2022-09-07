/**
 * Non-exaustive list of error managed by the API
 * (Only SDK Frontend errors are listed here)
 */
export enum ErrorCode {

    DEFAULT = "DEFAULT",
    // The exercise was not found.
    EX014 = "EX014",
    // The exercise was not found.
    EX015 = "EX015",
    // The contract exercise does not have a verification code.
    EX016 = "EX016",
    // The contract exercise does not have an expiration date for its verification code.
    EX017 = "EX017",
    // The verification code has expired.
    EX018 = "EX018",
    // The verification code is not valid.
    EX019 = "EX019",
    // The contract exercise was not found.
    EX020 = "EX020",
    // The contract exercise was not found.
    EX021 = "EX021",
    // The contract exercise was not found.
    EX022 = "EX022",
    // The verification code to proceed an exercise has nos been sent.
    EX023 = "EX023",
    // The contract exercise was not found.
    EX024 = "EX024",
    // The contract exercise was not found.
    EX029 = "EX029",
    // The contract exercise was not found.
    EX030 = "EX030",
    // No eligible offers
    OF001 = "OF001",
    // The offer could not be saved.
    OF002 = "OF002",
    // The offer could not be saved.
    OF003 = "OF003",
    // Offers could not be saved
    OF004 = "OF004",
    // The contract does not have an offer.
    OF007 = "OF007",
    // Offers could not be saved
    OF008 = "OF008",
    // Invalid airport code XXX
    OF009 = "OF009",
    // Invalid airport code XXX
    OF010 = "OF010",
    // Itinerary total passenger pricing must be greater than 0.
    OF011 = "OF011",
    // The session was not found.
    SE001 = "SE001",
    // The session was not found.
    SE002 = "SE002",
    // The session was not found.
    SE003 = "SE003",
    // The session was not found.
    SE004 = "SE004",
    // The contract was not found.
    CO001 = "CO001",
    // The contract was not found.
    CO002 = "CO002",
    // The contract was not found.
    CO003 = "CO003",
    // The contract was not found.
    CO004 = "CO004",
    // Itinerary total passenger pricing must be greater than 0.
    CO005 = "CO005",
    // The given offer has expired.
    CO006 = "CO006",
    // One of the offer is already bind to a contract.
    CO007 = "CO007",
    // The contract itinerary currency does not much the currency of the offer.
    CO008 = "CO008",
    // The contract itinerary passenger counts do not match the itinerary passenger counts of the offer.
    CO009 = "CO009",
    // The contract itinerary price is not valid for the offer.
    CO010 = "CO010",
    // The contract itinerary slices do not match the itinerary slices of the offer.
    CO011 = "CO011",
    // The contract could not be save.
    CO022 = "CO022"
}