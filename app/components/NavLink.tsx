import Link from 'next/link'
import { Link as RadixLink } from '@radix-ui/themes'
import { ReactElement } from 'react'

interface Props {
  href: string,
  children: string
}

const NavLink = ({ href, children }: Props) => {
  return (
    <Link href={href} passHref legacyBehavior>
      <RadixLink>{children}</RadixLink>
    </Link>
  )
}

export default NavLink
