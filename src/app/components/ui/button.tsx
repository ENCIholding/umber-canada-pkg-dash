import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: "default" | "outline" | "ghost" | string;
};

export default function Button({
  children,
  asChild,
  className,
  type = "button",
  ...props
}: ButtonProps) {
  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<{ className?: string }>;
    return React.cloneElement(child, {
      className: [className, child.props.className].filter(Boolean).join(" ")
    });
  }

  return (
    <button className={className} type={type} {...props}>
      {children}
    </button>
  );
}







