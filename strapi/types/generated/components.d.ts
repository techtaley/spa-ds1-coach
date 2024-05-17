import type { Schema, Attribute } from '@strapi/strapi';

export interface AboutAbout extends Schema.Component {
  collectionName: 'components_about_abouts';
  info: {
    displayName: 'about';
  };
  attributes: {
    title: Attribute.Component<'title.title'>;
    card: Attribute.Component<'imagecard.image-card', true>;
  };
}

export interface BannerBanner extends Schema.Component {
  collectionName: 'components_banner_banners';
  info: {
    displayName: 'banner';
    description: '';
  };
  attributes: {
    url: Attribute.String;
    alt: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 20;
        maxLength: 50;
      }>;
    desc: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 20;
        maxLength: 51;
      }>;
    btn: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 10;
        maxLength: 15;
      }>;
    link: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 5;
        maxLength: 200;
      }>;
  };
}

export interface ImagecardImageCard extends Schema.Component {
  collectionName: 'components_imagecard_image_cards';
  info: {
    displayName: 'ImageCard';
    description: '';
  };
  attributes: {
    url: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 5;
        maxLength: 200;
      }>;
    alt: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
        maxLength: 200;
      }>;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
        maxLength: 50;
      }>;
    desc: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 10;
        maxLength: 300;
      }>;
    btn: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 3;
        maxLength: 15;
      }>;
  };
}

export interface LinkLink extends Schema.Component {
  collectionName: 'components_link_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
  };
}

export interface MetaMeta extends Schema.Component {
  collectionName: 'components_meta_metas';
  info: {
    displayName: 'meta';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    desc: Attribute.Text;
    keywords: Attribute.String;
  };
}

export interface NavNav extends Schema.Component {
  collectionName: 'components_nav_navs';
  info: {
    displayName: 'Nav';
    description: '';
  };
  attributes: {
    navlink: Attribute.Component<'link.link', true>;
  };
}

export interface QuoteQuoteData extends Schema.Component {
  collectionName: 'components_quotedata_quote_data';
  info: {
    displayName: 'quote';
    description: '';
  };
  attributes: {
    quote: Attribute.Text;
    author: Attribute.String;
  };
}

export interface ServicesServices extends Schema.Component {
  collectionName: 'components_services_services';
  info: {
    displayName: 'services';
    description: '';
  };
  attributes: {
    title: Attribute.Component<'title.title'>;
    card: Attribute.Component<'imagecard.image-card', true>;
    quote: Attribute.Component<'quote.quote-data', true>;
  };
}

export interface TextcardCard extends Schema.Component {
  collectionName: 'components_card_cards';
  info: {
    displayName: 'TextCard';
    icon: 'grid';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
        maxLength: 17;
      }>;
    desc: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 80;
        maxLength: 155;
      }>;
    btn: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
        maxLength: 40;
      }> &
      Attribute.DefaultTo<'link'>;
    link: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
        maxLength: 40;
      }>;
  };
}

export interface TitleTitle extends Schema.Component {
  collectionName: 'components_title_titles';
  info: {
    displayName: 'title';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 5;
        maxLength: 20;
      }>;
    desc: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 20;
        maxLength: 133;
      }>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'about.about': AboutAbout;
      'banner.banner': BannerBanner;
      'imagecard.image-card': ImagecardImageCard;
      'link.link': LinkLink;
      'meta.meta': MetaMeta;
      'nav.nav': NavNav;
      'quote.quote-data': QuoteQuoteData;
      'services.services': ServicesServices;
      'textcard.card': TextcardCard;
      'title.title': TitleTitle;
    }
  }
}
