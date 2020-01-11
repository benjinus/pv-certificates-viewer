import * as asn1js from 'asn1js';
import { Convert } from 'pvtsutils';
import _AttributeTypeAndValue from 'pkijs/src/AttributeTypeAndValue';
import _AlgorithmIdentifier from 'pkijs/src/AlgorithmIdentifier';

export default class Basic {
  input: string;
  name?: string;
  base64: string;
  pem: string;
  hex: string;
  schema: asn1js.LocalBaseBlock;
  fingerprint?: string;

  static algorithmOIDs: Record<string, { name: string; hash: string }> = {
    '1.2.840.113549.1.1.5': {
      name: 'RSASSA-PKCS1-v1_5',
      hash: 'SHA-1',
    },
    '1.2.840.113549.1.1.11': {
      name: 'RSASSA-PKCS1-v1_5',
      hash: 'SHA-256',
    },
    '1.2.840.113549.1.1.12': {
      name: 'RSASSA-PKCS1-v1_5',
      hash: 'SHA-384',
    },
    '1.2.840.113549.1.1.13': {
      name: 'RSASSA-PKCS1-v1_5',
      hash: 'SHA-512',
    },
    '1.2.840.113549.1.1.14': {
      name: 'RSASSA-PKCS1-v1_5',
      hash: 'SHA-224',
    },
    '1.2.840.10045.4.1': {
      name: 'ECDSA',
      hash: 'SHA-1',
    },
    '1.2.840.10045.4.2': {
      name: 'ECDSA',
      hash: 'Recommended',
    },
    '1.2.840.10045.4.3': {
      name: 'ECDSA',
      hash: 'Specified',
    },
    '1.2.840.10045.4.3.1': {
      name: 'ECDSA',
      hash: 'SHA-224',
    },
    '1.2.840.10045.4.3.2': {
      name: 'ECDSA',
      hash: 'SHA-256',
    },
    '1.2.840.10045.4.3.3': {
      name: 'ECDSA',
      hash: 'SHA-384',
    },
    '1.2.840.10045.4.3.4': {
      name: 'ECDSA',
      hash: 'SHA-512',
    },
  };

  static subjectOIDs: Record<string, { short?: string; long: string }> = {
    '2.5.4.3': {
      short: 'CN',
      long: 'Common Name',
    },
    '2.5.4.6': {
      short: 'C',
      long: 'Country',
    },
    '2.5.4.5': {
      short: 'serialNumber',
      long: 'Serial Number',
    },
    '0.9.2342.19200300.100.1.25': {
      short: 'DC',
      long: 'Domain Component',
    },
    '1.2.840.113549.1.9.1': {
      short: 'E',
      long: 'Email',
    },
    '2.5.4.42': {
      short: 'G',
      long: 'Given Name',
    },
    '2.5.4.43': {
      short: 'I',
      long: 'Initials',
    },
    '2.5.4.7': {
      short: 'L',
      long: 'Locality',
    },
    '2.5.4.10': {
      short: 'O',
      long: 'Organization',
    },
    '2.5.4.11': {
      short: 'OU',
      long: 'Organization Unit',
    },
    '2.5.4.8': {
      short: 'ST',
      long: 'State',
    },
    '2.5.4.9': {
      short: 'Street',
      long: 'Street Address',
    },
    '2.5.4.4': {
      short: 'SN',
      long: 'Surname',
    },
    '2.5.4.12': {
      short: 'T',
      long: 'Title',
    },
    '1.2.840.113549.1.9.8': {
      long: 'Unstructured Address',
    },
    '1.2.840.113549.1.9.2': {
      long: 'Unstructured Name',
    },
    '1.3.6.1.4.1.311.60.2.1.3': {
      short: 'jurisdictionCountry',
      long: 'Jurisdiction Country',
    },
    '2.5.4.15': {
      short: 'businessCategory',
      long: 'Business Category',
    },
    '1.3.6.1.2.1.1.5': {
      long: 'Host Name',
    },
  };

  static logs = {
    '9606c02c690033aa1d145f59c6e2648d0549f0df96aab8db915a70d8ecf390a5': 'Akamai CT',
    '39376f545f7b4607f59742d768cd5d2437bf3473b6534a4834bcf72e681c83c9': 'Alpha CT',
    'a577ac9ced7548dd8f025b67a241089df86e0f476ec203c2ecbedb185f282638': 'CNNIC CT',
    'cdb5179b7fc1c046feea31136a3f8f002e6182faf8896fecc8b2f5b5ab604900': 'Certly.IO',
    '1fbc36e002ede97f40199e86b3573b8a4217d80187746ad0da03a06054d20df4': 'Cloudflare “Nimbus2017”',
    'db74afeecb29ecb1feca3e716d2ce5b9aabb36f7847183c75d9d4f37b61fbf64': 'Cloudflare “Nimbus2018”',
    '747eda8331ad331091219cce254f4270c2bffd5e422008c6373579e6107bcc56': 'Cloudflare “Nimbus2019”',
    '5ea773f9df56c0e7b536487dd049e0327a919a0c84a112128418759681714558': 'Cloudflare “Nimbus2020”',
    '4494652eb0eeceafc44007d8a8fe28c0dae682bed8cb31b53fd33396b5b681a8': 'Cloudflare “Nimbus2021”',
    '41c8cab1df22464a10c6a13a0942875e4e318b1b03ebeb4bc768f090629606f6': 'Cloudflare “Nimbus2022”',
    '7a328c54d8b72db620ea38e0521ee98416703213854d3bd22bc13a57a352eb52': 'Cloudflare “Nimbus2023”',
    '6ff141b5647e4222f7ef052cefae7c21fd608e27d2af5a6e9f4b8a37d6633ee5': 'DigiCert Nessie2018',
    'fe446108b1d01ab78a62ccfeab6ab2b2babff3abdad80a4d8b30df2d0008830c': 'DigiCert Nessie2019',
    'c652a0ec48ceb3fcab170992c43a87413309e80065a26252401ba3362a17c565': 'DigiCert Nessie2020',
    'eec095ee8d72640f92e3c3b91bc712a3696a097b4b6a1a1438e647b2cbedc5f9': 'DigiCert Nessie2021',
    '51a3b0f5fd01799c566db837788f0ca47acc1b27cbf79e88429a0dfed48b05e5': 'DigiCert Nessie2022',
    'b3737707e18450f86386d605a9dc11094a792db1670c0b87dcf0030e7936a59a': 'DigiCert Nessie2023',
    '5614069a2fd7c2ecd3f5e1bd44b23ec74676b9bc99115cc0ef949855d689d0dd': 'DigiCert Server',
    '8775bfe7597cf88c43995fbdf36eff568d475636ff4ab560c1b4eaff5ea0830f': 'DigiCert Server 2',
    'c1164ae0a772d2d4392dc80ac10770d4f0c49bde991a4840c1fa075164f63360': 'DigiCert Yeti2018',
    'e2694bae26e8e94009e8861bb63b83d43ee7fe7488fba48f2893019dddf1dbfe': 'DigiCert Yeti2019',
    'f095a459f200d18240102d2f93888ead4bfe1d47e399e1d034a6b0a8aa8eb273': 'DigiCert Yeti2020',
    '5cdc4392fee6ab4544b15e9ad456e61037fbd5fa47dca17394b25ee6f6c70eca': 'DigiCert Yeti2021',
    '2245450759552456963fa12ff1f76d86e0232663adc04b7f5dc6835c6ee20f02': 'DigiCert Yeti2022',
    '35cf191bbfb16c57bf0fad4c6d42cbbbb627202651ea3fe12aefa803c33bd64c': 'DigiCert Yeti2023',
    '717ea7420975be84a2723553f1777c26dd51af4e102144094d9019b462fb6668': 'GDCA 1',
    '14308d90ccd030135005c01ca526d81e84e87624e39b6248e08f724aea3bb42a': 'GDCA 2',
    'c9cf890a21109c666cc17a3ed065c930d0e0135a9feba85af14210b8072421aa': 'GDCA CT #1',
    '924a30f909336ff435d6993a10ac75a2c641728e7fc2d659ae6188ffad40ce01': 'GDCA CT #2',
    'fad4c97cc49ee2f8ac85c5ea5cea09d0220dbbf4e49c6b50662ff868f86b8c28': 'Google “Argon2017”',
    'a4501269055a15545e6211ab37bc103f62ae5576a45e4b1714453e1b22106a25': 'Google “Argon2018”',
    '63f2dbcde83bcc2ccf0b728427576b33a48d61778fbd75a638b1c768544bd88d': 'Google “Argon2019”',
    'b21e05cc8ba2cd8a204e8766f92bb98a2520676bdafa70e7b249532def8b905e': 'Google “Argon2020”',
    'f65c942fd1773022145418083094568ee34d131933bfdf0c2f200bcc4ef164e3': 'Google “Argon2021”',
    '2979bef09e393921f056739f63a577e5be577d9c600af8f94d5d265c255dc784': 'Google “Argon2022”',
    '68f698f81f6482be3a8ceeb9281d4cfc71515d6793d444d10a67acbb4f4ffbc4': 'Google “Aviator”',
    'c3bf03a7e1ca8841c607bae3ff4270fca5ec45b186ebbe4e2cf3fc778630f5f6': 'Google “Crucible”',
    '1d024b8eb1498b344dfd87ea3efc0996f7506f235d1d497061a4773c439c25fb': 'Google “Daedalus”',
    '293c519654c83965baaa50fc5807d4b76fbf587a2972dca4c30cf4e54547f478': 'Google “Icarus”',
    'a4b90990b418581487bb13a2cc67700a3c359804f91bdfb8e377cd0ec80ddc10': 'Google “Pilot”',
    'ee4bbdb775ce60bae142691fabe19e66a30f7e5fb072d88300c47b897aa8fdcb': 'Google “Rocketeer”',
    'bbd9dfbc1f8a71b593942397aa927b473857950aab52e81a909664368e1ed185': 'Google “Skydiver”',
    '52eb4b225ec896974850675f23e43bc1d021e3214ce52ecd5fa87c203cdfca03': 'Google “Solera2018”',
    '0b760e9a8b9a682f88985b15e947501a56446bba8830785c3842994386450c00': 'Google “Solera2019”',
    '1fc72ce5a1b799f400c359bff96ca3913548e8644220610952e9ba1774f7bac7': 'Google “Solera2020”',
    'a3c99845e80ab7ce00157b3742df0207dd272b2b602ecf98ee2c12db9c5ae7e7': 'Google “Solera2021”',
    '697aafca1a6b536fae21205046debad7e0eaea13d2432e6e9d8fb379f2b9aaf3': 'Google “Solera2022”',
    'a899d8780c9290aaf462f31880ccfbd52451e970d0fbf591ef75b0d99b645681': 'Google “Submariner”',
    'b0cc83e5a5f97d6baf7c09cc284904872ac7e88b132c6350b7c6fd26e16c6c77': 'Google “Testtube”',
    'b10cd559a6d67846811f7df9a51532739ac48d703bea0323da5d38755bc0ad4e': 'Google “Xenon2018”',
    '084114980071532c16190460bcfc47fdc2653afa292c72b37ff863ae29ccc9f0': 'Google “Xenon2019”',
    '07b75c1be57d68fff1b0c61d2315c7bae6577c5794b76aeebc613a1a69d3a21c': 'Google “Xenon2020”',
    '7d3ef2f88fff88556824c2c0ca9e5289792bc50e78097f2e6a9768997e22f0d7': 'Google “Xenon2021”',
    '46a555eb75fa912030b5a28969f4f37d112c4174befd49b885abf2fc70fe6d47': 'Google “Xenon2022”',
    '7461b4a09cfb3d41d75159575b2e7649a445a8d27709b0cc564a6482b7eb41a3': 'Izenpe',
    '8941449c70742e06b9fc9ce7b116ba0024aa36d59af44f0204404f00f7ea8566': 'Izenpe “Argi”',
    '296afa2d568bca0d2ea844956ae9721fc35fa355ecda99693aafd458a71aefdd': 'Let“s Encrypt ”Clicky”',
    '537b69a3564335a9c04904e39593b2c298eb8d7a6e83023635c627248cd6b440': 'Nordu “flimsy”',
    'aae70b7f3cb8d566c86c2f16979c9f445f69ab0eb4535589b2f77a030104f3cd': 'Nordu “plausible”',
    'e0127629e90496564e3d0147984498aa48f8adb16600eb7902a1ef9909906273': 'PuChuangSiDa CT',
    'cf55e28923497c340d5206d05353aeb25834b52f1f8dc9526809f212efdd7ca6': 'SHECA CT 1',
    '32dc59c2d4c41968d56e14bc61ac8f0e45db39faf3c155aa4252f5001fa0c623': 'SHECA CT 2',
    'db76fdadac65e7d09508886e2159bd8b90352f5fead3e3dc5e22eb350acc7b98': 'Sectigo (Comodo) “Dodo” CT',
    '6f5376ac31f03119d89900a45115ff77151c11d902c10029068db2089a37d913': 'Sectigo (Comodo) “Mammoth” CT',
    '5581d4c2169036014aea0b9b573c53f0c0e43878702508172fa3aa1d0713d30c': 'Sectigo (Comodo) “Sabre” CT',
    '34bb6ad6c3df9c03eea8a499ff7891486c9d5e5cac92d01f7bfd1bce19db48ef': 'StartCom',
    'ddeb1d2b7a0d4fa6208b81ad8168707e2e8e9d01d55c888d3d11c4cdb6ecbecc': 'Symantec',
    'a7ce4a4e6207e0addee5fdaa4b1f86768767b5d002a55d47310e7e670a95eab2': 'Symantec Deneb',
    '15970488d7b997a05beb52512adee8d2e8b4a3165264121a9fabfbd5f85ad93f': 'Symantec “Sirius”',
    'bc78e1dfc5f63c684649334da10fa15f0979692009c081b4f3f6917f3ed9b8a5': 'Symantec “Vega”',
    'b0b784bc81c0ddc47544e883f05985bb9077d134d8ab88b2b2e533980b8e508b': 'Up In The Air “Behind the Sofa”',
    'ac3b9aed7fa9674757159e6d7d575672f9d98100941e9bdeffeca1313b75782d': 'Venafi',
    '03019df3fd85a69a8ebd1facc6da9ba73e469774fe77f579fc5a08b8328c1d6b': 'Venafi Gen2 CT',
    '41b2dc2e89e63ce4af1ba7bb29bf68c6dee6f9f1cc047e30dffae3b3ba259263': 'WoSign',
    '63d0006026dde10bb0601f452446965ee2b6ea2cd4fbc95ac866a550af9075b7': 'WoSign 2',
    '9e4ff73dc3ce220b69217c899e468076abf8d78636d5ccfc85a31a75628ba88b': 'WoSign CT #1',
  };

  static validation = {
    isHex: (value: string) => /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/.test(value),
    isPem: (value: string) => /-----BEGIN.+-----/.test(value),
  };

  static base64Clear(base64: string) {
    const res = atob(base64.replace(/[\s\r\n]/g, ''));

    if (Basic.validation.isPem(res)) {
      return atob(res
        .replace(/-----.+-----/g, '')
        .replace(/[\s\r\n]/g, ''));
    }

    return res;
  }

  static pemTagCertificate(base64: string) {
    return `-----BEGIN CERTIFICATE-----\n${base64}\n-----END CERTIFICATE-----`;
  }

  static pemTagCertificateRequest(base64: string) {
    return `-----BEGIN CERTIFICATE REQUEST-----\n${base64}\n-----END CERTIFICATE REQUEST-----`;
  }

  static pemTagNewCertificateRequest(base64: string) {
    return `-----BEGIN NEW CERTIFICATE REQUEST-----\n${base64}\n-----END NEW CERTIFICATE REQUEST-----`;
  }

  static formatHex(value: string) {
    return value.replace(/(.{32})/g, '$1\n').replace(/(.{4})/g, '$1 ').trim();
  }

  constructor(value: string, name?: string) {
    this.input = value;
    this.name = name;

    this.init();
  }

  private init() {
    let certificateBuffer: ArrayBuffer;

    if (Basic.validation.isHex(this.input)) {
      certificateBuffer = Convert.FromHex(this.input);
    } else {
      certificateBuffer = Convert.FromBase64(this.input);
    }

    this.schema = asn1js.fromBER(certificateBuffer).result;
    this.base64 = Convert.ToBase64(certificateBuffer);
    this.hex = Basic.formatHex(Convert.ToHex(certificateBuffer));
  }

  public async getFingerprint() {
    try {
      const response = await crypto.subtle
        .digest('SHA-1', this.schema.valueBeforeDecode);

      this.fingerprint = Convert.ToHex(response);
    } catch (error) {
      console.error(error);
    }
  }

  static prepareSubject(subjects: _AttributeTypeAndValue[]) {
    if (!subjects) {
      return undefined;
    }

    const data = {};

    subjects.forEach((subject) => {
      const type = Basic.subjectOIDs[subject.type.toString()];
      const name = type && type.short ? type.short : subject.type.toString();

      data[name] = {
        nameLong: type ? type.long : '',
        oid: subject.type.toString(),
        value: subject.value.valueBlock.value.toString(),
      };
    });

    return data;
  }

  static prepareAlgorithm(algorithm: _AlgorithmIdentifier) {
    if (!algorithm) {
      return { name: '' };
    }

    if (Basic.algorithmOIDs[algorithm.algorithmId]) {
      return Basic.algorithmOIDs[algorithm.algorithmId];
    }

    return {
      name: algorithm.algorithmId,
    };
  }
}
