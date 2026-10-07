import { Helmet } from '@dr.pogodin/react-helmet';
import { PRODUCT_BRANDING } from 'twenty-shared/constants';

import { useWorkspaceSurface } from '@/ui/layout/hooks/useWorkspaceSurface';

type PageTitleProps = {
  title: string;
};

export const PageTitle = (props: PageTitleProps) => {
  const workspaceSurface = useWorkspaceSurface();

  if (workspaceSurface.type === 'side-panel') {
    return null;
  }

  const title =
    props.title === PRODUCT_BRANDING.name
      ? props.title
      : `${props.title} | ${PRODUCT_BRANDING.name}`;

  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};
