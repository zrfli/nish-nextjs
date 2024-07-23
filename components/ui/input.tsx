import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "shadow-sm bg-gray-50 focus:ring-0 focus:border-black border border-gray-300 dark:border-gray-600 dark:bg-black dark:text-gray-300 text-gray-900 font-medium text-xs rounded-lg block w-full p-2.5",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
