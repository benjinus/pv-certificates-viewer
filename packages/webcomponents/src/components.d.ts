/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { AttributeCertificateProp } from "./components/attribute-certificate-viewer/attribute-certificate-viewer";
import { IAction } from "./components/button-split/button-split";
import { X509Certificate } from "./crypto";
import { CertificateProp } from "./components/certificate-viewer/certificate-viewer";
import { ICertificate } from "./components/certificates-viewer/certificates-viewer";
import { CrlProp } from "./components/crl-viewer/crl-viewer";
import { CsrProp } from "./components/csr-viewer/csr-viewer";
import { ColorType } from "./interface";
export namespace Components {
    interface PeculiarAttributeCertificateViewer {
        /**
          * Authority Key Identifier extension parent link. <br /> **NOTE**: `{{authKeyId}}` will be replaced to value from the extension.
          * @example  https://censys.io/certificates?q=parsed.extensions.subject_key_id:%20{{authKeyId}}
         */
        "authKeyIdParentLink"?: string;
        /**
          * Authority Key Identifier extension siblings link. <br /> **NOTE**: `{{authKeyId}}` will be replaced to value from the extension.
          * @example  https://censys.io/certificates?q=parsed.extensions.authority_key_id:%20{{authKeyId}}
         */
        "authKeyIdSiblingsLink"?: string;
        /**
          * The certificate value for decode and show details. Use PEM or DER.
         */
        "certificate": AttributeCertificateProp;
        /**
          * If `true` - component will show split-button to download certificate as PEM or DER.
         */
        "download"?: boolean;
        /**
          * Subject Key Identifier extension children link. <br /> **NOTE**: `{{subjectKeyId}}` will be replaced to value from the extension.
          * @example  https://censys.io/certificates?q=parsed.extensions.authority_key_id:%20{{subjectKeyId}}
         */
        "subjectKeyIdChildrenLink"?: string;
        /**
          * Subject Key Identifier extension siblings link. <br /> **NOTE**: `{{subjectKeyId}}` will be replaced to value from the extension.
          * @example  https://some.com/{{subjectKeyId}}
         */
        "subjectKeyIdSiblingsLink"?: string;
    }
    interface PeculiarButton {
        /**
          * Set to true to disable the button.
         */
        "disabled"?: boolean;
        "fill"?: 'stroke' | 'fill';
        /**
          * When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`.
         */
        "href"?: string;
        "onClick"?: (event: MouseEvent) => void;
        /**
          * Tells the browser where to open the link. Only used when `href` is set.
         */
        "target": '_blank' | '_parent' | '_self' | '_top';
    }
    interface PeculiarButtonSplit {
        "actions": IAction[];
        "fill": 'stroke' | 'fill';
        "onClick": (event: MouseEvent) => void;
    }
    interface PeculiarCertificateDecoder {
        /**
          * The example certificate value for decode and show details. Use PEM or DER.
         */
        "certificateExample"?: string;
        /**
          * The default certificate value for decode and show details. Use PEM or DER.
         */
        "defaultCertificate"?: string;
    }
    interface PeculiarCertificateSummary {
        "certificate": X509Certificate;
        "showIssuer"?: boolean;
    }
    interface PeculiarCertificateViewer {
        /**
          * Authority Key Identifier extension parent link. <br /> **NOTE**: `{{authKeyId}}` will be replaced to value from the extension.
          * @example  https://censys.io/certificates?q=parsed.extensions.subject_key_id:%20{{authKeyId}}
         */
        "authKeyIdParentLink"?: string;
        /**
          * Authority Key Identifier extension siblings link. <br /> **NOTE**: `{{authKeyId}}` will be replaced to value from the extension.
          * @example  https://censys.io/certificates?q=parsed.extensions.authority_key_id:%20{{authKeyId}}
         */
        "authKeyIdSiblingsLink"?: string;
        /**
          * The certificate value for decode and show details. Use PEM or DER.
         */
        "certificate": CertificateProp;
        /**
          * If `true` - component will show split-button to download certificate as PEM or DER.
         */
        "download"?: boolean;
        /**
          * Issuer DN link. **NOTE**: HTML component attribute must be `issuer-dn-link`.
         */
        "issuerDnLink"?: string;
        /**
          * Subject Key Identifier extension children link. <br /> **NOTE**: `{{subjectKeyId}}` will be replaced to value from the extension.
          * @example  https://censys.io/certificates?q=parsed.extensions.authority_key_id:%20{{subjectKeyId}}
         */
        "subjectKeyIdChildrenLink"?: string;
        /**
          * Subject Key Identifier extension siblings link. <br /> **NOTE**: `{{subjectKeyId}}` will be replaced to value from the extension.
          * @example  https://some.com/{{subjectKeyId}}
         */
        "subjectKeyIdSiblingsLink"?: string;
        /**
          * Choose view type instead @media.
         */
        "view"?: 'mobile';
    }
    interface PeculiarCertificatesViewer {
        /**
          * List of certificates values for decode and show in the list. <br /> **NOTE**: If you do not provide a `name` value when invocing the component it will take the first Subject CN value. <br /> **NOTE**: If you do not provide a `tests` this column will be ommited from the rendered page. <br /> **NOTE**: If the supplied certificates are self-signed the issuer column will be ommited.
         */
        "certificates": ICertificate[];
        /**
          * Use filter in the list when search is changed.
         */
        "filterWithSearch": boolean;
        /**
          * Use highlight chapters in the list when search is changed.
         */
        "highlightWithSearch": boolean;
    }
    interface PeculiarCircularProgress {
        /**
          * Width/height of progress circle.
         */
        "size": number;
        /**
          * Stroke width of progress bar circle.
         */
        "width": number;
    }
    interface PeculiarCrlViewer {
        /**
          * Authority Key Identifier extension parent link. <br /> **NOTE**: `{{authKeyId}}` will be replaced to value from the extension.
          * @example  https://censys.io/certificates?q=parsed.extensions.subject_key_id:%20{{authKeyId}}
         */
        "authKeyIdParentLink"?: string;
        /**
          * Authority Key Identifier extension siblings link. <br /> **NOTE**: `{{authKeyId}}` will be replaced to value from the extension.
          * @example  https://censys.io/certificates?q=parsed.extensions.authority_key_id:%20{{authKeyId}}
         */
        "authKeyIdSiblingsLink"?: string;
        /**
          * The certificate value for decode and show details. Use PEM or DER.
         */
        "certificate": CrlProp;
        /**
          * If `true` - component will show split-button to download certificate as PEM or DER.
         */
        "download"?: boolean;
        /**
          * Issuer DN link. **NOTE**: HTML component attribute must be `issuer-dn-link`.
         */
        "issuerDnLink"?: string;
        /**
          * Choose view type instead @media.
         */
        "view"?: 'mobile';
    }
    interface PeculiarCsrViewer {
        /**
          * The certificate value for decode and show details. Use PEM or DER.
         */
        "certificate": CsrProp;
        /**
          * If `true` - component will show split-button to download certificate as PEM or DER.
         */
        "download"?: boolean;
        /**
          * Subject Key Identifier extension children link. <br /> **NOTE**: `{{subjectKeyId}}` will be replaced to value from the extension.
          * @example  https://censys.io/certificates?q=parsed.extensions.authority_key_id:%20{{subjectKeyId}}
         */
        "subjectKeyIdChildrenLink"?: string;
        /**
          * Subject Key Identifier extension siblings link. <br /> **NOTE**: `{{subjectKeyId}}` will be replaced to value from the extension.
          * @example  https://some.com/{{subjectKeyId}}
         */
        "subjectKeyIdSiblingsLink"?: string;
        /**
          * Choose view type instead @media.
         */
        "view"?: 'mobile';
    }
    interface PeculiarHighlightWords {
        "search": string;
    }
    interface PeculiarLink {
        "href": string;
        /**
          * Typography type.
         */
        "type": 'h4' | 'h6' | 'h7' | 'b1' | 'b3';
    }
    interface PeculiarTextHider {
        "opened": boolean;
    }
    interface PeculiarTypography {
        /**
          * Text align.
         */
        "align"?: 'left' | 'center' | 'right';
        /**
          * Component color from theme.
         */
        "color": ColorType;
        /**
          * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
         */
        "ellipsis"?: boolean;
        "monospace"?: boolean;
        /**
          * Typography type.
         */
        "type": 'h4' | 'h6' | 'h7' | 'b1' | 'b3';
    }
}
export interface PeculiarCertificateDecoderCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPeculiarCertificateDecoderElement;
}
export interface PeculiarCertificatesViewerCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPeculiarCertificatesViewerElement;
}
export interface PeculiarTextHiderCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPeculiarTextHiderElement;
}
declare global {
    interface HTMLPeculiarAttributeCertificateViewerElement extends Components.PeculiarAttributeCertificateViewer, HTMLStencilElement {
    }
    var HTMLPeculiarAttributeCertificateViewerElement: {
        prototype: HTMLPeculiarAttributeCertificateViewerElement;
        new (): HTMLPeculiarAttributeCertificateViewerElement;
    };
    interface HTMLPeculiarButtonElement extends Components.PeculiarButton, HTMLStencilElement {
    }
    var HTMLPeculiarButtonElement: {
        prototype: HTMLPeculiarButtonElement;
        new (): HTMLPeculiarButtonElement;
    };
    interface HTMLPeculiarButtonSplitElement extends Components.PeculiarButtonSplit, HTMLStencilElement {
    }
    var HTMLPeculiarButtonSplitElement: {
        prototype: HTMLPeculiarButtonSplitElement;
        new (): HTMLPeculiarButtonSplitElement;
    };
    interface HTMLPeculiarCertificateDecoderElement extends Components.PeculiarCertificateDecoder, HTMLStencilElement {
    }
    var HTMLPeculiarCertificateDecoderElement: {
        prototype: HTMLPeculiarCertificateDecoderElement;
        new (): HTMLPeculiarCertificateDecoderElement;
    };
    interface HTMLPeculiarCertificateSummaryElement extends Components.PeculiarCertificateSummary, HTMLStencilElement {
    }
    var HTMLPeculiarCertificateSummaryElement: {
        prototype: HTMLPeculiarCertificateSummaryElement;
        new (): HTMLPeculiarCertificateSummaryElement;
    };
    interface HTMLPeculiarCertificateViewerElement extends Components.PeculiarCertificateViewer, HTMLStencilElement {
    }
    var HTMLPeculiarCertificateViewerElement: {
        prototype: HTMLPeculiarCertificateViewerElement;
        new (): HTMLPeculiarCertificateViewerElement;
    };
    interface HTMLPeculiarCertificatesViewerElement extends Components.PeculiarCertificatesViewer, HTMLStencilElement {
    }
    var HTMLPeculiarCertificatesViewerElement: {
        prototype: HTMLPeculiarCertificatesViewerElement;
        new (): HTMLPeculiarCertificatesViewerElement;
    };
    interface HTMLPeculiarCircularProgressElement extends Components.PeculiarCircularProgress, HTMLStencilElement {
    }
    var HTMLPeculiarCircularProgressElement: {
        prototype: HTMLPeculiarCircularProgressElement;
        new (): HTMLPeculiarCircularProgressElement;
    };
    interface HTMLPeculiarCrlViewerElement extends Components.PeculiarCrlViewer, HTMLStencilElement {
    }
    var HTMLPeculiarCrlViewerElement: {
        prototype: HTMLPeculiarCrlViewerElement;
        new (): HTMLPeculiarCrlViewerElement;
    };
    interface HTMLPeculiarCsrViewerElement extends Components.PeculiarCsrViewer, HTMLStencilElement {
    }
    var HTMLPeculiarCsrViewerElement: {
        prototype: HTMLPeculiarCsrViewerElement;
        new (): HTMLPeculiarCsrViewerElement;
    };
    interface HTMLPeculiarHighlightWordsElement extends Components.PeculiarHighlightWords, HTMLStencilElement {
    }
    var HTMLPeculiarHighlightWordsElement: {
        prototype: HTMLPeculiarHighlightWordsElement;
        new (): HTMLPeculiarHighlightWordsElement;
    };
    interface HTMLPeculiarLinkElement extends Components.PeculiarLink, HTMLStencilElement {
    }
    var HTMLPeculiarLinkElement: {
        prototype: HTMLPeculiarLinkElement;
        new (): HTMLPeculiarLinkElement;
    };
    interface HTMLPeculiarTextHiderElement extends Components.PeculiarTextHider, HTMLStencilElement {
    }
    var HTMLPeculiarTextHiderElement: {
        prototype: HTMLPeculiarTextHiderElement;
        new (): HTMLPeculiarTextHiderElement;
    };
    interface HTMLPeculiarTypographyElement extends Components.PeculiarTypography, HTMLStencilElement {
    }
    var HTMLPeculiarTypographyElement: {
        prototype: HTMLPeculiarTypographyElement;
        new (): HTMLPeculiarTypographyElement;
    };
    interface HTMLElementTagNameMap {
        "peculiar-attribute-certificate-viewer": HTMLPeculiarAttributeCertificateViewerElement;
        "peculiar-button": HTMLPeculiarButtonElement;
        "peculiar-button-split": HTMLPeculiarButtonSplitElement;
        "peculiar-certificate-decoder": HTMLPeculiarCertificateDecoderElement;
        "peculiar-certificate-summary": HTMLPeculiarCertificateSummaryElement;
        "peculiar-certificate-viewer": HTMLPeculiarCertificateViewerElement;
        "peculiar-certificates-viewer": HTMLPeculiarCertificatesViewerElement;
        "peculiar-circular-progress": HTMLPeculiarCircularProgressElement;
        "peculiar-crl-viewer": HTMLPeculiarCrlViewerElement;
        "peculiar-csr-viewer": HTMLPeculiarCsrViewerElement;
        "peculiar-highlight-words": HTMLPeculiarHighlightWordsElement;
        "peculiar-link": HTMLPeculiarLinkElement;
        "peculiar-text-hider": HTMLPeculiarTextHiderElement;
        "peculiar-typography": HTMLPeculiarTypographyElement;
    }
}
declare namespace LocalJSX {
    interface PeculiarAttributeCertificateViewer {
        /**
          * Authority Key Identifier extension parent link. <br /> **NOTE**: `{{authKeyId}}` will be replaced to value from the extension.
          * @example  https://censys.io/certificates?q=parsed.extensions.subject_key_id:%20{{authKeyId}}
         */
        "authKeyIdParentLink"?: string;
        /**
          * Authority Key Identifier extension siblings link. <br /> **NOTE**: `{{authKeyId}}` will be replaced to value from the extension.
          * @example  https://censys.io/certificates?q=parsed.extensions.authority_key_id:%20{{authKeyId}}
         */
        "authKeyIdSiblingsLink"?: string;
        /**
          * The certificate value for decode and show details. Use PEM or DER.
         */
        "certificate"?: AttributeCertificateProp;
        /**
          * If `true` - component will show split-button to download certificate as PEM or DER.
         */
        "download"?: boolean;
        /**
          * Subject Key Identifier extension children link. <br /> **NOTE**: `{{subjectKeyId}}` will be replaced to value from the extension.
          * @example  https://censys.io/certificates?q=parsed.extensions.authority_key_id:%20{{subjectKeyId}}
         */
        "subjectKeyIdChildrenLink"?: string;
        /**
          * Subject Key Identifier extension siblings link. <br /> **NOTE**: `{{subjectKeyId}}` will be replaced to value from the extension.
          * @example  https://some.com/{{subjectKeyId}}
         */
        "subjectKeyIdSiblingsLink"?: string;
    }
    interface PeculiarButton {
        /**
          * Set to true to disable the button.
         */
        "disabled"?: boolean;
        "fill"?: 'stroke' | 'fill';
        /**
          * When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`.
         */
        "href"?: string;
        "onClick"?: (event: MouseEvent) => void;
        /**
          * Tells the browser where to open the link. Only used when `href` is set.
         */
        "target"?: '_blank' | '_parent' | '_self' | '_top';
    }
    interface PeculiarButtonSplit {
        "actions"?: IAction[];
        "fill"?: 'stroke' | 'fill';
        "onClick"?: (event: MouseEvent) => void;
    }
    interface PeculiarCertificateDecoder {
        /**
          * The example certificate value for decode and show details. Use PEM or DER.
         */
        "certificateExample"?: string;
        /**
          * The default certificate value for decode and show details. Use PEM or DER.
         */
        "defaultCertificate"?: string;
        /**
          * Emitted when the certificate has been removed.
         */
        "onClearCertificate"?: (event: PeculiarCertificateDecoderCustomEvent<void>) => void;
        /**
          * Emitted when the certificate has been successfully parsed.
         */
        "onSuccessParse"?: (event: PeculiarCertificateDecoderCustomEvent<string>) => void;
    }
    interface PeculiarCertificateSummary {
        "certificate"?: X509Certificate;
        "showIssuer"?: boolean;
    }
    interface PeculiarCertificateViewer {
        /**
          * Authority Key Identifier extension parent link. <br /> **NOTE**: `{{authKeyId}}` will be replaced to value from the extension.
          * @example  https://censys.io/certificates?q=parsed.extensions.subject_key_id:%20{{authKeyId}}
         */
        "authKeyIdParentLink"?: string;
        /**
          * Authority Key Identifier extension siblings link. <br /> **NOTE**: `{{authKeyId}}` will be replaced to value from the extension.
          * @example  https://censys.io/certificates?q=parsed.extensions.authority_key_id:%20{{authKeyId}}
         */
        "authKeyIdSiblingsLink"?: string;
        /**
          * The certificate value for decode and show details. Use PEM or DER.
         */
        "certificate"?: CertificateProp;
        /**
          * If `true` - component will show split-button to download certificate as PEM or DER.
         */
        "download"?: boolean;
        /**
          * Issuer DN link. **NOTE**: HTML component attribute must be `issuer-dn-link`.
         */
        "issuerDnLink"?: string;
        /**
          * Subject Key Identifier extension children link. <br /> **NOTE**: `{{subjectKeyId}}` will be replaced to value from the extension.
          * @example  https://censys.io/certificates?q=parsed.extensions.authority_key_id:%20{{subjectKeyId}}
         */
        "subjectKeyIdChildrenLink"?: string;
        /**
          * Subject Key Identifier extension siblings link. <br /> **NOTE**: `{{subjectKeyId}}` will be replaced to value from the extension.
          * @example  https://some.com/{{subjectKeyId}}
         */
        "subjectKeyIdSiblingsLink"?: string;
        /**
          * Choose view type instead @media.
         */
        "view"?: 'mobile';
    }
    interface PeculiarCertificatesViewer {
        /**
          * List of certificates values for decode and show in the list. <br /> **NOTE**: If you do not provide a `name` value when invocing the component it will take the first Subject CN value. <br /> **NOTE**: If you do not provide a `tests` this column will be ommited from the rendered page. <br /> **NOTE**: If the supplied certificates are self-signed the issuer column will be ommited.
         */
        "certificates"?: ICertificate[];
        /**
          * Use filter in the list when search is changed.
         */
        "filterWithSearch"?: boolean;
        /**
          * Use highlight chapters in the list when search is changed.
         */
        "highlightWithSearch"?: boolean;
        /**
          * Emitted when the user close certificate details modal.
         */
        "onDetailsClose"?: (event: PeculiarCertificatesViewerCustomEvent<void>) => void;
        /**
          * Emitted when the user open certificate details modal.
         */
        "onDetailsOpen"?: (event: PeculiarCertificatesViewerCustomEvent<X509Certificate>) => void;
    }
    interface PeculiarCircularProgress {
        /**
          * Width/height of progress circle.
         */
        "size"?: number;
        /**
          * Stroke width of progress bar circle.
         */
        "width"?: number;
    }
    interface PeculiarCrlViewer {
        /**
          * Authority Key Identifier extension parent link. <br /> **NOTE**: `{{authKeyId}}` will be replaced to value from the extension.
          * @example  https://censys.io/certificates?q=parsed.extensions.subject_key_id:%20{{authKeyId}}
         */
        "authKeyIdParentLink"?: string;
        /**
          * Authority Key Identifier extension siblings link. <br /> **NOTE**: `{{authKeyId}}` will be replaced to value from the extension.
          * @example  https://censys.io/certificates?q=parsed.extensions.authority_key_id:%20{{authKeyId}}
         */
        "authKeyIdSiblingsLink"?: string;
        /**
          * The certificate value for decode and show details. Use PEM or DER.
         */
        "certificate"?: CrlProp;
        /**
          * If `true` - component will show split-button to download certificate as PEM or DER.
         */
        "download"?: boolean;
        /**
          * Issuer DN link. **NOTE**: HTML component attribute must be `issuer-dn-link`.
         */
        "issuerDnLink"?: string;
        /**
          * Choose view type instead @media.
         */
        "view"?: 'mobile';
    }
    interface PeculiarCsrViewer {
        /**
          * The certificate value for decode and show details. Use PEM or DER.
         */
        "certificate"?: CsrProp;
        /**
          * If `true` - component will show split-button to download certificate as PEM or DER.
         */
        "download"?: boolean;
        /**
          * Subject Key Identifier extension children link. <br /> **NOTE**: `{{subjectKeyId}}` will be replaced to value from the extension.
          * @example  https://censys.io/certificates?q=parsed.extensions.authority_key_id:%20{{subjectKeyId}}
         */
        "subjectKeyIdChildrenLink"?: string;
        /**
          * Subject Key Identifier extension siblings link. <br /> **NOTE**: `{{subjectKeyId}}` will be replaced to value from the extension.
          * @example  https://some.com/{{subjectKeyId}}
         */
        "subjectKeyIdSiblingsLink"?: string;
        /**
          * Choose view type instead @media.
         */
        "view"?: 'mobile';
    }
    interface PeculiarHighlightWords {
        "search"?: string;
    }
    interface PeculiarLink {
        "href"?: string;
        /**
          * Typography type.
         */
        "type"?: 'h4' | 'h6' | 'h7' | 'b1' | 'b3';
    }
    interface PeculiarTextHider {
        "onTextExpand"?: (event: PeculiarTextHiderCustomEvent<any>) => void;
        "opened"?: boolean;
    }
    interface PeculiarTypography {
        /**
          * Text align.
         */
        "align"?: 'left' | 'center' | 'right';
        /**
          * Component color from theme.
         */
        "color"?: ColorType;
        /**
          * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
         */
        "ellipsis"?: boolean;
        "monospace"?: boolean;
        /**
          * Typography type.
         */
        "type"?: 'h4' | 'h6' | 'h7' | 'b1' | 'b3';
    }
    interface IntrinsicElements {
        "peculiar-attribute-certificate-viewer": PeculiarAttributeCertificateViewer;
        "peculiar-button": PeculiarButton;
        "peculiar-button-split": PeculiarButtonSplit;
        "peculiar-certificate-decoder": PeculiarCertificateDecoder;
        "peculiar-certificate-summary": PeculiarCertificateSummary;
        "peculiar-certificate-viewer": PeculiarCertificateViewer;
        "peculiar-certificates-viewer": PeculiarCertificatesViewer;
        "peculiar-circular-progress": PeculiarCircularProgress;
        "peculiar-crl-viewer": PeculiarCrlViewer;
        "peculiar-csr-viewer": PeculiarCsrViewer;
        "peculiar-highlight-words": PeculiarHighlightWords;
        "peculiar-link": PeculiarLink;
        "peculiar-text-hider": PeculiarTextHider;
        "peculiar-typography": PeculiarTypography;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "peculiar-attribute-certificate-viewer": LocalJSX.PeculiarAttributeCertificateViewer & JSXBase.HTMLAttributes<HTMLPeculiarAttributeCertificateViewerElement>;
            "peculiar-button": LocalJSX.PeculiarButton & JSXBase.HTMLAttributes<HTMLPeculiarButtonElement>;
            "peculiar-button-split": LocalJSX.PeculiarButtonSplit & JSXBase.HTMLAttributes<HTMLPeculiarButtonSplitElement>;
            "peculiar-certificate-decoder": LocalJSX.PeculiarCertificateDecoder & JSXBase.HTMLAttributes<HTMLPeculiarCertificateDecoderElement>;
            "peculiar-certificate-summary": LocalJSX.PeculiarCertificateSummary & JSXBase.HTMLAttributes<HTMLPeculiarCertificateSummaryElement>;
            "peculiar-certificate-viewer": LocalJSX.PeculiarCertificateViewer & JSXBase.HTMLAttributes<HTMLPeculiarCertificateViewerElement>;
            "peculiar-certificates-viewer": LocalJSX.PeculiarCertificatesViewer & JSXBase.HTMLAttributes<HTMLPeculiarCertificatesViewerElement>;
            "peculiar-circular-progress": LocalJSX.PeculiarCircularProgress & JSXBase.HTMLAttributes<HTMLPeculiarCircularProgressElement>;
            "peculiar-crl-viewer": LocalJSX.PeculiarCrlViewer & JSXBase.HTMLAttributes<HTMLPeculiarCrlViewerElement>;
            "peculiar-csr-viewer": LocalJSX.PeculiarCsrViewer & JSXBase.HTMLAttributes<HTMLPeculiarCsrViewerElement>;
            "peculiar-highlight-words": LocalJSX.PeculiarHighlightWords & JSXBase.HTMLAttributes<HTMLPeculiarHighlightWordsElement>;
            "peculiar-link": LocalJSX.PeculiarLink & JSXBase.HTMLAttributes<HTMLPeculiarLinkElement>;
            "peculiar-text-hider": LocalJSX.PeculiarTextHider & JSXBase.HTMLAttributes<HTMLPeculiarTextHiderElement>;
            "peculiar-typography": LocalJSX.PeculiarTypography & JSXBase.HTMLAttributes<HTMLPeculiarTypographyElement>;
        }
    }
}
