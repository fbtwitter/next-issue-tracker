'use client'

import { AiFillBug } from 'react-icons/ai'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { useSession } from 'next-auth/react'
import { Avatar, Box, Container, DropdownMenu, Flex, Text } from '@radix-ui/themes'
import Link from 'next/link'
import { Skeleton } from '@/app/components/index'

const Navbar = () => {

  return (
    <nav className={'border-b mb-5 px-5 py-3'}>
      <Container>
        <Flex justify="between">
          <Flex align="center" gap="3">
            <Link href="/"><AiFillBug/></Link>
            <NavLinks/>
          </Flex>
          <AuthStatus/>
        </Flex>
      </Container>
    </nav>
  )
}

const NavLinks = () => {
  const currentPath = usePathname()
  const links = [
    {
      label: 'Dashboard',
      href: '/'
    },
    {
      label: 'Issues',
      href: '/issues/list'
    }
  ]

  return <ul className={'flex space-x-6'}>
    {links.map(link => (
      <li key={link.href}>
        <Link href={link.href}
              className={clsx({
                'nav-link': true,
                '!text-zinc-900': link.href === currentPath,
              })}>{link.label}</Link>
      </li>
    ))}
  </ul>
}

const AuthStatus = () => {
  const { status, data: session } = useSession()

  if (status === 'loading') return <Skeleton width="3rem"/>

  if (status === 'unauthenticated') return <Link className="nav-link" href="/api/auth/signin">Login</Link>

  return <Box>
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Avatar src={session!.user!.image!} fallback="?" className="cursor-pointer" size="2" radius="full"
                referrerPolicy="no-referrer"/>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Label>
          <Text>
            {session!.user!.email}
          </Text>
        </DropdownMenu.Label>
        <DropdownMenu.Item>
          <Link href="/api/auth/signout">Log out</Link>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  </Box>
}

export default Navbar
