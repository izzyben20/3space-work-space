/* eslint-disable react/display-name */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Flex from '../../../components/base/Flex';
import ContainedButton from '../../../components/base/ContainedButton';

const EnterpriseForm = React.forwardRef(
  ({ isSubmittingForm, handleForm, success }, ref) => {
    return (
      <Box
        sx={{
          mb: { xs: 12, sm: 12, md: 8 },
          mt: { xs: 10, sm: 12, md: 10, lg: 0 },
        }}
        id="contact-us"
      >
        <Typography
          component={'h3'}
          sx={{
            textAlign: { xs: 'center' },
            lineHeight: { xs: '1.25', sm: '1.15', md: '1.4' },
            fontWeight: 600,
            textTransform: 'none',
            fontSize: { xs: '1.4rem', sm: '1.4rem', md: '1.6rem', lg: '2rem' },
            color: '#FFFFFF',
            mt: { xs: 6, sm: 2, md: 8, lg: '10rem' },
            mb: { xs: 3, sm: 3, md: 3 },
            mx: { xs: '2rem', sm: '6rem', md: '12rem', lg: '15rem' },
          }}
        >
          Let us help you
          <span style={{ fontStyle: 'italic' }}>
            {' '}
            optimize costs while boosting productivity
          </span>{' '}
          & employee satisfaction.
        </Typography>
        <Typography
          component={'h3'}
          sx={{
            textAlign: { xs: 'center' },
            lineHeight: { xs: '1.25', sm: '1.15', md: '1.4' },
            fontWeight: 300,
            textTransform: 'none',
            fontSize: { xs: '1.2rem', sm: '1.2rem', md: '1.3rem', lg: '1.4rem' },
            color: '#FFFFFF',
            opacity: 0.7,
            mb: { xs: 3, sm: 3, md: 7 },
            mx: { xs: '2rem', sm: '6rem', md: '12rem', lg: '15rem' },
          }}
        >
          Contact us today to learn more about how the 3Space Enterprise Plan
          can elevate your team&apos;s performance and drive business success.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'normal',
            flexDirection: { xs: 'column', sm: 'column', md: 'row' },
            height: { xs: '100%', sm: '100%', md: '100%' },
            gap: { xs: '2rem', sm: '2rem', md: '5rem', lg: '6rem' },
          }}
          component={'form'}
          onSubmit={handleForm}
          ref={ref}
        >
          <Flex
            sx={{
              alignItems: 'normal',
              justifyContent: {
                xs: 'flex-start',
                sm: 'flex-start',
                md: 'space-between',
              },
              flexDirection: 'column',
              flex: { md: '50%' },
              height: '100%',
            }}
          >
            <Box>
              <Typography color={'white'}>Name</Typography>
              <TextField
                placeholder={'Enter here'}
                fullWidth
                type={'text'}
                name={'user_name'}
                sx={{
                  mb: { xs: 2, sm: 2, md: 3, lg: 5 },
                  size: { xs: 'small', sm: 'small', md: 'medium', lg: 'large'},
                  input: {
                    background: '#FFFFFF',
                    borderRadius: 1,
                    borderColor: 'red',
                  },
                }}
              />
            </Box>
            <Box>
              <Typography color={'white'}>Email address</Typography>
              <TextField
                placeholder={'Enter here'}
                fullWidth
                type={'email'}
                name={'user_email'}
                required
                sx={{
                  size: { xs: 'small', sm: 'small', md: 'medium', lg: 'large'},
                  mb: { xs: 2, sm: 2, md: 3, lg: 5 },
                  input: {
                    background: '#FFFFFF',
                    borderRadius: 1,
                    borderColor: 'red',
                  },
                }}
              />
            </Box>
            <Box>
              <Typography color={'white'}>Phone number</Typography>
              <TextField
                placeholder={'Enter here'}
                type={'number'}
                name={'user_number'}
                fullWidth
                sx={{
                  size: { xs: 'small', sm: 'small', md: 'medium', lg: 'large'},
                  mb: { xs: 1, sm: 1, md: 3, lg: 5 },
                  input: {
                    background: '#FFFFFF',
                    borderRadius: 1,
                    borderColor: 'red',
                  },
                }}
              />
            </Box>
          </Flex>
          <Flex
            sx={{
              alignItems: 'normal',
              justifyContent: 'space-between',
              flexDirection: 'column',
              flex: '50%',
              height: '100%',
            }}
          >
            <Box>
              <Typography color={'white'}>Your message</Typography>
              <TextField
                placeholder={'Enter here'}
                fullWidth
                rows={12}
                name={'message'}
                multiline={true}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '8px',
                }}
              />
            </Box>
            <ContainedButton
              sx={{
                mt: { xs: 2, sm: 4, md: 4, lg: 6 },
                  py: { xs: 1, sm: 1, md: 1, lg: 1.5 },
                  px: { xs: 4, sm: 4, md: 4, lg: 6 },
                  fontWeight: 500,
                  fontSize: { xs: '1rem', sm: '1rem', md: '1.2rem', lg: '1.6rem' },
                  alignSelf: { xs: 'center', sm: 'center', md: 'flex-start' },
                  borderRadius: { xs: 2, sm: 2, md: 3, lg: 3 },
              }}
              isLoading={isSubmittingForm}
              disabled={isSubmittingForm}
              type={'submit'}
            >
              Send message
            </ContainedButton>
            {success && (
              <Typography color={'primary'}>
                Message sent successfully!
              </Typography>
            )}
          </Flex>
        </Box>

        <Backdrop
          open={isSubmittingForm}
          sx={{ color: '#fff', zIndex: 99999}}
        >
          <CircularProgress size={30} color={'inherit'} />
        </Backdrop>
      </Box>
    );
  }
);

export default EnterpriseForm;
