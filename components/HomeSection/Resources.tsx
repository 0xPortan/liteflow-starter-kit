import useTranslation from 'next-translate/useTranslation'
import { FC } from 'react'
import HomeGridSection from './Grid'
import HomeSectionCard, { Props as ItemProps } from './SectionCard'

type Props = {}

const items: ItemProps[] = []

/* Example usage below
const items: ItemProps[] = [
  {
    href: '/explore',
    isExternal: false,
    image: 'https://picsum.photos/id/237/200/300',
    title: 'Card title',
    description: 'Card subtext - Lorem ipsum dolor es',
  },
  {
    href: 'https://liteflow.com/',
    isExternal: true,
    image: '',
    title: 'Card title',
    description: '',
  },
]
 */

const ResourcesHomeSection: FC<Props> = () => {
  const { t } = useTranslation('templates')

  return (
    <HomeGridSection
      isLoading={false}
      items={items}
      itemRender={(item: ItemProps) => (
        <HomeSectionCard
          href={item.href}
          isExternal={item.isExternal}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      )}
      title={t('home.resources')}
    />
  )
}

export default ResourcesHomeSection
