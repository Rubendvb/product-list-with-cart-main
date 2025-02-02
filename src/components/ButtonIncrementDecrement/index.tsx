import { ButtonHTMLAttributes } from 'react'
import './ButtonIncrementDecrement.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'increment' | 'decrement'
}

export function ButtonIncrementDecrement({ variant, ...props }: ButtonProps) {
  return (
    <span
      aria-label={
        variant === 'increment' ? 'Increment quantity' : 'Decrement quantity'
      }
      className="button-increment-decrement"
      {...props}
    >
      {variant === 'decrement' ? <MinusIcon /> : <PlusIcon />}
    </span>
  )
}

const MinusIcon = () => (
  <svg
    width="10"
    height="2"
    viewBox="0 0 10 2"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="currentColor" d="M0 .375h10v1.25H0z" />
  </svg>
)

const PlusIcon = () => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 10 10"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="currentColor"
      d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10z"
    />
  </svg>
)
