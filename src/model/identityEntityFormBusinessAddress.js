"use strict";
/**
 * Finix API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2022-02-01
 * Contact: support@finixpayments.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdentityEntityFormBusinessAddress = void 0;
/**
* Primary address for the legal entity.
*/
class IdentityEntityFormBusinessAddress {
    /**
    * City (max 20 characters).
    */
    'city';
    /**
    * 3-Letter Country code.
    */
    'country';
    /**
    * First line of the address (max 35 characters).
    */
    'line1';
    /**
    * Second line of the address (max 35 characters).
    */
    'line2';
    /**
    * Zip or Postal code (max 7 characters).
    */
    'postalCode';
    /**
    * 2-letter State code.
    */
    'region';
    static discriminator = undefined;
    static attributeTypeMap = [
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
        }
    ];
    static getAttributeTypeMap() {
        return IdentityEntityFormBusinessAddress.attributeTypeMap;
    }
}
exports.IdentityEntityFormBusinessAddress = IdentityEntityFormBusinessAddress;
(function (IdentityEntityFormBusinessAddress) {
    let CountryEnum;
    (function (CountryEnum) {
        CountryEnum[CountryEnum["Abw"] = 'ABW'] = "Abw";
        CountryEnum[CountryEnum["Afg"] = 'AFG'] = "Afg";
        CountryEnum[CountryEnum["Ago"] = 'AGO'] = "Ago";
        CountryEnum[CountryEnum["Aia"] = 'AIA'] = "Aia";
        CountryEnum[CountryEnum["Ala"] = 'ALA'] = "Ala";
        CountryEnum[CountryEnum["Alb"] = 'ALB'] = "Alb";
        CountryEnum[CountryEnum["And"] = 'AND'] = "And";
        CountryEnum[CountryEnum["Are"] = 'ARE'] = "Are";
        CountryEnum[CountryEnum["Arg"] = 'ARG'] = "Arg";
        CountryEnum[CountryEnum["Arm"] = 'ARM'] = "Arm";
        CountryEnum[CountryEnum["Asm"] = 'ASM'] = "Asm";
        CountryEnum[CountryEnum["Ata"] = 'ATA'] = "Ata";
        CountryEnum[CountryEnum["Atf"] = 'ATF'] = "Atf";
        CountryEnum[CountryEnum["Atg"] = 'ATG'] = "Atg";
        CountryEnum[CountryEnum["Aus"] = 'AUS'] = "Aus";
        CountryEnum[CountryEnum["Aut"] = 'AUT'] = "Aut";
        CountryEnum[CountryEnum["Aze"] = 'AZE'] = "Aze";
        CountryEnum[CountryEnum["Bdi"] = 'BDI'] = "Bdi";
        CountryEnum[CountryEnum["Bel"] = 'BEL'] = "Bel";
        CountryEnum[CountryEnum["Ben"] = 'BEN'] = "Ben";
        CountryEnum[CountryEnum["Bes"] = 'BES'] = "Bes";
        CountryEnum[CountryEnum["Bfa"] = 'BFA'] = "Bfa";
        CountryEnum[CountryEnum["Bgd"] = 'BGD'] = "Bgd";
        CountryEnum[CountryEnum["Bgr"] = 'BGR'] = "Bgr";
        CountryEnum[CountryEnum["Bhr"] = 'BHR'] = "Bhr";
        CountryEnum[CountryEnum["Bhs"] = 'BHS'] = "Bhs";
        CountryEnum[CountryEnum["Bih"] = 'BIH'] = "Bih";
        CountryEnum[CountryEnum["Blm"] = 'BLM'] = "Blm";
        CountryEnum[CountryEnum["Blr"] = 'BLR'] = "Blr";
        CountryEnum[CountryEnum["Blz"] = 'BLZ'] = "Blz";
        CountryEnum[CountryEnum["Bmu"] = 'BMU'] = "Bmu";
        CountryEnum[CountryEnum["Bol"] = 'BOL'] = "Bol";
        CountryEnum[CountryEnum["Bra"] = 'BRA'] = "Bra";
        CountryEnum[CountryEnum["Brb"] = 'BRB'] = "Brb";
        CountryEnum[CountryEnum["Brn"] = 'BRN'] = "Brn";
        CountryEnum[CountryEnum["Btn"] = 'BTN'] = "Btn";
        CountryEnum[CountryEnum["Bvt"] = 'BVT'] = "Bvt";
        CountryEnum[CountryEnum["Bwa"] = 'BWA'] = "Bwa";
        CountryEnum[CountryEnum["Caf"] = 'CAF'] = "Caf";
        CountryEnum[CountryEnum["Can"] = 'CAN'] = "Can";
        CountryEnum[CountryEnum["Cck"] = 'CCK'] = "Cck";
        CountryEnum[CountryEnum["Che"] = 'CHE'] = "Che";
        CountryEnum[CountryEnum["Chl"] = 'CHL'] = "Chl";
        CountryEnum[CountryEnum["Chn"] = 'CHN'] = "Chn";
        CountryEnum[CountryEnum["Civ"] = 'CIV'] = "Civ";
        CountryEnum[CountryEnum["Cmr"] = 'CMR'] = "Cmr";
        CountryEnum[CountryEnum["Cod"] = 'COD'] = "Cod";
        CountryEnum[CountryEnum["Cog"] = 'COG'] = "Cog";
        CountryEnum[CountryEnum["Cok"] = 'COK'] = "Cok";
        CountryEnum[CountryEnum["Col"] = 'COL'] = "Col";
        CountryEnum[CountryEnum["Com"] = 'COM'] = "Com";
        CountryEnum[CountryEnum["Cpv"] = 'CPV'] = "Cpv";
        CountryEnum[CountryEnum["Cri"] = 'CRI'] = "Cri";
        CountryEnum[CountryEnum["Cub"] = 'CUB'] = "Cub";
        CountryEnum[CountryEnum["Cuw"] = 'CUW'] = "Cuw";
        CountryEnum[CountryEnum["Cxr"] = 'CXR'] = "Cxr";
        CountryEnum[CountryEnum["Cym"] = 'CYM'] = "Cym";
        CountryEnum[CountryEnum["Cyp"] = 'CYP'] = "Cyp";
        CountryEnum[CountryEnum["Cze"] = 'CZE'] = "Cze";
        CountryEnum[CountryEnum["Deu"] = 'DEU'] = "Deu";
        CountryEnum[CountryEnum["Dji"] = 'DJI'] = "Dji";
        CountryEnum[CountryEnum["Dma"] = 'DMA'] = "Dma";
        CountryEnum[CountryEnum["Dnk"] = 'DNK'] = "Dnk";
        CountryEnum[CountryEnum["Dom"] = 'DOM'] = "Dom";
        CountryEnum[CountryEnum["Dza"] = 'DZA'] = "Dza";
        CountryEnum[CountryEnum["Ecu"] = 'ECU'] = "Ecu";
        CountryEnum[CountryEnum["Egy"] = 'EGY'] = "Egy";
        CountryEnum[CountryEnum["Eri"] = 'ERI'] = "Eri";
        CountryEnum[CountryEnum["Esh"] = 'ESH'] = "Esh";
        CountryEnum[CountryEnum["Esp"] = 'ESP'] = "Esp";
        CountryEnum[CountryEnum["Est"] = 'EST'] = "Est";
        CountryEnum[CountryEnum["Eth"] = 'ETH'] = "Eth";
        CountryEnum[CountryEnum["Fin"] = 'FIN'] = "Fin";
        CountryEnum[CountryEnum["Fji"] = 'FJI'] = "Fji";
        CountryEnum[CountryEnum["Flk"] = 'FLK'] = "Flk";
        CountryEnum[CountryEnum["Fra"] = 'FRA'] = "Fra";
        CountryEnum[CountryEnum["Fro"] = 'FRO'] = "Fro";
        CountryEnum[CountryEnum["Fsm"] = 'FSM'] = "Fsm";
        CountryEnum[CountryEnum["Gab"] = 'GAB'] = "Gab";
        CountryEnum[CountryEnum["Gbr"] = 'GBR'] = "Gbr";
        CountryEnum[CountryEnum["Geo"] = 'GEO'] = "Geo";
        CountryEnum[CountryEnum["Ggy"] = 'GGY'] = "Ggy";
        CountryEnum[CountryEnum["Gha"] = 'GHA'] = "Gha";
        CountryEnum[CountryEnum["Gib"] = 'GIB'] = "Gib";
        CountryEnum[CountryEnum["Gin"] = 'GIN'] = "Gin";
        CountryEnum[CountryEnum["Glp"] = 'GLP'] = "Glp";
        CountryEnum[CountryEnum["Gmb"] = 'GMB'] = "Gmb";
        CountryEnum[CountryEnum["Gnb"] = 'GNB'] = "Gnb";
        CountryEnum[CountryEnum["Gnq"] = 'GNQ'] = "Gnq";
        CountryEnum[CountryEnum["Grc"] = 'GRC'] = "Grc";
        CountryEnum[CountryEnum["Grd"] = 'GRD'] = "Grd";
        CountryEnum[CountryEnum["Grl"] = 'GRL'] = "Grl";
        CountryEnum[CountryEnum["Gtm"] = 'GTM'] = "Gtm";
        CountryEnum[CountryEnum["Guf"] = 'GUF'] = "Guf";
        CountryEnum[CountryEnum["Gum"] = 'GUM'] = "Gum";
        CountryEnum[CountryEnum["Guy"] = 'GUY'] = "Guy";
        CountryEnum[CountryEnum["Hkg"] = 'HKG'] = "Hkg";
        CountryEnum[CountryEnum["Hmd"] = 'HMD'] = "Hmd";
        CountryEnum[CountryEnum["Hnd"] = 'HND'] = "Hnd";
        CountryEnum[CountryEnum["Hrv"] = 'HRV'] = "Hrv";
        CountryEnum[CountryEnum["Hti"] = 'HTI'] = "Hti";
        CountryEnum[CountryEnum["Hun"] = 'HUN'] = "Hun";
        CountryEnum[CountryEnum["Idn"] = 'IDN'] = "Idn";
        CountryEnum[CountryEnum["Imn"] = 'IMN'] = "Imn";
        CountryEnum[CountryEnum["Ind"] = 'IND'] = "Ind";
        CountryEnum[CountryEnum["Iot"] = 'IOT'] = "Iot";
        CountryEnum[CountryEnum["Irl"] = 'IRL'] = "Irl";
        CountryEnum[CountryEnum["Irn"] = 'IRN'] = "Irn";
        CountryEnum[CountryEnum["Irq"] = 'IRQ'] = "Irq";
        CountryEnum[CountryEnum["Isl"] = 'ISL'] = "Isl";
        CountryEnum[CountryEnum["Isr"] = 'ISR'] = "Isr";
        CountryEnum[CountryEnum["Ita"] = 'ITA'] = "Ita";
        CountryEnum[CountryEnum["Jam"] = 'JAM'] = "Jam";
        CountryEnum[CountryEnum["Jey"] = 'JEY'] = "Jey";
        CountryEnum[CountryEnum["Jor"] = 'JOR'] = "Jor";
        CountryEnum[CountryEnum["Jpn"] = 'JPN'] = "Jpn";
        CountryEnum[CountryEnum["Kaz"] = 'KAZ'] = "Kaz";
        CountryEnum[CountryEnum["Ken"] = 'KEN'] = "Ken";
        CountryEnum[CountryEnum["Kgz"] = 'KGZ'] = "Kgz";
        CountryEnum[CountryEnum["Khm"] = 'KHM'] = "Khm";
        CountryEnum[CountryEnum["Kir"] = 'KIR'] = "Kir";
        CountryEnum[CountryEnum["Kna"] = 'KNA'] = "Kna";
        CountryEnum[CountryEnum["Kor"] = 'KOR'] = "Kor";
        CountryEnum[CountryEnum["Kwt"] = 'KWT'] = "Kwt";
        CountryEnum[CountryEnum["Lao"] = 'LAO'] = "Lao";
        CountryEnum[CountryEnum["Lbn"] = 'LBN'] = "Lbn";
        CountryEnum[CountryEnum["Lbr"] = 'LBR'] = "Lbr";
        CountryEnum[CountryEnum["Lby"] = 'LBY'] = "Lby";
        CountryEnum[CountryEnum["Lca"] = 'LCA'] = "Lca";
        CountryEnum[CountryEnum["Lie"] = 'LIE'] = "Lie";
        CountryEnum[CountryEnum["Lka"] = 'LKA'] = "Lka";
        CountryEnum[CountryEnum["Lso"] = 'LSO'] = "Lso";
        CountryEnum[CountryEnum["Ltu"] = 'LTU'] = "Ltu";
        CountryEnum[CountryEnum["Lux"] = 'LUX'] = "Lux";
        CountryEnum[CountryEnum["Lva"] = 'LVA'] = "Lva";
        CountryEnum[CountryEnum["Mac"] = 'MAC'] = "Mac";
        CountryEnum[CountryEnum["Maf"] = 'MAF'] = "Maf";
        CountryEnum[CountryEnum["Mar"] = 'MAR'] = "Mar";
        CountryEnum[CountryEnum["Mco"] = 'MCO'] = "Mco";
        CountryEnum[CountryEnum["Mda"] = 'MDA'] = "Mda";
        CountryEnum[CountryEnum["Mdg"] = 'MDG'] = "Mdg";
        CountryEnum[CountryEnum["Mdv"] = 'MDV'] = "Mdv";
        CountryEnum[CountryEnum["Mex"] = 'MEX'] = "Mex";
        CountryEnum[CountryEnum["Mhl"] = 'MHL'] = "Mhl";
        CountryEnum[CountryEnum["Mkd"] = 'MKD'] = "Mkd";
        CountryEnum[CountryEnum["Mli"] = 'MLI'] = "Mli";
        CountryEnum[CountryEnum["Mlt"] = 'MLT'] = "Mlt";
        CountryEnum[CountryEnum["Mmr"] = 'MMR'] = "Mmr";
        CountryEnum[CountryEnum["Mne"] = 'MNE'] = "Mne";
        CountryEnum[CountryEnum["Mng"] = 'MNG'] = "Mng";
        CountryEnum[CountryEnum["Mnp"] = 'MNP'] = "Mnp";
        CountryEnum[CountryEnum["Mrt"] = 'MRT'] = "Mrt";
        CountryEnum[CountryEnum["Msr"] = 'MSR'] = "Msr";
        CountryEnum[CountryEnum["Mtq"] = 'MTQ'] = "Mtq";
        CountryEnum[CountryEnum["Mus"] = 'MUS'] = "Mus";
        CountryEnum[CountryEnum["Mwi"] = 'MWI'] = "Mwi";
        CountryEnum[CountryEnum["Mys"] = 'MYS'] = "Mys";
        CountryEnum[CountryEnum["Myt"] = 'MYT'] = "Myt";
        CountryEnum[CountryEnum["Nam"] = 'NAM'] = "Nam";
        CountryEnum[CountryEnum["Ncl"] = 'NCL'] = "Ncl";
        CountryEnum[CountryEnum["Ner"] = 'NER'] = "Ner";
        CountryEnum[CountryEnum["Nfk"] = 'NFK'] = "Nfk";
        CountryEnum[CountryEnum["Nga"] = 'NGA'] = "Nga";
        CountryEnum[CountryEnum["Nic"] = 'NIC'] = "Nic";
        CountryEnum[CountryEnum["Niu"] = 'NIU'] = "Niu";
        CountryEnum[CountryEnum["Nld"] = 'NLD'] = "Nld";
        CountryEnum[CountryEnum["Nor"] = 'NOR'] = "Nor";
        CountryEnum[CountryEnum["Npl"] = 'NPL'] = "Npl";
        CountryEnum[CountryEnum["Nru"] = 'NRU'] = "Nru";
        CountryEnum[CountryEnum["Nzl"] = 'NZL'] = "Nzl";
        CountryEnum[CountryEnum["Omn"] = 'OMN'] = "Omn";
        CountryEnum[CountryEnum["Pak"] = 'PAK'] = "Pak";
        CountryEnum[CountryEnum["Pan"] = 'PAN'] = "Pan";
        CountryEnum[CountryEnum["Pcn"] = 'PCN'] = "Pcn";
        CountryEnum[CountryEnum["Per"] = 'PER'] = "Per";
        CountryEnum[CountryEnum["Phl"] = 'PHL'] = "Phl";
        CountryEnum[CountryEnum["Plw"] = 'PLW'] = "Plw";
        CountryEnum[CountryEnum["Png"] = 'PNG'] = "Png";
        CountryEnum[CountryEnum["Pol"] = 'POL'] = "Pol";
        CountryEnum[CountryEnum["Pri"] = 'PRI'] = "Pri";
        CountryEnum[CountryEnum["Prk"] = 'PRK'] = "Prk";
        CountryEnum[CountryEnum["Prt"] = 'PRT'] = "Prt";
        CountryEnum[CountryEnum["Pry"] = 'PRY'] = "Pry";
        CountryEnum[CountryEnum["Pse"] = 'PSE'] = "Pse";
        CountryEnum[CountryEnum["Pyf"] = 'PYF'] = "Pyf";
        CountryEnum[CountryEnum["Qat"] = 'QAT'] = "Qat";
        CountryEnum[CountryEnum["Reu"] = 'REU'] = "Reu";
        CountryEnum[CountryEnum["Rou"] = 'ROU'] = "Rou";
        CountryEnum[CountryEnum["Rus"] = 'RUS'] = "Rus";
        CountryEnum[CountryEnum["Rwa"] = 'RWA'] = "Rwa";
        CountryEnum[CountryEnum["Sau"] = 'SAU'] = "Sau";
        CountryEnum[CountryEnum["Sdn"] = 'SDN'] = "Sdn";
        CountryEnum[CountryEnum["Sen"] = 'SEN'] = "Sen";
        CountryEnum[CountryEnum["Sgp"] = 'SGP'] = "Sgp";
        CountryEnum[CountryEnum["Sgs"] = 'SGS'] = "Sgs";
        CountryEnum[CountryEnum["Shn"] = 'SHN'] = "Shn";
        CountryEnum[CountryEnum["Sjm"] = 'SJM'] = "Sjm";
        CountryEnum[CountryEnum["Slb"] = 'SLB'] = "Slb";
        CountryEnum[CountryEnum["Sle"] = 'SLE'] = "Sle";
        CountryEnum[CountryEnum["Slv"] = 'SLV'] = "Slv";
        CountryEnum[CountryEnum["Smr"] = 'SMR'] = "Smr";
        CountryEnum[CountryEnum["Som"] = 'SOM'] = "Som";
        CountryEnum[CountryEnum["Spm"] = 'SPM'] = "Spm";
        CountryEnum[CountryEnum["Srb"] = 'SRB'] = "Srb";
        CountryEnum[CountryEnum["Ssd"] = 'SSD'] = "Ssd";
        CountryEnum[CountryEnum["Stp"] = 'STP'] = "Stp";
        CountryEnum[CountryEnum["Sur"] = 'SUR'] = "Sur";
        CountryEnum[CountryEnum["Svk"] = 'SVK'] = "Svk";
        CountryEnum[CountryEnum["Svn"] = 'SVN'] = "Svn";
        CountryEnum[CountryEnum["Swe"] = 'SWE'] = "Swe";
        CountryEnum[CountryEnum["Swz"] = 'SWZ'] = "Swz";
        CountryEnum[CountryEnum["Sxm"] = 'SXM'] = "Sxm";
        CountryEnum[CountryEnum["Syc"] = 'SYC'] = "Syc";
        CountryEnum[CountryEnum["Syr"] = 'SYR'] = "Syr";
        CountryEnum[CountryEnum["Tca"] = 'TCA'] = "Tca";
        CountryEnum[CountryEnum["Tcd"] = 'TCD'] = "Tcd";
        CountryEnum[CountryEnum["Tgo"] = 'TGO'] = "Tgo";
        CountryEnum[CountryEnum["Tha"] = 'THA'] = "Tha";
        CountryEnum[CountryEnum["Tjk"] = 'TJK'] = "Tjk";
        CountryEnum[CountryEnum["Tkl"] = 'TKL'] = "Tkl";
        CountryEnum[CountryEnum["Tkm"] = 'TKM'] = "Tkm";
        CountryEnum[CountryEnum["Tls"] = 'TLS'] = "Tls";
        CountryEnum[CountryEnum["Ton"] = 'TON'] = "Ton";
        CountryEnum[CountryEnum["Tto"] = 'TTO'] = "Tto";
        CountryEnum[CountryEnum["Tun"] = 'TUN'] = "Tun";
        CountryEnum[CountryEnum["Tur"] = 'TUR'] = "Tur";
        CountryEnum[CountryEnum["Tuv"] = 'TUV'] = "Tuv";
        CountryEnum[CountryEnum["Twn"] = 'TWN'] = "Twn";
        CountryEnum[CountryEnum["Tza"] = 'TZA'] = "Tza";
        CountryEnum[CountryEnum["Uga"] = 'UGA'] = "Uga";
        CountryEnum[CountryEnum["Ukr"] = 'UKR'] = "Ukr";
        CountryEnum[CountryEnum["Umi"] = 'UMI'] = "Umi";
        CountryEnum[CountryEnum["Ury"] = 'URY'] = "Ury";
        CountryEnum[CountryEnum["Usa"] = 'USA'] = "Usa";
        CountryEnum[CountryEnum["Uzb"] = 'UZB'] = "Uzb";
        CountryEnum[CountryEnum["Vat"] = 'VAT'] = "Vat";
        CountryEnum[CountryEnum["Vct"] = 'VCT'] = "Vct";
        CountryEnum[CountryEnum["Ven"] = 'VEN'] = "Ven";
        CountryEnum[CountryEnum["Vgb"] = 'VGB'] = "Vgb";
        CountryEnum[CountryEnum["Vir"] = 'VIR'] = "Vir";
        CountryEnum[CountryEnum["Vnm"] = 'VNM'] = "Vnm";
        CountryEnum[CountryEnum["Vut"] = 'VUT'] = "Vut";
        CountryEnum[CountryEnum["Wlf"] = 'WLF'] = "Wlf";
        CountryEnum[CountryEnum["Wsm"] = 'WSM'] = "Wsm";
        CountryEnum[CountryEnum["Xkx"] = 'XKX'] = "Xkx";
        CountryEnum[CountryEnum["Yem"] = 'YEM'] = "Yem";
        CountryEnum[CountryEnum["Zaf"] = 'ZAF'] = "Zaf";
        CountryEnum[CountryEnum["Zmb"] = 'ZMB'] = "Zmb";
        CountryEnum[CountryEnum["Zwe"] = 'ZWE'] = "Zwe";
    })(CountryEnum = IdentityEntityFormBusinessAddress.CountryEnum || (IdentityEntityFormBusinessAddress.CountryEnum = {}));
})(IdentityEntityFormBusinessAddress = exports.IdentityEntityFormBusinessAddress || (exports.IdentityEntityFormBusinessAddress = {}));
//# sourceMappingURL=identityEntityFormBusinessAddress.js.map