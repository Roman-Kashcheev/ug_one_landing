import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Container, Box } from '@mui/material';
import ReactPhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'; // Импорт стилей для react-phone-input-2

function OrderForm() {
    const { handleSubmit, control, formState: { errors } } = useForm({
        defaultValues: {
            name: '',
            phone: '',
            comment: '',
        },
    });

    const onSubmit = (data) => {
        console.log(data);
        // Здесь можно добавить логику отправки заказа
    };

    const handleClick = () => {
        alert("Заказ сформирован")
    }

    return (
        <div className='flex flex-col justify-center items-center  bg-white pb-5 w-[700px]'>
            <div className='flex justify-start'>
                <h1 className='text-[35px] text-black'>Оформление заказа</h1>
            </div>
            <Container maxWidth="sm">
                <Box sx={{ mt: 4 }}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Controller
                            name="name"
                            control={control}
                            rules={{ required: 'Имя обязательно' }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Имя"
                                    fullWidth
                                    margin="normal"
                                    error={!!errors.name}
                                    helperText={errors.name?.message}
                                />
                            )}
                        />

                        <Controller
                            name="phone"
                            control={control}
                            rules={{ required: 'Телефон обязателен' }}
                            render={({ field }) => (
                                <ReactPhoneInput
                                    inputClass='text-black'
                                    {...field}
                                    country={'ru'}
                                    enableSearch={true}
                                    inputProps={{
                                        error: !!errors.phone,
                                        helperText: errors.phone?.message,
                                    }}
                                    specialLabel='Номер телефон'
                                />
                            )}
                        />

                        <Controller
                            name="comment"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Комментарий к заказу"
                                    fullWidth
                                    margin="normal"
                                    multiline
                                    rows={4}
                                />
                            )}
                        />

                        <Button 
                        onClick={handleClick}
                         type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                            Оформить заказ
                        </Button>
                    </form>
                </Box>
            </Container>
        </div>
    );
}

export default OrderForm;


// имя телефон и кнопка добавить коментарий к заказу