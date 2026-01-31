# Integración Shopify Storefront API - Matching Matcha

## Índice

1. [Resumen del Proyecto](#resumen-del-proyecto)
2. [Configuración de Shopify](#configuración-de-shopify)
3. [Estructura de Archivos](#estructura-de-archivos)
4. [Fases de Implementación](#fases-de-implementación)
5. [Arquitectura Técnica](#arquitectura-técnica)
6. [Queries GraphQL](#queries-graphql)
7. [Interfaces TypeScript](#interfaces-typescript)
8. [Componentes](#componentes)
9. [Verificación y Testing](#verificación-y-testing)

---

## Resumen del Proyecto

Implementar funcionalidad e-commerce completa usando **Shopify Storefront A

| Funcionalidad          | Descripción                                                                 |
| ---------------------- | ------------------------------------------------------------------------    |
| **Vista de productos** | Grid de ProductCards en home page con imagen, nombre, precio y botón añadir |
| **Página de producto** | Detalle con galería de imágenes, descripción, precio, selector cantidad     |
| **Carrito (SideCart)** | Mostrar productos añadidos, actualizar cantidad, eliminar, totales          |
| **Checkout**           | Redirección a checkout de Shopify para completar compra                     |
| **Persistencia**       | Cart ID guardado en localStorage para mantener carrito entre sesiones       |

---

## Configuración de Shopify

### Variables de Entorno

Crear archivo `.env.local` en la raíz del proyecto:

```env
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=tu-tienda.myshopify.com
NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=tu_token_aqui
```

Crear archivo `.env.example` para documentación:

```env
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=example.myshopify.com
NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=your_storefront_access_token
```

### Cómo Obtener las Credenciales

1. **Acceder a Shopify Admin** → Settings → Apps and sales channels
2. **Click en "Develop apps"** (esquina superior derecha)
3. **Crear nueva app:**
   - Nombre: "Matching Matcha Storefront"
   - Click en "Create app"
4. **Configurar Storefront API scopes:**
   - Click en "Configure Storefront API scopes"
   - Activar:
     - `unauthenticated_read_product_listings` - Leer productos
     - `unauthenticated_read_checkouts` - Leer checkouts
     - `unauthenticated_write_checkouts` - Crear carritos/checkouts
   - Save
5. **Instalar la app** (botón "Install app")
6. **Copiar credenciales:**
   - Storefront API access token (en la pestaña "API credentials")
   - El domain es: `tu-tienda.myshopify.com` (sin https://)

### Configurar Next.js para Imágenes de Shopify

Actualizar `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  output: "standalone",
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        pathname: '/s/files/**',
      },
    ],
  },
};
```

---

## Estructura de Archivos

### Archivos a Crear

```bash
src/
├── lib/
│   └── shopify/
│       ├── client.ts              # Cliente GraphQL + funciones de API
│       ├── queries/
│       │   ├── products.ts        # Queries de productos
│       │   └── cart.ts            # Queries/Mutations del carrito
│       └── types.ts               # Interfaces TypeScript
│
├── context/
│   └── CartContext.tsx            # Estado global del carrito
│
├── components/
│   ├── providers/
│   │   └── CartProviderWrapper.tsx  # Wrapper client para el provider
│   └── ui/
│       └── products/
│           ├── product-card.tsx     # Card de producto para grid
│           ├── quantity-selector.tsx # Selector de cantidad (+/-)
│           └── add-to-cart-button.tsx # Botón añadir al carrito
│
└── app/
    └── products/
        └── [handle]/
            └── page.tsx           # Página de producto individual

(raíz del proyecto)
├── .env.local                     # Variables de entorno (NO commitear)
├── .env.example                   # Ejemplo de variables (SÍ commitear)
└── docs/
    └── shopify-planning.md        # Este archivo
```

### Archivos a Modificar

| Archivo                                                                  | Cambios                                         |
| ------------------------------------------------------------------------ | ----------------------------------------------- |
| `src/app/page.tsx`                                                       | Fetch de productos, pasar a ProductsSection     |
| `src/app/layout.tsx`                                                     | Envolver con CartProviderWrapper                |
| `src/components/layout/HomePage/products-section/products-section.tsx`   | Implementar grid de ProductCards                |
| `src/components/cart/side-cart.tsx`                                      | Integrar con CartContext, mostrar items reales  |
| `src/components/ui/sidecart/cart-item-card.tsx`                          | Implementar card de item del carrito            |
| `src/components/layout/Header/header.tsx`                                | Badge de cantidad, integrar isOpen del contexto |
| `next.config.ts`                                                         | Agregar dominio de imágenes de Shopify          |

---

## Fases de Implementación

### FASE 1: Infraestructura Base

**Objetivo:** Establecer la comunicación con Shopify Storefront API.

**Tareas:**

- [ ] Crear `.env.local` con credenciales de Shopify
- [ ] Crear `.env.example` para documentación
- [ ] Crear `src/lib/shopify/types.ts` - Interfaces TypeScript
- [ ] Crear `src/lib/shopify/queries/products.ts` - Queries de productos
- [ ] Crear `src/lib/shopify/queries/cart.ts` - Queries/Mutations del carrito
- [ ] Crear `src/lib/shopify/client.ts` - Cliente y funciones de API
- [ ] Actualizar `next.config.ts` con dominio de imágenes

**Verificación:** Ejecutar `getAllProducts()` y ver datos en consola.

---

### FASE 2: Vista de Productos en Home

**Objetivo:** Mostrar productos de Shopify en la página principal.

**Tareas:**

- [ ] Crear `src/components/ui/products/product-card.tsx`
  - Imagen con next/image y sizes responsivos
  - Nombre del producto
  - Precio formateado (€)
  - Botón "Añadir al carrito"
- [ ] Implementar `products-section.tsx` con grid responsivo
- [ ] Modificar `app/page.tsx` para fetch de productos
- [ ] Agregar estilos a `globals.css`

**Verificación:** Productos visibles en home con datos reales de Shopify.

---

### FASE 3: Estado Global del Carrito

**Objetivo:** Implementar CartContext funcional con persistencia.

**Tareas:**

- [ ] Crear `src/context/CartContext.tsx`
  - Estado: cart, isLoading, isOpen
  - Acciones: addToCart, updateQuantity, removeItem, clearCart
  - Persistencia en localStorage
- [ ] Crear `src/components/providers/CartProviderWrapper.tsx`
- [ ] Modificar `app/layout.tsx` para envolver con CartProvider

**Verificación:** `useCart()` disponible en toda la app, cart ID persiste en localStorage.

---

### FASE 4: Integración SideCart

**Objetivo:** Conectar el SideCart existente con el carrito real.

**Tareas:**

- [ ] Implementar `cart-item-card.tsx`
  - Imagen del producto
  - Nombre y variante
  - Precio
  - Selector de cantidad (+/-)
  - Botón eliminar
- [ ] Modificar `side-cart.tsx`
  - Usar useCart() para obtener estado
  - Mostrar lista de CartItemCard
  - Mostrar subtotal y total
  - Botón "Comprar" → redirect a checkoutUrl
  - Botón "Vaciar" → clearCart()
- [ ] Modificar `header.tsx`
  - Usar isOpen/closeCart del contexto
  - Mostrar badge con totalQuantity
- [ ] Conectar ProductCard con addToCart()

**Verificación:** Flujo completo: añadir producto → ver en sidecart → checkout funciona.

---

### FASE 5: Página de Producto Individual

**Objetivo:** Crear página de detalle de producto.

**Tareas:**

- [ ] Crear `src/app/products/[handle]/page.tsx`
  - Server Component con generateStaticParams
  - generateMetadata para SEO dinámico
  - Fetch de producto por handle
- [ ] Implementar layout de página:
  - Galería de imágenes (imagen principal + thumbnails)
  - Título del producto
  - Descripción (HTML)
  - Precio
  - Selector de cantidad
  - Botón añadir al carrito
- [ ] Crear componentes auxiliares si necesario

**Verificación:** Navegar desde ProductCard → página detalle → añadir al carrito funciona.

---

### FASE 6: Refinamientos

**Objetivo:** Pulir UX y manejar casos especiales.

**Tareas:**

- [ ] Loading states (skeleton loaders, spinners en botones)
- [ ] Error handling (producto no encontrado, errores de API)
- [ ] Estados vacíos (carrito vacío, sin productos)
- [ ] Testing completo del flujo de compra
- [ ] Verificar responsive en mobile/tablet/desktop

---

## Arquitectura Técnica

### Flujo de Datos

```bash
SERVIDOR (SSR/SSG)                    CLIENTE (Browser)
────────────────────────────────────────────────────────────────

app/page.tsx                          CartContext (Provider)
  │                                     ├── cart: ShopifyCart
  ├── getAllProducts()                  ├── isLoading: boolean
  │   └── fetch → Shopify API           ├── isOpen: boolean
  │                                     │
  ↓                                     │
ProductsSection                         │
  │ (Server Component)                  │
  │ recibe products[]                   │
  │                                     │
  ↓                                     │
ProductCard ─────────────────────────→ useCart()
  │ (Client Component)                  │ .addToCart(variantId)
  │ 'use client'                        │
  │                                     │
                                        ↓
app/products/[handle]/page.tsx       SideCart
  │                                     │ (Client Component)
  ├── getProductByHandle()              │ useCart()
  │                                     │ ├── cart.lines → CartItemCard
  ↓                                     │ ├── cart.checkoutUrl → Comprar
AddToCartButton ─────────────────────→ │ └── clearCart() → Vaciar
  (Client Component)                    │
                                        │
Header ◄────────────────────────────────┘
  │ (Client Component)
  │ useCart()
  │ ├── cart.totalQuantity → Badge
  │ └── isOpen/closeCart → SideCart
```

### Server vs Client Components

| Componente              | Tipo       | Razón                                   |
| ----------------------- | ---------- | --------------------------------------- |
| `app/page.tsx`          | **Server** | Fetch inicial de productos, SEO         |
| `app/layout.tsx`        | **Server** | Metadata, estructura base               |
| `ProductsSection`       | **Server** | Solo recibe props y renderiza           |
| `ProductCard`           | **Client** | Necesita useCart() para añadir          |
| `app/products/[handle]` | **Server** | Fetch de producto, generateStaticParams |
| `AddToCartButton`       | **Client** | Interacción con CartContext             |
| `QuantitySelector`      | **Client** | Estado local de cantidad                |
| `Header`                | **Client** | Ya es client, usa estado para menús     |
| `SideCart`              | **Client** | Ya es client, necesita CartContext      |
| `CartItemCard`          | **Client** | Botones de cantidad/eliminar            |
| `CartProviderWrapper`   | **Client** | Provider requiere 'use client'          |

### Estrategia de Composición en Layout

```tsx
// app/layout.tsx (Server Component)
import CartProviderWrapper from '@/components/providers/CartProviderWrapper';

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <CartProviderWrapper>
          <Header />
          <div className="h-22 md:h-27 bg-main-banner"></div>
          <main>{children}</main>
          <Footer />
        </CartProviderWrapper>
      </body>
    </html>
  );
}
```

---

## Queries GraphQL

### Fragmentos Reutilizables

```graphql
fragment ProductFields on Product {
  id
  handle
  title
  description
  descriptionHtml
  availableForSale
  featuredImage {
    url
    altText
    width
    height
  }
  images(first: 10) {
    edges {
      node {
        url
        altText
        width
        height
      }
    }
  }
  variants(first: 10) {
    edges {
      node {
        id
        title
        availableForSale
        quantityAvailable
        price {
          amount
          currencyCode
        }
        compareAtPrice {
          amount
          currencyCode
        }
        image {
          url
          altText
          width
          height
        }
        selectedOptions {
          name
          value
        }
      }
    }
  }
  priceRange {
    minVariantPrice {
      amount
      currencyCode
    }
    maxVariantPrice {
      amount
      currencyCode
    }
  }
}

fragment CartFields on Cart {
  id
  checkoutUrl
  totalQuantity
  cost {
    subtotalAmount {
      amount
      currencyCode
    }
    totalAmount {
      amount
      currencyCode
    }
    totalTaxAmount {
      amount
      currencyCode
    }
  }
  lines(first: 100) {
    edges {
      node {
        id
        quantity
        merchandise {
          ... on ProductVariant {
            id
            title
            product {
              id
              handle
              title
              featuredImage {
                url
                altText
                width
                height
              }
            }
            price {
              amount
              currencyCode
            }
            image {
              url
              altText
              width
              height
            }
          }
        }
        cost {
          totalAmount {
            amount
            currencyCode
          }
        }
      }
    }
  }
}
```

### Queries de Productos

```graphql
# Obtener todos los productos
query GetAllProducts($first: Int!) {
  products(first: $first) {
    edges {
      node {
        ...ProductFields
      }
    }
  }
}

# Obtener producto por handle (URL slug)
query GetProductByHandle($handle: String!) {
  product(handle: $handle) {
    ...ProductFields
  }
}

# Obtener handles para generateStaticParams
query GetAllProductHandles($first: Int!) {
  products(first: $first) {
    edges {
      node {
        handle
      }
    }
  }
}
```

### Mutations del Carrito

```graphql
# Crear nuevo carrito
mutation CreateCart($lines: [CartLineInput!]) {
  cartCreate(input: { lines: $lines }) {
    cart {
      ...CartFields
    }
    userErrors {
      field
      message
    }
  }
}

# Agregar líneas al carrito
mutation AddToCart($cartId: ID!, $lines: [CartLineInput!]!) {
  cartLinesAdd(cartId: $cartId, lines: $lines) {
    cart {
      ...CartFields
    }
    userErrors {
      field
      message
    }
  }
}

# Actualizar cantidad de línea
mutation UpdateCartLine($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
  cartLinesUpdate(cartId: $cartId, lines: $lines) {
    cart {
      ...CartFields
    }
    userErrors {
      field
      message
    }
  }
}

# Eliminar líneas del carrito
mutation RemoveFromCart($cartId: ID!, $lineIds: [ID!]!) {
  cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
    cart {
      ...CartFields
    }
    userErrors {
      field
      message
    }
  }
}

# Obtener carrito existente
query GetCart($cartId: ID!) {
  cart(id: $cartId) {
    ...CartFields
  }
}
```

---

## Interfaces TypeScript

### Tipos Base de Shopify

```typescript
/** Imagen de producto */
export interface ShopifyImage {
  url: string;
  altText: string | null;
  width: number;
  height: number;
}

/** Precio monetario */
export interface MoneyV2 {
  amount: string;
  currencyCode: string;
}

/** Variante de producto */
export interface ProductVariant {
  id: string;
  title: string;
  availableForSale: boolean;
  quantityAvailable: number;
  price: MoneyV2;
  compareAtPrice: MoneyV2 | null;
  image: ShopifyImage | null;
  selectedOptions: {
    name: string;
    value: string;
  }[];
}

/** Producto completo */
export interface ShopifyProduct {
  id: string;
  handle: string;
  title: string;
  description: string;
  descriptionHtml: string;
  availableForSale: boolean;
  featuredImage: ShopifyImage | null;
  images: {
    edges: {
      node: ShopifyImage;
    }[];
  };
  variants: {
    edges: {
      node: ProductVariant;
    }[];
  };
  priceRange: {
    minVariantPrice: MoneyV2;
    maxVariantPrice: MoneyV2;
  };
}
```

### Tipos del Carrito

```typescript
/** Línea de carrito */
export interface CartLine {
  id: string;
  quantity: number;
  merchandise: {
    id: string;
    title: string;
    product: {
      id: string;
      handle: string;
      title: string;
      featuredImage: ShopifyImage | null;
    };
    price: MoneyV2;
    image: ShopifyImage | null;
  };
  cost: {
    totalAmount: MoneyV2;
  };
}

/** Carrito completo */
export interface ShopifyCart {
  id: string;
  checkoutUrl: string;
  totalQuantity: number;
  cost: {
    subtotalAmount: MoneyV2;
    totalAmount: MoneyV2;
    totalTaxAmount: MoneyV2 | null;
  };
  lines: {
    edges: {
      node: CartLine;
    }[];
  };
}
```

### Interfaces de Props (Patrón del Proyecto)

```typescript
export interface ProductCardProps {
  product: ShopifyProduct;
}

export interface CartItemCardProps {
  line: CartLine;
  onUpdateQuantity: (lineId: string, quantity: number) => void;
  onRemove: (lineId: string) => void;
}

export interface ProductsSectionProps {
  products: ShopifyProduct[];
}

export interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  max?: number;
}
```

---

## Componentes

### ProductCard

```bash
┌─────────────────────────┐
│                         │
│      [Imagen]           │
│      producto           │
│                         │
├─────────────────────────┤
│  Nombre del Producto    │
│  19,99 €                │
│                         │
│  [Añadir al carrito]    │
└─────────────────────────┘
```

### CartItemCard

```bash
┌─────────────────────────────────────────┐
│  [img]  │  Nombre Producto              │
│         │  Variante                     │
│         │  19,99 €                      │
│         │                               │
│         │  [-] 2 [+]           [🗑️]     │
└─────────────────────────────────────────┘
```

### Página de Producto

```bash
┌──────────────────────────────────────────────────────┐
│                                                      │
│  ┌──────────────┐    Nombre del Producto             │
│  │              │                                    │
│  │   [Imagen    │    Descripción del producto        │
│  │   Principal] │    con texto detallado...          │
│  │              │                                    │
│  └──────────────┘    Precio: 19,99 €                 │
│                                                      │
│  [thumb] [thumb]     Cantidad: [-] 1 [+]             │
│                                                      │
│                      [  Añadir al carrito  ]         │
│                                                      │
└──────────────────────────────────────────────────────┘
```

---

## Verificación y Testing

### Checklist de Verificación Final

#### Funcionalidad Básica

- [ ] Productos se cargan desde Shopify y se muestran en home
- [ ] Las imágenes se cargan correctamente desde cdn.shopify.com
- [ ] Los precios se formatean correctamente (€)

#### Carrito

- [ ] Click en "Añadir al carrito" añade producto
- [ ] SideCart se abre automáticamente al añadir
- [ ] Productos aparecen en SideCart con imagen, nombre, precio
- [ ] Se puede actualizar cantidad con +/-
- [ ] Se puede eliminar producto del carrito
- [ ] El total se calcula correctamente
- [ ] "Vaciar carrito" elimina todos los productos

#### Persistencia

- [ ] Recargar página mantiene el carrito
- [ ] Cerrar y abrir navegador mantiene el carrito
- [ ] Cart ID se guarda en localStorage

#### Checkout

- [ ] Click en "Comprar" redirige a Shopify checkout
- [ ] URL de checkout es válida y funciona

#### Página de Producto Individual

- [ ] Navegar a /products/[handle] muestra producto
- [ ] Imágenes, descripción y precio correctos
- [ ] Selector de cantidad funciona
- [ ] Añadir al carrito desde página de producto funciona

#### Responsive

- [ ] Mobile: layout vertical, carrito full width
- [ ] Tablet: layout adaptado
- [ ] Desktop: layout completo

#### SEO

- [ ] Página de producto tiene title y description dinámicos
- [ ] generateStaticParams genera páginas estáticas

---

## Notas Adicionales

### Dependencias

No se requieren dependencias adicionales. Se usa:

- `fetch` nativo con cache de Next.js para GraphQL
- React Context API para estado global
- localStorage para persistencia del cart ID

### API Version

Se usa la versión `2024-01` de Shopify Storefront API:

```bash
https://{domain}/api/2024-01/graphql.json
```

### Cache Strategy

- **Productos:** `force-cache` con tags para revalidación
- **Carrito:** `no-store` (siempre fresh)

### Formateo de Precios

```typescript
export function formatPrice(money: { amount: string; currencyCode: string }): string {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: money.currencyCode,
  }).format(parseFloat(money.amount));
}
```

---

*Última actualización: Enero 2026*
