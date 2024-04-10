import {z} from 'zod'

const useNameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim;

export const signUpSchema = z.object({
    userName: z.string().regex(useNameRegex, 'username inválido').toLowerCase(),
    fullName: z.string().min(5,'Nome muito curto').max(50,'Nome muito longo').transform(value=> {
        return value
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
    }),
    email: z.string().email('E-mail inválido'),
    password: z.string().min(6,'Senha deve ter no mínimo 6 caracteres'),
})

export type SignUpSchema  = z.infer<typeof signUpSchema>;