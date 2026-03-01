export type ToolName = 'Ai' | 'Ps' | 'Id' | 'Ae' | 'Lr' | 'Xd'
export type GridLayout = '3-col' | '4-3' | 'feature'

export interface ProjectImage {
  /** Path relative to /public, e.g. '/images/logo-1.jpg' */
  src?: string
  alt: string
  /** Shown as a colored placeholder when src is not set */
  placeholderColor: string
}

export interface Project {
  id: string
  title: string
  categoryNumber: number
  category: string
  /** Accent color used for the category badge and section accent */
  accentColor: string
  tools: ToolName[]
  description: string
  gridLayout: GridLayout
  images: ProjectImage[]
}

const projects: Project[] = [
  {
    id: 'personal-logo',
    title: 'My Personal Logo',
    categoryNumber: 1,
    category: 'Logos & Branding',
    accentColor: '#1E3A2A',
    tools: ['Ai', 'Ps'],
    description:
      'My personal logo is the representation of my name, "Sasha", crafted using Persian calligraphy. The design reflects a fusion of traditional Persian elements with a modern and minimalist aesthetic.',
    gridLayout: '3-col',
    // 3-col: all items are square (1:1) → 600×600
    images: [
      { src: 'https://picsum.photos/seed/logo1/600/600', alt: 'Business cards mockup', placeholderColor: '#2D5A27' },
      { src: 'https://picsum.photos/seed/logo2/600/600', alt: 'Tote bag with logo', placeholderColor: '#1A2E14' },
      { src: 'https://picsum.photos/seed/logo3/600/600', alt: 'Throw pillows mockup', placeholderColor: '#E8E0D0' },
      { src: 'https://picsum.photos/seed/logo4/600/600', alt: 'Logo on dark green background', placeholderColor: '#2D5A27' },
      { src: 'https://picsum.photos/seed/logo5/600/600', alt: 'Mugs with logo', placeholderColor: '#1A2E14' },
      { src: 'https://picsum.photos/seed/logo6/600/600', alt: 'Stationery set', placeholderColor: '#E8E0D0' },
    ],
  },
  {
    id: 'isadora',
    title: 'Isadora',
    categoryNumber: 1,
    category: 'Logos & Branding',
    accentColor: '#6B0050',
    tools: ['Ai', 'Ps'],
    description:
      'The logo for Isadora, a beauty and personal care brand, was designed by combining the letters "I" and "S" into a unified mark. The form is intentionally soft, delicate, and minimal, reflecting the brand\'s focus on gentleness, care, and refinement.',
    gridLayout: '4-3',
    // 4-3: top row (span-3) is square 1:1 → 600×600; bottom row (span-4) is 4:3 → 600×450
    images: [
      { src: 'https://picsum.photos/seed/beauty1/600/600', alt: 'Serum bottle mockup', placeholderColor: '#F5C2D0' },
      { src: 'https://picsum.photos/seed/beauty2/600/600', alt: 'Cream jar and tube', placeholderColor: '#FDE8EE' },
      { src: 'https://picsum.photos/seed/beauty3/600/600', alt: 'Calendar mood board', placeholderColor: '#1A2B5A' },
      { src: 'https://picsum.photos/seed/beauty4/600/600', alt: 'Isadora logo mark', placeholderColor: '#FDE8EE' },
      { src: 'https://picsum.photos/seed/beauty5/600/450', alt: 'Product label tags', placeholderColor: '#F0D0DC' },
      { src: 'https://picsum.photos/seed/beauty6/600/450', alt: 'Tube product', placeholderColor: '#FFE8F0' },
      { src: 'https://picsum.photos/seed/beauty7/600/450', alt: 'T-shirt and tote', placeholderColor: '#F5D5E0' },
    ],
  },
  {
    id: 'mood-drink',
    title: 'Mood Drink',
    categoryNumber: 2,
    category: 'Packaging',
    accentColor: '#1A1A3A',
    tools: ['Ai', 'Ps'],
    description:
      'Mood is a beverage packaging design developed in three flavors, using gradient colors to create a cohesive and modern visual identity. The minimal design approach keeps the packaging clean and elegant, while the gradients add emotion and distinction.',
    gridLayout: 'feature',
    // feature: [0] tall portrait → 400×600; [1] first side 2:1 → 800×400; [2-3] side 16:9 → 800×450
    images: [
      { src: 'https://picsum.photos/seed/drink1/400/600', alt: 'Blueberry can hero shot', placeholderColor: '#3A3E7A' },
      { src: 'https://picsum.photos/seed/drink2/800/400', alt: 'Three cans — Pitahaya, Mango, Blueberry', placeholderColor: '#6A5A8A' },
      { src: 'https://picsum.photos/seed/drink3/800/450', alt: 'Pitahaya and Blueberry cans', placeholderColor: '#8B4A5A' },
      { src: 'https://picsum.photos/seed/drink4/800/450', alt: 'Single blueberry can', placeholderColor: '#3A3E7A' },
    ],
  },
]

export const ALL_CATEGORIES = [
  { number: '01', label: 'Logos & Branding' },
  { number: '02', label: 'Packaging' },
  { number: '03', label: 'Social Media' },
  { number: '04', label: 'Layouts' },
  { number: '05', label: 'Posters' },
  { number: '06', label: 'App Design' },
]

export default projects
