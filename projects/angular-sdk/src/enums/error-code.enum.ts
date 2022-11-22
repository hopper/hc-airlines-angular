/**
 * Non exaustive list of error managed by the API
 * Excluded codes : event (EVXXX)
 */
export enum ErrorCode {
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
    // The contract status is incorrect.
    CO012 = "CO012",
    // The contract was not found.
    CO014 = "CO014",
    // The contract could not be saved.
    CO015 = "CO015",
    // The contract was not found.
    CO016 = "CO016",
    // The contract was not found.
    CO017 = "CO017",
    // The contract was not found.
    CO018 = "CO018",
    // The contract was not found.
    CO019 = "CO019",
    // The status must be confirmed.
    CO020 = "CO020",
    // The contract was not found.
    CO021 = "CO021",
    // The contract could not be saved.
    CO022 = "CO022",
    // The contract was not found.
    CO023 = "CO023",
    // The contract was not found.
    CO024 = "CO024",
    // The contract was not found.
    CO025 = "CO025",
    // The contract could not be saved.
    CO026 = "CO026",
    // Payment has failed.
    CO027 = "CO027",
    // Payment has failed.
    CO028 = "CO028",
    // Payment has failed.
    CO029 = "CO029",
    // The contract could not be created.
    CO030 = "CO030",
    // The contract was not found.
    CO031 = "CO031",
    // The contract was not found.
    CO032 = "CO032",
    // The contract was not found.
    CO033 = "CO033",
    // The contract could not be saved.
    CO034 = "C0034",

    // The contract exercise was not found.
    EX001 = "EX001",
    // It is too late to use CFAR to cancel your booking.
    EX002 = "EX002",
    // No Cfar contract for this booking reference.
    EX003 = "EX003",
    // No CFAR exercise for this booking.
    EX004 = "EX004",
    // It is too late to use CFAR to cancel your booking.
    EX008 = "EX008",
    // An exercise is in progress.
    EX009 = "EX009",
    // The exercised has already been completed.
    EX010 = "EX010",
    // The exercise could not be saved.
    EX012 = "EX012",
    // The exercise has already been updated.
    EX013 = "EX013",
    // The contract exercise was not found.
    EX014 = "EX014",
    // The contract exercise was not found.
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
    // The verification code to proceed an exercise has nos been sent.
    EX023 = "EX023",
    // The contract exercise was not found.
    EX024 = "EX024",
    // The contract exercise was not found.
    EX025 = "EX025",
    // The contract exercise was not found.
    EX026 = "EX026",
    // The contract exercise was not found.
    EX027 = "EX027",
    // The contract exercise was not found.
    EX028 = "EX028",
    // The contract exercise was not found.
    EX029 = "EX029",
    // The contract exercise was not found.
    EX030 = "EX030",
    // The exercise could not be created.
    EX031 = "EX031",
    // The verification code to proceed an exercise has nos been sent.
    EX032 = "EX032",
    // Missing parameters to complete the exercise.
    EX033 = "EX033",
    // The contract exercise was not found.
    EX034 = "EX034",
    // The contract exercise was not found.
    EX035 = "EX035",
    // No Cfar contract for this booking reference.
    EX036 = "EX036",
    // The verification code has already been sent.
    EX037 = "EX037",
    // The contract exercise was not found.
    EX038 = "EXO38",
    // Session already has an exercise.
    EX039 = "EX039",
    // Too Many Verification Attempts.
    EX040 = "EX040",
    // The contract exercise was not found.
    EX041 = "EX041",
    // he contract exercise was not found.
    EX042 = "EX042",
    // The verification code is not valid.
    EX043 = "EX043",

    // The manual exercise could not be created.
    ME001 = "ME001",
    // The manual exercise could not be saved.
    ME002 = "ME002",
    // The manual exercise could not be confirmed.
    ME003 = "ME003",
    // The manual exercise could not be found.
    ME004 = "ME004",
    // The manual exercise could not be found.
    ME005 = "ME005",
    // The input passengers do not match with the passengers on the initial contract.
    ME006 = "ME006",
    // It is too late to use CFAR to cancel your booking.
    ME007 = "ME007",
    // No Cfar contract for this booking reference.
    ME008 = "ME008",
    // The contract was not confirmed.
    ME009 = "ME009",
    // Invalid data for the initialization of a manual exercise.
    ME010 = "ME010",
    // Confirmed manual exercises could not be found.
    ME011 = "ME011",
    // The manual exercise status is incorrect.
    ME012 = "ME012",
    // No coverage amount found to complete the manual exercise.
    ME013 = "ME013",
    // The verification code to proceed a manual exercise has nos been sent.
    ME014 = "ME014",
    // The contract does not have a verification code.
    ME015 = "ME015",
    // The contract was not found.
    ME016 = "ME016",
    // The contract does not have an expiration date for its verification code.
    ME017 = "ME017",
    // The verification code has expired.
    ME018 = "ME018",
    // The verification code is not valid.
    ME019 = "ME019",

    // An offer could not be saved.
    OF001 = "OF001",
    // An offer could not be saved.
    OF002 = "OF002",
    // An offer could not be saved.
    OF003 = "OF003",
    // Offers could not be saved.
    OF004 = "OF004",
    // The contract does not have an offer.
    OF007 = "OF007",
    // The contract does not have an offer.
    OF008 = "OF008",
    // Invalid Airport code
    OF009 = "OF009",
    // Invalid Airport code
    OF010 = "OF010",
    // Itinerary total passenger pricing must be greater than 0.
    OF011 = "OF011",
    // The offer was not found.
    OF012 = "OF012",
    // The offer was not found.
    OF013 = "OF013",
    // An offer could not be saved.
    OF014 = "OF014",
    // An offer could not be saved.
    OF015 = "OF015",
    // An offer could not be saved.
    OF016 = "OF016",
    // The offer itinerary is not valid
    OF017 = "OF017",
    // A prediction could not be saved.
    OF018 = "OF018",
    // An prediction could not be saved.
    OF019 = "OF019",

    // The session was not found.
    SE001 = "SE001",
    // The session was not found.
    SE002 = "SE002",
    // The session was not found.
    SE003 = "SE003",
    // The session was not found.
    SE004 = "SE004",
    // The session could not be save.
    SE005 = "SE005",
    // The session was not found.
    SE006 = "SE006",
    // The session was not found.
    SE007 = "SE007",
    // The airline user identifier is missing.
    SE008 = "SE008",
    // The session was not found.
    SE009 = "SE009",
    // The airline session has expired.
    SE010 = "SE010",
    // The session was not found.
    SE011 = "SE011",
    // The session was not found.
    SE012 = "SE012",
    // The session does not have the correct flow type.
    SE013 = "SE013",
    // The session was not found.
    SE014 = "SE014",
    // The session was not found.
    SE015 = "SE015",

    // Email could not be sent.
    EM001 = "EM001",
    // Email could not be sent.
    EM002 = "EM002",
    // The contract was not found.

    RF001 = "RF001",
    // The contract exercise was not found.
    RF002 = "RF002",
    // The exercised has already been completed.
    RF003 = "RF003",
    // Invalid date of birth.
    RF004 = "RF004",
    // Invalid state province.
    RF005 = "RF005",
    // Invalid postal code.
    RF006 = "RF006",
    // Invalid mail.
    RF007 = "RF007",
    // Invalid field value.
    RF008 = "RF008",
    // Unknown error.
    RF009 = "RF009",
    // The exercise could not be saved.
    RF010 = "RF010",
    // The exercise has incorrect refund information.
    RF011 = "RF011",
    // The exercise has incorrect refund information.
    RF012 = "RF012",
    // The exercise has incorrect refund information.
    RF013 = "RF013",
    // The exercise has incorrect refund information.
    RF014 = "RF014"
}