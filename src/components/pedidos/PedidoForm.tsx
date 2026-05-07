import {
  Button,
  MenuItem,
  Stack,
  TextField,
} from '@mui/material';

import { useForm } from 'react-hook-form';
import type{ Pedido } from '../../types/pedido';
import type{ Laboratorio } from '../../types/laboratorio';

interface Props {
  laboratorios: Laboratorio[];
  onSubmitPedido: (pedido: Pedido) => void;
}

export default function PedidoForm({
  laboratorios,
  onSubmitPedido,
}: Props) {
  const { register, handleSubmit, reset } = useForm<Pedido>();

  const onSubmit = (data: Pedido) => {
    onSubmitPedido({
      ...data,
      estado: 'pendiente',
    });

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        <TextField
          type="date"
          {...register('fecha', { required: true })}
        />

        <TextField
          label="Horario"
          placeholder="08:00 - 10:00"
          {...register('horario', { required: true })}
        />

        <TextField
          label="Cantidad de alumnos"
          type="number"
          {...register('alumnos', { required: true })}
        />

        <TextField
          select
          label="Laboratorio"
          {...register('laboratorioId', { required: true })}
        >
          {laboratorios.map((lab) => (
            <MenuItem key={lab.id} value={lab.id}>
              {lab.nombre}
            </MenuItem>
          ))}
        </TextField>

        <Button type="submit" variant="contained">
          Crear pedido
        </Button>
      </Stack>
    </form>
  );
}