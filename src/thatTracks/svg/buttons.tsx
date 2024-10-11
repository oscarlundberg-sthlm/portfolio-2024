export const PlayButtonSVG = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM31.9284 22.842C31.7183 22.4923 31.417 22.2063 31.0568 22.0147L21.4478 16.7887C19.9005 15.948 18 17.0422 18 18.7747V29.226C18 30.9578 19.9005 32.0527 21.4478 31.2105L31.0568 25.9853C31.417 25.7937 31.7183 25.5077 31.9284 25.158C32.1385 24.8083 32.2495 24.408 32.2495 24C32.2495 23.592 32.1385 23.1917 31.9284 22.842Z"
      />
    </svg>
  );
};

export const PauseButtonSVG = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM22 29C22 30.1 21.1 31 20 31C18.9 31 18 30.1 18 29V19C18 17.9 18.9 17 20 17C21.1 17 22 17.9 22 19V29ZM28 31C26.9 31 26 30.1 26 29V19C26 17.9 26.9 17 28 17C29.1 17 30 17.9 30 19V29C30 30.1 29.1 31 28 31Z"
      />
    </svg>
  );
};
