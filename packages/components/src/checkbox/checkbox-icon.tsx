import { chakra, HTMLChakraProps, PropsOf } from "../system"

function CheckIcon(props: PropsOf<typeof chakra.svg>) {
  return (
    <chakra.svg
      width="1.2em"
      viewBox="0 0 12 10"
      fill="none"
      stroke="currentColor"
      strokeDasharray={16}
      strokeWidth={2}
      {...props}
    >
      <polyline points="1.5 6 4.5 9 10.5 1" />
    </chakra.svg>
  )
}

function IndeterminateIcon(props: PropsOf<typeof chakra.svg>) {
  return (
    <chakra.svg
      width="1.2em"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={4}
      {...props}
    >
      <line x1="21" x2="3" y1="12" y2="12" />
    </chakra.svg>
  )
}

export interface CheckboxIconProps extends HTMLChakraProps<"svg"> {
  /**
   * @default false
   */
  isIndeterminate?: boolean
  /**
   * @default false
   */
  isChecked?: boolean
}

/**
 * CheckboxIcon is used to visually indicate the checked or indeterminate
 * state of a checkbox.
 *
 * @todo allow users pass their own icon svgs
 */
export function CheckboxIcon(props: CheckboxIconProps) {
  const { isIndeterminate, isChecked, ...rest } = props
  const BaseIcon = isIndeterminate ? IndeterminateIcon : CheckIcon

  return isChecked || isIndeterminate ? (
    <chakra.div
      alignItems="center"
      display="flex"
      height="100%"
      justifyContent="center"
    >
      <BaseIcon {...rest} />
    </chakra.div>
  ) : null
}
