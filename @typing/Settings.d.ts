declare module "HostedApp" {
  export type Settings = {
    /**
     * Access Token for a sales channel API client to be used to authenticate all Commerce Layer API requests.
     * Read more at {@link https://docs.commercelayer.io/developers/authentication/client-credentials#sales-channel}
     */
    accessToken: string
    /**
     * Base endpoint URL to be used for API requests by `@commercelayer/react-components` library.
     * Example: `https://yourdomain.commercelayer.io`
     * Read more at {@link https://docs.commercelayer.io/developers/api-specification#base-endpoint}.
     */
    endpoint: string
    /**
     * Order Id used to show cart info and items.
     * Read more at {@link https://docs.commercelayer.io/developers/v/how-tos/shopping-cart/create-a-shopping-cart}.
     */
    orderId: string
    /**
     * Logo URL found in current organization (if set).
     * Read more at {@link https://docs.commercelayer.io/developers/v/api-reference/organization/object}.
     */
    logoUrl?: string
    /**
     * Organization name.
     * Read more at {@link https://docs.commercelayer.io/developers/v/api-reference/organization/object}.
     */
    companyName: string
    /**
     * Language code (ISO 639-1) found in the order object.
     * Used to handle cart localization (i18n).
     * Read more at {@link https://docs.commercelayer.io/developers/v/api-reference/orders/object}.
     */
    language: string
    /**
     * Primary color HEX code found, if set, in current organization.
     * It will be used to generate custom CSS (example: primary button style).
     */
    primaryColor: string
    /**
     * Favicon URL found, if set, in current organization
     * Read more at {@link https://docs.commercelayer.io/developers/v/api-reference/organization/object}.
     */
    favicon: string
    /**
     * The organization's Google Tag Manager ID.
     * Read more at {@link https://docs.commercelayer.io/developers/v/api-reference/organization/object}.
     */
    gtmId?: string
    /**
     * URL found in order, to be used as go-back link (Example: "Continue shopping").
     */
    returnUrl?: string
    /**
     * Current cart URL found in the order object.
     */
    cartUrl?: string
    /**
     * This flag allows TypeScript to discriminate between `Settings` and `InvalidSettings` union type.
     */
    isValid: true
    /**
     * Total items found in current order.
     */
    itemsCount: number
  }

  export type InvalidSettings = Pick<
    Settings,
    "primaryColor" | "language" | "favicon" | "companyName" | "logoUrl"
  > & {
    /**
     * This flag allows TypeScript to discriminate between `Settings` and `InvalidSettings` union type.
     */
    isValid: false
    /**
     * When this is returned as `true` it means there was a connectivity error and user can manually refresh
     * the browser tab to retry.
     */
    retryable: boolean
  }
}
