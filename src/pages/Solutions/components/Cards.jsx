import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Flex from '../../../components/base/Flex';
import ContainedButton from '../../../components/base/ContainedButton';
import { HashLink } from 'react-router-hash-link';

const data = [
  {
    heading: 'Hot Desk',
    text: 'A flexible workspace solution that allows users to work from any available desk on a first-come, first-serve basis. Ideal for solo workers who need a comfortable and productive workspace.',
    address:
      'Zulikat Wuraola House, 362 Herbert Macaulay Way, Victoria Island, Lagos.',
    tel: '+1-800-456-478-23',
    img: '/solutions_1.png',
  },
  {
    heading: 'Fixed Desk',
    text: 'A dedicated workspace solution that provides users with their own personal desk. Ideal for individuals who need a permanent workspace.',
    address:
      'Zulikat Wuraola House, 362 Herbert Macaulay Way, Victoria Island, Lagos.',
    tel: '+1-800-456-478-23',
    img: '/solutions_2.png',
  },
  {
    heading: 'Private Office',
    text: 'A dedicated, private workspace solution that provides users with a secure and personal workspace. Ideal for individuals who need a private and professional workspace that can accommodate guests (up to 2).',
    address:
      'Zulikat Wuraola House, 362 Herbert Macaulay Way, Victoria Island, Lagos.',
    tel: '+1-800-456-478-23',
    img: '/solutions_3.png',
  },
  {
    heading: 'Team Office',
    text: 'A dedicated workspace solution, ideal for small sized startups and company departments (e.g contact centres) and teams who need a flexible and scalable workspace solution.',
    address:
      'Zulikat Wuraola House, 362 Herbert Macaulay Way, Victoria Island, Lagos.',
    tel: '+1-800-456-478-23',
    img: '/solutions_4.png',
  },
  {
    heading: 'Meetings',
    text: 'A range of meeting spaces and conference rooms deal for businesses and organizations that need a professional and well-equipped meeting space.',
    address:
      'Zulikat Wuraola House, 362 Herbert Macaulay Way, Victoria Island, Lagos.',
    tel: '+1-800-456-478-23',
    img: '/solutions_5.png',
  },
  {
    heading: 'Trainings<br /> & Events',
    text: 'A range of training and event spaces deal for businesses, organizations, and individuals who need a professional and well-equipped space for their events and training programs.',
    address:
      'Zulikat Wuraola House, 362 Herbert Macaulay Way, Victoria Island, Lagos.',
    tel: '+1-800-456-478-23',
    img: '/solutions_6.png',
  },
];

const Cards = () => {
  return (
    <Box
      sx={{
        my: { xs: 12, sm: 12, md: 18 },
      }}
    >
      {data.map((item, index) => (
        <Box key={index} sx={{ my: { xs: 2, sm: 2, md: 8, lg: 12 } }}>
          <Flex
            sx={{
              alignItems: { xs: 'center', sm: 'center', md: 'normal' },
              justifyContent: { xs: 'center', sm: 'center', md: 'flex-start' },
              width: '100%',
              height: { xs: '100vh', sm: '100vh', md: '50vh', lg: '65vh' },
              flexDirection: {
                xs: 'column-reverse',
                sm: 'column-reverse',
                md: index % 2 === 0 ? 'row' : 'row-reverse',
              },
              gap: { xs: 0, sm: 0, md: '2rem', lg: '3rem' },
            }}
            columnGap={0}
          >
            <Flex
              sx={{
                alignItems: { xs: 'center', sm: 'center', md: 'normal' },
                justifyContent: { xs: 'center', sm: 'center', md: 'flex-start' },
                width: { xs: '100%', sm: '100%', md: '100%'},
                height: '100%',
                flex: '50%',
                flexDirection: 'column',
                pl: { xs: 0, sm: 0, md: index % 2 !== 0 ? 12 : 0 },
              }}
            >
              <Typography
                component={'h3'}
                sx={{
                  textAlign: { xs: 'center', sm: 'left' },
                  lineHeight: { xs: '1.25', sm: '1.15', md: '1.2' },
                  fontWeight: 700,
                  textTransform: 'none',
                  fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.4rem', lg: '1.8rem' },
                  color: 'rgba(250, 250, 250, 1)',
                  mt: { xs: 2, sm: 2, md: 5 },
                  mb: { xs: 2, sm: 2, md: 2 },
                }}
                dangerouslySetInnerHTML={{ __html: item.heading}}
              >
              </Typography>
              <Typography
                component={'h3'}
                sx={{
                  textAlign: { xs: 'center', sm: 'center', md: 'left' },
                  lineHeight: { xs: '1.25', sm: '1.15', md: '1.4' },
                  fontWeight: 300,
                  textTransform: 'none',
                  fontSize: { xs: '1.2rem', sm: '1.2rem', md: '1.2rem', lg: '1.35rem' },
                  color: '#FFFFFF',
                  mt: { xs: 1, sm: 1, md: 1 },
                  opacity: 0.7,
                }}
              >
                {item.text}
              </Typography>
              <Typography
                component={'h3'}
                sx={{
                  textAlign: { xs: 'center', sm: 'center', md: 'left' },
                  lineHeight: { xs: '1.4', sm: '1.4', md: '1.4' },
                  fontWeight: 300,
                  textTransform: 'none',
                  fontSize: { xs: '1.2rem', sm: '1.2rem', md: '1.2rem', lg: '1.35rem' },
                  color: '#FFFFFF',
                  mt: { xs: 1, sm: 1, md: 1, lg: 2 },
                  opacity: 0.7,
                  pr: { xs: 0, sm: 2, md: 6, lg: 12 },
                }}
              >
                {item.address}{' '}
                <span style={{ fontStyle: 'italic', opacity: 0.9 }}>{item.tel}</span>
              </Typography>
              <ContainedButton
                sx={{
                  mt: { xs: 3, sm: 4, md: 4, lg: 6 },
                  mb: { xs: 3, sm: 3, md: 4, lg: 0 },
                  py: { xs: 1, sm: 1, md: 1, lg: 1.5 },
                  px: { xs: 4, sm: 4, md: 4, lg: 6 },
                  fontWeight: 500,
                  fontSize: { xs: '1rem', sm: '1rem', md: '1.2rem', lg: '1.8rem' },
                  alignSelf: { xs: 'center', sm: 'center', md: 'flex-start' },
                  borderRadius: { xs: 2, sm: 2, md: 3, lg: 3 },
                }}
                component={HashLink}
                to={'/enterprise#contact-us'}
              >
                Get a Quote
              </ContainedButton>
            </Flex>
            <Flex
              sx={{
                alignItems: 'normal',
                width: '100%',
                height: '100%',
                flex: '50%',
              }}
            >
              <Box
                component={'img'}
                sx={{
                  width: '100%',
                }}
                src={item.img}
                alt={item.heading}
              />
            </Flex>
          </Flex>
        </Box>
      ))}
    </Box>
  );
};

export default Cards;
