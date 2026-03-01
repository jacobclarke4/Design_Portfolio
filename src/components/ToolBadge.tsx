import type { ToolName } from '../data/projects'

interface Props {
  tool: ToolName
}

export default function ToolBadge({ tool }: Props) {
  return (
    <span
      className="inline-flex items-center justify-center w-8 h-8 rounded-lg text-sm font-semibold"
      style={{ border: '1.5px solid #1a1a1a', backgroundColor: '#fff', color: '#1a1a1a' }}
    >
      {tool}
    </span>
  )
}
