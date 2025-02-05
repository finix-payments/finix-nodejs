export class SplitTransferDetails {
  "merchant": string;
  "amount": number;
  "fee"?: number;
  "tags"?: { [key: string]: string } | null;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "merchant",
      baseName: "merchant",
      type: "string",
    },
    {
      name: "amount",
      baseName: "amount",
      type: "number",
    },
    {
      name: "fee",
      baseName: "fee",
      type: "number",
    },
    {
      name: "tags",
      baseName: "tags",
      type: "{ [key: string]: string; }",
    },
  ];

  static getAttributeTypeMap() {
    return SplitTransferDetails.attributeTypeMap;
  }
}
