import { Component, Inject, OnChanges, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { take } from 'rxjs/operators';
import { CfarContract, CfarItinerary, CfarOffer, CreateCfarContractRequest, CreateCfarOfferRequest, RequestType } from '../../apis/hopper-cloud-airline/v1';
import { TranslateService } from '@ngx-translate/core';
import { DateAdapter } from "@angular/material/core";
import { AbstractComponent } from '../abstract.component';
import { ApiTranslatorUtils } from '../../utils/api-translator.utils';
import { HopperProxyService } from '../../services/hopper-proxy.service';

@Component({
  selector: 'hopper-cfar-offer-dialog',
  templateUrl: './cfar-offer-dialog.component.html',
  styleUrls: ['./cfar-offer-dialog.component.scss']
})
export class CfarOfferDialogComponent extends AbstractComponent implements OnInit, OnChanges {

  public cfarOffers!: CfarOffer[];
  public selectedCfarOffer!: CfarOffer;
  public isLoading!: boolean;

  // Mandatory data
  private _partnerId!: string;
  private _hCSessionId!: string;
  private _itinerary!: CfarItinerary[];
  private _bookingDateTime!: Date;

  // Optional data
  private _pnrReference?: string;

  constructor(
    private _adapter: DateAdapter<any>,
    private _translateService: TranslateService,
    private _dialogRef: MatDialogRef<CfarOfferDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _hopperProxyService: HopperProxyService
  ) {
    super(_adapter, _translateService);

    // Mandatory data
    this._partnerId = data.partnerId;
    this._hCSessionId = data.hCSessionId;

    // Optional data
    this._pnrReference = data.pnrReference;
    this._itinerary = data.itinerary;
    this._bookingDateTime = data.bookingDateTime;
    this.cfarOffers = data.cfarOffers;

    // Update parents @inputs manually (Dialog limitation)
    this.isFakeBackend = data.isFakeBackend;
    this.currentLang = data.currentLang;
    this.basePath = data.basePath;
    this.extAttributes = data.extAttributes;

    this._translateService.use(this.currentLang);

  }

  // -----------------------------------------------
  // Life Cycle Hooks
  // -----------------------------------------------

  ngOnInit(): void {
    if (this.cfarOffers && this.cfarOffers?.length > 0) {
      this.selectedCfarOffer = this.cfarOffers[0];
    } else if (this.isFakeBackend) {
      this.cfarOffers = this._buildFakePostCfarOffersResponse();
      this.selectedCfarOffer = this.cfarOffers[0];
    } else {
      this.isLoading = true;
  
      this._hopperProxyService
        .postCfarOffers(this.basePath, this._hCSessionId, ApiTranslatorUtils.modelToSnakeCase(this._buildCreateCfarOfferRequest()))
        .pipe(take(1))
        .subscribe(
          (cfarOffers) => {
            let results: CfarOffer[] = [];
  
            if (cfarOffers) {
              cfarOffers.forEach(cfarOffer => {
                results.push(ApiTranslatorUtils.modelToCamelCase(cfarOffer) as CfarOffer);
              });
            }
            
            this.cfarOffers = results;
            // The first one by default
            this.selectedCfarOffer = results[0];
            this.isLoading = false;
          },
          (error) => this.isLoading = false
        );
    }
  }

  // -----------------------------------------------
  // Publics Methods
  // -----------------------------------------------

  onClose(): void {
    this._dialogRef.close();
  }

  onSubmit(): void {
    this.isLoading = true;

    // Create CFAR Contract
    this._hopperProxyService
      .postCfarContracts(this.basePath, this._hCSessionId, ApiTranslatorUtils.modelToSnakeCase(this._buildCreateCfarContractRequest()))
      .pipe(take(1))
      .subscribe(
        (cfarContract: CfarContract) => {
          this._dialogRef.close(ApiTranslatorUtils.modelToCamelCase(cfarContract) as CfarContract);
        },
        (error) => this.isLoading = false
      );
  }

  onSelectOffer(cfarOffer: CfarOffer): void {
    this.selectedCfarOffer = cfarOffer;
  }

  computePercentage(offer: CfarOffer): number {
    if (offer) {
      const coverage = Number.parseFloat(offer.coverage);
      const totalPrice = Number.parseFloat(offer.itinerary.totalPrice);
  
      return coverage / (totalPrice || 1.0);
    }

    return 0;
  }

  // -----------------------------------------------
  // Privates Methods
  // -----------------------------------------------

  private _buildCreateCfarOfferRequest(): CreateCfarOfferRequest {
    return {
      partnerId: this._partnerId,
      itinerary: this._itinerary,
      requestType: RequestType.Ancillary,
      bookingDateTime: this._bookingDateTime,
      extAttributes: this.extAttributes
    };
  }

  private _buildCreateCfarContractRequest(): CreateCfarContractRequest {
    return {
      offerIds: [this.selectedCfarOffer.id],
      itinerary: this.selectedCfarOffer.itinerary,
      extAttributes: this.extAttributes,
      pnrReference: this._pnrReference
    };
  } 

  private _buildFakePostCfarOffersResponse(): CfarOffer[] {
    return [
      {
        "id": "1ecf0aa8-8892-6ace-8c08-63e55c467dd8",
        "premium": "180.00",
        "coverage": "481.32",
        "currency": "CAD",
        "requestType": "fare",
        "toUsdExchangeRate": "0.7658463176194433063117224266606420",
        "contractExpiryDateTime": new Date("2022-07-09T22:34:30Z"),
        "createdDateTime": new Date("2022-06-20T15:06:16.744Z"),
        "itinerary": {
          "passengerPricing": [
            {
              "passengerCount": {
                "count": 3,
                "type": "adult"
              },
              "individualPrice": "0.0"
            }
          ],
          "currency": "CAD",
          "slices": [
            {
              "segments": [
                {
                  "originAirport": "LGA",
                  "destinationAirport": "BOS",
                  "departureDateTime": "2022-07-10T18:34:30",
                  "arrivalDateTime": "2022-07-10T19:12:30",
                  "flightNumber": "JB776",
                  "validatingCarrierCode": "B6",
                  "fareClass": "basic_economy"
                }
              ]
            }
          ],
          "ancillaries": [
            {
              "totalPrice": "200.55",
              "type": "travel_insurance"
            }
          ],
          "totalPrice": "601.65"
        },
        "offerDescription": [
          "Add the flexibility to cancel your flight for any reason up to 3 hours before departure",
          "Cancel and choose between a 80% refund of your flight base fare and taxes or 100% airline travel credit",
          "Get instant resolution, no forms or claims required"
        ],
        "extAttributes": {
          "property1": "test1",
          "property2": "test2"
        }
      },
      {
        "id": "1ecf0aa8-88ca-6d3f-8c08-27bc3e4e8e42",
        "premium": "84.00",
        "coverage": "481.32",
        "currency": "CAD",
        "requestType": "fare",
        "toUsdExchangeRate": "0.7658463176194433063117224266606420",
        "contractExpiryDateTime": new Date("2022-07-09T22:34:30Z"),
        "createdDateTime": new Date("2022-06-20T15:06:16.767Z"),
        "itinerary": {
          "passengerPricing": [
            {
              "passengerCount": {
                "count": 3,
                "type": "adult"
              },
              "individualPrice": "0.0"
            }
          ],
          "currency": "CAD",
          "slices": [
            {
              "segments": [
                {
                  "originAirport": "LGA",
                  "destinationAirport": "BOS",
                  "departureDateTime": "2022-07-10T18:34:30",
                  "arrivalDateTime": "2022-07-10T19:12:30",
                  "flightNumber": "JB777",
                  "validatingCarrierCode": "B6",
                  "fareClass": "basic_economy"
                }
              ]
            }
          ],
          "ancillaries": [
            {
              "totalPrice": "200.55",
              "type": "travel_insurance"
            }
          ],
          "totalPrice": "601.65"
        },
        "offerDescription": [
          ""
        ],
        "extAttributes": {
          "property1": "test1",
          "property2": "test2"
        }
      }
    ];
  }
}
