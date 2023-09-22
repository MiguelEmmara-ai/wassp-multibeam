'use-client'

import { CustomButtonProps } from '@/types'
import { Button } from '@mui/material'

const ButtonStyles = {
  backgroundColor: 'transparent',
  fontFamily: 'neue-haas-grotesk-display-pro',
  fontWeight: 600,
  color: 'white',
  py: 2,
  px: 4,
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#1E40AF',
    border: 'none',
  },
  borderRadius: '9999px',
  border: '1px solid #718096',
}

const CustomButton = ({ title, handleClick }: CustomButtonProps) => {
  return (
    <Button
      variant="contained"
      color="primary"
      sx={ButtonStyles}
      endIcon={<img src="/svg/ArrowRight.svg" alt="Arrow Right" />}
      onClick={handleClick}
    >
      {title}
    </Button>
  )
}

export default CustomButton
