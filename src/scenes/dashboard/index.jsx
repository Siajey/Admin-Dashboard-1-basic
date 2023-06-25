import { Box } from '@mui/material'
import Header from '../../components/Header'


const DashBoard = () => {
  return (
    <Box m='20x'>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Header
          title='DASHBOARD'
          subtitle='Welcome Back To Your Dashboard'
        />
      </Box>
    </Box>
  )
}



export default DashBoard