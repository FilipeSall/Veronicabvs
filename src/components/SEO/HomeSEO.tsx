import { Helmet } from 'react-helmet';

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

function HomeSEO() {
  return (
    <Helmet>
      <title>Verônica Silva | Product Designer</title>
      <meta name="description" content={ptDescription} lang="pt-BR" />
      <meta name="description" content={enDescription} lang="en" />
      <meta name="keywords" content={ptKeywords} lang="pt-BR" />
      <meta name="keywords" content={enKeywords} lang="en" />
      <meta property="og:title" content="Verônica Silva | Product Designer" />
      <meta
        property="og:description"
        content="Cases de UX, UI e Product Design por Verônica Silva, com foco em experiências digitais estratégicas e centradas no usuário."
      />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:locale:alternate" content="en_US" />
    </Helmet>
  );
}

export default HomeSEO;
