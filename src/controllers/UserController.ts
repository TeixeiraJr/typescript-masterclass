import { Request, Response} from 'express';
import EmailService from '../services/EmailService';

const users = [
    {name: 'Teixeira', email: 'teixeirajunior1710@gmail.com'}
]

export default {
    async index(req: Request, res: Response) {
        res.json(users);
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailService();

        emailService.sendMail({
            to: { 
                name: 'Teixeira Junior', 
                email: 'teixeirajunior1710@gmail.com'
            },
            message: {
                subject: 'teste envio de email fake', 
                body:'Corpo do email fake'}
            }
        );

        return res.send();
    }
};