import localVarRequest from 'request';

export * from './additionalPurchaseData';
export * from './additionalPurchaseDataItemDataInner';
export * from './additionalPurchaseDataOrderDate';
export * from './address';
export * from './adjustmentTransfersList';
export * from './adjustmentTransfersListEmbedded';
export * from './applePaySession';
export * from './applePaySessionRequest';
export * from './application';
export * from './applicationLinks';
export * from './applicationLinksApplicationProfile';
export * from './applicationLinksSelf';
export * from './applicationProfile';
export * from './applicationProfileLinks';
export * from './applicationProfileLinksApplication';
export * from './applicationProfilesList';
export * from './applicationProfilesListEmbedded';
export * from './applicationProfilesListLinks';
export * from './applicationsList';
export * from './applicationsListEmbedded';
export * from './authorization';
export * from './authorizationExternalResponsesInner';
export * from './authorizationLinks';
export * from './authorizationLinksDevice';
export * from './authorizationLinksMerchantIdentity';
export * from './authorizationLinksTransfer';
export * from './authorizationsList';
export * from './authorizationsListEmbedded';
export * from './balanceTransfer';
export * from './balanceTransferList';
export * from './balanceTransferListEmbedded';
export * from './cardPresentDetails';
export * from './cardPresentDetailsEmvData';
export * from './cardPresentInstrumentForm';
export * from './configurationDetails';
export * from './configurationDetailsCashbackOptions';
export * from './configurationDetailsCashbackOptionsManualEntry';
export * from './configurationDetailsTipOptions';
export * from './country';
export * from './createApplicationRequest';
export * from './createAuthorizationRequest';
export * from './createAuthorizationRequest3dSecureAuthentication';
export * from './createBalanceTransferRequest';
export * from './createDevice';
export * from './createDisputeEvidenceRequest';
export * from './createExternalLinkRequest';
export * from './createFeeProfileRequest';
export * from './createFeeRequest';
export * from './createFileRequest';
export * from './createIdentityRequest';
export * from './createIdentityRequestAdditionalUnderwritingData';
export * from './createIdentityRequestAdditionalUnderwritingDataCardVolumeDistribution';
export * from './createIdentityRequestAdditionalUnderwritingDataVolumeDistributionByBusinessType';
export * from './createIdentityRequestEntity';
export * from './createIdentityRequestEntityBusinessAddress';
export * from './createIdentityRequestEntityDob';
export * from './createIdentityRequestEntityIncorporationDate';
export * from './createIdentityRequestEntityPersonalAddress';
export * from './createInstrumentUpdateRequest';
export * from './createMerchantUnderwritingRequest';
export * from './createPaymentInstrumentRequest';
export * from './createPaymentInstrumentRequestAddress';
export * from './createProcessorRequest';
export * from './createProcessorRequestConfig';
export * from './createReversalRequest';
export * from './createSettlementRequest';
export * from './createSubscriptionAmountRequest';
export * from './createSubscriptionAmountRequestFeeAmountData';
export * from './createSubscriptionEnrollmentRequest';
export * from './createSubscriptionScheduleRequest';
export * from './createSubscriptionScheduleRequestFixedTimeIntervalOffset';
export * from './createSubscriptionScheduleRequestPeriodOffset';
export * from './createTransferRequest';
export * from './createUserRequest';
export * from './createVerificationRequest';
export * from './createWebhookRequest';
export * from './currency';
export * from './device';
export * from './deviceConfigDetails';
export * from './deviceLinks';
export * from './deviceLinksMerchant';
export * from './dispute';
export * from './disputeEvidence';
export * from './disputeEvidenceLinks';
export * from './disputeEvidenceList';
export * from './disputeEvidenceListEmbedded';
export * from './disputeLinks';
export * from './disputeLinksTransfer';
export * from './disputesList';
export * from './disputesListEmbedded';
export * from './downloadInstrumentUpdateQueryParams';
export * from './error401Unauthorized';
export * from './error401UnauthorizedEmbedded';
export * from './error401UnauthorizedEmbeddedErrorsInner';
export * from './error401UnauthorizedEmbeddedErrorsInnerLinks';
export * from './error402PaymentRequired';
export * from './error402PaymentRequiredEmbedded';
export * from './error402PaymentRequiredEmbeddedErrorsInner';
export * from './error402PaymentRequiredEmbeddedErrorsInnerLinks';
export * from './error403ForbiddenList';
export * from './error403ForbiddenListEmbedded';
export * from './error403ForbiddenListEmbeddedErrorsInner';
export * from './error404NotFoundList';
export * from './error404NotFoundListEmbedded';
export * from './error404NotFoundListEmbeddedErrorsInner';
export * from './error406NotAcceptable';
export * from './error422InvalidFieldList';
export * from './error422InvalidFieldListEmbedded';
export * from './error422InvalidFieldListEmbeddedErrorsInner';
export * from './errorGeneric';
export * from './externalLink';
export * from './externalLinksList';
export * from './externalLinksListEmbedded';
export * from './fee';
export * from './feeLinks';
export * from './feeProfile';
export * from './feeProfileLinks';
export * from './feeProfilesList';
export * from './feeProfilesListEmbedded';
export * from './feeType';
export * from './feesList';
export * from './feesListEmbedded';
export * from './filesList';
export * from './filesListEmbedded';
export * from './identitiesList';
export * from './identitiesListEmbedded';
export * from './identity';
export * from './identityAdditionalUnderwritingData';
export * from './identityAdditionalUnderwritingDataCardVolumeDistribution';
export * from './identityAdditionalUnderwritingDataVolumeDistributionByBusinessType';
export * from './identityEntity';
export * from './identityEntityBusinessAddress';
export * from './identityEntityDob';
export * from './identityEntityForm';
export * from './identityEntityFormBusinessAddress';
export * from './identityEntityFormDob';
export * from './identityEntityFormIncorporationDate';
export * from './identityEntityIncorporationDate';
export * from './identityEntityPersonalAddress';
export * from './identityLinks';
export * from './identityLinksApplication';
export * from './identityLinksAssociatedIdentities';
export * from './identityLinksAuthorizations';
export * from './identityLinksDisputes';
export * from './identityLinksMerchants';
export * from './identityLinksPaymentInstruments';
export * from './identityLinksSelf';
export * from './identityLinksSettlements';
export * from './identityLinksTransfers';
export * from './identityLinksVerifications';
export * from './inputDetails';
export * from './instrumentUpdate';
export * from './instrumentUpdate1';
export * from './instrumentUpdate1Links';
export * from './listApplicationProfilesQueryParams';
export * from './listApplicationsQueryParams';
export * from './listAuthorizationsQueryParams';
export * from './listBalanceTransfersQueryParams';
export * from './listDisputeEvidenceQueryParams';
export * from './listDisputesAdjustmentsQueryParams';
export * from './listDisputesQueryParams';
export * from './listExternalLinksQueryParams';
export * from './listFeeProfilesQueryParams';
export * from './listFeesQueryParams';
export * from './listFilesQueryParams';
export * from './listIdentitiesQueryParams';
export * from './listIdentityAssociatedIdentitiesQueryParams';
export * from './listLinks';
export * from './listLinksNext';
export * from './listMerchantProfilesQueryParams';
export * from './listMerchantVerificationsQueryParams';
export * from './listMerchantsQueryParams';
export * from './listPaymentInstrumentsQueryParams';
export * from './listSettlementFundingTransfersQueryParams';
export * from './listSettlementTransfersQueryParams';
export * from './listSettlementsQueryParams';
export * from './listSubscriptionAmountQueryParams';
export * from './listSubscriptionSchedulesQueryParams';
export * from './listTransferReversalsQueryParams';
export * from './listTransfersQueryParams';
export * from './listUsersQueryParams';
export * from './listVerificationsQueryParams';
export * from './listWebhooksQueryParams';
export * from './logRef';
export * from './merchant';
export * from './merchantLinks';
export * from './merchantLinksApplication';
export * from './merchantLinksIdentity';
export * from './merchantLinksMerchantProfile';
export * from './merchantLinksVerification';
export * from './merchantLinksVerifications';
export * from './merchantProcessorDetails';
export * from './merchantProfile';
export * from './merchantProfileLinks';
export * from './merchantProfilesList';
export * from './merchantProfilesListEmbedded';
export * from './merchantsList';
export * from './merchantsListEmbedded';
export * from './modelFile';
export * from './name';
export * from './operationKey';
export * from './pageCursor';
export * from './pageOffset';
export * from './paymentInstrument';
export * from './paymentInstrumentLinks';
export * from './paymentInstrumentLinksAuthorizations';
export * from './paymentInstrumentLinksTransfers';
export * from './paymentInstrumentToken';
export * from './paymentInstrumentTokenLinks';
export * from './paymentInstrumentTokenLinksVerifications';
export * from './paymentInstrumentUpdatesList';
export * from './paymentInstrumentUpdatesListEmbedded';
export * from './paymentInstrumentsList';
export * from './paymentInstrumentsListEmbedded';
export * from './processor';
export * from './processorApplicationConfig';
export * from './processorApplicationConfigConfigurationTemplates';
export * from './processorLinks';
export * from './processorSystemConfig';
export * from './processorSystemConfigConfigurationTemplates';
export * from './processorsList';
export * from './processorsListEmbedded';
export * from './removeSettlementTransfer';
export * from './reserveProfile';
export * from './reserveProfilesList';
export * from './reserveProfilesListEmbedded';
export * from './reserveProfilesListEmbeddedReserveProfilesInner';
export * from './reserveProfilesListEmbeddedReserveProfilesInnerLinks';
export * from './reviewQueueItem';
export * from './reviewQueueItemLinks';
export * from './reviewQueueItemsList';
export * from './reviewQueueItemsListEmbedded';
export * from './reviewQueueItemsListEmbeddedReviewQueueItemsInner';
export * from './reviewQueueItemsListEmbeddedReviewQueueItemsInnerLinks';
export * from './riskProfile';
export * from './riskProfileLinks';
export * from './riskProfileRule';
export * from './riskProfileRulesList';
export * from './riskProfileRulesListEmbedded';
export * from './riskProfileRulesListEmbeddedRiskProfileRulesInner';
export * from './riskProfileRulesListEmbeddedRiskProfileRulesInnerLinks';
export * from './riskProfilesList';
export * from './riskProfilesListEmbedded';
export * from './root';
export * from './rootLinks';
export * from './settlement';
export * from './settlementEngineSettlement';
export * from './settlementEngineSettlementLinks';
export * from './settlementEngineSettlementsList';
export * from './settlementEngineSettlementsListEmbedded';
export * from './settlementEngineSettlementsListEmbeddedSettlementsInner';
export * from './settlementLinks';
export * from './settlementsList';
export * from './settlementsListEmbedded';
export * from './subTypeTransfer';
export * from './subscriptionAmount';
export * from './subscriptionAmountFeeAmountData';
export * from './subscriptionAmountLinks';
export * from './subscriptionAmountLinksSchedule';
export * from './subscriptionAmountList';
export * from './subscriptionAmountListEmbedded';
export * from './subscriptionEnrollment';
export * from './subscriptionEnrollmentLinks';
export * from './subscriptionEnrollmentLinksAmounts';
export * from './subscriptionEnrollmentLinksMerchant';
export * from './subscriptionEnrollmentLinksSchedule';
export * from './subscriptionEnrollmentList';
export * from './subscriptionEnrollmentListEmbedded';
export * from './subscriptionSchedule';
export * from './subscriptionScheduleFixedTimeIntervalOffset';
export * from './subscriptionScheduleLinks';
export * from './subscriptionScheduleLinksAmounts';
export * from './subscriptionSchedulePeriodOffset';
export * from './subscriptionSchedulesList';
export * from './subscriptionSchedulesListEmbedded';
export * from './subscriptionSchedulesListLinks';
export * from './transfer';
export * from './transferLinks';
export * from './transferLinksDestination';
export * from './transferLinksDisputedTransfer';
export * from './transferLinksDisputes';
export * from './transferLinksFeeProfile';
export * from './transferLinksFees';
export * from './transferLinksParent';
export * from './transferLinksPaymentInstruments';
export * from './transferLinksReversals';
export * from './transferLinksSource';
export * from './transferReversalsList';
export * from './transferReversalsListEmbedded';
export * from './transfersList';
export * from './transfersListEmbedded';
export * from './updateApplicationProfileRequest';
export * from './updateAuthorizationRequest';
export * from './updateFeeRequest';
export * from './updateIdentityRequest';
export * from './updateIdentityRequestAdditionalUnderwritingData';
export * from './updateIdentityRequestAdditionalUnderwritingDataCardVolumeDistribution';
export * from './updateIdentityRequestAdditionalUnderwritingDataVolumeDistributionByBusinessType';
export * from './updateIdentityRequestEntity';
export * from './updateIdentityRequestEntityBusinessAddress';
export * from './updateIdentityRequestEntityDob';
export * from './updateMerchantRequest';
export * from './updatePaymentInstrumentRequest';
export * from './updateSettlementRequest';
export * from './updateSubscriptionEnrollmentRequest';
export * from './updateSubscriptionScheduleRequest';
export * from './updateTransferRequest';
export * from './updateUserRequest';
export * from './updateWebhookRequest';
export * from './uploadFileRequest';
export * from './user';
export * from './userLinks';
export * from './usersList';
export * from './usersListEmbedded';
export * from './usersListPage';
export * from './verification';
export * from './verificationLinks';
export * from './verificationLinksApplication';
export * from './verificationLinksMerchant';
export * from './verificationsList';
export * from './verificationsListEmbedded';
export * from './webhook';
export * from './webhooksList';
export * from './webhooksListEmbedded';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { AdditionalPurchaseData } from './additionalPurchaseData';
import { AdditionalPurchaseDataItemDataInner } from './additionalPurchaseDataItemDataInner';
import { AdditionalPurchaseDataOrderDate } from './additionalPurchaseDataOrderDate';
import { Address } from './address';
import { AdjustmentTransfersList } from './adjustmentTransfersList';
import { AdjustmentTransfersListEmbedded } from './adjustmentTransfersListEmbedded';
import { ApplePaySession } from './applePaySession';
import { ApplePaySessionRequest } from './applePaySessionRequest';
import { Application } from './application';
import { ApplicationLinks } from './applicationLinks';
import { ApplicationLinksApplicationProfile } from './applicationLinksApplicationProfile';
import { ApplicationLinksSelf } from './applicationLinksSelf';
import { ApplicationProfile } from './applicationProfile';
import { ApplicationProfileLinks } from './applicationProfileLinks';
import { ApplicationProfileLinksApplication } from './applicationProfileLinksApplication';
import { ApplicationProfilesList } from './applicationProfilesList';
import { ApplicationProfilesListEmbedded } from './applicationProfilesListEmbedded';
import { ApplicationProfilesListLinks } from './applicationProfilesListLinks';
import { ApplicationsList } from './applicationsList';
import { ApplicationsListEmbedded } from './applicationsListEmbedded';
import { Authorization } from './authorization';
import { AuthorizationExternalResponsesInner } from './authorizationExternalResponsesInner';
import { AuthorizationLinks } from './authorizationLinks';
import { AuthorizationLinksDevice } from './authorizationLinksDevice';
import { AuthorizationLinksMerchantIdentity } from './authorizationLinksMerchantIdentity';
import { AuthorizationLinksTransfer } from './authorizationLinksTransfer';
import { AuthorizationsList } from './authorizationsList';
import { AuthorizationsListEmbedded } from './authorizationsListEmbedded';
import { BalanceTransfer } from './balanceTransfer';
import { BalanceTransferList } from './balanceTransferList';
import { BalanceTransferListEmbedded } from './balanceTransferListEmbedded';
import { CardPresentDetails } from './cardPresentDetails';
import { CardPresentDetailsEmvData } from './cardPresentDetailsEmvData';
import { CardPresentInstrumentForm } from './cardPresentInstrumentForm';
import { ConfigurationDetails } from './configurationDetails';
import { ConfigurationDetailsCashbackOptions } from './configurationDetailsCashbackOptions';
import { ConfigurationDetailsCashbackOptionsManualEntry } from './configurationDetailsCashbackOptionsManualEntry';
import { ConfigurationDetailsTipOptions } from './configurationDetailsTipOptions';
import { Country } from './country';
import { CreateApplicationRequest } from './createApplicationRequest';
import { CreateAuthorizationRequest } from './createAuthorizationRequest';
import { CreateAuthorizationRequest3dSecureAuthentication } from './createAuthorizationRequest3dSecureAuthentication';
import { CreateBalanceTransferRequest } from './createBalanceTransferRequest';
import { CreateDevice } from './createDevice';
import { CreateDisputeEvidenceRequest } from './createDisputeEvidenceRequest';
import { CreateExternalLinkRequest } from './createExternalLinkRequest';
import { CreateFeeProfileRequest } from './createFeeProfileRequest';
import { CreateFeeRequest } from './createFeeRequest';
import { CreateFileRequest } from './createFileRequest';
import { CreateIdentityRequest } from './createIdentityRequest';
import { CreateIdentityRequestAdditionalUnderwritingData } from './createIdentityRequestAdditionalUnderwritingData';
import { CreateIdentityRequestAdditionalUnderwritingDataCardVolumeDistribution } from './createIdentityRequestAdditionalUnderwritingDataCardVolumeDistribution';
import { CreateIdentityRequestAdditionalUnderwritingDataVolumeDistributionByBusinessType } from './createIdentityRequestAdditionalUnderwritingDataVolumeDistributionByBusinessType';
import { CreateIdentityRequestEntity } from './createIdentityRequestEntity';
import { CreateIdentityRequestEntityBusinessAddress } from './createIdentityRequestEntityBusinessAddress';
import { CreateIdentityRequestEntityDob } from './createIdentityRequestEntityDob';
import { CreateIdentityRequestEntityIncorporationDate } from './createIdentityRequestEntityIncorporationDate';
import { CreateIdentityRequestEntityPersonalAddress } from './createIdentityRequestEntityPersonalAddress';
import { CreateInstrumentUpdateRequest } from './createInstrumentUpdateRequest';
import { CreateMerchantUnderwritingRequest } from './createMerchantUnderwritingRequest';
import { CreatePaymentInstrumentRequest } from './createPaymentInstrumentRequest';
import { CreatePaymentInstrumentRequestAddress } from './createPaymentInstrumentRequestAddress';
import { CreateProcessorRequest } from './createProcessorRequest';
import { CreateProcessorRequestConfig } from './createProcessorRequestConfig';
import { CreateReversalRequest } from './createReversalRequest';
import { CreateSettlementRequest } from './createSettlementRequest';
import { CreateSubscriptionAmountRequest } from './createSubscriptionAmountRequest';
import { CreateSubscriptionAmountRequestFeeAmountData } from './createSubscriptionAmountRequestFeeAmountData';
import { CreateSubscriptionEnrollmentRequest } from './createSubscriptionEnrollmentRequest';
import { CreateSubscriptionScheduleRequest } from './createSubscriptionScheduleRequest';
import { CreateSubscriptionScheduleRequestFixedTimeIntervalOffset } from './createSubscriptionScheduleRequestFixedTimeIntervalOffset';
import { CreateSubscriptionScheduleRequestPeriodOffset } from './createSubscriptionScheduleRequestPeriodOffset';
import { CreateTransferRequest } from './createTransferRequest';
import { CreateUserRequest } from './createUserRequest';
import { CreateVerificationRequest } from './createVerificationRequest';
import { CreateWebhookRequest } from './createWebhookRequest';
import { Currency } from './currency';
import { Device } from './device';
import { DeviceConfigDetails } from './deviceConfigDetails';
import { DeviceLinks } from './deviceLinks';
import { DeviceLinksMerchant } from './deviceLinksMerchant';
import { Dispute } from './dispute';
import { DisputeEvidence } from './disputeEvidence';
import { DisputeEvidenceLinks } from './disputeEvidenceLinks';
import { DisputeEvidenceList } from './disputeEvidenceList';
import { DisputeEvidenceListEmbedded } from './disputeEvidenceListEmbedded';
import { DisputeLinks } from './disputeLinks';
import { DisputeLinksTransfer } from './disputeLinksTransfer';
import { DisputesList } from './disputesList';
import { DisputesListEmbedded } from './disputesListEmbedded';
import { DownloadInstrumentUpdateQueryParams } from './downloadInstrumentUpdateQueryParams';
import { Error401Unauthorized } from './error401Unauthorized';
import { Error401UnauthorizedEmbedded } from './error401UnauthorizedEmbedded';
import { Error401UnauthorizedEmbeddedErrorsInner } from './error401UnauthorizedEmbeddedErrorsInner';
import { Error401UnauthorizedEmbeddedErrorsInnerLinks } from './error401UnauthorizedEmbeddedErrorsInnerLinks';
import { Error402PaymentRequired } from './error402PaymentRequired';
import { Error402PaymentRequiredEmbedded } from './error402PaymentRequiredEmbedded';
import { Error402PaymentRequiredEmbeddedErrorsInner } from './error402PaymentRequiredEmbeddedErrorsInner';
import { Error402PaymentRequiredEmbeddedErrorsInnerLinks } from './error402PaymentRequiredEmbeddedErrorsInnerLinks';
import { Error403ForbiddenList } from './error403ForbiddenList';
import { Error403ForbiddenListEmbedded } from './error403ForbiddenListEmbedded';
import { Error403ForbiddenListEmbeddedErrorsInner } from './error403ForbiddenListEmbeddedErrorsInner';
import { Error404NotFoundList } from './error404NotFoundList';
import { Error404NotFoundListEmbedded } from './error404NotFoundListEmbedded';
import { Error404NotFoundListEmbeddedErrorsInner } from './error404NotFoundListEmbeddedErrorsInner';
import { Error406NotAcceptable } from './error406NotAcceptable';
import { Error422InvalidFieldList } from './error422InvalidFieldList';
import { Error422InvalidFieldListEmbedded } from './error422InvalidFieldListEmbedded';
import { Error422InvalidFieldListEmbeddedErrorsInner } from './error422InvalidFieldListEmbeddedErrorsInner';
import { ErrorGeneric } from './errorGeneric';
import { ExternalLink } from './externalLink';
import { ExternalLinksList } from './externalLinksList';
import { ExternalLinksListEmbedded } from './externalLinksListEmbedded';
import { Fee } from './fee';
import { FeeLinks } from './feeLinks';
import { FeeProfile } from './feeProfile';
import { FeeProfileLinks } from './feeProfileLinks';
import { FeeProfilesList } from './feeProfilesList';
import { FeeProfilesListEmbedded } from './feeProfilesListEmbedded';
import { FeeType } from './feeType';
import { FeesList } from './feesList';
import { FeesListEmbedded } from './feesListEmbedded';
import { FilesList } from './filesList';
import { FilesListEmbedded } from './filesListEmbedded';
import { IdentitiesList } from './identitiesList';
import { IdentitiesListEmbedded } from './identitiesListEmbedded';
import { Identity } from './identity';
import { IdentityAdditionalUnderwritingData } from './identityAdditionalUnderwritingData';
import { IdentityAdditionalUnderwritingDataCardVolumeDistribution } from './identityAdditionalUnderwritingDataCardVolumeDistribution';
import { IdentityAdditionalUnderwritingDataVolumeDistributionByBusinessType } from './identityAdditionalUnderwritingDataVolumeDistributionByBusinessType';
import { IdentityEntity } from './identityEntity';
import { IdentityEntityBusinessAddress } from './identityEntityBusinessAddress';
import { IdentityEntityDob } from './identityEntityDob';
import { IdentityEntityForm } from './identityEntityForm';
import { IdentityEntityFormBusinessAddress } from './identityEntityFormBusinessAddress';
import { IdentityEntityFormDob } from './identityEntityFormDob';
import { IdentityEntityFormIncorporationDate } from './identityEntityFormIncorporationDate';
import { IdentityEntityIncorporationDate } from './identityEntityIncorporationDate';
import { IdentityEntityPersonalAddress } from './identityEntityPersonalAddress';
import { IdentityLinks } from './identityLinks';
import { IdentityLinksApplication } from './identityLinksApplication';
import { IdentityLinksAssociatedIdentities } from './identityLinksAssociatedIdentities';
import { IdentityLinksAuthorizations } from './identityLinksAuthorizations';
import { IdentityLinksDisputes } from './identityLinksDisputes';
import { IdentityLinksMerchants } from './identityLinksMerchants';
import { IdentityLinksPaymentInstruments } from './identityLinksPaymentInstruments';
import { IdentityLinksSelf } from './identityLinksSelf';
import { IdentityLinksSettlements } from './identityLinksSettlements';
import { IdentityLinksTransfers } from './identityLinksTransfers';
import { IdentityLinksVerifications } from './identityLinksVerifications';
import { InputDetails } from './inputDetails';
import { InstrumentUpdate } from './instrumentUpdate';
import { InstrumentUpdate1 } from './instrumentUpdate1';
import { InstrumentUpdate1Links } from './instrumentUpdate1Links';
import { ListApplicationProfilesQueryParams } from './listApplicationProfilesQueryParams';
import { ListApplicationsQueryParams } from './listApplicationsQueryParams';
import { ListAuthorizationsQueryParams } from './listAuthorizationsQueryParams';
import { ListBalanceTransfersQueryParams } from './listBalanceTransfersQueryParams';
import { ListDisputeEvidenceQueryParams } from './listDisputeEvidenceQueryParams';
import { ListDisputesAdjustmentsQueryParams } from './listDisputesAdjustmentsQueryParams';
import { ListDisputesQueryParams } from './listDisputesQueryParams';
import { ListExternalLinksQueryParams } from './listExternalLinksQueryParams';
import { ListFeeProfilesQueryParams } from './listFeeProfilesQueryParams';
import { ListFeesQueryParams } from './listFeesQueryParams';
import { ListFilesQueryParams } from './listFilesQueryParams';
import { ListIdentitiesQueryParams } from './listIdentitiesQueryParams';
import { ListIdentityAssociatedIdentitiesQueryParams } from './listIdentityAssociatedIdentitiesQueryParams';
import { ListLinks } from './listLinks';
import { ListLinksNext } from './listLinksNext';
import { ListMerchantProfilesQueryParams } from './listMerchantProfilesQueryParams';
import { ListMerchantVerificationsQueryParams } from './listMerchantVerificationsQueryParams';
import { ListMerchantsQueryParams } from './listMerchantsQueryParams';
import { ListPaymentInstrumentsQueryParams } from './listPaymentInstrumentsQueryParams';
import { ListSettlementFundingTransfersQueryParams } from './listSettlementFundingTransfersQueryParams';
import { ListSettlementTransfersQueryParams } from './listSettlementTransfersQueryParams';
import { ListSettlementsQueryParams } from './listSettlementsQueryParams';
import { ListSubscriptionAmountQueryParams } from './listSubscriptionAmountQueryParams';
import { ListSubscriptionSchedulesQueryParams } from './listSubscriptionSchedulesQueryParams';
import { ListTransferReversalsQueryParams } from './listTransferReversalsQueryParams';
import { ListTransfersQueryParams } from './listTransfersQueryParams';
import { ListUsersQueryParams } from './listUsersQueryParams';
import { ListVerificationsQueryParams } from './listVerificationsQueryParams';
import { ListWebhooksQueryParams } from './listWebhooksQueryParams';
import { LogRef } from './logRef';
import { Merchant } from './merchant';
import { MerchantLinks } from './merchantLinks';
import { MerchantLinksApplication } from './merchantLinksApplication';
import { MerchantLinksIdentity } from './merchantLinksIdentity';
import { MerchantLinksMerchantProfile } from './merchantLinksMerchantProfile';
import { MerchantLinksVerification } from './merchantLinksVerification';
import { MerchantLinksVerifications } from './merchantLinksVerifications';
import { MerchantProcessorDetails } from './merchantProcessorDetails';
import { MerchantProfile } from './merchantProfile';
import { MerchantProfileLinks } from './merchantProfileLinks';
import { MerchantProfilesList } from './merchantProfilesList';
import { MerchantProfilesListEmbedded } from './merchantProfilesListEmbedded';
import { MerchantsList } from './merchantsList';
import { MerchantsListEmbedded } from './merchantsListEmbedded';
import { ModelFile } from './modelFile';
import { Name } from './name';
import { OperationKey } from './operationKey';
import { PageCursor } from './pageCursor';
import { PageOffset } from './pageOffset';
import { PaymentInstrument } from './paymentInstrument';
import { PaymentInstrumentLinks } from './paymentInstrumentLinks';
import { PaymentInstrumentLinksAuthorizations } from './paymentInstrumentLinksAuthorizations';
import { PaymentInstrumentLinksTransfers } from './paymentInstrumentLinksTransfers';
import { PaymentInstrumentToken } from './paymentInstrumentToken';
import { PaymentInstrumentTokenLinks } from './paymentInstrumentTokenLinks';
import { PaymentInstrumentTokenLinksVerifications } from './paymentInstrumentTokenLinksVerifications';
import { PaymentInstrumentUpdatesList } from './paymentInstrumentUpdatesList';
import { PaymentInstrumentUpdatesListEmbedded } from './paymentInstrumentUpdatesListEmbedded';
import { PaymentInstrumentsList } from './paymentInstrumentsList';
import { PaymentInstrumentsListEmbedded } from './paymentInstrumentsListEmbedded';
import { Processor } from './processor';
import { ProcessorApplicationConfig } from './processorApplicationConfig';
import { ProcessorApplicationConfigConfigurationTemplates } from './processorApplicationConfigConfigurationTemplates';
import { ProcessorLinks } from './processorLinks';
import { ProcessorSystemConfig } from './processorSystemConfig';
import { ProcessorSystemConfigConfigurationTemplates } from './processorSystemConfigConfigurationTemplates';
import { ProcessorsList } from './processorsList';
import { ProcessorsListEmbedded } from './processorsListEmbedded';
import { RemoveSettlementTransfer } from './removeSettlementTransfer';
import { ReserveProfile } from './reserveProfile';
import { ReserveProfilesList } from './reserveProfilesList';
import { ReserveProfilesListEmbedded } from './reserveProfilesListEmbedded';
import { ReserveProfilesListEmbeddedReserveProfilesInner } from './reserveProfilesListEmbeddedReserveProfilesInner';
import { ReserveProfilesListEmbeddedReserveProfilesInnerLinks } from './reserveProfilesListEmbeddedReserveProfilesInnerLinks';
import { ReviewQueueItem } from './reviewQueueItem';
import { ReviewQueueItemLinks } from './reviewQueueItemLinks';
import { ReviewQueueItemsList } from './reviewQueueItemsList';
import { ReviewQueueItemsListEmbedded } from './reviewQueueItemsListEmbedded';
import { ReviewQueueItemsListEmbeddedReviewQueueItemsInner } from './reviewQueueItemsListEmbeddedReviewQueueItemsInner';
import { ReviewQueueItemsListEmbeddedReviewQueueItemsInnerLinks } from './reviewQueueItemsListEmbeddedReviewQueueItemsInnerLinks';
import { RiskProfile } from './riskProfile';
import { RiskProfileLinks } from './riskProfileLinks';
import { RiskProfileRule } from './riskProfileRule';
import { RiskProfileRulesList } from './riskProfileRulesList';
import { RiskProfileRulesListEmbedded } from './riskProfileRulesListEmbedded';
import { RiskProfileRulesListEmbeddedRiskProfileRulesInner } from './riskProfileRulesListEmbeddedRiskProfileRulesInner';
import { RiskProfileRulesListEmbeddedRiskProfileRulesInnerLinks } from './riskProfileRulesListEmbeddedRiskProfileRulesInnerLinks';
import { RiskProfilesList } from './riskProfilesList';
import { RiskProfilesListEmbedded } from './riskProfilesListEmbedded';
import { Root } from './root';
import { RootLinks } from './rootLinks';
import { Settlement } from './settlement';
import { SettlementEngineSettlement } from './settlementEngineSettlement';
import { SettlementEngineSettlementLinks } from './settlementEngineSettlementLinks';
import { SettlementEngineSettlementsList } from './settlementEngineSettlementsList';
import { SettlementEngineSettlementsListEmbedded } from './settlementEngineSettlementsListEmbedded';
import { SettlementEngineSettlementsListEmbeddedSettlementsInner } from './settlementEngineSettlementsListEmbeddedSettlementsInner';
import { SettlementLinks } from './settlementLinks';
import { SettlementsList } from './settlementsList';
import { SettlementsListEmbedded } from './settlementsListEmbedded';
import { SubTypeTransfer } from './subTypeTransfer';
import { SubscriptionAmount } from './subscriptionAmount';
import { SubscriptionAmountFeeAmountData } from './subscriptionAmountFeeAmountData';
import { SubscriptionAmountLinks } from './subscriptionAmountLinks';
import { SubscriptionAmountLinksSchedule } from './subscriptionAmountLinksSchedule';
import { SubscriptionAmountList } from './subscriptionAmountList';
import { SubscriptionAmountListEmbedded } from './subscriptionAmountListEmbedded';
import { SubscriptionEnrollment } from './subscriptionEnrollment';
import { SubscriptionEnrollmentLinks } from './subscriptionEnrollmentLinks';
import { SubscriptionEnrollmentLinksAmounts } from './subscriptionEnrollmentLinksAmounts';
import { SubscriptionEnrollmentLinksMerchant } from './subscriptionEnrollmentLinksMerchant';
import { SubscriptionEnrollmentLinksSchedule } from './subscriptionEnrollmentLinksSchedule';
import { SubscriptionEnrollmentList } from './subscriptionEnrollmentList';
import { SubscriptionEnrollmentListEmbedded } from './subscriptionEnrollmentListEmbedded';
import { SubscriptionSchedule } from './subscriptionSchedule';
import { SubscriptionScheduleFixedTimeIntervalOffset } from './subscriptionScheduleFixedTimeIntervalOffset';
import { SubscriptionScheduleLinks } from './subscriptionScheduleLinks';
import { SubscriptionScheduleLinksAmounts } from './subscriptionScheduleLinksAmounts';
import { SubscriptionSchedulePeriodOffset } from './subscriptionSchedulePeriodOffset';
import { SubscriptionSchedulesList } from './subscriptionSchedulesList';
import { SubscriptionSchedulesListEmbedded } from './subscriptionSchedulesListEmbedded';
import { SubscriptionSchedulesListLinks } from './subscriptionSchedulesListLinks';
import { Transfer } from './transfer';
import { TransferLinks } from './transferLinks';
import { TransferLinksDestination } from './transferLinksDestination';
import { TransferLinksDisputedTransfer } from './transferLinksDisputedTransfer';
import { TransferLinksDisputes } from './transferLinksDisputes';
import { TransferLinksFeeProfile } from './transferLinksFeeProfile';
import { TransferLinksFees } from './transferLinksFees';
import { TransferLinksParent } from './transferLinksParent';
import { TransferLinksPaymentInstruments } from './transferLinksPaymentInstruments';
import { TransferLinksReversals } from './transferLinksReversals';
import { TransferLinksSource } from './transferLinksSource';
import { TransferReversalsList } from './transferReversalsList';
import { TransferReversalsListEmbedded } from './transferReversalsListEmbedded';
import { TransfersList } from './transfersList';
import { TransfersListEmbedded } from './transfersListEmbedded';
import { UpdateApplicationProfileRequest } from './updateApplicationProfileRequest';
import { UpdateAuthorizationRequest } from './updateAuthorizationRequest';
import { UpdateFeeRequest } from './updateFeeRequest';
import { UpdateIdentityRequest } from './updateIdentityRequest';
import { UpdateIdentityRequestAdditionalUnderwritingData } from './updateIdentityRequestAdditionalUnderwritingData';
import { UpdateIdentityRequestAdditionalUnderwritingDataCardVolumeDistribution } from './updateIdentityRequestAdditionalUnderwritingDataCardVolumeDistribution';
import { UpdateIdentityRequestAdditionalUnderwritingDataVolumeDistributionByBusinessType } from './updateIdentityRequestAdditionalUnderwritingDataVolumeDistributionByBusinessType';
import { UpdateIdentityRequestEntity } from './updateIdentityRequestEntity';
import { UpdateIdentityRequestEntityBusinessAddress } from './updateIdentityRequestEntityBusinessAddress';
import { UpdateIdentityRequestEntityDob } from './updateIdentityRequestEntityDob';
import { UpdateMerchantRequest } from './updateMerchantRequest';
import { UpdatePaymentInstrumentRequest } from './updatePaymentInstrumentRequest';
import { UpdateSettlementRequest } from './updateSettlementRequest';
import { UpdateSubscriptionEnrollmentRequest } from './updateSubscriptionEnrollmentRequest';
import { UpdateSubscriptionScheduleRequest } from './updateSubscriptionScheduleRequest';
import { UpdateTransferRequest } from './updateTransferRequest';
import { UpdateUserRequest } from './updateUserRequest';
import { UpdateWebhookRequest } from './updateWebhookRequest';
import { UploadFileRequest } from './uploadFileRequest';
import { User } from './user';
import { UserLinks } from './userLinks';
import { UsersList } from './usersList';
import { UsersListEmbedded } from './usersListEmbedded';
import { UsersListPage } from './usersListPage';
import { Verification } from './verification';
import { VerificationLinks } from './verificationLinks';
import { VerificationLinksApplication } from './verificationLinksApplication';
import { VerificationLinksMerchant } from './verificationLinksMerchant';
import { VerificationsList } from './verificationsList';
import { VerificationsListEmbedded } from './verificationsListEmbedded';
import { Webhook } from './webhook';
import { WebhooksList } from './webhooksList';
import { WebhooksListEmbedded } from './webhooksListEmbedded';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "Application.SettlementFundingIdentifierEnum": Application.SettlementFundingIdentifierEnum,
        "Application.ReadyToSettleUponEnum": Application.ReadyToSettleUponEnum,
        "Application.FeeReadyToSettleUponEnum": Application.FeeReadyToSettleUponEnum,
        "Authorization.StateEnum": Authorization.StateEnum,
        "BalanceTransfer.StateEnum": BalanceTransfer.StateEnum,
        "CardPresentInstrumentForm.TypeEnum": CardPresentInstrumentForm.TypeEnum,
        "CardPresentInstrumentForm.AvailableAccountTypeEnum": CardPresentInstrumentForm.AvailableAccountTypeEnum,
        "Country": Country,
        "CreateAuthorizationRequest.ProcessorEnum": CreateAuthorizationRequest.ProcessorEnum,
        "CreateBalanceTransferRequest.DestinationEnum": CreateBalanceTransferRequest.DestinationEnum,
        "CreateBalanceTransferRequest.SourceEnum": CreateBalanceTransferRequest.SourceEnum,
        "CreateDevice.ModelEnum": CreateDevice.ModelEnum,
        "CreateExternalLinkRequest.TypeEnum": CreateExternalLinkRequest.TypeEnum,
        "CreateFeeProfileRequest.RoundingModeEnum": CreateFeeProfileRequest.RoundingModeEnum,
        "CreateFeeRequest.FeeSubtypeEnum": CreateFeeRequest.FeeSubtypeEnum,
        "CreateFeeRequest.LinkedTypeEnum": CreateFeeRequest.LinkedTypeEnum,
        "CreateFileRequest.TypeEnum": CreateFileRequest.TypeEnum,
        "CreateIdentityRequestAdditionalUnderwritingData.RefundPolicyEnum": CreateIdentityRequestAdditionalUnderwritingData.RefundPolicyEnum,
        "CreateIdentityRequestEntity.OwnershipTypeEnum": CreateIdentityRequestEntity.OwnershipTypeEnum,
        "CreateIdentityRequestEntity.BusinessTypeEnum": CreateIdentityRequestEntity.BusinessTypeEnum,
        "CreateMerchantUnderwritingRequest.GatewayEnum": CreateMerchantUnderwritingRequest.GatewayEnum,
        "CreatePaymentInstrumentRequest.TypeEnum": CreatePaymentInstrumentRequest.TypeEnum,
        "CreatePaymentInstrumentRequest.AccountTypeEnum": CreatePaymentInstrumentRequest.AccountTypeEnum,
        "CreateSubscriptionScheduleRequest.LineItemTypeEnum": CreateSubscriptionScheduleRequest.LineItemTypeEnum,
        "CreateSubscriptionScheduleRequest.SubscriptionTypeEnum": CreateSubscriptionScheduleRequest.SubscriptionTypeEnum,
        "CreateTransferRequest.GatewayEnum": CreateTransferRequest.GatewayEnum,
        "CreateTransferRequest.InputMethodEnum": CreateTransferRequest.InputMethodEnum,
        "CreateTransferRequest.OperationKeyEnum": CreateTransferRequest.OperationKeyEnum,
        "Currency": Currency,
        "Dispute.ReasonEnum": Dispute.ReasonEnum,
        "Dispute.StateEnum": Dispute.StateEnum,
        "DisputeEvidence.StateEnum": DisputeEvidence.StateEnum,
        "Error401UnauthorizedEmbeddedErrorsInner.CodeEnum": Error401UnauthorizedEmbeddedErrorsInner.CodeEnum,
        "Error402PaymentRequiredEmbeddedErrorsInner.CodeEnum": Error402PaymentRequiredEmbeddedErrorsInner.CodeEnum,
        "Error402PaymentRequiredEmbeddedErrorsInner.MessageEnum": Error402PaymentRequiredEmbeddedErrorsInner.MessageEnum,
        "Error403ForbiddenListEmbeddedErrorsInner.CodeEnum": Error403ForbiddenListEmbeddedErrorsInner.CodeEnum,
        "Error404NotFoundListEmbeddedErrorsInner.CodeEnum": Error404NotFoundListEmbeddedErrorsInner.CodeEnum,
        "Error422InvalidFieldListEmbeddedErrorsInner.CodeEnum": Error422InvalidFieldListEmbeddedErrorsInner.CodeEnum,
        "Fee.FeeSubtypeEnum": Fee.FeeSubtypeEnum,
        "Fee.FeeTypeEnum": Fee.FeeTypeEnum,
        "Fee.LinkedTypeEnum": Fee.LinkedTypeEnum,
        "FeeProfile.RoundingModeEnum": FeeProfile.RoundingModeEnum,
        "FeeType": FeeType,
        "IdentityAdditionalUnderwritingData.RefundPolicyEnum": IdentityAdditionalUnderwritingData.RefundPolicyEnum,
        "IdentityEntity.OwnershipTypeEnum": IdentityEntity.OwnershipTypeEnum,
        "IdentityEntityForm.BusinessTypeEnum": IdentityEntityForm.BusinessTypeEnum,
        "IdentityEntityForm.OwnershipTypeEnum": IdentityEntityForm.OwnershipTypeEnum,
        "IdentityEntityFormBusinessAddress.CountryEnum": IdentityEntityFormBusinessAddress.CountryEnum,
        "InstrumentUpdate1.StateEnum": InstrumentUpdate1.StateEnum,
        "Merchant.OnboardingStateEnum": Merchant.OnboardingStateEnum,
        "OperationKey": OperationKey,
        "PaymentInstrument.TypeEnum": PaymentInstrument.TypeEnum,
        "PaymentInstrument.AccountTypeEnum": PaymentInstrument.AccountTypeEnum,
        "PaymentInstrument.InstrumentTypeEnum": PaymentInstrument.InstrumentTypeEnum,
        "PaymentInstrument.PayloadTypeEnum": PaymentInstrument.PayloadTypeEnum,
        "PaymentInstrument.AddressVerificationEnum": PaymentInstrument.AddressVerificationEnum,
        "PaymentInstrument.BrandEnum": PaymentInstrument.BrandEnum,
        "PaymentInstrument.CardTypeEnum": PaymentInstrument.CardTypeEnum,
        "PaymentInstrument.SecurityCodeVerificationEnum": PaymentInstrument.SecurityCodeVerificationEnum,
        "PaymentInstrumentToken.TypeEnum": PaymentInstrumentToken.TypeEnum,
        "PaymentInstrumentToken.InstrumentTypeEnum": PaymentInstrumentToken.InstrumentTypeEnum,
        "PaymentInstrumentToken.PayloadTypeEnum": PaymentInstrumentToken.PayloadTypeEnum,
        "ProcessorApplicationConfig.AllowedBusinessApplicationIdsEnum": ProcessorApplicationConfig.AllowedBusinessApplicationIdsEnum,
        "ProcessorApplicationConfig.DefaultMccEnum": ProcessorApplicationConfig.DefaultMccEnum,
        "ProcessorApplicationConfig.MotoEciindicatorEnum": ProcessorApplicationConfig.MotoEciindicatorEnum,
        "ProcessorApplicationConfig.PanEntryModeEnum": ProcessorApplicationConfig.PanEntryModeEnum,
        "ProcessorApplicationConfig.PosConditionCodeEnum": ProcessorApplicationConfig.PosConditionCodeEnum,
        "ProcessorSystemConfig.CLASSKEYIDENTIFIEREnum": ProcessorSystemConfig.CLASSKEYIDENTIFIEREnum,
        "ProcessorSystemConfig.AcquirerCountryCodeEnum": ProcessorSystemConfig.AcquirerCountryCodeEnum,
        "ProcessorSystemConfig.SourceOfFundsEnum": ProcessorSystemConfig.SourceOfFundsEnum,
        "ReviewQueueItem.EntityTypeEnum": ReviewQueueItem.EntityTypeEnum,
        "ReviewQueueItem.OutcomeEnum": ReviewQueueItem.OutcomeEnum,
        "ReviewQueueItem.ProcessorTypeEnum": ReviewQueueItem.ProcessorTypeEnum,
        "ReviewQueueItem.ReviewTypeEnum": ReviewQueueItem.ReviewTypeEnum,
        "ReviewQueueItemsListEmbeddedReviewQueueItemsInner.EntityTypeEnum": ReviewQueueItemsListEmbeddedReviewQueueItemsInner.EntityTypeEnum,
        "ReviewQueueItemsListEmbeddedReviewQueueItemsInner.OutcomeEnum": ReviewQueueItemsListEmbeddedReviewQueueItemsInner.OutcomeEnum,
        "ReviewQueueItemsListEmbeddedReviewQueueItemsInner.ProcessorTypeEnum": ReviewQueueItemsListEmbeddedReviewQueueItemsInner.ProcessorTypeEnum,
        "ReviewQueueItemsListEmbeddedReviewQueueItemsInner.ReviewTypeEnum": ReviewQueueItemsListEmbeddedReviewQueueItemsInner.ReviewTypeEnum,
        "Settlement.TypeEnum": Settlement.TypeEnum,
        "Settlement.StatusEnum": Settlement.StatusEnum,
        "SettlementEngineSettlement.ScheduleTypeEnum": SettlementEngineSettlement.ScheduleTypeEnum,
        "SettlementEngineSettlement.StatusEnum": SettlementEngineSettlement.StatusEnum,
        "SettlementEngineSettlementsListEmbeddedSettlementsInner.ScheduleTypeEnum": SettlementEngineSettlementsListEmbeddedSettlementsInner.ScheduleTypeEnum,
        "SettlementEngineSettlementsListEmbeddedSettlementsInner.StatusEnum": SettlementEngineSettlementsListEmbeddedSettlementsInner.StatusEnum,
        "SubTypeTransfer": SubTypeTransfer,
        "SubscriptionAmount.AmountTypeEnum": SubscriptionAmount.AmountTypeEnum,
        "SubscriptionSchedule.LineItemTypeEnum": SubscriptionSchedule.LineItemTypeEnum,
        "SubscriptionSchedule.SubscriptionTypeEnum": SubscriptionSchedule.SubscriptionTypeEnum,
        "Transfer.TypeEnum": Transfer.TypeEnum,
        "Transfer.StateEnum": Transfer.StateEnum,
        "Transfer.SubtypeEnum": Transfer.SubtypeEnum,
        "UpdateIdentityRequestAdditionalUnderwritingData.RefundPolicyEnum": UpdateIdentityRequestAdditionalUnderwritingData.RefundPolicyEnum,
        "UpdateIdentityRequestEntity.BusinessTypeEnum": UpdateIdentityRequestEntity.BusinessTypeEnum,
        "UpdatePaymentInstrumentRequest.TypeEnum": UpdatePaymentInstrumentRequest.TypeEnum,
        "UpdatePaymentInstrumentRequest.AccountTypeEnum": UpdatePaymentInstrumentRequest.AccountTypeEnum,
        "User.RoleEnum": User.RoleEnum,
        "Verification.StateEnum": Verification.StateEnum,
}

let typeMap: {[index: string]: any} = {
    "AdditionalPurchaseData": AdditionalPurchaseData,
    "AdditionalPurchaseDataItemDataInner": AdditionalPurchaseDataItemDataInner,
    "AdditionalPurchaseDataOrderDate": AdditionalPurchaseDataOrderDate,
    "Address": Address,
    "AdjustmentTransfersList": AdjustmentTransfersList,
    "AdjustmentTransfersListEmbedded": AdjustmentTransfersListEmbedded,
    "ApplePaySession": ApplePaySession,
    "ApplePaySessionRequest": ApplePaySessionRequest,
    "Application": Application,
    "ApplicationLinks": ApplicationLinks,
    "ApplicationLinksApplicationProfile": ApplicationLinksApplicationProfile,
    "ApplicationLinksSelf": ApplicationLinksSelf,
    "ApplicationProfile": ApplicationProfile,
    "ApplicationProfileLinks": ApplicationProfileLinks,
    "ApplicationProfileLinksApplication": ApplicationProfileLinksApplication,
    "ApplicationProfilesList": ApplicationProfilesList,
    "ApplicationProfilesListEmbedded": ApplicationProfilesListEmbedded,
    "ApplicationProfilesListLinks": ApplicationProfilesListLinks,
    "ApplicationsList": ApplicationsList,
    "ApplicationsListEmbedded": ApplicationsListEmbedded,
    "Authorization": Authorization,
    "AuthorizationExternalResponsesInner": AuthorizationExternalResponsesInner,
    "AuthorizationLinks": AuthorizationLinks,
    "AuthorizationLinksDevice": AuthorizationLinksDevice,
    "AuthorizationLinksMerchantIdentity": AuthorizationLinksMerchantIdentity,
    "AuthorizationLinksTransfer": AuthorizationLinksTransfer,
    "AuthorizationsList": AuthorizationsList,
    "AuthorizationsListEmbedded": AuthorizationsListEmbedded,
    "BalanceTransfer": BalanceTransfer,
    "BalanceTransferList": BalanceTransferList,
    "BalanceTransferListEmbedded": BalanceTransferListEmbedded,
    "CardPresentDetails": CardPresentDetails,
    "CardPresentDetailsEmvData": CardPresentDetailsEmvData,
    "CardPresentInstrumentForm": CardPresentInstrumentForm,
    "ConfigurationDetails": ConfigurationDetails,
    "ConfigurationDetailsCashbackOptions": ConfigurationDetailsCashbackOptions,
    "ConfigurationDetailsCashbackOptionsManualEntry": ConfigurationDetailsCashbackOptionsManualEntry,
    "ConfigurationDetailsTipOptions": ConfigurationDetailsTipOptions,
    "CreateApplicationRequest": CreateApplicationRequest,
    "CreateAuthorizationRequest": CreateAuthorizationRequest,
    "CreateAuthorizationRequest3dSecureAuthentication": CreateAuthorizationRequest3dSecureAuthentication,
    "CreateBalanceTransferRequest": CreateBalanceTransferRequest,
    "CreateDevice": CreateDevice,
    "CreateDisputeEvidenceRequest": CreateDisputeEvidenceRequest,
    "CreateExternalLinkRequest": CreateExternalLinkRequest,
    "CreateFeeProfileRequest": CreateFeeProfileRequest,
    "CreateFeeRequest": CreateFeeRequest,
    "CreateFileRequest": CreateFileRequest,
    "CreateIdentityRequest": CreateIdentityRequest,
    "CreateIdentityRequestAdditionalUnderwritingData": CreateIdentityRequestAdditionalUnderwritingData,
    "CreateIdentityRequestAdditionalUnderwritingDataCardVolumeDistribution": CreateIdentityRequestAdditionalUnderwritingDataCardVolumeDistribution,
    "CreateIdentityRequestAdditionalUnderwritingDataVolumeDistributionByBusinessType": CreateIdentityRequestAdditionalUnderwritingDataVolumeDistributionByBusinessType,
    "CreateIdentityRequestEntity": CreateIdentityRequestEntity,
    "CreateIdentityRequestEntityBusinessAddress": CreateIdentityRequestEntityBusinessAddress,
    "CreateIdentityRequestEntityDob": CreateIdentityRequestEntityDob,
    "CreateIdentityRequestEntityIncorporationDate": CreateIdentityRequestEntityIncorporationDate,
    "CreateIdentityRequestEntityPersonalAddress": CreateIdentityRequestEntityPersonalAddress,
    "CreateInstrumentUpdateRequest": CreateInstrumentUpdateRequest,
    "CreateMerchantUnderwritingRequest": CreateMerchantUnderwritingRequest,
    "CreatePaymentInstrumentRequest": CreatePaymentInstrumentRequest,
    "CreatePaymentInstrumentRequestAddress": CreatePaymentInstrumentRequestAddress,
    "CreateProcessorRequest": CreateProcessorRequest,
    "CreateProcessorRequestConfig": CreateProcessorRequestConfig,
    "CreateReversalRequest": CreateReversalRequest,
    "CreateSettlementRequest": CreateSettlementRequest,
    "CreateSubscriptionAmountRequest": CreateSubscriptionAmountRequest,
    "CreateSubscriptionAmountRequestFeeAmountData": CreateSubscriptionAmountRequestFeeAmountData,
    "CreateSubscriptionEnrollmentRequest": CreateSubscriptionEnrollmentRequest,
    "CreateSubscriptionScheduleRequest": CreateSubscriptionScheduleRequest,
    "CreateSubscriptionScheduleRequestFixedTimeIntervalOffset": CreateSubscriptionScheduleRequestFixedTimeIntervalOffset,
    "CreateSubscriptionScheduleRequestPeriodOffset": CreateSubscriptionScheduleRequestPeriodOffset,
    "CreateTransferRequest": CreateTransferRequest,
    "CreateUserRequest": CreateUserRequest,
    "CreateVerificationRequest": CreateVerificationRequest,
    "CreateWebhookRequest": CreateWebhookRequest,
    "Device": Device,
    "DeviceConfigDetails": DeviceConfigDetails,
    "DeviceLinks": DeviceLinks,
    "DeviceLinksMerchant": DeviceLinksMerchant,
    "Dispute": Dispute,
    "DisputeEvidence": DisputeEvidence,
    "DisputeEvidenceLinks": DisputeEvidenceLinks,
    "DisputeEvidenceList": DisputeEvidenceList,
    "DisputeEvidenceListEmbedded": DisputeEvidenceListEmbedded,
    "DisputeLinks": DisputeLinks,
    "DisputeLinksTransfer": DisputeLinksTransfer,
    "DisputesList": DisputesList,
    "DisputesListEmbedded": DisputesListEmbedded,
    "DownloadInstrumentUpdateQueryParams": DownloadInstrumentUpdateQueryParams,
    "Error401Unauthorized": Error401Unauthorized,
    "Error401UnauthorizedEmbedded": Error401UnauthorizedEmbedded,
    "Error401UnauthorizedEmbeddedErrorsInner": Error401UnauthorizedEmbeddedErrorsInner,
    "Error401UnauthorizedEmbeddedErrorsInnerLinks": Error401UnauthorizedEmbeddedErrorsInnerLinks,
    "Error402PaymentRequired": Error402PaymentRequired,
    "Error402PaymentRequiredEmbedded": Error402PaymentRequiredEmbedded,
    "Error402PaymentRequiredEmbeddedErrorsInner": Error402PaymentRequiredEmbeddedErrorsInner,
    "Error402PaymentRequiredEmbeddedErrorsInnerLinks": Error402PaymentRequiredEmbeddedErrorsInnerLinks,
    "Error403ForbiddenList": Error403ForbiddenList,
    "Error403ForbiddenListEmbedded": Error403ForbiddenListEmbedded,
    "Error403ForbiddenListEmbeddedErrorsInner": Error403ForbiddenListEmbeddedErrorsInner,
    "Error404NotFoundList": Error404NotFoundList,
    "Error404NotFoundListEmbedded": Error404NotFoundListEmbedded,
    "Error404NotFoundListEmbeddedErrorsInner": Error404NotFoundListEmbeddedErrorsInner,
    "Error406NotAcceptable": Error406NotAcceptable,
    "Error422InvalidFieldList": Error422InvalidFieldList,
    "Error422InvalidFieldListEmbedded": Error422InvalidFieldListEmbedded,
    "Error422InvalidFieldListEmbeddedErrorsInner": Error422InvalidFieldListEmbeddedErrorsInner,
    "ErrorGeneric": ErrorGeneric,
    "ExternalLink": ExternalLink,
    "ExternalLinksList": ExternalLinksList,
    "ExternalLinksListEmbedded": ExternalLinksListEmbedded,
    "Fee": Fee,
    "FeeLinks": FeeLinks,
    "FeeProfile": FeeProfile,
    "FeeProfileLinks": FeeProfileLinks,
    "FeeProfilesList": FeeProfilesList,
    "FeeProfilesListEmbedded": FeeProfilesListEmbedded,
    "FeesList": FeesList,
    "FeesListEmbedded": FeesListEmbedded,
    "FilesList": FilesList,
    "FilesListEmbedded": FilesListEmbedded,
    "IdentitiesList": IdentitiesList,
    "IdentitiesListEmbedded": IdentitiesListEmbedded,
    "Identity": Identity,
    "IdentityAdditionalUnderwritingData": IdentityAdditionalUnderwritingData,
    "IdentityAdditionalUnderwritingDataCardVolumeDistribution": IdentityAdditionalUnderwritingDataCardVolumeDistribution,
    "IdentityAdditionalUnderwritingDataVolumeDistributionByBusinessType": IdentityAdditionalUnderwritingDataVolumeDistributionByBusinessType,
    "IdentityEntity": IdentityEntity,
    "IdentityEntityBusinessAddress": IdentityEntityBusinessAddress,
    "IdentityEntityDob": IdentityEntityDob,
    "IdentityEntityForm": IdentityEntityForm,
    "IdentityEntityFormBusinessAddress": IdentityEntityFormBusinessAddress,
    "IdentityEntityFormDob": IdentityEntityFormDob,
    "IdentityEntityFormIncorporationDate": IdentityEntityFormIncorporationDate,
    "IdentityEntityIncorporationDate": IdentityEntityIncorporationDate,
    "IdentityEntityPersonalAddress": IdentityEntityPersonalAddress,
    "IdentityLinks": IdentityLinks,
    "IdentityLinksApplication": IdentityLinksApplication,
    "IdentityLinksAssociatedIdentities": IdentityLinksAssociatedIdentities,
    "IdentityLinksAuthorizations": IdentityLinksAuthorizations,
    "IdentityLinksDisputes": IdentityLinksDisputes,
    "IdentityLinksMerchants": IdentityLinksMerchants,
    "IdentityLinksPaymentInstruments": IdentityLinksPaymentInstruments,
    "IdentityLinksSelf": IdentityLinksSelf,
    "IdentityLinksSettlements": IdentityLinksSettlements,
    "IdentityLinksTransfers": IdentityLinksTransfers,
    "IdentityLinksVerifications": IdentityLinksVerifications,
    "InputDetails": InputDetails,
    "InstrumentUpdate": InstrumentUpdate,
    "InstrumentUpdate1": InstrumentUpdate1,
    "InstrumentUpdate1Links": InstrumentUpdate1Links,
    "ListApplicationProfilesQueryParams": ListApplicationProfilesQueryParams,
    "ListApplicationsQueryParams": ListApplicationsQueryParams,
    "ListAuthorizationsQueryParams": ListAuthorizationsQueryParams,
    "ListBalanceTransfersQueryParams": ListBalanceTransfersQueryParams,
    "ListDisputeEvidenceQueryParams": ListDisputeEvidenceQueryParams,
    "ListDisputesAdjustmentsQueryParams": ListDisputesAdjustmentsQueryParams,
    "ListDisputesQueryParams": ListDisputesQueryParams,
    "ListExternalLinksQueryParams": ListExternalLinksQueryParams,
    "ListFeeProfilesQueryParams": ListFeeProfilesQueryParams,
    "ListFeesQueryParams": ListFeesQueryParams,
    "ListFilesQueryParams": ListFilesQueryParams,
    "ListIdentitiesQueryParams": ListIdentitiesQueryParams,
    "ListIdentityAssociatedIdentitiesQueryParams": ListIdentityAssociatedIdentitiesQueryParams,
    "ListLinks": ListLinks,
    "ListLinksNext": ListLinksNext,
    "ListMerchantProfilesQueryParams": ListMerchantProfilesQueryParams,
    "ListMerchantVerificationsQueryParams": ListMerchantVerificationsQueryParams,
    "ListMerchantsQueryParams": ListMerchantsQueryParams,
    "ListPaymentInstrumentsQueryParams": ListPaymentInstrumentsQueryParams,
    "ListSettlementFundingTransfersQueryParams": ListSettlementFundingTransfersQueryParams,
    "ListSettlementTransfersQueryParams": ListSettlementTransfersQueryParams,
    "ListSettlementsQueryParams": ListSettlementsQueryParams,
    "ListSubscriptionAmountQueryParams": ListSubscriptionAmountQueryParams,
    "ListSubscriptionSchedulesQueryParams": ListSubscriptionSchedulesQueryParams,
    "ListTransferReversalsQueryParams": ListTransferReversalsQueryParams,
    "ListTransfersQueryParams": ListTransfersQueryParams,
    "ListUsersQueryParams": ListUsersQueryParams,
    "ListVerificationsQueryParams": ListVerificationsQueryParams,
    "ListWebhooksQueryParams": ListWebhooksQueryParams,
    "LogRef": LogRef,
    "Merchant": Merchant,
    "MerchantLinks": MerchantLinks,
    "MerchantLinksApplication": MerchantLinksApplication,
    "MerchantLinksIdentity": MerchantLinksIdentity,
    "MerchantLinksMerchantProfile": MerchantLinksMerchantProfile,
    "MerchantLinksVerification": MerchantLinksVerification,
    "MerchantLinksVerifications": MerchantLinksVerifications,
    "MerchantProcessorDetails": MerchantProcessorDetails,
    "MerchantProfile": MerchantProfile,
    "MerchantProfileLinks": MerchantProfileLinks,
    "MerchantProfilesList": MerchantProfilesList,
    "MerchantProfilesListEmbedded": MerchantProfilesListEmbedded,
    "MerchantsList": MerchantsList,
    "MerchantsListEmbedded": MerchantsListEmbedded,
    "ModelFile": ModelFile,
    "Name": Name,
    "PageCursor": PageCursor,
    "PageOffset": PageOffset,
    "PaymentInstrument": PaymentInstrument,
    "PaymentInstrumentLinks": PaymentInstrumentLinks,
    "PaymentInstrumentLinksAuthorizations": PaymentInstrumentLinksAuthorizations,
    "PaymentInstrumentLinksTransfers": PaymentInstrumentLinksTransfers,
    "PaymentInstrumentToken": PaymentInstrumentToken,
    "PaymentInstrumentTokenLinks": PaymentInstrumentTokenLinks,
    "PaymentInstrumentTokenLinksVerifications": PaymentInstrumentTokenLinksVerifications,
    "PaymentInstrumentUpdatesList": PaymentInstrumentUpdatesList,
    "PaymentInstrumentUpdatesListEmbedded": PaymentInstrumentUpdatesListEmbedded,
    "PaymentInstrumentsList": PaymentInstrumentsList,
    "PaymentInstrumentsListEmbedded": PaymentInstrumentsListEmbedded,
    "Processor": Processor,
    "ProcessorApplicationConfig": ProcessorApplicationConfig,
    "ProcessorApplicationConfigConfigurationTemplates": ProcessorApplicationConfigConfigurationTemplates,
    "ProcessorLinks": ProcessorLinks,
    "ProcessorSystemConfig": ProcessorSystemConfig,
    "ProcessorSystemConfigConfigurationTemplates": ProcessorSystemConfigConfigurationTemplates,
    "ProcessorsList": ProcessorsList,
    "ProcessorsListEmbedded": ProcessorsListEmbedded,
    "RemoveSettlementTransfer": RemoveSettlementTransfer,
    "ReserveProfile": ReserveProfile,
    "ReserveProfilesList": ReserveProfilesList,
    "ReserveProfilesListEmbedded": ReserveProfilesListEmbedded,
    "ReserveProfilesListEmbeddedReserveProfilesInner": ReserveProfilesListEmbeddedReserveProfilesInner,
    "ReserveProfilesListEmbeddedReserveProfilesInnerLinks": ReserveProfilesListEmbeddedReserveProfilesInnerLinks,
    "ReviewQueueItem": ReviewQueueItem,
    "ReviewQueueItemLinks": ReviewQueueItemLinks,
    "ReviewQueueItemsList": ReviewQueueItemsList,
    "ReviewQueueItemsListEmbedded": ReviewQueueItemsListEmbedded,
    "ReviewQueueItemsListEmbeddedReviewQueueItemsInner": ReviewQueueItemsListEmbeddedReviewQueueItemsInner,
    "ReviewQueueItemsListEmbeddedReviewQueueItemsInnerLinks": ReviewQueueItemsListEmbeddedReviewQueueItemsInnerLinks,
    "RiskProfile": RiskProfile,
    "RiskProfileLinks": RiskProfileLinks,
    "RiskProfileRule": RiskProfileRule,
    "RiskProfileRulesList": RiskProfileRulesList,
    "RiskProfileRulesListEmbedded": RiskProfileRulesListEmbedded,
    "RiskProfileRulesListEmbeddedRiskProfileRulesInner": RiskProfileRulesListEmbeddedRiskProfileRulesInner,
    "RiskProfileRulesListEmbeddedRiskProfileRulesInnerLinks": RiskProfileRulesListEmbeddedRiskProfileRulesInnerLinks,
    "RiskProfilesList": RiskProfilesList,
    "RiskProfilesListEmbedded": RiskProfilesListEmbedded,
    "Root": Root,
    "RootLinks": RootLinks,
    "Settlement": Settlement,
    "SettlementEngineSettlement": SettlementEngineSettlement,
    "SettlementEngineSettlementLinks": SettlementEngineSettlementLinks,
    "SettlementEngineSettlementsList": SettlementEngineSettlementsList,
    "SettlementEngineSettlementsListEmbedded": SettlementEngineSettlementsListEmbedded,
    "SettlementEngineSettlementsListEmbeddedSettlementsInner": SettlementEngineSettlementsListEmbeddedSettlementsInner,
    "SettlementLinks": SettlementLinks,
    "SettlementsList": SettlementsList,
    "SettlementsListEmbedded": SettlementsListEmbedded,
    "SubscriptionAmount": SubscriptionAmount,
    "SubscriptionAmountFeeAmountData": SubscriptionAmountFeeAmountData,
    "SubscriptionAmountLinks": SubscriptionAmountLinks,
    "SubscriptionAmountLinksSchedule": SubscriptionAmountLinksSchedule,
    "SubscriptionAmountList": SubscriptionAmountList,
    "SubscriptionAmountListEmbedded": SubscriptionAmountListEmbedded,
    "SubscriptionEnrollment": SubscriptionEnrollment,
    "SubscriptionEnrollmentLinks": SubscriptionEnrollmentLinks,
    "SubscriptionEnrollmentLinksAmounts": SubscriptionEnrollmentLinksAmounts,
    "SubscriptionEnrollmentLinksMerchant": SubscriptionEnrollmentLinksMerchant,
    "SubscriptionEnrollmentLinksSchedule": SubscriptionEnrollmentLinksSchedule,
    "SubscriptionEnrollmentList": SubscriptionEnrollmentList,
    "SubscriptionEnrollmentListEmbedded": SubscriptionEnrollmentListEmbedded,
    "SubscriptionSchedule": SubscriptionSchedule,
    "SubscriptionScheduleFixedTimeIntervalOffset": SubscriptionScheduleFixedTimeIntervalOffset,
    "SubscriptionScheduleLinks": SubscriptionScheduleLinks,
    "SubscriptionScheduleLinksAmounts": SubscriptionScheduleLinksAmounts,
    "SubscriptionSchedulePeriodOffset": SubscriptionSchedulePeriodOffset,
    "SubscriptionSchedulesList": SubscriptionSchedulesList,
    "SubscriptionSchedulesListEmbedded": SubscriptionSchedulesListEmbedded,
    "SubscriptionSchedulesListLinks": SubscriptionSchedulesListLinks,
    "Transfer": Transfer,
    "TransferLinks": TransferLinks,
    "TransferLinksDestination": TransferLinksDestination,
    "TransferLinksDisputedTransfer": TransferLinksDisputedTransfer,
    "TransferLinksDisputes": TransferLinksDisputes,
    "TransferLinksFeeProfile": TransferLinksFeeProfile,
    "TransferLinksFees": TransferLinksFees,
    "TransferLinksParent": TransferLinksParent,
    "TransferLinksPaymentInstruments": TransferLinksPaymentInstruments,
    "TransferLinksReversals": TransferLinksReversals,
    "TransferLinksSource": TransferLinksSource,
    "TransferReversalsList": TransferReversalsList,
    "TransferReversalsListEmbedded": TransferReversalsListEmbedded,
    "TransfersList": TransfersList,
    "TransfersListEmbedded": TransfersListEmbedded,
    "UpdateApplicationProfileRequest": UpdateApplicationProfileRequest,
    "UpdateAuthorizationRequest": UpdateAuthorizationRequest,
    "UpdateFeeRequest": UpdateFeeRequest,
    "UpdateIdentityRequest": UpdateIdentityRequest,
    "UpdateIdentityRequestAdditionalUnderwritingData": UpdateIdentityRequestAdditionalUnderwritingData,
    "UpdateIdentityRequestAdditionalUnderwritingDataCardVolumeDistribution": UpdateIdentityRequestAdditionalUnderwritingDataCardVolumeDistribution,
    "UpdateIdentityRequestAdditionalUnderwritingDataVolumeDistributionByBusinessType": UpdateIdentityRequestAdditionalUnderwritingDataVolumeDistributionByBusinessType,
    "UpdateIdentityRequestEntity": UpdateIdentityRequestEntity,
    "UpdateIdentityRequestEntityBusinessAddress": UpdateIdentityRequestEntityBusinessAddress,
    "UpdateIdentityRequestEntityDob": UpdateIdentityRequestEntityDob,
    "UpdateMerchantRequest": UpdateMerchantRequest,
    "UpdatePaymentInstrumentRequest": UpdatePaymentInstrumentRequest,
    "UpdateSettlementRequest": UpdateSettlementRequest,
    "UpdateSubscriptionEnrollmentRequest": UpdateSubscriptionEnrollmentRequest,
    "UpdateSubscriptionScheduleRequest": UpdateSubscriptionScheduleRequest,
    "UpdateTransferRequest": UpdateTransferRequest,
    "UpdateUserRequest": UpdateUserRequest,
    "UpdateWebhookRequest": UpdateWebhookRequest,
    "UploadFileRequest": UploadFileRequest,
    "User": User,
    "UserLinks": UserLinks,
    "UsersList": UsersList,
    "UsersListEmbedded": UsersListEmbedded,
    "UsersListPage": UsersListPage,
    "Verification": Verification,
    "VerificationLinks": VerificationLinks,
    "VerificationLinksApplication": VerificationLinksApplication,
    "VerificationLinksMerchant": VerificationLinksMerchant,
    "VerificationsList": VerificationsList,
    "VerificationsListEmbedded": VerificationsListEmbedded,
    "Webhook": Webhook,
    "WebhooksList": WebhooksList,
    "WebhooksListEmbedded": WebhooksListEmbedded,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);

export class SuperSet<T extends object> extends Set<T>{    
    private _page: PageCursor;
    private _links: ListLinks;

    constructor () {
        super();
    }

    set page(page: PageCursor){
        this._page = page;
    }

    get page(){
        return this._page;
    }

    set links(links: ListLinks){
        this._links = links;
    }

    get links(){
        return this._links;
    }
} 
