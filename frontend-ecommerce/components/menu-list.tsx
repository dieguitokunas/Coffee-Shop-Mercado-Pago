"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Café en Granos",
    href: "/category/granos",
    description:
      "El café en grano es aquel que conserva su forma natural, sin haber sido molido antes de su venta. Económicamente es una opción intermedia, más barato que el café en cápsulas, pero un poco más caro que el café molido.",
  },
  {
    title: "Café Molido",
    href: "/category/molido",
    description:
      "El café molido es aquel que ya está listo para ser preparado, el que usamos para preparar nuestra bebida. Moler el café es el último paso antes de agregarle agua para preparar una taza de café."
  },
  {
    title: "Café en Cápsulas",
    href: "/category/capsula",
    description:
      "¿Qué hay dentro de las cápsulas de café? Cada cápsula de café monodosis contiene de 5 a 9 gramos de café molido, que puede ser arábica, robusta o un blend de las dos, protegido por una bolsa que hace la función de filtro, similar a las que encontramos en los tés.",
  }
]

export const MenuList =()=> {
  return (
    <NavigationMenu className="px-2 max-sm:hidden">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Sobre Nosotros</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-center gap-2 rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg text-center font-medium">
                      WKDRCK Coffe Shop
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      La tienda de café con los mejores productos al más bajo precio.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/product" title="Tienda">
              Accede a toda tu información, pedidos y mucho más.
              </ListItem>
              <ListItem href="/#featured" title="Ofertas">
                Sección dedicada a promociones y descuentos especiales.
              </ListItem>
              <ListItem href="/" title="Accesorios">
                Productos complementarios como tazas, prensas, molinillos, etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Cafés</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/accesories" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Accesorios
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
