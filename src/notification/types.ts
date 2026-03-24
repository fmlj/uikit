import type { ComponentColor, ComponentSize } from '../types'

export type NotificationVariant = 'default' | 'solid' | 'outline' | 'soft'

export type NotificationSize = ComponentSize

export interface NotificationAction {
  label: string
  onClick: () => void
}

export interface NotificationClassNames {
  root?: string
  icon?: string
  content?: string
  title?: string
  description?: string
  action?: string
  closeButton?: string
}

export interface NotificationProps {
  title?: string
  description?: string
  variant?: NotificationVariant
  color?: ComponentColor
  size?: NotificationSize
  /**
   * Icon rendered before the content. Pass `null` to explicitly hide.
   */
  icon?: React.ReactNode
  /**
   * Show left accent border line (visible on outline and soft variants).
   * @default true
   */
  borderLine?: boolean
  closable?: boolean
  onClose?: () => void
  action?: NotificationAction
  className?: string
  classNames?: NotificationClassNames
  children?: React.ReactNode
}
