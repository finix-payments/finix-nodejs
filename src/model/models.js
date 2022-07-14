"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperSet = exports.VoidAuth = exports.OAuth = exports.ApiKeyAuth = exports.HttpBearerAuth = exports.HttpBasicAuth = exports.ObjectSerializer = void 0;
__exportStar(require("./additionalPurchaseData"), exports);
__exportStar(require("./additionalPurchaseDataItemDataInner"), exports);
__exportStar(require("./additionalPurchaseDataOrderDate"), exports);
__exportStar(require("./address"), exports);
__exportStar(require("./adjustmentTransfersList"), exports);
__exportStar(require("./adjustmentTransfersListEmbedded"), exports);
__exportStar(require("./applePaySession"), exports);
__exportStar(require("./applePaySessionRequest"), exports);
__exportStar(require("./application"), exports);
__exportStar(require("./applicationLinks"), exports);
__exportStar(require("./applicationLinksApplicationProfile"), exports);
__exportStar(require("./applicationLinksSelf"), exports);
__exportStar(require("./applicationProfile"), exports);
__exportStar(require("./applicationProfileLinks"), exports);
__exportStar(require("./applicationProfileLinksApplication"), exports);
__exportStar(require("./applicationProfilesList"), exports);
__exportStar(require("./applicationProfilesListEmbedded"), exports);
__exportStar(require("./applicationProfilesListLinks"), exports);
__exportStar(require("./applicationsList"), exports);
__exportStar(require("./applicationsListEmbedded"), exports);
__exportStar(require("./authorization"), exports);
__exportStar(require("./authorizationExternalResponsesInner"), exports);
__exportStar(require("./authorizationLinks"), exports);
__exportStar(require("./authorizationLinksDevice"), exports);
__exportStar(require("./authorizationLinksMerchantIdentity"), exports);
__exportStar(require("./authorizationLinksTransfer"), exports);
__exportStar(require("./authorizationsList"), exports);
__exportStar(require("./authorizationsListEmbedded"), exports);
__exportStar(require("./balanceTransfer"), exports);
__exportStar(require("./balanceTransferList"), exports);
__exportStar(require("./balanceTransferListEmbedded"), exports);
__exportStar(require("./cardPresentDetails"), exports);
__exportStar(require("./cardPresentDetailsEmvData"), exports);
__exportStar(require("./cardPresentInstrumentForm"), exports);
__exportStar(require("./configurationDetails"), exports);
__exportStar(require("./configurationDetailsCashbackOptions"), exports);
__exportStar(require("./configurationDetailsCashbackOptionsManualEntry"), exports);
__exportStar(require("./configurationDetailsTipOptions"), exports);
__exportStar(require("./country"), exports);
__exportStar(require("./createApplicationRequest"), exports);
__exportStar(require("./createAuthorizationRequest"), exports);
__exportStar(require("./createAuthorizationRequest3dSecureAuthentication"), exports);
__exportStar(require("./createBalanceTransferRequest"), exports);
__exportStar(require("./createDevice"), exports);
__exportStar(require("./createDisputeEvidenceRequest"), exports);
__exportStar(require("./createExternalLinkRequest"), exports);
__exportStar(require("./createFeeProfileRequest"), exports);
__exportStar(require("./createFeeRequest"), exports);
__exportStar(require("./createFileRequest"), exports);
__exportStar(require("./createIdentityRequest"), exports);
__exportStar(require("./createIdentityRequestAdditionalUnderwritingData"), exports);
__exportStar(require("./createIdentityRequestAdditionalUnderwritingDataCardVolumeDistribution"), exports);
__exportStar(require("./createIdentityRequestAdditionalUnderwritingDataVolumeDistributionByBusinessType"), exports);
__exportStar(require("./createIdentityRequestEntity"), exports);
__exportStar(require("./createIdentityRequestEntityBusinessAddress"), exports);
__exportStar(require("./createIdentityRequestEntityDob"), exports);
__exportStar(require("./createIdentityRequestEntityIncorporationDate"), exports);
__exportStar(require("./createIdentityRequestEntityPersonalAddress"), exports);
__exportStar(require("./createInstrumentUpdateRequest"), exports);
__exportStar(require("./createMerchantUnderwritingRequest"), exports);
__exportStar(require("./createPaymentInstrumentRequest"), exports);
__exportStar(require("./createPaymentInstrumentRequestAddress"), exports);
__exportStar(require("./createProcessorRequest"), exports);
__exportStar(require("./createProcessorRequestConfig"), exports);
__exportStar(require("./createReversalRequest"), exports);
__exportStar(require("./createSettlementRequest"), exports);
__exportStar(require("./createSubscriptionAmountRequest"), exports);
__exportStar(require("./createSubscriptionAmountRequestFeeAmountData"), exports);
__exportStar(require("./createSubscriptionEnrollmentRequest"), exports);
__exportStar(require("./createSubscriptionScheduleRequest"), exports);
__exportStar(require("./createSubscriptionScheduleRequestFixedTimeIntervalOffset"), exports);
__exportStar(require("./createSubscriptionScheduleRequestPeriodOffset"), exports);
__exportStar(require("./createTransferRequest"), exports);
__exportStar(require("./createUserRequest"), exports);
__exportStar(require("./createVerificationRequest"), exports);
__exportStar(require("./createWebhookRequest"), exports);
__exportStar(require("./currency"), exports);
__exportStar(require("./device"), exports);
__exportStar(require("./deviceConfigDetails"), exports);
__exportStar(require("./deviceLinks"), exports);
__exportStar(require("./deviceLinksMerchant"), exports);
__exportStar(require("./dispute"), exports);
__exportStar(require("./disputeEvidence"), exports);
__exportStar(require("./disputeEvidenceLinks"), exports);
__exportStar(require("./disputeEvidenceList"), exports);
__exportStar(require("./disputeEvidenceListEmbedded"), exports);
__exportStar(require("./disputeLinks"), exports);
__exportStar(require("./disputeLinksTransfer"), exports);
__exportStar(require("./disputesList"), exports);
__exportStar(require("./disputesListEmbedded"), exports);
__exportStar(require("./downloadInstrumentUpdateQueryParams"), exports);
__exportStar(require("./error401Unauthorized"), exports);
__exportStar(require("./error401UnauthorizedEmbedded"), exports);
__exportStar(require("./error401UnauthorizedEmbeddedErrorsInner"), exports);
__exportStar(require("./error401UnauthorizedEmbeddedErrorsInnerLinks"), exports);
__exportStar(require("./error402PaymentRequired"), exports);
__exportStar(require("./error402PaymentRequiredEmbedded"), exports);
__exportStar(require("./error402PaymentRequiredEmbeddedErrorsInner"), exports);
__exportStar(require("./error402PaymentRequiredEmbeddedErrorsInnerLinks"), exports);
__exportStar(require("./error403ForbiddenList"), exports);
__exportStar(require("./error403ForbiddenListEmbedded"), exports);
__exportStar(require("./error403ForbiddenListEmbeddedErrorsInner"), exports);
__exportStar(require("./error404NotFoundList"), exports);
__exportStar(require("./error404NotFoundListEmbedded"), exports);
__exportStar(require("./error404NotFoundListEmbeddedErrorsInner"), exports);
__exportStar(require("./error406NotAcceptable"), exports);
__exportStar(require("./error422InvalidFieldList"), exports);
__exportStar(require("./error422InvalidFieldListEmbedded"), exports);
__exportStar(require("./error422InvalidFieldListEmbeddedErrorsInner"), exports);
__exportStar(require("./errorGeneric"), exports);
__exportStar(require("./externalLink"), exports);
__exportStar(require("./externalLinksList"), exports);
__exportStar(require("./externalLinksListEmbedded"), exports);
__exportStar(require("./fee"), exports);
__exportStar(require("./feeLinks"), exports);
__exportStar(require("./feeProfile"), exports);
__exportStar(require("./feeProfileLinks"), exports);
__exportStar(require("./feeProfilesList"), exports);
__exportStar(require("./feeProfilesListEmbedded"), exports);
__exportStar(require("./feeType"), exports);
__exportStar(require("./feesList"), exports);
__exportStar(require("./feesListEmbedded"), exports);
__exportStar(require("./filesList"), exports);
__exportStar(require("./filesListEmbedded"), exports);
__exportStar(require("./identitiesList"), exports);
__exportStar(require("./identitiesListEmbedded"), exports);
__exportStar(require("./identity"), exports);
__exportStar(require("./identityAdditionalUnderwritingData"), exports);
__exportStar(require("./identityAdditionalUnderwritingDataCardVolumeDistribution"), exports);
__exportStar(require("./identityAdditionalUnderwritingDataVolumeDistributionByBusinessType"), exports);
__exportStar(require("./identityEntity"), exports);
__exportStar(require("./identityEntityBusinessAddress"), exports);
__exportStar(require("./identityEntityDob"), exports);
__exportStar(require("./identityEntityForm"), exports);
__exportStar(require("./identityEntityFormBusinessAddress"), exports);
__exportStar(require("./identityEntityFormDob"), exports);
__exportStar(require("./identityEntityFormIncorporationDate"), exports);
__exportStar(require("./identityEntityIncorporationDate"), exports);
__exportStar(require("./identityEntityPersonalAddress"), exports);
__exportStar(require("./identityLinks"), exports);
__exportStar(require("./identityLinksApplication"), exports);
__exportStar(require("./identityLinksAssociatedIdentities"), exports);
__exportStar(require("./identityLinksAuthorizations"), exports);
__exportStar(require("./identityLinksDisputes"), exports);
__exportStar(require("./identityLinksMerchants"), exports);
__exportStar(require("./identityLinksPaymentInstruments"), exports);
__exportStar(require("./identityLinksSelf"), exports);
__exportStar(require("./identityLinksSettlements"), exports);
__exportStar(require("./identityLinksTransfers"), exports);
__exportStar(require("./identityLinksVerifications"), exports);
__exportStar(require("./inputDetails"), exports);
__exportStar(require("./instrumentUpdate"), exports);
__exportStar(require("./listApplicationProfilesQueryParams"), exports);
__exportStar(require("./listApplicationsQueryParams"), exports);
__exportStar(require("./listAuthorizationsQueryParams"), exports);
__exportStar(require("./listBalanceTransfersQueryParams"), exports);
__exportStar(require("./listDisputeEvidenceQueryParams"), exports);
__exportStar(require("./listDisputesAdjustmentsQueryParams"), exports);
__exportStar(require("./listDisputesQueryParams"), exports);
__exportStar(require("./listExternalLinksQueryParams"), exports);
__exportStar(require("./listFeeProfilesQueryParams"), exports);
__exportStar(require("./listFeesQueryParams"), exports);
__exportStar(require("./listFilesQueryParams"), exports);
__exportStar(require("./listIdentitiesQueryParams"), exports);
__exportStar(require("./listIdentityAssociatedIdentitiesQueryParams"), exports);
__exportStar(require("./listLinks"), exports);
__exportStar(require("./listLinksNext"), exports);
__exportStar(require("./listMerchantProfilesQueryParams"), exports);
__exportStar(require("./listMerchantVerificationsQueryParams"), exports);
__exportStar(require("./listMerchantsQueryParams"), exports);
__exportStar(require("./listPaymentInstrumentsQueryParams"), exports);
__exportStar(require("./listSettlementFundingTransfersQueryParams"), exports);
__exportStar(require("./listSettlementTransfersQueryParams"), exports);
__exportStar(require("./listSettlementsQueryParams"), exports);
__exportStar(require("./listSubscriptionAmountQueryParams"), exports);
__exportStar(require("./listSubscriptionSchedulesQueryParams"), exports);
__exportStar(require("./listTransferReversalsQueryParams"), exports);
__exportStar(require("./listTransfersQueryParams"), exports);
__exportStar(require("./listUsersQueryParams"), exports);
__exportStar(require("./listVerificationsQueryParams"), exports);
__exportStar(require("./listWebhooksQueryParams"), exports);
__exportStar(require("./logRef"), exports);
__exportStar(require("./merchant"), exports);
__exportStar(require("./merchantLinks"), exports);
__exportStar(require("./merchantLinksApplication"), exports);
__exportStar(require("./merchantLinksIdentity"), exports);
__exportStar(require("./merchantLinksMerchantProfile"), exports);
__exportStar(require("./merchantLinksVerification"), exports);
__exportStar(require("./merchantLinksVerifications"), exports);
__exportStar(require("./merchantProcessorDetails"), exports);
__exportStar(require("./merchantProfile"), exports);
__exportStar(require("./merchantProfileLinks"), exports);
__exportStar(require("./merchantProfilesList"), exports);
__exportStar(require("./merchantProfilesListEmbedded"), exports);
__exportStar(require("./merchantsList"), exports);
__exportStar(require("./merchantsListEmbedded"), exports);
__exportStar(require("./modelFile"), exports);
__exportStar(require("./name"), exports);
__exportStar(require("./operationKey"), exports);
__exportStar(require("./pageCursor"), exports);
__exportStar(require("./pageOffset"), exports);
__exportStar(require("./paymentInstrument"), exports);
__exportStar(require("./paymentInstrumentLinks"), exports);
__exportStar(require("./paymentInstrumentLinksAuthorizations"), exports);
__exportStar(require("./paymentInstrumentLinksTransfers"), exports);
__exportStar(require("./paymentInstrumentToken"), exports);
__exportStar(require("./paymentInstrumentTokenLinks"), exports);
__exportStar(require("./paymentInstrumentTokenLinksVerifications"), exports);
__exportStar(require("./paymentInstrumentUpdatesList"), exports);
__exportStar(require("./paymentInstrumentUpdatesListEmbedded"), exports);
__exportStar(require("./paymentInstrumentsList"), exports);
__exportStar(require("./paymentInstrumentsListEmbedded"), exports);
__exportStar(require("./processor"), exports);
__exportStar(require("./processorApplicationConfig"), exports);
__exportStar(require("./processorApplicationConfigConfigurationTemplates"), exports);
__exportStar(require("./processorLinks"), exports);
__exportStar(require("./processorSystemConfig"), exports);
__exportStar(require("./processorSystemConfigConfigurationTemplates"), exports);
__exportStar(require("./processorsList"), exports);
__exportStar(require("./processorsListEmbedded"), exports);
__exportStar(require("./removeSettlementTransfer"), exports);
__exportStar(require("./reserveProfile"), exports);
__exportStar(require("./reserveProfilesList"), exports);
__exportStar(require("./reserveProfilesListEmbedded"), exports);
__exportStar(require("./reviewQueueItem"), exports);
__exportStar(require("./reviewQueueItemLinks"), exports);
__exportStar(require("./reviewQueueItemsList"), exports);
__exportStar(require("./reviewQueueItemsListEmbedded"), exports);
__exportStar(require("./riskProfile"), exports);
__exportStar(require("./riskProfileLinks"), exports);
__exportStar(require("./riskProfileRule"), exports);
__exportStar(require("./riskProfileRulesList"), exports);
__exportStar(require("./riskProfileRulesListEmbedded"), exports);
__exportStar(require("./riskProfilesList"), exports);
__exportStar(require("./riskProfilesListEmbedded"), exports);
__exportStar(require("./root"), exports);
__exportStar(require("./rootLinks"), exports);
__exportStar(require("./settlement"), exports);
__exportStar(require("./settlementEngineSettlement"), exports);
__exportStar(require("./settlementEngineSettlementLinks"), exports);
__exportStar(require("./settlementEngineSettlementsList"), exports);
__exportStar(require("./settlementEngineSettlementsListEmbedded"), exports);
__exportStar(require("./settlementLinks"), exports);
__exportStar(require("./settlementsList"), exports);
__exportStar(require("./settlementsListEmbedded"), exports);
__exportStar(require("./subTypeTransfer"), exports);
__exportStar(require("./subscriptionAmount"), exports);
__exportStar(require("./subscriptionAmountFeeAmountData"), exports);
__exportStar(require("./subscriptionAmountLinks"), exports);
__exportStar(require("./subscriptionAmountLinksSchedule"), exports);
__exportStar(require("./subscriptionAmountList"), exports);
__exportStar(require("./subscriptionAmountListEmbedded"), exports);
__exportStar(require("./subscriptionEnrollment"), exports);
__exportStar(require("./subscriptionEnrollmentLinks"), exports);
__exportStar(require("./subscriptionEnrollmentLinksAmounts"), exports);
__exportStar(require("./subscriptionEnrollmentLinksMerchant"), exports);
__exportStar(require("./subscriptionEnrollmentLinksSchedule"), exports);
__exportStar(require("./subscriptionEnrollmentList"), exports);
__exportStar(require("./subscriptionEnrollmentListEmbedded"), exports);
__exportStar(require("./subscriptionSchedule"), exports);
__exportStar(require("./subscriptionScheduleFixedTimeIntervalOffset"), exports);
__exportStar(require("./subscriptionScheduleLinks"), exports);
__exportStar(require("./subscriptionScheduleLinksAmounts"), exports);
__exportStar(require("./subscriptionSchedulePeriodOffset"), exports);
__exportStar(require("./subscriptionSchedulesList"), exports);
__exportStar(require("./subscriptionSchedulesListEmbedded"), exports);
__exportStar(require("./subscriptionSchedulesListLinks"), exports);
__exportStar(require("./transfer"), exports);
__exportStar(require("./transferLinks"), exports);
__exportStar(require("./transferLinksDestination"), exports);
__exportStar(require("./transferLinksDisputedTransfer"), exports);
__exportStar(require("./transferLinksDisputes"), exports);
__exportStar(require("./transferLinksFeeProfile"), exports);
__exportStar(require("./transferLinksFees"), exports);
__exportStar(require("./transferLinksParent"), exports);
__exportStar(require("./transferLinksPaymentInstruments"), exports);
__exportStar(require("./transferLinksReversals"), exports);
__exportStar(require("./transferLinksSource"), exports);
__exportStar(require("./transferReversalsList"), exports);
__exportStar(require("./transferReversalsListEmbedded"), exports);
__exportStar(require("./transfersList"), exports);
__exportStar(require("./transfersListEmbedded"), exports);
__exportStar(require("./updateApplicationProfileRequest"), exports);
__exportStar(require("./updateAuthorizationRequest"), exports);
__exportStar(require("./updateFeeRequest"), exports);
__exportStar(require("./updateIdentityRequest"), exports);
__exportStar(require("./updateIdentityRequestAdditionalUnderwritingData"), exports);
__exportStar(require("./updateIdentityRequestAdditionalUnderwritingDataCardVolumeDistribution"), exports);
__exportStar(require("./updateIdentityRequestAdditionalUnderwritingDataVolumeDistributionByBusinessType"), exports);
__exportStar(require("./updateIdentityRequestEntity"), exports);
__exportStar(require("./updateIdentityRequestEntityBusinessAddress"), exports);
__exportStar(require("./updateIdentityRequestEntityDob"), exports);
__exportStar(require("./updateMerchantRequest"), exports);
__exportStar(require("./updatePaymentInstrumentRequest"), exports);
__exportStar(require("./updateSettlementRequest"), exports);
__exportStar(require("./updateSubscriptionEnrollmentRequest"), exports);
__exportStar(require("./updateSubscriptionScheduleRequest"), exports);
__exportStar(require("./updateTransferRequest"), exports);
__exportStar(require("./updateUserRequest"), exports);
__exportStar(require("./updateWebhookRequest"), exports);
__exportStar(require("./uploadFileRequest"), exports);
__exportStar(require("./user"), exports);
__exportStar(require("./userLinks"), exports);
__exportStar(require("./usersList"), exports);
__exportStar(require("./usersListEmbedded"), exports);
__exportStar(require("./usersListPage"), exports);
__exportStar(require("./verification"), exports);
__exportStar(require("./verificationLinks"), exports);
__exportStar(require("./verificationLinksApplication"), exports);
__exportStar(require("./verificationLinksMerchant"), exports);
__exportStar(require("./verificationsList"), exports);
__exportStar(require("./verificationsListEmbedded"), exports);
__exportStar(require("./webhook"), exports);
__exportStar(require("./webhooksList"), exports);
__exportStar(require("./webhooksListEmbedded"), exports);
const additionalPurchaseData_1 = require("./additionalPurchaseData");
const additionalPurchaseDataItemDataInner_1 = require("./additionalPurchaseDataItemDataInner");
const additionalPurchaseDataOrderDate_1 = require("./additionalPurchaseDataOrderDate");
const address_1 = require("./address");
const adjustmentTransfersList_1 = require("./adjustmentTransfersList");
const adjustmentTransfersListEmbedded_1 = require("./adjustmentTransfersListEmbedded");
const applePaySession_1 = require("./applePaySession");
const applePaySessionRequest_1 = require("./applePaySessionRequest");
const application_1 = require("./application");
const applicationLinks_1 = require("./applicationLinks");
const applicationLinksApplicationProfile_1 = require("./applicationLinksApplicationProfile");
const applicationLinksSelf_1 = require("./applicationLinksSelf");
const applicationProfile_1 = require("./applicationProfile");
const applicationProfileLinks_1 = require("./applicationProfileLinks");
const applicationProfileLinksApplication_1 = require("./applicationProfileLinksApplication");
const applicationProfilesList_1 = require("./applicationProfilesList");
const applicationProfilesListEmbedded_1 = require("./applicationProfilesListEmbedded");
const applicationProfilesListLinks_1 = require("./applicationProfilesListLinks");
const applicationsList_1 = require("./applicationsList");
const applicationsListEmbedded_1 = require("./applicationsListEmbedded");
const authorization_1 = require("./authorization");
const authorizationExternalResponsesInner_1 = require("./authorizationExternalResponsesInner");
const authorizationLinks_1 = require("./authorizationLinks");
const authorizationLinksDevice_1 = require("./authorizationLinksDevice");
const authorizationLinksMerchantIdentity_1 = require("./authorizationLinksMerchantIdentity");
const authorizationLinksTransfer_1 = require("./authorizationLinksTransfer");
const authorizationsList_1 = require("./authorizationsList");
const authorizationsListEmbedded_1 = require("./authorizationsListEmbedded");
const balanceTransfer_1 = require("./balanceTransfer");
const balanceTransferList_1 = require("./balanceTransferList");
const balanceTransferListEmbedded_1 = require("./balanceTransferListEmbedded");
const cardPresentDetails_1 = require("./cardPresentDetails");
const cardPresentDetailsEmvData_1 = require("./cardPresentDetailsEmvData");
const cardPresentInstrumentForm_1 = require("./cardPresentInstrumentForm");
const configurationDetails_1 = require("./configurationDetails");
const configurationDetailsCashbackOptions_1 = require("./configurationDetailsCashbackOptions");
const configurationDetailsCashbackOptionsManualEntry_1 = require("./configurationDetailsCashbackOptionsManualEntry");
const configurationDetailsTipOptions_1 = require("./configurationDetailsTipOptions");
const country_1 = require("./country");
const createApplicationRequest_1 = require("./createApplicationRequest");
const createAuthorizationRequest_1 = require("./createAuthorizationRequest");
const createAuthorizationRequest3dSecureAuthentication_1 = require("./createAuthorizationRequest3dSecureAuthentication");
const createBalanceTransferRequest_1 = require("./createBalanceTransferRequest");
const createDevice_1 = require("./createDevice");
const createDisputeEvidenceRequest_1 = require("./createDisputeEvidenceRequest");
const createExternalLinkRequest_1 = require("./createExternalLinkRequest");
const createFeeProfileRequest_1 = require("./createFeeProfileRequest");
const createFeeRequest_1 = require("./createFeeRequest");
const createFileRequest_1 = require("./createFileRequest");
const createIdentityRequest_1 = require("./createIdentityRequest");
const createIdentityRequestAdditionalUnderwritingData_1 = require("./createIdentityRequestAdditionalUnderwritingData");
const createIdentityRequestAdditionalUnderwritingDataCardVolumeDistribution_1 = require("./createIdentityRequestAdditionalUnderwritingDataCardVolumeDistribution");
const createIdentityRequestAdditionalUnderwritingDataVolumeDistributionByBusinessType_1 = require("./createIdentityRequestAdditionalUnderwritingDataVolumeDistributionByBusinessType");
const createIdentityRequestEntity_1 = require("./createIdentityRequestEntity");
const createIdentityRequestEntityBusinessAddress_1 = require("./createIdentityRequestEntityBusinessAddress");
const createIdentityRequestEntityDob_1 = require("./createIdentityRequestEntityDob");
const createIdentityRequestEntityIncorporationDate_1 = require("./createIdentityRequestEntityIncorporationDate");
const createIdentityRequestEntityPersonalAddress_1 = require("./createIdentityRequestEntityPersonalAddress");
const createInstrumentUpdateRequest_1 = require("./createInstrumentUpdateRequest");
const createMerchantUnderwritingRequest_1 = require("./createMerchantUnderwritingRequest");
const createPaymentInstrumentRequest_1 = require("./createPaymentInstrumentRequest");
const createPaymentInstrumentRequestAddress_1 = require("./createPaymentInstrumentRequestAddress");
const createProcessorRequest_1 = require("./createProcessorRequest");
const createProcessorRequestConfig_1 = require("./createProcessorRequestConfig");
const createReversalRequest_1 = require("./createReversalRequest");
const createSettlementRequest_1 = require("./createSettlementRequest");
const createSubscriptionAmountRequest_1 = require("./createSubscriptionAmountRequest");
const createSubscriptionAmountRequestFeeAmountData_1 = require("./createSubscriptionAmountRequestFeeAmountData");
const createSubscriptionEnrollmentRequest_1 = require("./createSubscriptionEnrollmentRequest");
const createSubscriptionScheduleRequest_1 = require("./createSubscriptionScheduleRequest");
const createSubscriptionScheduleRequestFixedTimeIntervalOffset_1 = require("./createSubscriptionScheduleRequestFixedTimeIntervalOffset");
const createSubscriptionScheduleRequestPeriodOffset_1 = require("./createSubscriptionScheduleRequestPeriodOffset");
const createTransferRequest_1 = require("./createTransferRequest");
const createUserRequest_1 = require("./createUserRequest");
const createVerificationRequest_1 = require("./createVerificationRequest");
const createWebhookRequest_1 = require("./createWebhookRequest");
const currency_1 = require("./currency");
const device_1 = require("./device");
const deviceConfigDetails_1 = require("./deviceConfigDetails");
const deviceLinks_1 = require("./deviceLinks");
const deviceLinksMerchant_1 = require("./deviceLinksMerchant");
const dispute_1 = require("./dispute");
const disputeEvidence_1 = require("./disputeEvidence");
const disputeEvidenceLinks_1 = require("./disputeEvidenceLinks");
const disputeEvidenceList_1 = require("./disputeEvidenceList");
const disputeEvidenceListEmbedded_1 = require("./disputeEvidenceListEmbedded");
const disputeLinks_1 = require("./disputeLinks");
const disputeLinksTransfer_1 = require("./disputeLinksTransfer");
const disputesList_1 = require("./disputesList");
const disputesListEmbedded_1 = require("./disputesListEmbedded");
const downloadInstrumentUpdateQueryParams_1 = require("./downloadInstrumentUpdateQueryParams");
const error401Unauthorized_1 = require("./error401Unauthorized");
const error401UnauthorizedEmbedded_1 = require("./error401UnauthorizedEmbedded");
const error401UnauthorizedEmbeddedErrorsInner_1 = require("./error401UnauthorizedEmbeddedErrorsInner");
const error401UnauthorizedEmbeddedErrorsInnerLinks_1 = require("./error401UnauthorizedEmbeddedErrorsInnerLinks");
const error402PaymentRequired_1 = require("./error402PaymentRequired");
const error402PaymentRequiredEmbedded_1 = require("./error402PaymentRequiredEmbedded");
const error402PaymentRequiredEmbeddedErrorsInner_1 = require("./error402PaymentRequiredEmbeddedErrorsInner");
const error402PaymentRequiredEmbeddedErrorsInnerLinks_1 = require("./error402PaymentRequiredEmbeddedErrorsInnerLinks");
const error403ForbiddenList_1 = require("./error403ForbiddenList");
const error403ForbiddenListEmbedded_1 = require("./error403ForbiddenListEmbedded");
const error403ForbiddenListEmbeddedErrorsInner_1 = require("./error403ForbiddenListEmbeddedErrorsInner");
const error404NotFoundList_1 = require("./error404NotFoundList");
const error404NotFoundListEmbedded_1 = require("./error404NotFoundListEmbedded");
const error404NotFoundListEmbeddedErrorsInner_1 = require("./error404NotFoundListEmbeddedErrorsInner");
const error406NotAcceptable_1 = require("./error406NotAcceptable");
const error422InvalidFieldList_1 = require("./error422InvalidFieldList");
const error422InvalidFieldListEmbedded_1 = require("./error422InvalidFieldListEmbedded");
const error422InvalidFieldListEmbeddedErrorsInner_1 = require("./error422InvalidFieldListEmbeddedErrorsInner");
const errorGeneric_1 = require("./errorGeneric");
const externalLink_1 = require("./externalLink");
const externalLinksList_1 = require("./externalLinksList");
const externalLinksListEmbedded_1 = require("./externalLinksListEmbedded");
const fee_1 = require("./fee");
const feeLinks_1 = require("./feeLinks");
const feeProfile_1 = require("./feeProfile");
const feeProfileLinks_1 = require("./feeProfileLinks");
const feeProfilesList_1 = require("./feeProfilesList");
const feeProfilesListEmbedded_1 = require("./feeProfilesListEmbedded");
const feeType_1 = require("./feeType");
const feesList_1 = require("./feesList");
const feesListEmbedded_1 = require("./feesListEmbedded");
const filesList_1 = require("./filesList");
const filesListEmbedded_1 = require("./filesListEmbedded");
const identitiesList_1 = require("./identitiesList");
const identitiesListEmbedded_1 = require("./identitiesListEmbedded");
const identity_1 = require("./identity");
const identityAdditionalUnderwritingData_1 = require("./identityAdditionalUnderwritingData");
const identityAdditionalUnderwritingDataCardVolumeDistribution_1 = require("./identityAdditionalUnderwritingDataCardVolumeDistribution");
const identityAdditionalUnderwritingDataVolumeDistributionByBusinessType_1 = require("./identityAdditionalUnderwritingDataVolumeDistributionByBusinessType");
const identityEntity_1 = require("./identityEntity");
const identityEntityBusinessAddress_1 = require("./identityEntityBusinessAddress");
const identityEntityDob_1 = require("./identityEntityDob");
const identityEntityForm_1 = require("./identityEntityForm");
const identityEntityFormBusinessAddress_1 = require("./identityEntityFormBusinessAddress");
const identityEntityFormDob_1 = require("./identityEntityFormDob");
const identityEntityFormIncorporationDate_1 = require("./identityEntityFormIncorporationDate");
const identityEntityIncorporationDate_1 = require("./identityEntityIncorporationDate");
const identityEntityPersonalAddress_1 = require("./identityEntityPersonalAddress");
const identityLinks_1 = require("./identityLinks");
const identityLinksApplication_1 = require("./identityLinksApplication");
const identityLinksAssociatedIdentities_1 = require("./identityLinksAssociatedIdentities");
const identityLinksAuthorizations_1 = require("./identityLinksAuthorizations");
const identityLinksDisputes_1 = require("./identityLinksDisputes");
const identityLinksMerchants_1 = require("./identityLinksMerchants");
const identityLinksPaymentInstruments_1 = require("./identityLinksPaymentInstruments");
const identityLinksSelf_1 = require("./identityLinksSelf");
const identityLinksSettlements_1 = require("./identityLinksSettlements");
const identityLinksTransfers_1 = require("./identityLinksTransfers");
const identityLinksVerifications_1 = require("./identityLinksVerifications");
const inputDetails_1 = require("./inputDetails");
const instrumentUpdate_1 = require("./instrumentUpdate");
const listApplicationProfilesQueryParams_1 = require("./listApplicationProfilesQueryParams");
const listApplicationsQueryParams_1 = require("./listApplicationsQueryParams");
const listAuthorizationsQueryParams_1 = require("./listAuthorizationsQueryParams");
const listBalanceTransfersQueryParams_1 = require("./listBalanceTransfersQueryParams");
const listDisputeEvidenceQueryParams_1 = require("./listDisputeEvidenceQueryParams");
const listDisputesAdjustmentsQueryParams_1 = require("./listDisputesAdjustmentsQueryParams");
const listDisputesQueryParams_1 = require("./listDisputesQueryParams");
const listExternalLinksQueryParams_1 = require("./listExternalLinksQueryParams");
const listFeeProfilesQueryParams_1 = require("./listFeeProfilesQueryParams");
const listFeesQueryParams_1 = require("./listFeesQueryParams");
const listFilesQueryParams_1 = require("./listFilesQueryParams");
const listIdentitiesQueryParams_1 = require("./listIdentitiesQueryParams");
const listIdentityAssociatedIdentitiesQueryParams_1 = require("./listIdentityAssociatedIdentitiesQueryParams");
const listLinks_1 = require("./listLinks");
const listLinksNext_1 = require("./listLinksNext");
const listMerchantProfilesQueryParams_1 = require("./listMerchantProfilesQueryParams");
const listMerchantVerificationsQueryParams_1 = require("./listMerchantVerificationsQueryParams");
const listMerchantsQueryParams_1 = require("./listMerchantsQueryParams");
const listPaymentInstrumentsQueryParams_1 = require("./listPaymentInstrumentsQueryParams");
const listSettlementFundingTransfersQueryParams_1 = require("./listSettlementFundingTransfersQueryParams");
const listSettlementTransfersQueryParams_1 = require("./listSettlementTransfersQueryParams");
const listSettlementsQueryParams_1 = require("./listSettlementsQueryParams");
const listSubscriptionAmountQueryParams_1 = require("./listSubscriptionAmountQueryParams");
const listSubscriptionSchedulesQueryParams_1 = require("./listSubscriptionSchedulesQueryParams");
const listTransferReversalsQueryParams_1 = require("./listTransferReversalsQueryParams");
const listTransfersQueryParams_1 = require("./listTransfersQueryParams");
const listUsersQueryParams_1 = require("./listUsersQueryParams");
const listVerificationsQueryParams_1 = require("./listVerificationsQueryParams");
const listWebhooksQueryParams_1 = require("./listWebhooksQueryParams");
const logRef_1 = require("./logRef");
const merchant_1 = require("./merchant");
const merchantLinks_1 = require("./merchantLinks");
const merchantLinksApplication_1 = require("./merchantLinksApplication");
const merchantLinksIdentity_1 = require("./merchantLinksIdentity");
const merchantLinksMerchantProfile_1 = require("./merchantLinksMerchantProfile");
const merchantLinksVerification_1 = require("./merchantLinksVerification");
const merchantLinksVerifications_1 = require("./merchantLinksVerifications");
const merchantProcessorDetails_1 = require("./merchantProcessorDetails");
const merchantProfile_1 = require("./merchantProfile");
const merchantProfileLinks_1 = require("./merchantProfileLinks");
const merchantProfilesList_1 = require("./merchantProfilesList");
const merchantProfilesListEmbedded_1 = require("./merchantProfilesListEmbedded");
const merchantsList_1 = require("./merchantsList");
const merchantsListEmbedded_1 = require("./merchantsListEmbedded");
const modelFile_1 = require("./modelFile");
const name_1 = require("./name");
const operationKey_1 = require("./operationKey");
const pageCursor_1 = require("./pageCursor");
const pageOffset_1 = require("./pageOffset");
const paymentInstrument_1 = require("./paymentInstrument");
const paymentInstrumentLinks_1 = require("./paymentInstrumentLinks");
const paymentInstrumentLinksAuthorizations_1 = require("./paymentInstrumentLinksAuthorizations");
const paymentInstrumentLinksTransfers_1 = require("./paymentInstrumentLinksTransfers");
const paymentInstrumentToken_1 = require("./paymentInstrumentToken");
const paymentInstrumentTokenLinks_1 = require("./paymentInstrumentTokenLinks");
const paymentInstrumentTokenLinksVerifications_1 = require("./paymentInstrumentTokenLinksVerifications");
const paymentInstrumentUpdatesList_1 = require("./paymentInstrumentUpdatesList");
const paymentInstrumentUpdatesListEmbedded_1 = require("./paymentInstrumentUpdatesListEmbedded");
const paymentInstrumentsList_1 = require("./paymentInstrumentsList");
const paymentInstrumentsListEmbedded_1 = require("./paymentInstrumentsListEmbedded");
const processor_1 = require("./processor");
const processorApplicationConfig_1 = require("./processorApplicationConfig");
const processorApplicationConfigConfigurationTemplates_1 = require("./processorApplicationConfigConfigurationTemplates");
const processorLinks_1 = require("./processorLinks");
const processorSystemConfig_1 = require("./processorSystemConfig");
const processorSystemConfigConfigurationTemplates_1 = require("./processorSystemConfigConfigurationTemplates");
const processorsList_1 = require("./processorsList");
const processorsListEmbedded_1 = require("./processorsListEmbedded");
const removeSettlementTransfer_1 = require("./removeSettlementTransfer");
const reserveProfile_1 = require("./reserveProfile");
const reserveProfilesList_1 = require("./reserveProfilesList");
const reserveProfilesListEmbedded_1 = require("./reserveProfilesListEmbedded");
const reviewQueueItem_1 = require("./reviewQueueItem");
const reviewQueueItemLinks_1 = require("./reviewQueueItemLinks");
const reviewQueueItemsList_1 = require("./reviewQueueItemsList");
const reviewQueueItemsListEmbedded_1 = require("./reviewQueueItemsListEmbedded");
const riskProfile_1 = require("./riskProfile");
const riskProfileLinks_1 = require("./riskProfileLinks");
const riskProfileRule_1 = require("./riskProfileRule");
const riskProfileRulesList_1 = require("./riskProfileRulesList");
const riskProfileRulesListEmbedded_1 = require("./riskProfileRulesListEmbedded");
const riskProfilesList_1 = require("./riskProfilesList");
const riskProfilesListEmbedded_1 = require("./riskProfilesListEmbedded");
const root_1 = require("./root");
const rootLinks_1 = require("./rootLinks");
const settlement_1 = require("./settlement");
const settlementEngineSettlement_1 = require("./settlementEngineSettlement");
const settlementEngineSettlementLinks_1 = require("./settlementEngineSettlementLinks");
const settlementEngineSettlementsList_1 = require("./settlementEngineSettlementsList");
const settlementEngineSettlementsListEmbedded_1 = require("./settlementEngineSettlementsListEmbedded");
const settlementLinks_1 = require("./settlementLinks");
const settlementsList_1 = require("./settlementsList");
const settlementsListEmbedded_1 = require("./settlementsListEmbedded");
const subTypeTransfer_1 = require("./subTypeTransfer");
const subscriptionAmount_1 = require("./subscriptionAmount");
const subscriptionAmountFeeAmountData_1 = require("./subscriptionAmountFeeAmountData");
const subscriptionAmountLinks_1 = require("./subscriptionAmountLinks");
const subscriptionAmountLinksSchedule_1 = require("./subscriptionAmountLinksSchedule");
const subscriptionAmountList_1 = require("./subscriptionAmountList");
const subscriptionAmountListEmbedded_1 = require("./subscriptionAmountListEmbedded");
const subscriptionEnrollment_1 = require("./subscriptionEnrollment");
const subscriptionEnrollmentLinks_1 = require("./subscriptionEnrollmentLinks");
const subscriptionEnrollmentLinksAmounts_1 = require("./subscriptionEnrollmentLinksAmounts");
const subscriptionEnrollmentLinksMerchant_1 = require("./subscriptionEnrollmentLinksMerchant");
const subscriptionEnrollmentLinksSchedule_1 = require("./subscriptionEnrollmentLinksSchedule");
const subscriptionEnrollmentList_1 = require("./subscriptionEnrollmentList");
const subscriptionEnrollmentListEmbedded_1 = require("./subscriptionEnrollmentListEmbedded");
const subscriptionSchedule_1 = require("./subscriptionSchedule");
const subscriptionScheduleFixedTimeIntervalOffset_1 = require("./subscriptionScheduleFixedTimeIntervalOffset");
const subscriptionScheduleLinks_1 = require("./subscriptionScheduleLinks");
const subscriptionScheduleLinksAmounts_1 = require("./subscriptionScheduleLinksAmounts");
const subscriptionSchedulePeriodOffset_1 = require("./subscriptionSchedulePeriodOffset");
const subscriptionSchedulesList_1 = require("./subscriptionSchedulesList");
const subscriptionSchedulesListEmbedded_1 = require("./subscriptionSchedulesListEmbedded");
const subscriptionSchedulesListLinks_1 = require("./subscriptionSchedulesListLinks");
const transfer_1 = require("./transfer");
const transferLinks_1 = require("./transferLinks");
const transferLinksDestination_1 = require("./transferLinksDestination");
const transferLinksDisputedTransfer_1 = require("./transferLinksDisputedTransfer");
const transferLinksDisputes_1 = require("./transferLinksDisputes");
const transferLinksFeeProfile_1 = require("./transferLinksFeeProfile");
const transferLinksFees_1 = require("./transferLinksFees");
const transferLinksParent_1 = require("./transferLinksParent");
const transferLinksPaymentInstruments_1 = require("./transferLinksPaymentInstruments");
const transferLinksReversals_1 = require("./transferLinksReversals");
const transferLinksSource_1 = require("./transferLinksSource");
const transferReversalsList_1 = require("./transferReversalsList");
const transferReversalsListEmbedded_1 = require("./transferReversalsListEmbedded");
const transfersList_1 = require("./transfersList");
const transfersListEmbedded_1 = require("./transfersListEmbedded");
const updateApplicationProfileRequest_1 = require("./updateApplicationProfileRequest");
const updateAuthorizationRequest_1 = require("./updateAuthorizationRequest");
const updateFeeRequest_1 = require("./updateFeeRequest");
const updateIdentityRequest_1 = require("./updateIdentityRequest");
const updateIdentityRequestAdditionalUnderwritingData_1 = require("./updateIdentityRequestAdditionalUnderwritingData");
const updateIdentityRequestAdditionalUnderwritingDataCardVolumeDistribution_1 = require("./updateIdentityRequestAdditionalUnderwritingDataCardVolumeDistribution");
const updateIdentityRequestAdditionalUnderwritingDataVolumeDistributionByBusinessType_1 = require("./updateIdentityRequestAdditionalUnderwritingDataVolumeDistributionByBusinessType");
const updateIdentityRequestEntity_1 = require("./updateIdentityRequestEntity");
const updateIdentityRequestEntityBusinessAddress_1 = require("./updateIdentityRequestEntityBusinessAddress");
const updateIdentityRequestEntityDob_1 = require("./updateIdentityRequestEntityDob");
const updateMerchantRequest_1 = require("./updateMerchantRequest");
const updatePaymentInstrumentRequest_1 = require("./updatePaymentInstrumentRequest");
const updateSettlementRequest_1 = require("./updateSettlementRequest");
const updateSubscriptionEnrollmentRequest_1 = require("./updateSubscriptionEnrollmentRequest");
const updateSubscriptionScheduleRequest_1 = require("./updateSubscriptionScheduleRequest");
const updateTransferRequest_1 = require("./updateTransferRequest");
const updateUserRequest_1 = require("./updateUserRequest");
const updateWebhookRequest_1 = require("./updateWebhookRequest");
const uploadFileRequest_1 = require("./uploadFileRequest");
const user_1 = require("./user");
const userLinks_1 = require("./userLinks");
const usersList_1 = require("./usersList");
const usersListEmbedded_1 = require("./usersListEmbedded");
const usersListPage_1 = require("./usersListPage");
const verification_1 = require("./verification");
const verificationLinks_1 = require("./verificationLinks");
const verificationLinksApplication_1 = require("./verificationLinksApplication");
const verificationLinksMerchant_1 = require("./verificationLinksMerchant");
const verificationsList_1 = require("./verificationsList");
const verificationsListEmbedded_1 = require("./verificationsListEmbedded");
const webhook_1 = require("./webhook");
const webhooksList_1 = require("./webhooksList");
const webhooksListEmbedded_1 = require("./webhooksListEmbedded");
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
let enumsMap = {
    "Application.SettlementFundingIdentifierEnum": application_1.Application.SettlementFundingIdentifierEnum,
    "Application.ReadyToSettleUponEnum": application_1.Application.ReadyToSettleUponEnum,
    "Application.FeeReadyToSettleUponEnum": application_1.Application.FeeReadyToSettleUponEnum,
    "Authorization.StateEnum": authorization_1.Authorization.StateEnum,
    "BalanceTransfer.StateEnum": balanceTransfer_1.BalanceTransfer.StateEnum,
    "CardPresentInstrumentForm.TypeEnum": cardPresentInstrumentForm_1.CardPresentInstrumentForm.TypeEnum,
    "CardPresentInstrumentForm.AvailableAccountTypeEnum": cardPresentInstrumentForm_1.CardPresentInstrumentForm.AvailableAccountTypeEnum,
    "Country": country_1.Country,
    "CreateAuthorizationRequest.ProcessorEnum": createAuthorizationRequest_1.CreateAuthorizationRequest.ProcessorEnum,
    "CreateBalanceTransferRequest.DestinationEnum": createBalanceTransferRequest_1.CreateBalanceTransferRequest.DestinationEnum,
    "CreateBalanceTransferRequest.SourceEnum": createBalanceTransferRequest_1.CreateBalanceTransferRequest.SourceEnum,
    "CreateDevice.ModelEnum": createDevice_1.CreateDevice.ModelEnum,
    "CreateExternalLinkRequest.TypeEnum": createExternalLinkRequest_1.CreateExternalLinkRequest.TypeEnum,
    "CreateFeeProfileRequest.RoundingModeEnum": createFeeProfileRequest_1.CreateFeeProfileRequest.RoundingModeEnum,
    "CreateFeeRequest.FeeSubtypeEnum": createFeeRequest_1.CreateFeeRequest.FeeSubtypeEnum,
    "CreateFeeRequest.LinkedTypeEnum": createFeeRequest_1.CreateFeeRequest.LinkedTypeEnum,
    "CreateFileRequest.TypeEnum": createFileRequest_1.CreateFileRequest.TypeEnum,
    "CreateIdentityRequestAdditionalUnderwritingData.RefundPolicyEnum": createIdentityRequestAdditionalUnderwritingData_1.CreateIdentityRequestAdditionalUnderwritingData.RefundPolicyEnum,
    "CreateIdentityRequestEntity.OwnershipTypeEnum": createIdentityRequestEntity_1.CreateIdentityRequestEntity.OwnershipTypeEnum,
    "CreateIdentityRequestEntity.BusinessTypeEnum": createIdentityRequestEntity_1.CreateIdentityRequestEntity.BusinessTypeEnum,
    "CreateMerchantUnderwritingRequest.GatewayEnum": createMerchantUnderwritingRequest_1.CreateMerchantUnderwritingRequest.GatewayEnum,
    "CreatePaymentInstrumentRequest.TypeEnum": createPaymentInstrumentRequest_1.CreatePaymentInstrumentRequest.TypeEnum,
    "CreatePaymentInstrumentRequest.AccountTypeEnum": createPaymentInstrumentRequest_1.CreatePaymentInstrumentRequest.AccountTypeEnum,
    "CreateSubscriptionScheduleRequest.LineItemTypeEnum": createSubscriptionScheduleRequest_1.CreateSubscriptionScheduleRequest.LineItemTypeEnum,
    "CreateSubscriptionScheduleRequest.SubscriptionTypeEnum": createSubscriptionScheduleRequest_1.CreateSubscriptionScheduleRequest.SubscriptionTypeEnum,
    "CreateTransferRequest.GatewayEnum": createTransferRequest_1.CreateTransferRequest.GatewayEnum,
    "CreateTransferRequest.InputMethodEnum": createTransferRequest_1.CreateTransferRequest.InputMethodEnum,
    "CreateTransferRequest.OperationKeyEnum": createTransferRequest_1.CreateTransferRequest.OperationKeyEnum,
    "Currency": currency_1.Currency,
    "Dispute.ReasonEnum": dispute_1.Dispute.ReasonEnum,
    "Dispute.StateEnum": dispute_1.Dispute.StateEnum,
    "DisputeEvidence.StateEnum": disputeEvidence_1.DisputeEvidence.StateEnum,
    "Error401UnauthorizedEmbeddedErrorsInner.CodeEnum": error401UnauthorizedEmbeddedErrorsInner_1.Error401UnauthorizedEmbeddedErrorsInner.CodeEnum,
    "Error402PaymentRequiredEmbeddedErrorsInner.CodeEnum": error402PaymentRequiredEmbeddedErrorsInner_1.Error402PaymentRequiredEmbeddedErrorsInner.CodeEnum,
    "Error402PaymentRequiredEmbeddedErrorsInner.MessageEnum": error402PaymentRequiredEmbeddedErrorsInner_1.Error402PaymentRequiredEmbeddedErrorsInner.MessageEnum,
    "Error403ForbiddenListEmbeddedErrorsInner.CodeEnum": error403ForbiddenListEmbeddedErrorsInner_1.Error403ForbiddenListEmbeddedErrorsInner.CodeEnum,
    "Error404NotFoundListEmbeddedErrorsInner.CodeEnum": error404NotFoundListEmbeddedErrorsInner_1.Error404NotFoundListEmbeddedErrorsInner.CodeEnum,
    "Error422InvalidFieldListEmbeddedErrorsInner.CodeEnum": error422InvalidFieldListEmbeddedErrorsInner_1.Error422InvalidFieldListEmbeddedErrorsInner.CodeEnum,
    "Fee.FeeSubtypeEnum": fee_1.Fee.FeeSubtypeEnum,
    "Fee.FeeTypeEnum": fee_1.Fee.FeeTypeEnum,
    "Fee.LinkedTypeEnum": fee_1.Fee.LinkedTypeEnum,
    "FeeProfile.RoundingModeEnum": feeProfile_1.FeeProfile.RoundingModeEnum,
    "FeeType": feeType_1.FeeType,
    "IdentityAdditionalUnderwritingData.RefundPolicyEnum": identityAdditionalUnderwritingData_1.IdentityAdditionalUnderwritingData.RefundPolicyEnum,
    "IdentityEntity.OwnershipTypeEnum": identityEntity_1.IdentityEntity.OwnershipTypeEnum,
    "IdentityEntityForm.BusinessTypeEnum": identityEntityForm_1.IdentityEntityForm.BusinessTypeEnum,
    "IdentityEntityForm.OwnershipTypeEnum": identityEntityForm_1.IdentityEntityForm.OwnershipTypeEnum,
    "IdentityEntityFormBusinessAddress.CountryEnum": identityEntityFormBusinessAddress_1.IdentityEntityFormBusinessAddress.CountryEnum,
    "Merchant.OnboardingStateEnum": merchant_1.Merchant.OnboardingStateEnum,
    "OperationKey": operationKey_1.OperationKey,
    "PaymentInstrument.TypeEnum": paymentInstrument_1.PaymentInstrument.TypeEnum,
    "PaymentInstrument.AccountTypeEnum": paymentInstrument_1.PaymentInstrument.AccountTypeEnum,
    "PaymentInstrument.InstrumentTypeEnum": paymentInstrument_1.PaymentInstrument.InstrumentTypeEnum,
    "PaymentInstrument.PayloadTypeEnum": paymentInstrument_1.PaymentInstrument.PayloadTypeEnum,
    "PaymentInstrument.AddressVerificationEnum": paymentInstrument_1.PaymentInstrument.AddressVerificationEnum,
    "PaymentInstrument.BrandEnum": paymentInstrument_1.PaymentInstrument.BrandEnum,
    "PaymentInstrument.CardTypeEnum": paymentInstrument_1.PaymentInstrument.CardTypeEnum,
    "PaymentInstrument.SecurityCodeVerificationEnum": paymentInstrument_1.PaymentInstrument.SecurityCodeVerificationEnum,
    "PaymentInstrumentToken.TypeEnum": paymentInstrumentToken_1.PaymentInstrumentToken.TypeEnum,
    "PaymentInstrumentToken.InstrumentTypeEnum": paymentInstrumentToken_1.PaymentInstrumentToken.InstrumentTypeEnum,
    "PaymentInstrumentToken.PayloadTypeEnum": paymentInstrumentToken_1.PaymentInstrumentToken.PayloadTypeEnum,
    "ProcessorApplicationConfig.AllowedBusinessApplicationIdsEnum": processorApplicationConfig_1.ProcessorApplicationConfig.AllowedBusinessApplicationIdsEnum,
    "ProcessorApplicationConfig.DefaultMccEnum": processorApplicationConfig_1.ProcessorApplicationConfig.DefaultMccEnum,
    "ProcessorApplicationConfig.MotoEciindicatorEnum": processorApplicationConfig_1.ProcessorApplicationConfig.MotoEciindicatorEnum,
    "ProcessorApplicationConfig.PanEntryModeEnum": processorApplicationConfig_1.ProcessorApplicationConfig.PanEntryModeEnum,
    "ProcessorApplicationConfig.PosConditionCodeEnum": processorApplicationConfig_1.ProcessorApplicationConfig.PosConditionCodeEnum,
    "ProcessorSystemConfig.CLASSKEYIDENTIFIEREnum": processorSystemConfig_1.ProcessorSystemConfig.CLASSKEYIDENTIFIEREnum,
    "ProcessorSystemConfig.AcquirerCountryCodeEnum": processorSystemConfig_1.ProcessorSystemConfig.AcquirerCountryCodeEnum,
    "ProcessorSystemConfig.SourceOfFundsEnum": processorSystemConfig_1.ProcessorSystemConfig.SourceOfFundsEnum,
    "ReviewQueueItem.EntityTypeEnum": reviewQueueItem_1.ReviewQueueItem.EntityTypeEnum,
    "ReviewQueueItem.OutcomeEnum": reviewQueueItem_1.ReviewQueueItem.OutcomeEnum,
    "ReviewQueueItem.ProcessorTypeEnum": reviewQueueItem_1.ReviewQueueItem.ProcessorTypeEnum,
    "ReviewQueueItem.ReviewTypeEnum": reviewQueueItem_1.ReviewQueueItem.ReviewTypeEnum,
    "Settlement.TypeEnum": settlement_1.Settlement.TypeEnum,
    "Settlement.StatusEnum": settlement_1.Settlement.StatusEnum,
    "SettlementEngineSettlement.ScheduleTypeEnum": settlementEngineSettlement_1.SettlementEngineSettlement.ScheduleTypeEnum,
    "SettlementEngineSettlement.StatusEnum": settlementEngineSettlement_1.SettlementEngineSettlement.StatusEnum,
    "SubTypeTransfer": subTypeTransfer_1.SubTypeTransfer,
    "SubscriptionAmount.AmountTypeEnum": subscriptionAmount_1.SubscriptionAmount.AmountTypeEnum,
    "SubscriptionSchedule.LineItemTypeEnum": subscriptionSchedule_1.SubscriptionSchedule.LineItemTypeEnum,
    "SubscriptionSchedule.SubscriptionTypeEnum": subscriptionSchedule_1.SubscriptionSchedule.SubscriptionTypeEnum,
    "Transfer.TypeEnum": transfer_1.Transfer.TypeEnum,
    "Transfer.StateEnum": transfer_1.Transfer.StateEnum,
    "Transfer.SubtypeEnum": transfer_1.Transfer.SubtypeEnum,
    "UpdateIdentityRequestAdditionalUnderwritingData.RefundPolicyEnum": updateIdentityRequestAdditionalUnderwritingData_1.UpdateIdentityRequestAdditionalUnderwritingData.RefundPolicyEnum,
    "UpdateIdentityRequestEntity.BusinessTypeEnum": updateIdentityRequestEntity_1.UpdateIdentityRequestEntity.BusinessTypeEnum,
    "UpdatePaymentInstrumentRequest.TypeEnum": updatePaymentInstrumentRequest_1.UpdatePaymentInstrumentRequest.TypeEnum,
    "UpdatePaymentInstrumentRequest.AccountTypeEnum": updatePaymentInstrumentRequest_1.UpdatePaymentInstrumentRequest.AccountTypeEnum,
    "User.RoleEnum": user_1.User.RoleEnum,
    "Verification.StateEnum": verification_1.Verification.StateEnum,
};
let typeMap = {
    "AdditionalPurchaseData": additionalPurchaseData_1.AdditionalPurchaseData,
    "AdditionalPurchaseDataItemDataInner": additionalPurchaseDataItemDataInner_1.AdditionalPurchaseDataItemDataInner,
    "AdditionalPurchaseDataOrderDate": additionalPurchaseDataOrderDate_1.AdditionalPurchaseDataOrderDate,
    "Address": address_1.Address,
    "AdjustmentTransfersList": adjustmentTransfersList_1.AdjustmentTransfersList,
    "AdjustmentTransfersListEmbedded": adjustmentTransfersListEmbedded_1.AdjustmentTransfersListEmbedded,
    "ApplePaySession": applePaySession_1.ApplePaySession,
    "ApplePaySessionRequest": applePaySessionRequest_1.ApplePaySessionRequest,
    "Application": application_1.Application,
    "ApplicationLinks": applicationLinks_1.ApplicationLinks,
    "ApplicationLinksApplicationProfile": applicationLinksApplicationProfile_1.ApplicationLinksApplicationProfile,
    "ApplicationLinksSelf": applicationLinksSelf_1.ApplicationLinksSelf,
    "ApplicationProfile": applicationProfile_1.ApplicationProfile,
    "ApplicationProfileLinks": applicationProfileLinks_1.ApplicationProfileLinks,
    "ApplicationProfileLinksApplication": applicationProfileLinksApplication_1.ApplicationProfileLinksApplication,
    "ApplicationProfilesList": applicationProfilesList_1.ApplicationProfilesList,
    "ApplicationProfilesListEmbedded": applicationProfilesListEmbedded_1.ApplicationProfilesListEmbedded,
    "ApplicationProfilesListLinks": applicationProfilesListLinks_1.ApplicationProfilesListLinks,
    "ApplicationsList": applicationsList_1.ApplicationsList,
    "ApplicationsListEmbedded": applicationsListEmbedded_1.ApplicationsListEmbedded,
    "Authorization": authorization_1.Authorization,
    "AuthorizationExternalResponsesInner": authorizationExternalResponsesInner_1.AuthorizationExternalResponsesInner,
    "AuthorizationLinks": authorizationLinks_1.AuthorizationLinks,
    "AuthorizationLinksDevice": authorizationLinksDevice_1.AuthorizationLinksDevice,
    "AuthorizationLinksMerchantIdentity": authorizationLinksMerchantIdentity_1.AuthorizationLinksMerchantIdentity,
    "AuthorizationLinksTransfer": authorizationLinksTransfer_1.AuthorizationLinksTransfer,
    "AuthorizationsList": authorizationsList_1.AuthorizationsList,
    "AuthorizationsListEmbedded": authorizationsListEmbedded_1.AuthorizationsListEmbedded,
    "BalanceTransfer": balanceTransfer_1.BalanceTransfer,
    "BalanceTransferList": balanceTransferList_1.BalanceTransferList,
    "BalanceTransferListEmbedded": balanceTransferListEmbedded_1.BalanceTransferListEmbedded,
    "CardPresentDetails": cardPresentDetails_1.CardPresentDetails,
    "CardPresentDetailsEmvData": cardPresentDetailsEmvData_1.CardPresentDetailsEmvData,
    "CardPresentInstrumentForm": cardPresentInstrumentForm_1.CardPresentInstrumentForm,
    "ConfigurationDetails": configurationDetails_1.ConfigurationDetails,
    "ConfigurationDetailsCashbackOptions": configurationDetailsCashbackOptions_1.ConfigurationDetailsCashbackOptions,
    "ConfigurationDetailsCashbackOptionsManualEntry": configurationDetailsCashbackOptionsManualEntry_1.ConfigurationDetailsCashbackOptionsManualEntry,
    "ConfigurationDetailsTipOptions": configurationDetailsTipOptions_1.ConfigurationDetailsTipOptions,
    "CreateApplicationRequest": createApplicationRequest_1.CreateApplicationRequest,
    "CreateAuthorizationRequest": createAuthorizationRequest_1.CreateAuthorizationRequest,
    "CreateAuthorizationRequest3dSecureAuthentication": createAuthorizationRequest3dSecureAuthentication_1.CreateAuthorizationRequest3dSecureAuthentication,
    "CreateBalanceTransferRequest": createBalanceTransferRequest_1.CreateBalanceTransferRequest,
    "CreateDevice": createDevice_1.CreateDevice,
    "CreateDisputeEvidenceRequest": createDisputeEvidenceRequest_1.CreateDisputeEvidenceRequest,
    "CreateExternalLinkRequest": createExternalLinkRequest_1.CreateExternalLinkRequest,
    "CreateFeeProfileRequest": createFeeProfileRequest_1.CreateFeeProfileRequest,
    "CreateFeeRequest": createFeeRequest_1.CreateFeeRequest,
    "CreateFileRequest": createFileRequest_1.CreateFileRequest,
    "CreateIdentityRequest": createIdentityRequest_1.CreateIdentityRequest,
    "CreateIdentityRequestAdditionalUnderwritingData": createIdentityRequestAdditionalUnderwritingData_1.CreateIdentityRequestAdditionalUnderwritingData,
    "CreateIdentityRequestAdditionalUnderwritingDataCardVolumeDistribution": createIdentityRequestAdditionalUnderwritingDataCardVolumeDistribution_1.CreateIdentityRequestAdditionalUnderwritingDataCardVolumeDistribution,
    "CreateIdentityRequestAdditionalUnderwritingDataVolumeDistributionByBusinessType": createIdentityRequestAdditionalUnderwritingDataVolumeDistributionByBusinessType_1.CreateIdentityRequestAdditionalUnderwritingDataVolumeDistributionByBusinessType,
    "CreateIdentityRequestEntity": createIdentityRequestEntity_1.CreateIdentityRequestEntity,
    "CreateIdentityRequestEntityBusinessAddress": createIdentityRequestEntityBusinessAddress_1.CreateIdentityRequestEntityBusinessAddress,
    "CreateIdentityRequestEntityDob": createIdentityRequestEntityDob_1.CreateIdentityRequestEntityDob,
    "CreateIdentityRequestEntityIncorporationDate": createIdentityRequestEntityIncorporationDate_1.CreateIdentityRequestEntityIncorporationDate,
    "CreateIdentityRequestEntityPersonalAddress": createIdentityRequestEntityPersonalAddress_1.CreateIdentityRequestEntityPersonalAddress,
    "CreateInstrumentUpdateRequest": createInstrumentUpdateRequest_1.CreateInstrumentUpdateRequest,
    "CreateMerchantUnderwritingRequest": createMerchantUnderwritingRequest_1.CreateMerchantUnderwritingRequest,
    "CreatePaymentInstrumentRequest": createPaymentInstrumentRequest_1.CreatePaymentInstrumentRequest,
    "CreatePaymentInstrumentRequestAddress": createPaymentInstrumentRequestAddress_1.CreatePaymentInstrumentRequestAddress,
    "CreateProcessorRequest": createProcessorRequest_1.CreateProcessorRequest,
    "CreateProcessorRequestConfig": createProcessorRequestConfig_1.CreateProcessorRequestConfig,
    "CreateReversalRequest": createReversalRequest_1.CreateReversalRequest,
    "CreateSettlementRequest": createSettlementRequest_1.CreateSettlementRequest,
    "CreateSubscriptionAmountRequest": createSubscriptionAmountRequest_1.CreateSubscriptionAmountRequest,
    "CreateSubscriptionAmountRequestFeeAmountData": createSubscriptionAmountRequestFeeAmountData_1.CreateSubscriptionAmountRequestFeeAmountData,
    "CreateSubscriptionEnrollmentRequest": createSubscriptionEnrollmentRequest_1.CreateSubscriptionEnrollmentRequest,
    "CreateSubscriptionScheduleRequest": createSubscriptionScheduleRequest_1.CreateSubscriptionScheduleRequest,
    "CreateSubscriptionScheduleRequestFixedTimeIntervalOffset": createSubscriptionScheduleRequestFixedTimeIntervalOffset_1.CreateSubscriptionScheduleRequestFixedTimeIntervalOffset,
    "CreateSubscriptionScheduleRequestPeriodOffset": createSubscriptionScheduleRequestPeriodOffset_1.CreateSubscriptionScheduleRequestPeriodOffset,
    "CreateTransferRequest": createTransferRequest_1.CreateTransferRequest,
    "CreateUserRequest": createUserRequest_1.CreateUserRequest,
    "CreateVerificationRequest": createVerificationRequest_1.CreateVerificationRequest,
    "CreateWebhookRequest": createWebhookRequest_1.CreateWebhookRequest,
    "Device": device_1.Device,
    "DeviceConfigDetails": deviceConfigDetails_1.DeviceConfigDetails,
    "DeviceLinks": deviceLinks_1.DeviceLinks,
    "DeviceLinksMerchant": deviceLinksMerchant_1.DeviceLinksMerchant,
    "Dispute": dispute_1.Dispute,
    "DisputeEvidence": disputeEvidence_1.DisputeEvidence,
    "DisputeEvidenceLinks": disputeEvidenceLinks_1.DisputeEvidenceLinks,
    "DisputeEvidenceList": disputeEvidenceList_1.DisputeEvidenceList,
    "DisputeEvidenceListEmbedded": disputeEvidenceListEmbedded_1.DisputeEvidenceListEmbedded,
    "DisputeLinks": disputeLinks_1.DisputeLinks,
    "DisputeLinksTransfer": disputeLinksTransfer_1.DisputeLinksTransfer,
    "DisputesList": disputesList_1.DisputesList,
    "DisputesListEmbedded": disputesListEmbedded_1.DisputesListEmbedded,
    "DownloadInstrumentUpdateQueryParams": downloadInstrumentUpdateQueryParams_1.DownloadInstrumentUpdateQueryParams,
    "Error401Unauthorized": error401Unauthorized_1.Error401Unauthorized,
    "Error401UnauthorizedEmbedded": error401UnauthorizedEmbedded_1.Error401UnauthorizedEmbedded,
    "Error401UnauthorizedEmbeddedErrorsInner": error401UnauthorizedEmbeddedErrorsInner_1.Error401UnauthorizedEmbeddedErrorsInner,
    "Error401UnauthorizedEmbeddedErrorsInnerLinks": error401UnauthorizedEmbeddedErrorsInnerLinks_1.Error401UnauthorizedEmbeddedErrorsInnerLinks,
    "Error402PaymentRequired": error402PaymentRequired_1.Error402PaymentRequired,
    "Error402PaymentRequiredEmbedded": error402PaymentRequiredEmbedded_1.Error402PaymentRequiredEmbedded,
    "Error402PaymentRequiredEmbeddedErrorsInner": error402PaymentRequiredEmbeddedErrorsInner_1.Error402PaymentRequiredEmbeddedErrorsInner,
    "Error402PaymentRequiredEmbeddedErrorsInnerLinks": error402PaymentRequiredEmbeddedErrorsInnerLinks_1.Error402PaymentRequiredEmbeddedErrorsInnerLinks,
    "Error403ForbiddenList": error403ForbiddenList_1.Error403ForbiddenList,
    "Error403ForbiddenListEmbedded": error403ForbiddenListEmbedded_1.Error403ForbiddenListEmbedded,
    "Error403ForbiddenListEmbeddedErrorsInner": error403ForbiddenListEmbeddedErrorsInner_1.Error403ForbiddenListEmbeddedErrorsInner,
    "Error404NotFoundList": error404NotFoundList_1.Error404NotFoundList,
    "Error404NotFoundListEmbedded": error404NotFoundListEmbedded_1.Error404NotFoundListEmbedded,
    "Error404NotFoundListEmbeddedErrorsInner": error404NotFoundListEmbeddedErrorsInner_1.Error404NotFoundListEmbeddedErrorsInner,
    "Error406NotAcceptable": error406NotAcceptable_1.Error406NotAcceptable,
    "Error422InvalidFieldList": error422InvalidFieldList_1.Error422InvalidFieldList,
    "Error422InvalidFieldListEmbedded": error422InvalidFieldListEmbedded_1.Error422InvalidFieldListEmbedded,
    "Error422InvalidFieldListEmbeddedErrorsInner": error422InvalidFieldListEmbeddedErrorsInner_1.Error422InvalidFieldListEmbeddedErrorsInner,
    "ErrorGeneric": errorGeneric_1.ErrorGeneric,
    "ExternalLink": externalLink_1.ExternalLink,
    "ExternalLinksList": externalLinksList_1.ExternalLinksList,
    "ExternalLinksListEmbedded": externalLinksListEmbedded_1.ExternalLinksListEmbedded,
    "Fee": fee_1.Fee,
    "FeeLinks": feeLinks_1.FeeLinks,
    "FeeProfile": feeProfile_1.FeeProfile,
    "FeeProfileLinks": feeProfileLinks_1.FeeProfileLinks,
    "FeeProfilesList": feeProfilesList_1.FeeProfilesList,
    "FeeProfilesListEmbedded": feeProfilesListEmbedded_1.FeeProfilesListEmbedded,
    "FeesList": feesList_1.FeesList,
    "FeesListEmbedded": feesListEmbedded_1.FeesListEmbedded,
    "FilesList": filesList_1.FilesList,
    "FilesListEmbedded": filesListEmbedded_1.FilesListEmbedded,
    "IdentitiesList": identitiesList_1.IdentitiesList,
    "IdentitiesListEmbedded": identitiesListEmbedded_1.IdentitiesListEmbedded,
    "Identity": identity_1.Identity,
    "IdentityAdditionalUnderwritingData": identityAdditionalUnderwritingData_1.IdentityAdditionalUnderwritingData,
    "IdentityAdditionalUnderwritingDataCardVolumeDistribution": identityAdditionalUnderwritingDataCardVolumeDistribution_1.IdentityAdditionalUnderwritingDataCardVolumeDistribution,
    "IdentityAdditionalUnderwritingDataVolumeDistributionByBusinessType": identityAdditionalUnderwritingDataVolumeDistributionByBusinessType_1.IdentityAdditionalUnderwritingDataVolumeDistributionByBusinessType,
    "IdentityEntity": identityEntity_1.IdentityEntity,
    "IdentityEntityBusinessAddress": identityEntityBusinessAddress_1.IdentityEntityBusinessAddress,
    "IdentityEntityDob": identityEntityDob_1.IdentityEntityDob,
    "IdentityEntityForm": identityEntityForm_1.IdentityEntityForm,
    "IdentityEntityFormBusinessAddress": identityEntityFormBusinessAddress_1.IdentityEntityFormBusinessAddress,
    "IdentityEntityFormDob": identityEntityFormDob_1.IdentityEntityFormDob,
    "IdentityEntityFormIncorporationDate": identityEntityFormIncorporationDate_1.IdentityEntityFormIncorporationDate,
    "IdentityEntityIncorporationDate": identityEntityIncorporationDate_1.IdentityEntityIncorporationDate,
    "IdentityEntityPersonalAddress": identityEntityPersonalAddress_1.IdentityEntityPersonalAddress,
    "IdentityLinks": identityLinks_1.IdentityLinks,
    "IdentityLinksApplication": identityLinksApplication_1.IdentityLinksApplication,
    "IdentityLinksAssociatedIdentities": identityLinksAssociatedIdentities_1.IdentityLinksAssociatedIdentities,
    "IdentityLinksAuthorizations": identityLinksAuthorizations_1.IdentityLinksAuthorizations,
    "IdentityLinksDisputes": identityLinksDisputes_1.IdentityLinksDisputes,
    "IdentityLinksMerchants": identityLinksMerchants_1.IdentityLinksMerchants,
    "IdentityLinksPaymentInstruments": identityLinksPaymentInstruments_1.IdentityLinksPaymentInstruments,
    "IdentityLinksSelf": identityLinksSelf_1.IdentityLinksSelf,
    "IdentityLinksSettlements": identityLinksSettlements_1.IdentityLinksSettlements,
    "IdentityLinksTransfers": identityLinksTransfers_1.IdentityLinksTransfers,
    "IdentityLinksVerifications": identityLinksVerifications_1.IdentityLinksVerifications,
    "InputDetails": inputDetails_1.InputDetails,
    "InstrumentUpdate": instrumentUpdate_1.InstrumentUpdate,
    "ListApplicationProfilesQueryParams": listApplicationProfilesQueryParams_1.ListApplicationProfilesQueryParams,
    "ListApplicationsQueryParams": listApplicationsQueryParams_1.ListApplicationsQueryParams,
    "ListAuthorizationsQueryParams": listAuthorizationsQueryParams_1.ListAuthorizationsQueryParams,
    "ListBalanceTransfersQueryParams": listBalanceTransfersQueryParams_1.ListBalanceTransfersQueryParams,
    "ListDisputeEvidenceQueryParams": listDisputeEvidenceQueryParams_1.ListDisputeEvidenceQueryParams,
    "ListDisputesAdjustmentsQueryParams": listDisputesAdjustmentsQueryParams_1.ListDisputesAdjustmentsQueryParams,
    "ListDisputesQueryParams": listDisputesQueryParams_1.ListDisputesQueryParams,
    "ListExternalLinksQueryParams": listExternalLinksQueryParams_1.ListExternalLinksQueryParams,
    "ListFeeProfilesQueryParams": listFeeProfilesQueryParams_1.ListFeeProfilesQueryParams,
    "ListFeesQueryParams": listFeesQueryParams_1.ListFeesQueryParams,
    "ListFilesQueryParams": listFilesQueryParams_1.ListFilesQueryParams,
    "ListIdentitiesQueryParams": listIdentitiesQueryParams_1.ListIdentitiesQueryParams,
    "ListIdentityAssociatedIdentitiesQueryParams": listIdentityAssociatedIdentitiesQueryParams_1.ListIdentityAssociatedIdentitiesQueryParams,
    "ListLinks": listLinks_1.ListLinks,
    "ListLinksNext": listLinksNext_1.ListLinksNext,
    "ListMerchantProfilesQueryParams": listMerchantProfilesQueryParams_1.ListMerchantProfilesQueryParams,
    "ListMerchantVerificationsQueryParams": listMerchantVerificationsQueryParams_1.ListMerchantVerificationsQueryParams,
    "ListMerchantsQueryParams": listMerchantsQueryParams_1.ListMerchantsQueryParams,
    "ListPaymentInstrumentsQueryParams": listPaymentInstrumentsQueryParams_1.ListPaymentInstrumentsQueryParams,
    "ListSettlementFundingTransfersQueryParams": listSettlementFundingTransfersQueryParams_1.ListSettlementFundingTransfersQueryParams,
    "ListSettlementTransfersQueryParams": listSettlementTransfersQueryParams_1.ListSettlementTransfersQueryParams,
    "ListSettlementsQueryParams": listSettlementsQueryParams_1.ListSettlementsQueryParams,
    "ListSubscriptionAmountQueryParams": listSubscriptionAmountQueryParams_1.ListSubscriptionAmountQueryParams,
    "ListSubscriptionSchedulesQueryParams": listSubscriptionSchedulesQueryParams_1.ListSubscriptionSchedulesQueryParams,
    "ListTransferReversalsQueryParams": listTransferReversalsQueryParams_1.ListTransferReversalsQueryParams,
    "ListTransfersQueryParams": listTransfersQueryParams_1.ListTransfersQueryParams,
    "ListUsersQueryParams": listUsersQueryParams_1.ListUsersQueryParams,
    "ListVerificationsQueryParams": listVerificationsQueryParams_1.ListVerificationsQueryParams,
    "ListWebhooksQueryParams": listWebhooksQueryParams_1.ListWebhooksQueryParams,
    "LogRef": logRef_1.LogRef,
    "Merchant": merchant_1.Merchant,
    "MerchantLinks": merchantLinks_1.MerchantLinks,
    "MerchantLinksApplication": merchantLinksApplication_1.MerchantLinksApplication,
    "MerchantLinksIdentity": merchantLinksIdentity_1.MerchantLinksIdentity,
    "MerchantLinksMerchantProfile": merchantLinksMerchantProfile_1.MerchantLinksMerchantProfile,
    "MerchantLinksVerification": merchantLinksVerification_1.MerchantLinksVerification,
    "MerchantLinksVerifications": merchantLinksVerifications_1.MerchantLinksVerifications,
    "MerchantProcessorDetails": merchantProcessorDetails_1.MerchantProcessorDetails,
    "MerchantProfile": merchantProfile_1.MerchantProfile,
    "MerchantProfileLinks": merchantProfileLinks_1.MerchantProfileLinks,
    "MerchantProfilesList": merchantProfilesList_1.MerchantProfilesList,
    "MerchantProfilesListEmbedded": merchantProfilesListEmbedded_1.MerchantProfilesListEmbedded,
    "MerchantsList": merchantsList_1.MerchantsList,
    "MerchantsListEmbedded": merchantsListEmbedded_1.MerchantsListEmbedded,
    "ModelFile": modelFile_1.ModelFile,
    "Name": name_1.Name,
    "PageCursor": pageCursor_1.PageCursor,
    "PageOffset": pageOffset_1.PageOffset,
    "PaymentInstrument": paymentInstrument_1.PaymentInstrument,
    "PaymentInstrumentLinks": paymentInstrumentLinks_1.PaymentInstrumentLinks,
    "PaymentInstrumentLinksAuthorizations": paymentInstrumentLinksAuthorizations_1.PaymentInstrumentLinksAuthorizations,
    "PaymentInstrumentLinksTransfers": paymentInstrumentLinksTransfers_1.PaymentInstrumentLinksTransfers,
    "PaymentInstrumentToken": paymentInstrumentToken_1.PaymentInstrumentToken,
    "PaymentInstrumentTokenLinks": paymentInstrumentTokenLinks_1.PaymentInstrumentTokenLinks,
    "PaymentInstrumentTokenLinksVerifications": paymentInstrumentTokenLinksVerifications_1.PaymentInstrumentTokenLinksVerifications,
    "PaymentInstrumentUpdatesList": paymentInstrumentUpdatesList_1.PaymentInstrumentUpdatesList,
    "PaymentInstrumentUpdatesListEmbedded": paymentInstrumentUpdatesListEmbedded_1.PaymentInstrumentUpdatesListEmbedded,
    "PaymentInstrumentsList": paymentInstrumentsList_1.PaymentInstrumentsList,
    "PaymentInstrumentsListEmbedded": paymentInstrumentsListEmbedded_1.PaymentInstrumentsListEmbedded,
    "Processor": processor_1.Processor,
    "ProcessorApplicationConfig": processorApplicationConfig_1.ProcessorApplicationConfig,
    "ProcessorApplicationConfigConfigurationTemplates": processorApplicationConfigConfigurationTemplates_1.ProcessorApplicationConfigConfigurationTemplates,
    "ProcessorLinks": processorLinks_1.ProcessorLinks,
    "ProcessorSystemConfig": processorSystemConfig_1.ProcessorSystemConfig,
    "ProcessorSystemConfigConfigurationTemplates": processorSystemConfigConfigurationTemplates_1.ProcessorSystemConfigConfigurationTemplates,
    "ProcessorsList": processorsList_1.ProcessorsList,
    "ProcessorsListEmbedded": processorsListEmbedded_1.ProcessorsListEmbedded,
    "RemoveSettlementTransfer": removeSettlementTransfer_1.RemoveSettlementTransfer,
    "ReserveProfile": reserveProfile_1.ReserveProfile,
    "ReserveProfilesList": reserveProfilesList_1.ReserveProfilesList,
    "ReserveProfilesListEmbedded": reserveProfilesListEmbedded_1.ReserveProfilesListEmbedded,
    "ReviewQueueItem": reviewQueueItem_1.ReviewQueueItem,
    "ReviewQueueItemLinks": reviewQueueItemLinks_1.ReviewQueueItemLinks,
    "ReviewQueueItemsList": reviewQueueItemsList_1.ReviewQueueItemsList,
    "ReviewQueueItemsListEmbedded": reviewQueueItemsListEmbedded_1.ReviewQueueItemsListEmbedded,
    "RiskProfile": riskProfile_1.RiskProfile,
    "RiskProfileLinks": riskProfileLinks_1.RiskProfileLinks,
    "RiskProfileRule": riskProfileRule_1.RiskProfileRule,
    "RiskProfileRulesList": riskProfileRulesList_1.RiskProfileRulesList,
    "RiskProfileRulesListEmbedded": riskProfileRulesListEmbedded_1.RiskProfileRulesListEmbedded,
    "RiskProfilesList": riskProfilesList_1.RiskProfilesList,
    "RiskProfilesListEmbedded": riskProfilesListEmbedded_1.RiskProfilesListEmbedded,
    "Root": root_1.Root,
    "RootLinks": rootLinks_1.RootLinks,
    "Settlement": settlement_1.Settlement,
    "SettlementEngineSettlement": settlementEngineSettlement_1.SettlementEngineSettlement,
    "SettlementEngineSettlementLinks": settlementEngineSettlementLinks_1.SettlementEngineSettlementLinks,
    "SettlementEngineSettlementsList": settlementEngineSettlementsList_1.SettlementEngineSettlementsList,
    "SettlementEngineSettlementsListEmbedded": settlementEngineSettlementsListEmbedded_1.SettlementEngineSettlementsListEmbedded,
    "SettlementLinks": settlementLinks_1.SettlementLinks,
    "SettlementsList": settlementsList_1.SettlementsList,
    "SettlementsListEmbedded": settlementsListEmbedded_1.SettlementsListEmbedded,
    "SubscriptionAmount": subscriptionAmount_1.SubscriptionAmount,
    "SubscriptionAmountFeeAmountData": subscriptionAmountFeeAmountData_1.SubscriptionAmountFeeAmountData,
    "SubscriptionAmountLinks": subscriptionAmountLinks_1.SubscriptionAmountLinks,
    "SubscriptionAmountLinksSchedule": subscriptionAmountLinksSchedule_1.SubscriptionAmountLinksSchedule,
    "SubscriptionAmountList": subscriptionAmountList_1.SubscriptionAmountList,
    "SubscriptionAmountListEmbedded": subscriptionAmountListEmbedded_1.SubscriptionAmountListEmbedded,
    "SubscriptionEnrollment": subscriptionEnrollment_1.SubscriptionEnrollment,
    "SubscriptionEnrollmentLinks": subscriptionEnrollmentLinks_1.SubscriptionEnrollmentLinks,
    "SubscriptionEnrollmentLinksAmounts": subscriptionEnrollmentLinksAmounts_1.SubscriptionEnrollmentLinksAmounts,
    "SubscriptionEnrollmentLinksMerchant": subscriptionEnrollmentLinksMerchant_1.SubscriptionEnrollmentLinksMerchant,
    "SubscriptionEnrollmentLinksSchedule": subscriptionEnrollmentLinksSchedule_1.SubscriptionEnrollmentLinksSchedule,
    "SubscriptionEnrollmentList": subscriptionEnrollmentList_1.SubscriptionEnrollmentList,
    "SubscriptionEnrollmentListEmbedded": subscriptionEnrollmentListEmbedded_1.SubscriptionEnrollmentListEmbedded,
    "SubscriptionSchedule": subscriptionSchedule_1.SubscriptionSchedule,
    "SubscriptionScheduleFixedTimeIntervalOffset": subscriptionScheduleFixedTimeIntervalOffset_1.SubscriptionScheduleFixedTimeIntervalOffset,
    "SubscriptionScheduleLinks": subscriptionScheduleLinks_1.SubscriptionScheduleLinks,
    "SubscriptionScheduleLinksAmounts": subscriptionScheduleLinksAmounts_1.SubscriptionScheduleLinksAmounts,
    "SubscriptionSchedulePeriodOffset": subscriptionSchedulePeriodOffset_1.SubscriptionSchedulePeriodOffset,
    "SubscriptionSchedulesList": subscriptionSchedulesList_1.SubscriptionSchedulesList,
    "SubscriptionSchedulesListEmbedded": subscriptionSchedulesListEmbedded_1.SubscriptionSchedulesListEmbedded,
    "SubscriptionSchedulesListLinks": subscriptionSchedulesListLinks_1.SubscriptionSchedulesListLinks,
    "Transfer": transfer_1.Transfer,
    "TransferLinks": transferLinks_1.TransferLinks,
    "TransferLinksDestination": transferLinksDestination_1.TransferLinksDestination,
    "TransferLinksDisputedTransfer": transferLinksDisputedTransfer_1.TransferLinksDisputedTransfer,
    "TransferLinksDisputes": transferLinksDisputes_1.TransferLinksDisputes,
    "TransferLinksFeeProfile": transferLinksFeeProfile_1.TransferLinksFeeProfile,
    "TransferLinksFees": transferLinksFees_1.TransferLinksFees,
    "TransferLinksParent": transferLinksParent_1.TransferLinksParent,
    "TransferLinksPaymentInstruments": transferLinksPaymentInstruments_1.TransferLinksPaymentInstruments,
    "TransferLinksReversals": transferLinksReversals_1.TransferLinksReversals,
    "TransferLinksSource": transferLinksSource_1.TransferLinksSource,
    "TransferReversalsList": transferReversalsList_1.TransferReversalsList,
    "TransferReversalsListEmbedded": transferReversalsListEmbedded_1.TransferReversalsListEmbedded,
    "TransfersList": transfersList_1.TransfersList,
    "TransfersListEmbedded": transfersListEmbedded_1.TransfersListEmbedded,
    "UpdateApplicationProfileRequest": updateApplicationProfileRequest_1.UpdateApplicationProfileRequest,
    "UpdateAuthorizationRequest": updateAuthorizationRequest_1.UpdateAuthorizationRequest,
    "UpdateFeeRequest": updateFeeRequest_1.UpdateFeeRequest,
    "UpdateIdentityRequest": updateIdentityRequest_1.UpdateIdentityRequest,
    "UpdateIdentityRequestAdditionalUnderwritingData": updateIdentityRequestAdditionalUnderwritingData_1.UpdateIdentityRequestAdditionalUnderwritingData,
    "UpdateIdentityRequestAdditionalUnderwritingDataCardVolumeDistribution": updateIdentityRequestAdditionalUnderwritingDataCardVolumeDistribution_1.UpdateIdentityRequestAdditionalUnderwritingDataCardVolumeDistribution,
    "UpdateIdentityRequestAdditionalUnderwritingDataVolumeDistributionByBusinessType": updateIdentityRequestAdditionalUnderwritingDataVolumeDistributionByBusinessType_1.UpdateIdentityRequestAdditionalUnderwritingDataVolumeDistributionByBusinessType,
    "UpdateIdentityRequestEntity": updateIdentityRequestEntity_1.UpdateIdentityRequestEntity,
    "UpdateIdentityRequestEntityBusinessAddress": updateIdentityRequestEntityBusinessAddress_1.UpdateIdentityRequestEntityBusinessAddress,
    "UpdateIdentityRequestEntityDob": updateIdentityRequestEntityDob_1.UpdateIdentityRequestEntityDob,
    "UpdateMerchantRequest": updateMerchantRequest_1.UpdateMerchantRequest,
    "UpdatePaymentInstrumentRequest": updatePaymentInstrumentRequest_1.UpdatePaymentInstrumentRequest,
    "UpdateSettlementRequest": updateSettlementRequest_1.UpdateSettlementRequest,
    "UpdateSubscriptionEnrollmentRequest": updateSubscriptionEnrollmentRequest_1.UpdateSubscriptionEnrollmentRequest,
    "UpdateSubscriptionScheduleRequest": updateSubscriptionScheduleRequest_1.UpdateSubscriptionScheduleRequest,
    "UpdateTransferRequest": updateTransferRequest_1.UpdateTransferRequest,
    "UpdateUserRequest": updateUserRequest_1.UpdateUserRequest,
    "UpdateWebhookRequest": updateWebhookRequest_1.UpdateWebhookRequest,
    "UploadFileRequest": uploadFileRequest_1.UploadFileRequest,
    "User": user_1.User,
    "UserLinks": userLinks_1.UserLinks,
    "UsersList": usersList_1.UsersList,
    "UsersListEmbedded": usersListEmbedded_1.UsersListEmbedded,
    "UsersListPage": usersListPage_1.UsersListPage,
    "Verification": verification_1.Verification,
    "VerificationLinks": verificationLinks_1.VerificationLinks,
    "VerificationLinksApplication": verificationLinksApplication_1.VerificationLinksApplication,
    "VerificationLinksMerchant": verificationLinksMerchant_1.VerificationLinksMerchant,
    "VerificationsList": verificationsList_1.VerificationsList,
    "VerificationsListEmbedded": verificationsListEmbedded_1.VerificationsListEmbedded,
    "Webhook": webhook_1.Webhook,
    "WebhooksList": webhooksList_1.WebhooksList,
    "WebhooksListEmbedded": webhooksListEmbedded_1.WebhooksListEmbedded,
};
class ObjectSerializer {
    static findCorrectType(data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
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
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType; // use the type given in the discriminator
                    }
                    else {
                        return expectedType; // discriminator did not map to a type
                    }
                }
                else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }
    static serialize(data, type) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return data.toISOString();
        }
        else {
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
            let instance = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }
    static deserialize(data, type) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap[type]) { // is Enum
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
exports.ObjectSerializer = ObjectSerializer;
class HttpBasicAuth {
    username = '';
    password = '';
    applyToRequest(requestOptions) {
        requestOptions.auth = {
            username: this.username, password: this.password
        };
    }
}
exports.HttpBasicAuth = HttpBasicAuth;
class HttpBearerAuth {
    accessToken = '';
    applyToRequest(requestOptions) {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                ? this.accessToken()
                : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}
exports.HttpBearerAuth = HttpBearerAuth;
class ApiKeyAuth {
    location;
    paramName;
    apiKey = '';
    constructor(location, paramName) {
        this.location = location;
        this.paramName = paramName;
    }
    applyToRequest(requestOptions) {
        if (this.location == "query") {
            requestOptions.qs[this.paramName] = this.apiKey;
        }
        else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
        else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}
exports.ApiKeyAuth = ApiKeyAuth;
class OAuth {
    accessToken = '';
    applyToRequest(requestOptions) {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}
exports.OAuth = OAuth;
class VoidAuth {
    username = '';
    password = '';
    applyToRequest(_) {
        // Do nothing
    }
}
exports.VoidAuth = VoidAuth;
class SuperSet extends Set {
    _page;
    _links;
    constructor() {
        super();
    }
    set page(page) {
        this._page = page;
    }
    get page() {
        return this._page;
    }
    set links(links) {
        this._links = links;
    }
    get links() {
        return this._links;
    }
}
exports.SuperSet = SuperSet;
