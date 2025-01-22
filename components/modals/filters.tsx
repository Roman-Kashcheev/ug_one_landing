import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { FormGroup, FormControlLabel, Checkbox, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const style = {
  position: 'absolute',
  dispay: 'grid',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export function ChildModal({ open, setOpen }: { open: boolean, setOpen: any }) {
  //   const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      {/* <Button onClick={handleOpen}>Open Child Modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
        className='bg-red-200 flex items-center justify-center'
      >
        <div className='w-[500px] h-[500px] p-10 overflow-scroll bg-red-400'>
          <div className=' '>
          
            <h2 className='text-black text-center'>Подбор по параметрам</h2>

            <div className=''>

              <div>
                <FormGroup className='text-black mb-5'>Наличие:
                  <FormControlLabel control={<Checkbox />} label="В наличии" />
                  <FormControlLabel control={<Checkbox />} label="Нет в наличии" />
                  <FormControlLabel control={<Checkbox />} label="Уточняйте у менеджера" />
                </FormGroup>
              </div>

              <div>
                <FormGroup className='text-black mb-5'>Вид:
                  <FormControlLabel control={<Checkbox />} label="Коническая" />
                  <FormControlLabel control={<Checkbox />} label="Набор" />
                  <FormControlLabel control={<Checkbox />} label="Цилиндрическая" />
                </FormGroup>
              </div>

              <div>
                <FormGroup className='text-black mb-5'>Тип:
                  <FormControlLabel control={<Checkbox />} label="10" />
                  <FormControlLabel control={<Checkbox />} label="11" />
                  <FormControlLabel control={<Checkbox />} label="5" />
                  <FormControlLabel control={<Checkbox />} label="6" />
                  <FormControlLabel control={<Checkbox />} label="7" />
                  <FormControlLabel control={<Checkbox />} label="8" />
                  <FormControlLabel control={<Checkbox />} label="9" />
                </FormGroup>
              </div>

              <div>
                <FormGroup className='text-black mb-5'>Производитель:
                  <FormControlLabel control={<Checkbox />} label="YG-1" />
                  <FormControlLabel control={<Checkbox />} label="Dasco" />
                  <FormControlLabel control={<Checkbox />} label="VSK" /> 
                </FormGroup>
              </div>

              <div className=''>
                <FormControl fullWidth>
                  <InputLabel >Количество зубьев</InputLabel>
                  <Select
                    label="Диаметр хвостовика, мм"
                  >
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={12}>12</MenuItem>
                  </Select>
                </FormControl>
              </div>

            </div>










            </div>
            <Button className='flex flex-row items-center mr-3 rounded-md border-2 pl-2 pr-2 hover:shadow-xl' onClick={handleClose}>Применить</Button>

        </div>
      </Modal>
    </React.Fragment>
  );
}
