import { SvgIcon } from '@mui/material';

const LinkedInSvg = ({ sx, ...props }) => {
  return (
    <SvgIcon
      sx={{ ...sx }}
      viewBox={'0 0 36 35'}
      fill={'none'}
      {...props}
      xmlns={'http://www.w3.org/2000/svg'}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.0007 0C27.4367 0 35.0854 7.64874 35.0854 17.0847C35.0854 26.5206 27.4367 34.1694 18.0007 34.1694C8.56478 34.1694 0.916046 26.5206 0.916046 17.0847C0.916046 7.64874 8.56478 0 18.0007 0ZM10.39 25.0137H13.6622V14.4419H10.39V25.0137ZM12.0104 13.0578C13.0795 13.0578 13.9458 12.1835 13.9458 11.1064C13.9458 10.0292 13.0795 9.15566 12.0104 9.15566C10.9413 9.15566 10.0757 10.0292 10.0757 11.1064C10.0757 12.1835 10.9413 13.0578 12.0104 13.0578ZM18.893 19.4645C18.893 17.9783 19.5777 17.092 20.8878 17.092C22.0904 17.092 22.669 17.9423 22.669 19.4645V25.0137H25.9258C25.9258 25.0137 25.9258 21.1516 25.9258 18.32C25.9258 15.4883 24.3207 14.1189 22.079 14.1189C19.8367 14.1189 18.893 15.8661 18.893 15.8661V14.4419H15.7544V25.0137H18.893C18.893 25.0137 18.893 21.0929 18.893 19.4645Z"
        fill="#F47C35"
      />
    </SvgIcon>
  );
};

export default LinkedInSvg;
