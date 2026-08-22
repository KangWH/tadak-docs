"use client"

import Link from "next/link"
import { useMemo, useState } from "react"
import { twMerge } from "tailwind-merge"

export type TocItem = {
  title: string
  href?: string
  children?: TocItem[]
}

export type TocConfig = {
  title?: string
  items: TocItem[]
  defaultExpanded?: boolean
}

type TableOfContentsProps = {
  toc?: TocConfig
  title?: string
  items?: TocItem[]
  defaultExpanded?: boolean
}

function collectExpandableKeys(items: TocItem[], prefix = ""): string[] {
  const keys: string[] = []

  items.forEach((item, index) => {
    const key = prefix ? `${prefix}-${index}` : `${String(index)}`

    if (item.children?.length) {
      keys.push(key)
      keys.push(...collectExpandableKeys(item.children, key))
    }
  })

  return keys
}

function ChevronIcon({ expanded }: { expanded: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={twMerge(
        "size-4 shrink-0 text-gray-400 transition-transform duration-200 dark:text-zinc-500",
        expanded && "rotate-90",
      )}
    >
      <path
        fillRule="evenodd"
        d="M7.21 14.77a.75.75 0 0 1 .02-1.06L11.168 10 7.23 6.29a.75.75 0 1 1 1.04-1.08l4.5 4.25a.75.75 0 0 1 0 1.08l-4.5 4.25a.75.75 0 0 1-1.06-.02Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function titleClassName(depth: number, linked: boolean) {
  return twMerge(
    depth === 0 && "font-medium",
    depth === 1 && "text-[0.95rem]",
    depth >= 2 && "text-sm",
    !linked &&
      depth === 0 &&
      "text-gray-900 dark:text-zinc-100",
    !linked &&
      depth === 1 &&
      "text-gray-800 dark:text-zinc-200",
    !linked && depth >= 2 && "text-gray-700 dark:text-zinc-300",
  )
}

type TocItemTitleProps = {
  item: TocItem
  depth: number
}

function TocItemTitle({ item, depth }: TocItemTitleProps) {
  if (!item.href) {
    return (
      <span className={titleClassName(depth, false)}>{item.title}</span>
    )
  }

  const className = titleClassName(depth, true)

  if (/^https?:\/\//.test(item.href)) {
    return (
      <a
        href={item.href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {item.title}
      </a>
    )
  }

  return (
    <Link href={item.href} className={className}>
      {item.title}
    </Link>
  )
}

type TocNodeProps = {
  item: TocItem
  path: number[]
  itemKey: string
  expandedKeys: Set<string>
  onToggle: (key: string) => void
  depth: number
}

function TocNode({
  item,
  path,
  itemKey,
  expandedKeys,
  onToggle,
  depth,
}: TocNodeProps) {
  const hasChildren = Boolean(item.children?.length)
  const expanded = !hasChildren || expandedKeys.has(itemKey)
  const numberLabel = path.join(".")

  return (
    <li className="list-none">
      <div
        className={twMerge(
          "flex items-start gap-2 rounded-md px-2 py-1.5 transition-colors",
          hasChildren && "hover:bg-gray-50/80 dark:hover:bg-zinc-900/70",
        )}
      >
        {hasChildren ? (
          <button
            type="button"
            aria-expanded={expanded}
            aria-label={`${item.title} ${expanded ? "접기" : "펼치기"}`}
            onClick={() => onToggle(itemKey)}
            className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md p-0.5 text-gray-500 transition-colors hover:bg-gray-200/80 hover:text-gray-700 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-zinc-200 transition-color"
          >
            <ChevronIcon expanded={expanded} />
          </button>
        ) : (
          <span aria-hidden="true" className="mt-0.5 size-5 shrink-0" />
        )}

        <div className="min-w-0 flex-1">
          <div className="flex items-baseline gap-2">
            <span className="shrink-0 tabular-nums text-sm font-semibold text-blue-800 dark:text-blue-200">
              {numberLabel}
            </span>
            <TocItemTitle item={item} depth={depth} />
          </div>

          {hasChildren && expanded && (
            <ol className="mt-1 space-y-0.5 border-l border-gray-200 pl-3 dark:border-zinc-700">
              {item.children!.map((child, index) => {
                const childKey = `${itemKey}-${index}`

                return (
                  <TocNode
                    key={childKey}
                    item={child}
                    path={[...path, index + 1]}
                    itemKey={childKey}
                    expandedKeys={expandedKeys}
                    onToggle={onToggle}
                    depth={depth + 1}
                  />
                )
              })}
            </ol>
          )}
        </div>
      </div>
    </li>
  )
}

export default function TableOfContents({
  toc,
  title,
  items,
  defaultExpanded,
}: TableOfContentsProps) {
  const resolvedTitle = toc?.title ?? title ?? "목차"
  const resolvedItems = toc?.items ?? items ?? []
  const resolvedDefaultExpanded =
    toc?.defaultExpanded ?? defaultExpanded ?? true

  const expandableKeys = useMemo(
    () => collectExpandableKeys(resolvedItems),
    [resolvedItems],
  )
  const [expandedKeys, setExpandedKeys] = useState<Set<string>>(() =>
    resolvedDefaultExpanded ? new Set(expandableKeys) : new Set(),
  )

  const allExpanded =
    expandableKeys.length > 0 &&
    expandableKeys.every((key) => expandedKeys.has(key))

  const toggleKey = (key: string) => {
    setExpandedKeys((current) => {
      const next = new Set(current)

      if (next.has(key)) {
        next.delete(key)
      } else {
        next.add(key)
      }

      return next
    })
  }

  const toggleAll = () => {
    setExpandedKeys(allExpanded ? new Set() : new Set(expandableKeys))
  }

  return (
    <nav aria-label={resolvedTitle} className="toc my-6">
      <div className="mb-3 flex items-center justify-between gap-3">
        <h3 className="!mt-0 !mb-0 text-lg font-semibold text-gray-800 dark:text-zinc-100">
          {resolvedTitle}
        </h3>
        {expandableKeys.length > 0 && (
          <button
            type="button"
            onClick={toggleAll}
            className="shrink-0 rounded-md border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 active:opacity-80 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
          >
            {allExpanded ? "전체 접기" : "전체 펼치기"}
          </button>
        )}
      </div>

      <ol className="space-y-1">
        {resolvedItems.map((item, index) => {
          const itemKey = String(index)

          return (
            <TocNode
              key={itemKey}
              item={item}
              path={[index + 1]}
              itemKey={itemKey}
              expandedKeys={expandedKeys}
              onToggle={toggleKey}
              depth={0}
            />
          )
        })}
      </ol>
    </nav>
  )
}
