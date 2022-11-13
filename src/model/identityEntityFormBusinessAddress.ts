/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';

/**
* Primary address for the legal entity.
*/
export class IdentityEntityFormBusinessAddress {
    /**
    * City (max 20 characters).
    */
    'city': string | null;
    /**
    * 3-Letter Country code.
    */
    'country': IdentityEntityFormBusinessAddress.CountryEnum | string;
    /**
    * First line of the address (max 35 characters).
    */
    'line1': string | null;
    /**
    * Second line of the address (max 35 characters).
    */
    'line2'?: string | null;
    /**
    * Zip or Postal code (max 7 characters).
    */
    'postalCode': string | null;
    /**
    * 2-letter State code.
    */
    'region': string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "city",
            "baseName": "city",
            "type": "string"
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "IdentityEntityFormBusinessAddress.CountryEnum"
        },
        {
            "name": "line1",
            "baseName": "line1",
            "type": "string"
        },
        {
            "name": "line2",
            "baseName": "line2",
            "type": "string"
        },
        {
            "name": "postalCode",
            "baseName": "postal_code",
            "type": "string"
        },
        {
            "name": "region",
            "baseName": "region",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IdentityEntityFormBusinessAddress.attributeTypeMap;
    }
}

export namespace IdentityEntityFormBusinessAddress {
    export enum CountryEnum {
        Abw = <any> 'ABW',
        Afg = <any> 'AFG',
        Ago = <any> 'AGO',
        Aia = <any> 'AIA',
        Ala = <any> 'ALA',
        Alb = <any> 'ALB',
        And = <any> 'AND',
        Are = <any> 'ARE',
        Arg = <any> 'ARG',
        Arm = <any> 'ARM',
        Asm = <any> 'ASM',
        Ata = <any> 'ATA',
        Atf = <any> 'ATF',
        Atg = <any> 'ATG',
        Aus = <any> 'AUS',
        Aut = <any> 'AUT',
        Aze = <any> 'AZE',
        Bdi = <any> 'BDI',
        Bel = <any> 'BEL',
        Ben = <any> 'BEN',
        Bes = <any> 'BES',
        Bfa = <any> 'BFA',
        Bgd = <any> 'BGD',
        Bgr = <any> 'BGR',
        Bhr = <any> 'BHR',
        Bhs = <any> 'BHS',
        Bih = <any> 'BIH',
        Blm = <any> 'BLM',
        Blr = <any> 'BLR',
        Blz = <any> 'BLZ',
        Bmu = <any> 'BMU',
        Bol = <any> 'BOL',
        Bra = <any> 'BRA',
        Brb = <any> 'BRB',
        Brn = <any> 'BRN',
        Btn = <any> 'BTN',
        Bvt = <any> 'BVT',
        Bwa = <any> 'BWA',
        Caf = <any> 'CAF',
        Can = <any> 'CAN',
        Cck = <any> 'CCK',
        Che = <any> 'CHE',
        Chl = <any> 'CHL',
        Chn = <any> 'CHN',
        Civ = <any> 'CIV',
        Cmr = <any> 'CMR',
        Cod = <any> 'COD',
        Cog = <any> 'COG',
        Cok = <any> 'COK',
        Col = <any> 'COL',
        Com = <any> 'COM',
        Cpv = <any> 'CPV',
        Cri = <any> 'CRI',
        Cub = <any> 'CUB',
        Cuw = <any> 'CUW',
        Cxr = <any> 'CXR',
        Cym = <any> 'CYM',
        Cyp = <any> 'CYP',
        Cze = <any> 'CZE',
        Deu = <any> 'DEU',
        Dji = <any> 'DJI',
        Dma = <any> 'DMA',
        Dnk = <any> 'DNK',
        Dom = <any> 'DOM',
        Dza = <any> 'DZA',
        Ecu = <any> 'ECU',
        Egy = <any> 'EGY',
        Eri = <any> 'ERI',
        Esh = <any> 'ESH',
        Esp = <any> 'ESP',
        Est = <any> 'EST',
        Eth = <any> 'ETH',
        Fin = <any> 'FIN',
        Fji = <any> 'FJI',
        Flk = <any> 'FLK',
        Fra = <any> 'FRA',
        Fro = <any> 'FRO',
        Fsm = <any> 'FSM',
        Gab = <any> 'GAB',
        Gbr = <any> 'GBR',
        Geo = <any> 'GEO',
        Ggy = <any> 'GGY',
        Gha = <any> 'GHA',
        Gib = <any> 'GIB',
        Gin = <any> 'GIN',
        Glp = <any> 'GLP',
        Gmb = <any> 'GMB',
        Gnb = <any> 'GNB',
        Gnq = <any> 'GNQ',
        Grc = <any> 'GRC',
        Grd = <any> 'GRD',
        Grl = <any> 'GRL',
        Gtm = <any> 'GTM',
        Guf = <any> 'GUF',
        Gum = <any> 'GUM',
        Guy = <any> 'GUY',
        Hkg = <any> 'HKG',
        Hmd = <any> 'HMD',
        Hnd = <any> 'HND',
        Hrv = <any> 'HRV',
        Hti = <any> 'HTI',
        Hun = <any> 'HUN',
        Idn = <any> 'IDN',
        Imn = <any> 'IMN',
        Ind = <any> 'IND',
        Iot = <any> 'IOT',
        Irl = <any> 'IRL',
        Irn = <any> 'IRN',
        Irq = <any> 'IRQ',
        Isl = <any> 'ISL',
        Isr = <any> 'ISR',
        Ita = <any> 'ITA',
        Jam = <any> 'JAM',
        Jey = <any> 'JEY',
        Jor = <any> 'JOR',
        Jpn = <any> 'JPN',
        Kaz = <any> 'KAZ',
        Ken = <any> 'KEN',
        Kgz = <any> 'KGZ',
        Khm = <any> 'KHM',
        Kir = <any> 'KIR',
        Kna = <any> 'KNA',
        Kor = <any> 'KOR',
        Kwt = <any> 'KWT',
        Lao = <any> 'LAO',
        Lbn = <any> 'LBN',
        Lbr = <any> 'LBR',
        Lby = <any> 'LBY',
        Lca = <any> 'LCA',
        Lie = <any> 'LIE',
        Lka = <any> 'LKA',
        Lso = <any> 'LSO',
        Ltu = <any> 'LTU',
        Lux = <any> 'LUX',
        Lva = <any> 'LVA',
        Mac = <any> 'MAC',
        Maf = <any> 'MAF',
        Mar = <any> 'MAR',
        Mco = <any> 'MCO',
        Mda = <any> 'MDA',
        Mdg = <any> 'MDG',
        Mdv = <any> 'MDV',
        Mex = <any> 'MEX',
        Mhl = <any> 'MHL',
        Mkd = <any> 'MKD',
        Mli = <any> 'MLI',
        Mlt = <any> 'MLT',
        Mmr = <any> 'MMR',
        Mne = <any> 'MNE',
        Mng = <any> 'MNG',
        Mnp = <any> 'MNP',
        Mrt = <any> 'MRT',
        Msr = <any> 'MSR',
        Mtq = <any> 'MTQ',
        Mus = <any> 'MUS',
        Mwi = <any> 'MWI',
        Mys = <any> 'MYS',
        Myt = <any> 'MYT',
        Nam = <any> 'NAM',
        Ncl = <any> 'NCL',
        Ner = <any> 'NER',
        Nfk = <any> 'NFK',
        Nga = <any> 'NGA',
        Nic = <any> 'NIC',
        Niu = <any> 'NIU',
        Nld = <any> 'NLD',
        Nor = <any> 'NOR',
        Npl = <any> 'NPL',
        Nru = <any> 'NRU',
        Nzl = <any> 'NZL',
        Omn = <any> 'OMN',
        Pak = <any> 'PAK',
        Pan = <any> 'PAN',
        Pcn = <any> 'PCN',
        Per = <any> 'PER',
        Phl = <any> 'PHL',
        Plw = <any> 'PLW',
        Png = <any> 'PNG',
        Pol = <any> 'POL',
        Pri = <any> 'PRI',
        Prk = <any> 'PRK',
        Prt = <any> 'PRT',
        Pry = <any> 'PRY',
        Pse = <any> 'PSE',
        Pyf = <any> 'PYF',
        Qat = <any> 'QAT',
        Reu = <any> 'REU',
        Rou = <any> 'ROU',
        Rus = <any> 'RUS',
        Rwa = <any> 'RWA',
        Sau = <any> 'SAU',
        Sdn = <any> 'SDN',
        Sen = <any> 'SEN',
        Sgp = <any> 'SGP',
        Sgs = <any> 'SGS',
        Shn = <any> 'SHN',
        Sjm = <any> 'SJM',
        Slb = <any> 'SLB',
        Sle = <any> 'SLE',
        Slv = <any> 'SLV',
        Smr = <any> 'SMR',
        Som = <any> 'SOM',
        Spm = <any> 'SPM',
        Srb = <any> 'SRB',
        Ssd = <any> 'SSD',
        Stp = <any> 'STP',
        Sur = <any> 'SUR',
        Svk = <any> 'SVK',
        Svn = <any> 'SVN',
        Swe = <any> 'SWE',
        Swz = <any> 'SWZ',
        Sxm = <any> 'SXM',
        Syc = <any> 'SYC',
        Syr = <any> 'SYR',
        Tca = <any> 'TCA',
        Tcd = <any> 'TCD',
        Tgo = <any> 'TGO',
        Tha = <any> 'THA',
        Tjk = <any> 'TJK',
        Tkl = <any> 'TKL',
        Tkm = <any> 'TKM',
        Tls = <any> 'TLS',
        Ton = <any> 'TON',
        Tto = <any> 'TTO',
        Tun = <any> 'TUN',
        Tur = <any> 'TUR',
        Tuv = <any> 'TUV',
        Twn = <any> 'TWN',
        Tza = <any> 'TZA',
        Uga = <any> 'UGA',
        Ukr = <any> 'UKR',
        Umi = <any> 'UMI',
        Ury = <any> 'URY',
        Usa = <any> 'USA',
        Uzb = <any> 'UZB',
        Vat = <any> 'VAT',
        Vct = <any> 'VCT',
        Ven = <any> 'VEN',
        Vgb = <any> 'VGB',
        Vir = <any> 'VIR',
        Vnm = <any> 'VNM',
        Vut = <any> 'VUT',
        Wlf = <any> 'WLF',
        Wsm = <any> 'WSM',
        Xkx = <any> 'XKX',
        Yem = <any> 'YEM',
        Zaf = <any> 'ZAF',
        Zmb = <any> 'ZMB',
        Zwe = <any> 'ZWE'
    }
}
