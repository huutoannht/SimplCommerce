using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.Serialization.Json;
using System.Text;
using System.Threading.Tasks;

namespace SimplCommerce.WebHost.Extensions
{
    public static class CertificateExtension
    {
        public static string GetJsonSelection()
        {
            var json = @"{
   ""product_categories"":[
      {
         ""value"":""14316"",
         ""label"":"" Roundwood""
      },
      {
         ""value"":""14316,14329"",
         ""label"":"" – Sawlogs and veneer logs""
      },
      {
         ""value"":""14316,14330"",
         ""label"":"" – Pulpwood""
      },
      {
         ""value"":""14316,14331"",
         ""label"":"" – Chips and particles""
      },
      {
         ""value"":""14316,14332"",
         ""label"":"" – Wood residues""
      },
      {
         ""value"":""14316,14333"",
         ""label"":"" – Other industrial roundwood""
      },
      {
         ""value"":""14317"",
         ""label"":"" Fuelwood and charcoal""
      },
      {
         ""value"":""14317,14334"",
         ""label"":"" – Fuelwood (incl chips, residues, pellets, brickets, etc.)""
      },
      {
         ""value"":""14317,14335"",
         ""label"":"" – Charcoal""
      },
      {
         ""value"":""14318"",
         ""label"":"" Sawnwood and sleepers""
      },
      {
         ""value"":""14318,14336"",
         ""label"":"" – Railway sleepers""
      },
      {
         ""value"":""14318,14337"",
         ""label"":"" – Sawnwood""
      },
      {
         ""value"":""14319"",
         ""label"":"" Engineered wood products""
      },
      {
         ""value"":""14319,14338"",
         ""label"":"" – Laminated Lumber Products""
      },
      {
         ""value"":""14319,14339"",
         ""label"":"" – Finger Jointed Lumber""
      },
      {
         ""value"":""14319,14340"",
         ""label"":"" – Glue Laminated Products (Glulam)""
      },
      {
         ""value"":""14319,14341"",
         ""label"":"" – Laminated Veneer Lumber (LVL)""
      },
      {
         ""value"":""14319,14342"",
         ""label"":"" – Parallel Strand Lumber (PSL)""
      },
      {
         ""value"":""14319,14343"",
         ""label"":"" – I-Joists / I-Beams""
      },
      {
         ""value"":""14319,14344"",
         ""label"":"" – Trusses & Engineered Panels""
      },
      {
         ""value"":""14319,14369"",
         ""label"":"" – Other""
      },
      {
         ""value"":""14320"",
         ""label"":"" Wood based panels""
      },
      {
         ""value"":""14320,14345"",
         ""label"":"" – Veneer sheets""
      },
      {
         ""value"":""14320,14346"",
         ""label"":"" – Plywood""
      },
      {
         ""value"":""14320,14347"",
         ""label"":"" – Particle board""
      },
      {
         ""value"":""14320,14347,14370"",
         ""label"":"" – – OSB""
      },
      {
         ""value"":""14320,14347,14371"",
         ""label"":"" – – Other particle board""
      },
      {
         ""value"":""14320,14348"",
         ""label"":"" – Fibreboard""
      },
      {
         ""value"":""14320,14348,14372"",
         ""label"":"" – – MDF""
      },
      {
         ""value"":""14320,14348,14373"",
         ""label"":"" – – HDF""
      },
      {
         ""value"":""14320,14348,14374"",
         ""label"":"" – – Softboard""
      },
      {
         ""value"":""14320,14348,14375"",
         ""label"":"" – – Hardboard""
      },
      {
         ""value"":""14320,14348,14376"",
         ""label"":"" – – Insulating board""
      },
      {
         ""value"":""14321"",
         ""label"":"" Pulp""
      },
      {
         ""value"":""14321,14349"",
         ""label"":"" – Mechanical""
      },
      {
         ""value"":""14321,14350"",
         ""label"":"" – Semichemical""
      },
      {
         ""value"":""14321,14351"",
         ""label"":"" – Dissolving""
      },
      {
         ""value"":""14321,14352"",
         ""label"":"" – Chemical""
      },
      {
         ""value"":""14321,14352,14377"",
         ""label"":"" – – Unbleached sulphite pulp""
      },
      {
         ""value"":""14321,14352,14378"",
         ""label"":"" – – Bleached sulphite pulp""
      },
      {
         ""value"":""14321,14352,14379"",
         ""label"":"" – – Unbleached sulphate (kraft) pulp""
      },
      {
         ""value"":""14321,14352,14380"",
         ""label"":"" – – Bleached sulphate (kraft) pulp""
      },
      {
         ""value"":""14321,14353"",
         ""label"":"" – Recovered paper""
      },
      {
         ""value"":""14322"",
         ""label"":"" Paper and paper board""
      },
      {
         ""value"":""14322,14354"",
         ""label"":"" – Graphic paper""
      },
      {
         ""value"":""14322,14354,14381"",
         ""label"":"" – – Newsprint""
      },
      {
         ""value"":""14322,14354,14382"",
         ""label"":"" – – Uncoated mechanical""
      },
      {
         ""value"":""14322,14354,14383"",
         ""label"":"" – – Uncoated woodfree""
      },
      {
         ""value"":""14322,14354,14384"",
         ""label"":"" – – Coated papers""
      },
      {
         ""value"":""14322,14355"",
         ""label"":"" – Household and sanitary paper""
      },
      {
         ""value"":""14322,14356"",
         ""label"":"" – Packaging materials""
      },
      {
         ""value"":""14322,14356,14385"",
         ""label"":"" – – Case materials""
      },
      {
         ""value"":""14322,14356,14386"",
         ""label"":"" – – Folding boxboards""
      },
      {
         ""value"":""14322,14356,14387"",
         ""label"":"" – – Wrapping papers""
      },
      {
         ""value"":""14322,14356,14388"",
         ""label"":"" – – Other papers mainly for packaging""
      },
      {
         ""value"":""14322,14357"",
         ""label"":"" – Other paper and paperboard""
      },
      {
         ""value"":""14322,14358"",
         ""label"":"" – Converted paper products""
      },
      {
         ""value"":""14322,14359"",
         ""label"":"" – Printed matter""
      },
      {
         ""value"":""14323"",
         ""label"":"" Wood manufacturers""
      },
      {
         ""value"":""14323,14360"",
         ""label"":"" – Packaging, cable drums, pallets""
      },
      {
         ""value"":""14323,14360,14389"",
         ""label"":"" – – Packaging and crates""
      },
      {
         ""value"":""14323,14360,14390"",
         ""label"":"" – – Cable drums""
      },
      {
         ""value"":""14323,14360,14391"",
         ""label"":"" – – Pallets""
      },
      {
         ""value"":""14323,14361"",
         ""label"":"" – Furniture""
      },
      {
         ""value"":""14323,14362"",
         ""label"":"" – Builders carpentry""
      },
      {
         ""value"":""14323,14362,14392"",
         ""label"":"" – – Windows""
      },
      {
         ""value"":""14323,14362,14393"",
         ""label"":"" – – Doors""
      },
      {
         ""value"":""14323,14362,14394"",
         ""label"":"" – – Shingles and shakes""
      },
      {
         ""value"":""14323,14362,14395"",
         ""label"":"" – – Floors""
      },
      {
         ""value"":""14323,14362,14403"",
         ""label"":"" – – Others""
      },
      {
         ""value"":""14323,14363"",
         ""label"":"" – Decorative wood""
      },
      {
         ""value"":""14323,14364"",
         ""label"":"" – Tools and turned wood""
      },
      {
         ""value"":""14323,14364,14396"",
         ""label"":"" – – Tools""
      },
      {
         ""value"":""14323,14364,14397"",
         ""label"":"" – – Children toys""
      },
      {
         ""value"":""14323,14364,14398"",
         ""label"":"" – – Sport goods""
      },
      {
         ""value"":""14323,14364,14399"",
         ""label"":"" – – Musical instruments""
      },
      {
         ""value"":""14323,14364,14403"",
         ""label"":"" – – Other""
      },
      {
         ""value"":""14323,14369"",
         ""label"":"" – Other""
      },
      {
         ""value"":""14324"",
         ""label"":"" Exterior products""
      },
      {
         ""value"":""14324,14365"",
         ""label"":"" – Buildings and their parts""
      },
      {
         ""value"":""14324,14366"",
         ""label"":"" – Garden Furniture/Outdoor Products""
      },
      {
         ""value"":""14324,14366,14400"",
         ""label"":"" – – Garden furniture""
      },
      {
         ""value"":""14324,14366,14401"",
         ""label"":"" – – Playground equipment""
      },
      {
         ""value"":""14324,14366,14402"",
         ""label"":"" – – Decking""
      },
      {
         ""value"":""14328"",
         ""label"":"" Other""
      },
      {
         ""value"":""14325"",
         ""label"":"" Cork and cork products""
      },
      {
         ""value"":""14325,14367"",
         ""label"":"" – Natural cork and cork waste""
      },
      {
         ""value"":""14325,14368"",
         ""label"":"" – Cork manufactures""
      },
      {
         ""value"":""14326"",
         ""label"":"" Energy""
      },
      {
         ""value"":""14327"",
         ""label"":"" Non-wood products""
      }
   ],
   ""countries"":[
      ""AF (Afghanistan)"",
      ""AX (Aland Islands)"",
      ""AL (Albania)"",
      ""DZ (Algeria)"",
      ""AS (American Samoa)"",
      ""AD (Andorra)"",
      ""AO (Angola)"",
      ""AI (Anguilla)"",
      ""AG (Antigua and Barbuda)"",
      ""AR (Argentina)"",
      ""AM (Armenia)"",
      ""AW (Aruba)"",
      ""AU (Australia)"",
      ""AT (Austria)"",
      ""AZ (Azerbaijan)"",
      ""BS (Bahamas)"",
      ""BH (Bahrain)"",
      ""BD (Bangladesh)"",
      ""BB (Barbados)"",
      ""BY (Belarus)"",
      ""BE (Belgium)"",
      ""BZ (Belize)"",
      ""BJ (Benin)"",
      ""BM (Bermuda)"",
      ""BT (Bhutan)"",
      ""BO (Bolivia, Plurinational State of)"",
      ""BQ (Bonaire, Sint Eustatius and Saba)"",
      ""BA (Bosnia and Herzegovina)"",
      ""BW (Botswana)"",
      ""BR (Brazil)"",
      ""IO (British Indian Ocean Territory)"",
      ""BN (Brunei Darussalam)"",
      ""BG (Bulgaria)"",
      ""BF (Burkina Faso)"",
      ""BI (Burundi)"",
      ""KH (Cambodia)"",
      ""CM (Cameroon)"",
      ""CA (Canada)"",
      ""CV (Cape Verde)"",
      ""KY (Cayman Islands)"",
      ""CF (Central African Republic)"",
      ""TD (Chad)"",
      ""CL (Chile)"",
      ""CN (China)"",
      ""HK (Hong Kong)"",
      ""MO (Macao)"",
      ""CO (Colombia)"",
      ""KM (Comoros)"",
      ""CG (Congo)"",
      ""CK (Cook Islands)"",
      ""CR (Costa Rica)"",
      ""CI (Cote d'Ivoire)"",
      ""HR (Croatia)"",
      ""CU (Cuba)"",
      ""CW (Curacao)"",
      ""CY (Cyprus)"",
      ""CZ (Czech Republic)"",
      ""KP (Korea, Democratic People's Republic of)"",
      ""CD (Congo, The Democratic Republic of the)"",
      ""DK (Denmark)"",
      ""DJ (Djibouti)"",
      ""DM (Dominica)"",
      ""DO (Dominican Republic)"",
      ""EC (Ecuador)"",
      ""EG (Egypt)"",
      ""SV (El Salvador)"",
      ""GQ (Equatorial Guinea)"",
      ""ER (Eritrea)"",
      ""EE (Estonia)"",
      ""ET (Ethiopia)"",
      ""FO (Faroe Islands)"",
      ""FK (Falkland Islands (Malvinas))"",
      ""FJ (Fiji)"",
      ""FI (Finland)"",
      ""FR (France)"",
      ""GF (French Guiana)"",
      ""PF (French Polynesia)"",
      ""GA (Gabon)"",
      ""GM (Gambia)"",
      ""GE (Georgia)"",
      ""DE (Germany)"",
      ""GH (Ghana)"",
      ""GI (Gibraltar)"",
      ""GR (Greece)"",
      ""GL (Greenland)"",
      ""GD (Grenada)"",
      ""GP (Guadeloupe)"",
      ""GU (Guam)"",
      ""GT (Guatemala)"",
      ""GG (Guernsey)"",
      ""GN (Guinea)"",
      ""GW (Guinea-Bissau)"",
      ""GY (Guyana)"",
      ""HT (Haiti)"",
      ""VA (Holy See (Vatican City State))"",
      ""HN (Honduras)"",
      ""HU (Hungary)"",
      ""IS (Iceland)"",
      ""IN (India)"",
      ""ID (Indonesia)"",
      ""IR (Iran, Islamic Republic of)"",
      ""IQ (Iraq)"",
      ""IE (Ireland)"",
      ""IM (Isle of Man)"",
      ""IL (Israel)"",
      ""IT (Italy)"",
      ""JM (Jamaica)"",
      ""JP (Japan)"",
      ""JE (Jersey)"",
      ""JO (Jordan)"",
      ""KZ (Kazakhstan)"",
      ""KE (Kenya)"",
      ""KI (Kiribati)"",
      ""KW (Kuwait)"",
      ""KG (Kyrgyzstan)"",
      ""LA (Lao People's Democratic Republic)"",
      ""LV (Latvia)"",
      ""LB (Lebanon)"",
      ""LS (Lesotho)"",
      ""LR (Liberia)"",
      ""LY (Libyan Arab Jamahiriya)"",
      ""LI (Liechtenstein)"",
      ""LT (Lithuania)"",
      ""LU (Luxembourg)"",
      ""MG (Madagascar)"",
      ""MW (Malawi)"",
      ""MY (Malaysia)"",
      ""MV (Maldives)"",
      ""ML (Mali)"",
      ""MT (Malta)"",
      ""MH (Marshall Islands)"",
      ""MQ (Martinique)"",
      ""MR (Mauritania)"",
      ""MU (Mauritius)"",
      ""YT (Mayotte)"",
      ""MX (Mexico)"",
      ""FM (Micronesia, Federated States of)"",
      ""MC (Monaco)"",
      ""MN (Mongolia)"",
      ""ME (Montenegro)"",
      ""MS (Montserrat)"",
      ""MA (Morocco)"",
      ""MZ (Mozambique)"",
      ""MM (Myanmar)"",
      ""NA (Namibia)"",
      ""NR (Nauru)"",
      ""NP (Nepal)"",
      ""NL (Netherlands)"",
      ""NC (New Caledonia)"",
      ""NZ (New Zealand)"",
      ""NI (Nicaragua)"",
      ""NE (Niger)"",
      ""NG (Nigeria)"",
      ""NU (Niue)"",
      ""NF (Norfolk Island)"",
      ""MP (Northern Mariana Islands)"",
      ""NO (Norway)"",
      ""PS (Occupied Palestinian Territory)"",
      ""OM (Oman)"",
      ""PK (Pakistan)"",
      ""PW (Palau)"",
      ""PA (Panama)"",
      ""PG (Papua New Guinea)"",
      ""PY (Paraguay)"",
      ""PE (Peru)"",
      ""PH (Philippines)"",
      ""PN (Pitcairn)"",
      ""PL (Poland)"",
      ""PT (Portugal)"",
      ""PR (Puerto Rico)"",
      ""QA (Qatar)"",
      ""KR (Korea, Republic of)"",
      ""MD (Moldova, Republic of)"",
      ""RE (Reunion)"",
      ""RO (Romania)"",
      ""RU (Russian Federation)"",
      ""RW (Rwanda)"",
      ""BL (Saint Barthelemy)"",
      ""SH (Saint Helena, Ascension and Tristan da Cunha)"",
      ""KN (Saint Kitts and Nevis)"",
      ""LC (Saint Lucia)"",
      ""MF (Saint Martin (French part))"",
      ""PM (Saint Pierre and Miquelon)"",
      ""VC (Saint Vincent and The Grenadines)"",
      ""WS (Samoa)"",
      ""SM (San Marino)"",
      ""ST (Sao Tome and Principe)"",
      ""SA (Saudi Arabia)"",
      ""SN (Senegal)"",
      ""RS (Serbia)"",
      ""SC (Seychelles)"",
      ""SL (Sierra Leone)"",
      ""SG (Singapore)"",
      ""SX (Sint Maarten (Dutch part))"",
      ""SK (Slovakia)"",
      ""SI (Slovenia)"",
      ""SB (Solomon Islands)"",
      ""SO (Somalia)"",
      ""ZA (South Africa)"",
      ""SS (South Sudan)"",
      ""ES (Spain)"",
      ""LK (Sri Lanka)"",
      ""SD (Sudan)"",
      ""SR (Suriname)"",
      ""SJ (Svalbard and Jan Mayen)"",
      ""SZ (Swaziland)"",
      ""SE (Sweden)"",
      ""CH (Switzerland)"",
      ""SY (Syrian Arab Republic)"",
      ""TJ (Tajikistan)"",
      ""TH (Thailand)"",
      ""MK (Macedonia, The Former Yugoslav Republic of)"",
      ""TL (Timor-Leste)"",
      ""TG (Togo)"",
      ""TK (Tokelau)"",
      ""TO (Tonga)"",
      ""TT (Trinidad and Tobago)"",
      ""TN (Tunisia)"",
      ""TR (Turkey)"",
      ""TM (Turkmenistan)"",
      ""TC (Turks and Caicos Islands)"",
      ""TV (Tuvalu)"",
      ""UG (Uganda)"",
      ""UA (Ukraine)"",
      ""AE (United Arab Emirates)"",
      ""GB (United Kingdom of Great Britain and Northern Ireland)"",
      ""TZ (Tanzania, United Republic of)"",
      ""US (United States)"",
      ""VI (Virgin Islands, U.S.)"",
      ""UY (Uruguay)"",
      ""UZ (Uzbekistan)"",
      ""VU (Vanuatu)"",
      ""VE (Venezuela, Bolivarian Republic of)"",
      ""VN (Viet Nam)"",
      ""WF (Wallis and Futuna)"",
      ""EH (Western Sahara)"",
      ""YE (Yemen)"",
      ""ZM (Zambia)"",
      ""ZW (Zimbabwe)"",
      ""AQ (Antarctica)"",
      ""BV (Bouvet Island)"",
      ""CC (Cocos (Keeling) Islands)"",
      ""CX (Christmas Island)"",
      ""GS (South Georgia and the South Sandwich Islands)"",
      ""HM (Heard Island and McDonald Islands)"",
      ""TF (French Southern Territories)"",
      ""TW (Taiwan, Province of China)"",
      ""UM (United States Minor Outlying Islands)"",
      ""VG (Virgin Islands, British)""
   ],
   ""certificate_status"":[
      {
         ""value"":""Valid"",
         ""label"":""Valid""
      },
      {
         ""value"":""Suspended"",
         ""label"":""Suspended""
      },
      {
         ""value"":""Withdrawn"",
         ""label"":""Withdrawn""
      },
      {
         ""value"":""Expired"",
         ""label"":""Expired""
      },
      {
         ""value"":""Not PEFC Recognized"",
         ""label"":""Not PEFC Recognized""
      }
   ],
   ""industry_sector"":[
      {
         ""value"":""Agent/Broker/Trader"",
         ""label"":""Agent/Broker/Trader""
      },
      {
         ""value"":""Biomass/Bioenergy"",
         ""label"":""Biomass/Bioenergy""
      },
      {
         ""value"":""Construction"",
         ""label"":""Construction""
      },
      {
         ""value"":""Non Timber Forest Products"",
         ""label"":""Non Timber Forest Products""
      },
      {
         ""value"":""Printer"",
         ""label"":""Printer""
      },
      {
         ""value"":""Publisher"",
         ""label"":""Publisher""
      },
      {
         ""value"":""Pulp and Paper Product Manufacturer"",
         ""label"":""Pulp and Paper Product Manufacturer""
      },
      {
         ""value"":""Pulp and Paper Product Trader/Retailer"",
         ""label"":""Pulp and Paper Product Trader/Retailer""
      },
      {
         ""value"":""Roundwood Producer/Trader"",
         ""label"":""Roundwood Producer/Trader""
      },
      {
         ""value"":""Wood Product Manufacturer"",
         ""label"":""Wood Product Manufacturer""
      },
      {
         ""value"":""Wood Product Trader/Retailer"",
         ""label"":""Wood Product Trader/Retailer""
      },
      {
         ""value"":""Other"",
         ""label"":""Other""
      }
   ],
   ""cb_notification"":[
      {
         ""value"":""CoC"",
         ""label"":""Chain of Custody""
      },
      {
         ""value"":""FM"",
         ""label"":""Forest Management""
      }
   ],
   ""cb_type_of_certification"":[
{
         ""value"":""Chain of Custody Certification"",
         ""label"":""Chain of Custody Certification""
      },
{
         ""value"":""Forest Management and Chain of Custody Certification"",
         ""label"":""Forest Management and Chain of Custody Certification""
      },
{
         ""value"":""Forest Management Certification"",
         ""label"":""Forest Management Certification""
      }
   ]
}            
";
            return json;
        }
        public static SelectObject GetDataSelection()
        {

            var json = GetJsonSelection();
            SelectObject selectObject =  Deserialize<SelectObject>(json);
            return selectObject;
        }
        public static string Serialize<T>(T obj)
        {
            DataContractJsonSerializer serializer = new DataContractJsonSerializer(obj.GetType());
            MemoryStream ms = new MemoryStream();
            serializer.WriteObject(ms, obj);
            string retVal = Encoding.UTF8.GetString(ms.ToArray());
            return retVal;
        }

        public static T Deserialize<T>(string json)
        {
            T obj = Activator.CreateInstance<T>();
            MemoryStream ms = new MemoryStream(Encoding.Unicode.GetBytes(json));
            DataContractJsonSerializer serializer = new DataContractJsonSerializer(obj.GetType());
            obj = (T)serializer.ReadObject(ms);
            ms.Close();
            return obj;
        }
    }

    public class SelectObject
    {
        public selectData[] product_categories { get; set; }
        public selectData[] cb_notification { get; set; }
        public selectData[] certificate_status { get; set; }
        public selectData[] industry_sector { get; set; }

        public selectData[] cb_type_of_certification { get; set; }
    }
    public class selectData {
        public string value { get; set; }
        public string label { get; set; }
    }
   
}
