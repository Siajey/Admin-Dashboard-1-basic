import { Box } from '@mui/material'
import Header from '../../components/Header'

const DashBoard = () => {
  return (
    <Box m='20x' sx={{textAlign:'center',marginTop:'10px'}}>
      <Box display='flex' justifyContent='center' alignItems='center' mb='50px'>
        <Header title='DASHBOARD' subtitle=' Welcome Back To Your Dashboard' />
      </Box>
      <Box>
        <img src={require('../../photo_2022-08-08_22-40-20.jpg')} alt='user-profile' style={{borderRadius:'20px'}}/>
      </Box>
    </Box>
  )
}

export default DashBoard
