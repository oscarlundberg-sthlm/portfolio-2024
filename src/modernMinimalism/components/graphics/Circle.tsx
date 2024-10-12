function Circle({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      // width="217"
      // height="217"
      viewBox="0 0 217 217"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="-11"
        y="11"
        width="195"
        height="195"
        rx="97.5"
        transform="matrix(-1 0 0 1 195 0)"
        stroke="#F5F5F5"
        strokeWidth="22"
      />
    </svg>
  );
}

export default Circle;
