import { useEffect } from 'react';

const ptKeywords = [
  'product designer',
  'product design',
  'ux designer',
  'ui designer',
  'ux/ui designer',
  'digital product designer',
  'design de produto',
  'design de produto digital',
  'ux design',
  'ui design',
  'user experience',
  'user interface',
  'design de interface',
  'experiência do usuário',
  'interface do usuário',
  'ux research',
  'user research',
  'design system',
  'prototipagem',
  'prototyping',
  'jornada do usuário',
  'user journey',
  'design estratégico',
  'strategic design',
  'data driven design',
  'data-informed design',
  'usabilidade',
  'usability',
  'experiência mobile',
  'mobile ux',
  'figma',
  'figma designer',
  'ux case study',
  'product design case study',
  'portfólio de design',
  'design portfolio',
  'ux portfolio',
  'ux/ui portfolio',
  'user-centered design',
  'human centered design',
  'designer de produto',
  'ux especialista',
  'ux/ui especialista',
  'ux researcher',
  'experiência digital',
  'digital experience',
  'experiência intuitiva',
  'intuitive design',
].join(', ');

const enKeywords = [
  'product designer',
  'product design',
  'ux designer',
  'ui designer',
  'ux/ui designer',
  'digital product designer',
  'product design specialist',
  'ux design',
  'ui design',
  'user experience',
  'user interface',
  'interface design',
  'user experience research',
  'user interface design',
  'ux research',
  'user research',
  'design system',
  'prototyping',
  'user journey',
  'strategic design',
  'data driven design',
  'data informed design',
  'usability',
  'mobile experience',
  'mobile ux',
  'figma expert',
  'figma designer',
  'ux case study',
  'product design case study',
  'design portfolio',
  'ux portfolio',
  'ux/ui portfolio',
  'user centered design',
  'human centered design',
  'product designer',
  'ux specialist',
  'ux/ui specialist',
  'ux researcher',
  'digital experience',
  'intuitive experience',
  'intuitive design',
].join(', ');

const ptDescription =
  'Portfólio de Verônica Silva, Product Designer especializada em criar experiências digitais estratégicas e centradas nas pessoas.';

const enDescription =
  'Portfolio of Verônica Silva, Product Designer focused on creating strategic, human-centered digital experiences.';

type MetaTagOptions = {
  name?: string;
  property?: string;
  content: string;
  lang?: string;
};

function upsertMetaTag({ name, property, content, lang }: MetaTagOptions) {
  const selectorAttributes = [
    name ? `[name="${name}"]` : null,
    property ? `[property="${property}"]` : null,
    lang ? `[lang="${lang}"]` : null,
  ].filter(Boolean);

  const selector = `meta${selectorAttributes.join('')}`;
  const existing = selector ? document.querySelector(selector) : null;
  const meta = existing || document.createElement('meta');

  if (name) meta.setAttribute('name', name);
  if (property) meta.setAttribute('property', property);
  if (lang) meta.setAttribute('lang', lang);
  meta.setAttribute('content', content);

  if (!existing) {
    meta.setAttribute('data-managed-by', 'HomeSEO');
    document.head.appendChild(meta);
  }
}

function HomeSEO() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Verônica Silva | Product Designer';

    const createdMetaSelector = 'meta[data-managed-by="HomeSEO"]';

    upsertMetaTag({ name: 'description', content: ptDescription, lang: 'pt-BR' });
    upsertMetaTag({ name: 'description', content: enDescription, lang: 'en' });
    upsertMetaTag({ name: 'keywords', content: ptKeywords, lang: 'pt-BR' });
    upsertMetaTag({ name: 'keywords', content: enKeywords, lang: 'en' });
    upsertMetaTag({
      property: 'og:title',
      content: 'Verônica Silva | Product Designer',
    });
    upsertMetaTag({
      property: 'og:description',
      content:
        'Cases de UX, UI e Product Design por Verônica Silva, com foco em experiências digitais estratégicas e centradas no usuário.',
    });
    upsertMetaTag({ property: 'og:type', content: 'website' });
    upsertMetaTag({ property: 'og:locale', content: 'pt_BR' });
    upsertMetaTag({ property: 'og:locale:alternate', content: 'en_US' });

    return () => {
      document.title = previousTitle;
      document.querySelectorAll(createdMetaSelector).forEach((meta) => {
        meta.remove();
      });
    };
  }, []);

  return null;
}

export default HomeSEO;
