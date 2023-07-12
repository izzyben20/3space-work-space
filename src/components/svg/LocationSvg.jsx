import { SvgIcon } from '@mui/material';

const LocationSvg = ({ width = 46, height = 46, ...props }) => {
  return (
    <SvgIcon
      sx={{ width, height }}
      viewBox={'0 0 46 46'}
      fill={'none'}
      {...props}
      xmlns={'http://www.w3.org/2000/svg'}
    >
      <circle
        cx="23.1383"
        cy="22.6329"
        r="22.5753"
        fill="#F47C35"
        fillOpacity="0.23"
      />
      <path
        d="M30.9719 13.4111C26.5455 8.9432 19.3352 8.90962 14.8673 13.3361C10.3994 17.7627 10.3658 24.9729 14.7923 29.4408C14.8268 29.4756 14.8615 29.5102 14.8965 29.5446L18.9785 33.314C21.1603 35.4497 24.6462 35.4589 26.8392 33.3347L30.972 29.5156C35.419 25.0684 35.419 17.8583 30.9719 13.4111ZM29.1313 24.0515C29.1313 25.4809 27.9725 26.6397 26.5431 26.6397H19.2963C17.8669 26.6397 16.7082 25.4809 16.7082 24.0515V20.5606C16.7082 19.5425 17.2071 18.589 18.0437 18.0087L21.1494 15.8543C22.2148 15.1181 23.6246 15.1181 24.69 15.8543L27.7958 18.0087C28.6323 18.589 29.1313 19.5425 29.1313 20.5606V24.0515ZM27.0608 20.5606V24.0515C27.0608 24.3373 26.829 24.5691 26.5431 24.5691H24.9902V22.4986C24.9902 21.9268 24.5267 21.4633 23.955 21.4633H21.8845C21.3127 21.4633 20.8492 21.9268 20.8492 22.4986V24.5691H19.2963C19.0105 24.5691 18.7787 24.3373 18.7787 24.0515V20.5606C18.7786 20.2211 18.9449 19.9031 19.2238 19.7096L22.3296 17.5553C22.685 17.3109 23.1544 17.3109 23.5098 17.5553L26.6156 19.7096C26.8945 19.9031 27.0609 20.2211 27.0608 20.5606Z"
        fill="#F47C35"
      />
    </SvgIcon>
  );
};

export default LocationSvg;
