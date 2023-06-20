declare global {
    interface cardItem {
        id: string;
        object: string;
        active: boolean;
        attributes?: (null)[] | null;
        created: number;
        default_price: string;
        description: string;
        images: (string)[] | string;
        livemode: boolean;
        metadata: Metadata;
        name: string;
        package_dimensions?: null;
        shippable?: null;
        statement_descriptor?: null;
        tax_code?: null;
        type: string;
        unit_label?: null;
        updated: number;
        url?: null;
        price_euro: number;
        quantity: number;
    }
}

export { };