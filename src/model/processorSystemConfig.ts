/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { Country } from './country';
import { Currency } from './currency';
import { ProcessorSystemConfigConfig } from './processorSystemConfigConfig';

/**
* Details that configure how the `Processor` handles transactions with the processor.
*/
export class ProcessorSystemConfig {
    /**
    * The 3 letter ISO 4217 country code for the country transactions are originating from.
    */
    'acquirerCountryCode'?: ProcessorSystemConfig.AcquirerCountryCodeEnum | string;
    /**
    * The Bank Identification Number (BIN) the `Processor` is registered under with Visa Direct.
    */
    'acquiringBin'?: string;
    /**
    * Field used by Finix and processor to handle transactions.
    */
    'allowCreditForPartner'?: boolean;
    /**
    * Details the countries the `Processor` is avalible in.
    */
    'availableCountries'?: Array<Country>;
    /**
    * The ID of the `Application` linked to the `Processor`.
    */
    'businessApplicationId'?: string;
    /**
    * Field used by processor to communicate with Finix.
    */
    'classKeyIdentifier'?: ProcessorSystemConfig.ClassKeyIdentifierEnum | string;
    'config'?: ProcessorSystemConfigConfig;
    /**
    * ISO 4217 3 letter currency code.
    */
    'defaultCurrencies'?: Array<Currency>;
    /**
    * Set to **true** to enables the option to push payments to other U.S. debit networks using our Visa Direct integration.
    */
    'disablePpgs'?: boolean;
    /**
    * Details the price of a Visa Direct payout.
    */
    'feeProgramIndicator'?: string;
    /**
    * Used if the Gateway needs a proxy. Not applicable to Visa Direct.
    */
    'gatewayProxyCertificate'?: string | null;
    /**
    * Used if the Gateway needs a proxy. Not applicable to Visa Direct.
    */
    'gatewayProxyHost'?: string | null;
    /**
    * Used if the Gateway needs a proxy. Not applicable to Visa Direct.
    */
    'gatewayProxyPassword'?: string | null;
    /**
    * Used if the Gateway needs a proxy. Not applicable to Visa Direct.
    */
    'gatewayProxyPort'?: string | null;
    /**
    * Used if the Gateway needs a proxy. Not applicable to Visa Direct.
    */
    'gatewayProxyUsername'?: string | null;
    /**
    * The password for the Java Keystore that stores the private keys and cert.pem files needed to process transactions using Visa Direct.
    */
    'keyStorePassword'?: string;
    /**
    * The path in AWS where the Java Keystore that stores the private keys and cert.pem files are and use to transact using Visa Direct.
    */
    'keyStorePath'?: string;
    /**
    * A unique ID that\'s provided when a `Processor` signs up for Push Payment Gateway transactions (PPGS). PPGS allows you to push payments to other U.S. debit networks using our Visa Direct integration.
    */
    'merchantPseudoAbaNumber'?: string | null;
    /**
    * Details if the `Processor` can handle online credit transactions.
    */
    'onlineCreditProcessing'?: boolean;
    /**
    * Details if the `Processor` can handle online debit transactions.
    */
    'onlineDebitProcessing'?: boolean;
    /**
    * The password found in the credentials section of the Visa Developer Portal (VDP) project. This is needed to connect to Visa Direct.
    */
    'password'?: string;
    /**
    * The password that was used to encrypt the private key that is contained in the Java Keystore.
    */
    'privateKeyPassword'?: string;
    /**
    * Field used by Finix and processor to handle transactions.
    */
    'processorSequenceLimit'?: number;
    /**
    * Field used by Finix and processor to handle transactions.
    */
    'pseudoBatchPush'?: boolean;
    /**
    * Specific code that reflects the use case (e.g. funds disbursement, money transfer, etc.). For a full list of codes, see the following [list from Visa](https://developer.visa.com/request_response_codes#source_of_funds).
    */
    'sourceOfFunds'?: ProcessorSystemConfig.SourceOfFundsEnum | string;
    /**
    * The user ID found in the credentials section of the Visa Developer Portal (VDP) project. This is needed to connect to Visa Direct.
    */
    'userId'?: string;
    /**
    * Field used by Finix and processor to handle transactions.
    */
    'visaAcceptanceCloudKeyStorePath'?: string | null;
    /**
    * Field used by Finix and processor to handle transactions.
    */
    'visaAcceptanceCloudPassword'?: string | null;
    /**
    * Field used by Finix and processor to handle transactions.
    */
    'visaAcceptanceCloudUrl'?: string | null;
    /**
    * Field used by Finix and processor to handle transactions.
    */
    'visaAcceptanceCloudUserId'?: string | null;
    /**
    * The URL that is used to connect to Visa.
    */
    'visaUrl'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "acquirerCountryCode",
            "baseName": "acquirer_country_code",
            "type": "ProcessorSystemConfig.AcquirerCountryCodeEnum"
        },
        {
            "name": "acquiringBin",
            "baseName": "acquiring_bin",
            "type": "string"
        },
        {
            "name": "allowCreditForPartner",
            "baseName": "allow_credit_for_partner",
            "type": "boolean"
        },
        {
            "name": "availableCountries",
            "baseName": "available_countries",
            "type": "Array<Country>"
        },
        {
            "name": "businessApplicationId",
            "baseName": "business_application_id",
            "type": "string"
        },
        {
            "name": "classKeyIdentifier",
            "baseName": "class_key_identifier",
            "type": "ProcessorSystemConfig.ClassKeyIdentifierEnum"
        },
        {
            "name": "config",
            "baseName": "config",
            "type": "ProcessorSystemConfigConfig"
        },
        {
            "name": "defaultCurrencies",
            "baseName": "default_currencies",
            "type": "Array<Currency>"
        },
        {
            "name": "disablePpgs",
            "baseName": "disable_ppgs",
            "type": "boolean"
        },
        {
            "name": "feeProgramIndicator",
            "baseName": "fee_program_indicator",
            "type": "string"
        },
        {
            "name": "gatewayProxyCertificate",
            "baseName": "gateway_proxy_certificate",
            "type": "string"
        },
        {
            "name": "gatewayProxyHost",
            "baseName": "gateway_proxy_host",
            "type": "string"
        },
        {
            "name": "gatewayProxyPassword",
            "baseName": "gateway_proxy_password",
            "type": "string"
        },
        {
            "name": "gatewayProxyPort",
            "baseName": "gateway_proxy_port",
            "type": "string"
        },
        {
            "name": "gatewayProxyUsername",
            "baseName": "gateway_proxy_username",
            "type": "string"
        },
        {
            "name": "keyStorePassword",
            "baseName": "key_store_password",
            "type": "string"
        },
        {
            "name": "keyStorePath",
            "baseName": "key_store_path",
            "type": "string"
        },
        {
            "name": "merchantPseudoAbaNumber",
            "baseName": "merchant_pseudo_aba_number",
            "type": "string"
        },
        {
            "name": "onlineCreditProcessing",
            "baseName": "online_credit_processing",
            "type": "boolean"
        },
        {
            "name": "onlineDebitProcessing",
            "baseName": "online_debit_processing",
            "type": "boolean"
        },
        {
            "name": "password",
            "baseName": "password",
            "type": "string"
        },
        {
            "name": "privateKeyPassword",
            "baseName": "private_key_password",
            "type": "string"
        },
        {
            "name": "processorSequenceLimit",
            "baseName": "processor_sequence_limit",
            "type": "number"
        },
        {
            "name": "pseudoBatchPush",
            "baseName": "pseudo_batch_push",
            "type": "boolean"
        },
        {
            "name": "sourceOfFunds",
            "baseName": "source_of_funds",
            "type": "ProcessorSystemConfig.SourceOfFundsEnum"
        },
        {
            "name": "userId",
            "baseName": "user_id",
            "type": "string"
        },
        {
            "name": "visaAcceptanceCloudKeyStorePath",
            "baseName": "visa_acceptance_cloud_key_store_path",
            "type": "string"
        },
        {
            "name": "visaAcceptanceCloudPassword",
            "baseName": "visa_acceptance_cloud_password",
            "type": "string"
        },
        {
            "name": "visaAcceptanceCloudUrl",
            "baseName": "visa_acceptance_cloud_url",
            "type": "string"
        },
        {
            "name": "visaAcceptanceCloudUserId",
            "baseName": "visa_acceptance_cloud_user_id",
            "type": "string"
        },
        {
            "name": "visaUrl",
            "baseName": "visa_url",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ProcessorSystemConfig.attributeTypeMap;
    }
}

export namespace ProcessorSystemConfig {
    export enum AcquirerCountryCodeEnum {
        _004 = <any> '004',
        _008 = <any> '008',
        _010 = <any> '010',
        _012 = <any> '012',
        _016 = <any> '016',
        _020 = <any> '020',
        _024 = <any> '024',
        _028 = <any> '028',
        _031 = <any> '031',
        _032 = <any> '032',
        _036 = <any> '036',
        _040 = <any> '040',
        _044 = <any> '044',
        _048 = <any> '048',
        _050 = <any> '050',
        _051 = <any> '051',
        _052 = <any> '052',
        _056 = <any> '056',
        _060 = <any> '060',
        _064 = <any> '064',
        _068 = <any> '068',
        _070 = <any> '070',
        _072 = <any> '072',
        _074 = <any> '074',
        _076 = <any> '076',
        _084 = <any> '084',
        _086 = <any> '086',
        _090 = <any> '090',
        _092 = <any> '092',
        _096 = <any> '096',
        _100 = <any> '100',
        _104 = <any> '104',
        _108 = <any> '108',
        _112 = <any> '112',
        _116 = <any> '116',
        _120 = <any> '120',
        _124 = <any> '124',
        _132 = <any> '132',
        _136 = <any> '136',
        _140 = <any> '140',
        _144 = <any> '144',
        _148 = <any> '148',
        _152 = <any> '152',
        _156 = <any> '156',
        _158 = <any> '158',
        _162 = <any> '162',
        _166 = <any> '166',
        _170 = <any> '170',
        _174 = <any> '174',
        _175 = <any> '175',
        _178 = <any> '178',
        _180 = <any> '180',
        _184 = <any> '184',
        _188 = <any> '188',
        _191 = <any> '191',
        _192 = <any> '192',
        _196 = <any> '196',
        _203 = <any> '203',
        _204 = <any> '204',
        _208 = <any> '208',
        _212 = <any> '212',
        _214 = <any> '214',
        _218 = <any> '218',
        _222 = <any> '222',
        _226 = <any> '226',
        _231 = <any> '231',
        _232 = <any> '232',
        _233 = <any> '233',
        _234 = <any> '234',
        _238 = <any> '238',
        _239 = <any> '239',
        _242 = <any> '242',
        _246 = <any> '246',
        _248 = <any> '248',
        _250 = <any> '250',
        _254 = <any> '254',
        _258 = <any> '258',
        _260 = <any> '260',
        _262 = <any> '262',
        _266 = <any> '266',
        _268 = <any> '268',
        _270 = <any> '270',
        _275 = <any> '275',
        _276 = <any> '276',
        _288 = <any> '288',
        _292 = <any> '292',
        _296 = <any> '296',
        _300 = <any> '300',
        _304 = <any> '304',
        _308 = <any> '308',
        _312 = <any> '312',
        _316 = <any> '316',
        _320 = <any> '320',
        _324 = <any> '324',
        _328 = <any> '328',
        _332 = <any> '332',
        _334 = <any> '334',
        _336 = <any> '336',
        _340 = <any> '340',
        _344 = <any> '344',
        _348 = <any> '348',
        _352 = <any> '352',
        _356 = <any> '356',
        _360 = <any> '360',
        _364 = <any> '364',
        _368 = <any> '368',
        _372 = <any> '372',
        _376 = <any> '376',
        _380 = <any> '380',
        _384 = <any> '384',
        _388 = <any> '388',
        _392 = <any> '392',
        _398 = <any> '398',
        _400 = <any> '400',
        _404 = <any> '404',
        _408 = <any> '408',
        _410 = <any> '410',
        _414 = <any> '414',
        _417 = <any> '417',
        _418 = <any> '418',
        _422 = <any> '422',
        _426 = <any> '426',
        _428 = <any> '428',
        _430 = <any> '430',
        _434 = <any> '434',
        _438 = <any> '438',
        _440 = <any> '440',
        _442 = <any> '442',
        _446 = <any> '446',
        _450 = <any> '450',
        _454 = <any> '454',
        _458 = <any> '458',
        _462 = <any> '462',
        _466 = <any> '466',
        _470 = <any> '470',
        _474 = <any> '474',
        _478 = <any> '478',
        _480 = <any> '480',
        _484 = <any> '484',
        _492 = <any> '492',
        _496 = <any> '496',
        _498 = <any> '498',
        _499 = <any> '499',
        _500 = <any> '500',
        _504 = <any> '504',
        _508 = <any> '508',
        _512 = <any> '512',
        _516 = <any> '516',
        _520 = <any> '520',
        _524 = <any> '524',
        _528 = <any> '528',
        _531 = <any> '531',
        _533 = <any> '533',
        _534 = <any> '534',
        _535 = <any> '535',
        _540 = <any> '540',
        _548 = <any> '548',
        _554 = <any> '554',
        _558 = <any> '558',
        _562 = <any> '562',
        _566 = <any> '566',
        _570 = <any> '570',
        _574 = <any> '574',
        _578 = <any> '578',
        _580 = <any> '580',
        _581 = <any> '581',
        _583 = <any> '583',
        _584 = <any> '584',
        _585 = <any> '585',
        _586 = <any> '586',
        _591 = <any> '591',
        _598 = <any> '598',
        _600 = <any> '600',
        _604 = <any> '604',
        _608 = <any> '608',
        _612 = <any> '612',
        _616 = <any> '616',
        _620 = <any> '620',
        _624 = <any> '624',
        _626 = <any> '626',
        _630 = <any> '630',
        _634 = <any> '634',
        _638 = <any> '638',
        _642 = <any> '642',
        _643 = <any> '643',
        _646 = <any> '646',
        _652 = <any> '652',
        _654 = <any> '654',
        _659 = <any> '659',
        _660 = <any> '660',
        _662 = <any> '662',
        _663 = <any> '663',
        _666 = <any> '666',
        _670 = <any> '670',
        _674 = <any> '674',
        _678 = <any> '678',
        _682 = <any> '682',
        _686 = <any> '686',
        _688 = <any> '688',
        _690 = <any> '690',
        _694 = <any> '694',
        _702 = <any> '702',
        _703 = <any> '703',
        _704 = <any> '704',
        _705 = <any> '705',
        _706 = <any> '706',
        _710 = <any> '710',
        _716 = <any> '716',
        _724 = <any> '724',
        _728 = <any> '728',
        _729 = <any> '729',
        _732 = <any> '732',
        _740 = <any> '740',
        _744 = <any> '744',
        _748 = <any> '748',
        _752 = <any> '752',
        _756 = <any> '756',
        _760 = <any> '760',
        _762 = <any> '762',
        _764 = <any> '764',
        _768 = <any> '768',
        _772 = <any> '772',
        _776 = <any> '776',
        _780 = <any> '780',
        _784 = <any> '784',
        _788 = <any> '788',
        _792 = <any> '792',
        _795 = <any> '795',
        _796 = <any> '796',
        _798 = <any> '798',
        _800 = <any> '800',
        _804 = <any> '804',
        _807 = <any> '807',
        _818 = <any> '818',
        _826 = <any> '826',
        _831 = <any> '831',
        _832 = <any> '832',
        _833 = <any> '833',
        _834 = <any> '834',
        _840 = <any> '840',
        _850 = <any> '850',
        _854 = <any> '854',
        _858 = <any> '858',
        _860 = <any> '860',
        _862 = <any> '862',
        _876 = <any> '876',
        _882 = <any> '882',
        _887 = <any> '887',
        _894 = <any> '894'
    }
    export enum ClassKeyIdentifierEnum {
        IoFinixVisaDirectClientVisaSystemConfig = <any> 'io.finix.visa.direct.client.VisaSystemConfig'
    }
    export enum SourceOfFundsEnum {
        _01 = <any> '01',
        _02 = <any> '02',
        _03 = <any> '03',
        _04 = <any> '04',
        _05 = <any> '05',
        _06 = <any> '06'
    }
}
