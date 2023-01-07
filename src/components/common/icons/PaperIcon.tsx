import { SVGProps } from "react";

export const PaperIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
      <path d="M12.5 14H3.49998C3.36737 14 3.2402 13.9473 3.14643 13.8535C3.05267 13.7598 3 13.6326 3 13.5V2.5C3 2.3674 3.05267 2.24022 3.14643 2.14645C3.2402 2.05268 3.36737 2 3.49998 2H9.50017L13 5.5V13.5C13 13.6326 12.9473 13.7598 12.8536 13.8535C12.7598 13.9473 12.6326 14 12.5 14V14Z" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.5 2V5.5H13.0005" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
