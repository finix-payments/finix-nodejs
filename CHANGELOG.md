## 3.0.1 - 2022-11-14
* Cleaned up dependencies

## 3.0.0 -2022-11-12
* Enforced strict typing resulting in regenerating all files.
    * Can't guarantee backwards compatibility, so major bump in version. 

## 2.0.0 - 2022-09-08
* Supported API Version: 2022-02-01
* Improved error handling:
* Added support for the following APIs: 
    * Onboarding Forms
    * Compliance Forms
* Renamed `downloadFile` endpoint in `FilesApi` to `download`
* Renamed `uploadFile` endpoint in `FilesApi` to `upload`
* Added endpoint `listByPaymentInstrumentId` in `VerificationsApi`
* Updated filter query params 
* Added/renamed designated models for associated identity: `CreateAssociatedIdentityRequest`, `AssociatedIdentity`, `AssociatedIdentityEntity`, `CreateAssociatedIdentityRequestEntity`, `CreateAssociatedIdentityRequestEntityBusinessAddress`, `CreateAssociatedIdentityRequestEntityDob`, `CreateAssociatedIdentityRequestEntityIncorporationDate`, `CreateAssociatedIdentityRequestEntityPersonalAddress`
* Added model `additionalBuyerCharges`, `GetDeviceQueryParams`, `UpdateIdentityRequestEntityPersonalAddress`,`CreateTransferRequest3dSecureAuthentication`, `UpdateDeviceRequest`
* Update enums in `PaymentInstrumentsApi`


## 1.0.1 - 2022-08-03
* Supported API Version: 2022-02-01
* Fixed bug with page offset 

## 1.0.0 - 2022-08-02
* Supported API Version: 2022-02-01
* Initial release of the Nodejs / Typescript library.
* Added support for the following APIs:
    * Transfers
    * Authorization
    * Identities
    * Merchants
    * Payment Instruments
    * Instrument Updates
    * Balance Transfers
    * Devices
    * Disputes
    * Files
    * Settlements
    * Webhooks
    * Verifications
    * Merchant Profiles
    * Fee Profiles